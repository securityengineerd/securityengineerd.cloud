#!/usr/bin/env bash

# Local deployment script by J.Marcum
# SERVICE_NAME=		# Remote Listener Service Name
# LOCAL_PATH=		# Path to local project.
# REMOTE_PATH=		# Path to remote project.
# REMOTE_HOST=		# SSH Host
# REMOTE_USER=		# Service Account 
# REMOTE_ADMIN=		# Admin User


function writemsg {
  local GET_INPUT=$1
  printf '\n%s\n' "${GET_INPUT}"
}

diff=$(git diff --name-status)

if [ -z "$diff" ]; then
    echo "No changes to commit."
fi

commit_message="Modified files:\n$diff"

function build_local {
  writemsg "Performing local build test prior to deployment..."
  sleep 3; npm run build && \
    { writemsg " [✓] Local build successful, proceeding to deploy."; } || \
	{ writemsg " [⨯] Local build failed. Deployment aborted to prevent outage."; exit 1; }
}

if [[ $LOCAL_BUILD -eq "1" ]]; then
	build_local;
else
	writemsg "Local build skipped, found LOCAL_BUILD set to 0"
	writemsg "Using this setting is not advised and may cause outages!"
fi

writemsg "Pushing local changes to repository..."
git add . && git commit -m "$commit_message" && git push && \
    { writemsg " [✓] Successfully pushed changes to repository."; } || \
	{ writemsg " [⨯] Failed to push changes to repository. Deployment aborted."; exit 1; }

writemsg "Updating server's codebase..."; sleep 3 
ssh ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_PATH} && pwd; git pull" && \
    { writemsg " [✓] Successfully retrieved updated repository data..."; } || \
	{ writemsg " [⨯] Unable to retrieve repository data."; exit 1; }

writemsg "Building updated codebase..."; sleep 3;
ssh ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_PATH}; npm run build" && \
    { writemsg " [✓] Portfolio build successful."; } || \
	{ writemsg " [⨯] Portfolio build failed. Exiting!"; exit 1; }

writemsg "Restarting application service..."; sleep 3;
ssh ${REMOTE_ADMIN}@${REMOTE_HOST} "systemctl start ${SERVICE_NAME}" && \
    { writemsg " [✓] restarted service successfully"; } || \
	{ writemsg " [⨯] failed to restart service."; exit 1; }


