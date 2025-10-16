#!/usr/bin/env bash

LOCAL_PATH=$HOME/Projects/securityengineerd.cloud
REMOTE_PATH=/home/nextjs/securityengineerd.cloud
REMOTE_HOST=ssh.artisangift.co
REMOTE_USER=root

function writemsg {
  local INPUT_MESG=$1
  printf '%s\n' "${INPUT_MESG}"
}

writemsg "Performing local build test prior to deployment..."
sleep 3; npm run build && { writemsg "  - build successful, deploying..."; } || \
	{ writemsg "  - local build failed, fix your app! I won't be responsible for the resulting outage... Deploy it yourself!"; writemsg "Process aborted."; exit 1; } 

writemsg "Updating remote repository, pushing current source-code..."
git add . && git commit -m "automated portfolio push of current sources." && git push && \
	writemsg "  - success" || writemsg "  - failed to push changes to repository"

writemsg "Updating server portfolio sources..."
sleep 3 

printf '%s\n' "Fetching latest repository data."
sleep 3
# rsync -avzP --exclude=./next --exclude=./node_modules ./* ./.* root@ssh.artisangift.co:/home/nextjs/securityengineerd.cloud/ && \
#   writemsg " - success" || { writemsg " - Process aborted, failed to transfer portfolio."; exit 1; }
ssh nextjs@ssh.artisangift.co 'bash -s $HOME/autobuild.sh' && \
	writemsg " - Successfully retrieved updated repository data..." || { writemsg " -!- Unable to retrieve repository data. Process aborted."; exit 1; }
ssh root@ssh.artisangift.co 'bash -s systemctl stop onceui-prod.service'
ssh nextjs@ssh.artisangift.co "bash -s cd securityengineerd.cloud && npm run build" && \
	writemsg " - Portfolio build successful, starting service..." || { writemsg " -!- Portfolio build failed. Exiting!"; exit 1; }
sleep 3 && ssh root@ssh.artisangift.co 'systemctl start onceui-prod.service' &&
    writemsg " - success" || { writemsg " - Process aborted, failed to start portfolio service"; exit 1; }

