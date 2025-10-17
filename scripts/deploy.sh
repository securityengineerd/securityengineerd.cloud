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

writemsg "Performing local build test prior to deployment..."
sleep 3; npm run build && { writemsg "  build-test> [SUCCESS]"; } || \
	{ writemsg "  build-test> [FAILED]"; writemsg "  - Scripted deployment aborted to prevent outage..."; exit 1; } 

writemsg "Pushing local changes to repository..."
git add . && git commit -m "$( date +%x' '%r ): script automated push" && \
	git push && writemsg "  - complete" || writemsg "  - nothing to push"

writemsg "Updating portfolio from repository..."
sleep 3 

printf '%s\n' "Pulling updated repository data..."
ssh nextjs@ssh.artisangift.co "cd $REMOTE_PATH && pwd; git pull" && \
	writemsg " - Successfully retrieved updated repository data..." || \
	{ writemsg " -!- Unable to retrieve repository data."; exit 1; }

ssh root@ssh.artisangift.co 'systemctl stop onceui-prod.service'
ssh nextjs@ssh.artisangift.co 'cd $HOME/securityengineerd.cloud && pwd; npm run build' && \
	writemsg " - Portfolio build successful, starting service..." || { writemsg " -!- Portfolio build failed. Exiting!"; exit 1; }
sleep 3 && ssh root@ssh.artisangift.co 'systemctl start onceui-prod.service' &&
    writemsg " - success" || { writemsg " - Process aborted, failed to start portfolio service"; exit 1; }

