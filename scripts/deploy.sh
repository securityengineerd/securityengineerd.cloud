#!/usr/bin/env bash

LOCAL_PATH=$HOME/Projects/securityengineerd.cloud
REMOTE_PATH=/home/nextjs/securityengineerd.cloud
REMOTE_HOST=ssh.artisangift.co
REMOTE_USER=root

function writemsg {
  local INPUT_MESG=$1
  printf '%s\n' "${INPUT_MESG}"
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
ssh nextjs@ssh.artisangift.co "cd $REMOTE_PATH && pwd; git pull" && \
    { writemsg " [✓] Successfully retrieved updated repository data..."; } || \
	{ writemsg " [⨯] Unable to retrieve repository data."; exit 1; }

writemsg "Stopping Portfolio Service..."
ssh root@ssh.artisangift.co 'systemctl stop onceui-prod.service' && \
    { writemsg " [✓] Successfully stopped portfolio service."; } || \
	{ writemsg " [⨯] Failed to stop portfolio service. Deployment aborted."; exit 1; }

writemsg "Building updated portfolio..."; sleep 3;
ssh nextjs@ssh.artisangift.co 'cd $HOME/securityengineerd.cloud; npm run build' && \
    { writemsg " [✓] Portfolio build successful, starting service..."; } || \
	{ writemsg " [⨯] Portfolio build failed. Exiting!"; exit 1; }

writemsg "Starting portfolio service..."; sleep 3;
ssh root@ssh.artisangift.co 'systemctl start onceui-prod.service' && \
    writemsg " [✓] started successfully" || { writemsg " [⨯] failed to start portfolio service."; exit 1; }


