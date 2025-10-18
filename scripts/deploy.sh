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

function cd {
  cd $1 && writemsg "Loaded Path: $1" || \
    { writemsg "Not Found: $1"; exit 1; }
}

    diff=$(git diff --name-status)

    if [ -z "$diff" ]; then
        echo "No changes to commit."
        return
    fi

    commit_message="Modified files:\n$diff"

function build_local {
  writemsg "Performing local build test prior to deployment..."
  sleep 3; npm run build && { writemsg "  build-test> [SUCCESS]"; } || \
	{ writemsg "  build-test> [FAILED]"; writemsg "  - Scripted deployment aborted to prevent outage..."; exit 1; } 
}

if [[ $LOCAL_BUILD -eq "1" ]]; then
	build_local;
else
	writemsg "Local build skipped due to variable setting: LOCAL_BUILD=0"
fi

writemsg "Pushing local changes to repository..."
git add . && git commit -m "$commit_message" && git push && \
    { writemsg " [✓] Successfully pushed changes to repository."; } || \
	{ writemsg " [⨯] Failed to push changes to repository. Deployment aborted."; exit 1; }

writemsg "Updating portfolio server data..."; sleep 3 
ssh ${REMOTE_USER}@${REMOTE_HOST} "cd $REMOTE_PATH && pwd; git pull" && \
    { writemsg " [✓] Successfully retrieved updated repository data..."; } || \
	{ writemsg " [⨯] Unable to retrieve repository data."; exit 1; }

writemsg "Stopping Portfolio Service..."
ssh ${REMOTE_ADMIN}@${REMOTE_HOST} 'systemctl stop ${SERVICE_NAME}' && \
    { writemsg " [✓] Successfully stopped portfolio service."; } || \
	{ writemsg " [⨯] Failed to stop portfolio service. Deployment aborted."; exit 1; }

writemsg "Building updated portfolio..."; sleep 3;
ssh ${REMOTE_USER}@${REMOTE_HOST} 'cd $HOME/securityengineerd.cloud; npm run build' && \
    { writemsg " [✓] Portfolio build successful, starting service..."; } || \
	{ writemsg " [⨯] Portfolio build failed. Exiting!"; exit 1; }

writemsg "Starting portfolio service..."; sleep 3;
ssh ${REMOTE_ADMIN}@${REMOTE_HOST} 'systemctl start ${SERVICE_NAME}' && \
    writemsg " [✓] started successfully" || { writemsg " [⨯] failed to start portfolio service."; exit 1; }


