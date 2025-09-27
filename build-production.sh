#!/usr/bin/env bash

LOCAL_PATH=$HOME/Projects/securityengineerd.cloud
REMOTE_PATH=/home/nextjs/securityengineerd.cloud
REMOTE_HOST=ssh.artisangift.co
REMOTE_USER=root

function writemsg {
  local INPUT_MESG=$1
  printf '%s\n' "${INPUT_MESG}"
}

writemsg "Pushing changes to GitHub..."
$( git add . && git commit -m "Automated file synchronization..." && git push; ) && \
	writemsg "  - success" || writemsg "  - failed to push changes to repository"

writemsg "Pushing changes to server..."
sleep 3 

printf '%s\n' "Uploading portfolio data to server."
sleep 3
rsync -avzP ./* root@ssh.artisangift.co:/home/nextjs/securityengineerd.cloud/ && \
    writemsg " - success" || { writemsg " - Process aborted, failed to transfer portfolio."; exit 1; }

ssh root@ssh.artisangift.co 'bash -s' < .build-root
ssh nextjs@ssh.artisangift.co 'bash -s' < .build-nextjs

writemsg "Starting Portfolio Service..."
sleep 3 && ssh root@ssh.artisangift.co 'systemctl start onceui-prod.service' &&
    writemsg " - success" || { writemsg " - Process aborted, failed to start portfolio service"; exit 1; }

