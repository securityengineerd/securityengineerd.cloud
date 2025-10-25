#!/usr/bin/env bash
# 
# Script installs systemd unit files to manage the application.

if [[ "${UID}" -ne "0" ]]; then
    printf '%s\n' "Super-user privileges required to install services."
    printf '%s\n' " - configuration process aborted."
    exit 1
fi

function prompt() {
  local input=$1

  printf '\n  [Enter %s]: ' "${input}"

}


function uninstall() {
  source ../.env
  ssh ${REMOTE_ADMIN}@${REMOTE_HOST} "bash -s" < ./module/uninstall

}

function configure() {
  clear

  echo "  OnceUI Service Generator"
  echo "  ------------------------"
  prompt "Remote User"
  read GET_USER

  prompt "Remote Group"
  read GET_GROUP

  prompt "Remote Project Path"
  read GET_APPDIR

  export APP_USER=${GET_USER}
  export APP_GROUP=${GET_GROUP}
  export APP_PATH=${GET_APPDIR}

  printf '\n  %s\n' "Generating Systemd unit-files for OnceUI:"
  for i in dev prod test; do 
  case $i in
      dev) export BUILD_ENV=development; export RUN_CMD="npm run dev" ;;
      prod) export BUILD_ENV=production; export RUN_CMD="npm start" ;;
      test) export BUILD_ENV=test; export RUN_CMD="npm start" ;;
      *) printf ' - %s\n' "Invalid option."
  esac

  SERVICE_OUTPUT="onceui-$i.service"
  echo "[Unit]" > ${SERVICE_OUTPUT}
  echo "  Description=OnceUI Service - ${BUILD_ENV}" >> ${SERVICE_OUTPUT}
  echo "  After=network.target" >> ${SERVICE_OUTPUT}
  echo "[Service]" >> ${SERVICE_OUTPUT}
  echo "  WorkingDirectory=${APP_PATH}" >> ${SERVICE_OUTPUT}
  echo "  ExecStart=/usr/bin/${RUN_CMD}" >> ${SERVICE_OUTPUT}
  echo "  Restart=always" >> ${SERVICE_OUTPUT}
  echo "  User=${APP_USER}" >> ${SERVICE_OUTPUT}
  echo "  Group=${APP_GROUP}" >> ${SERVICE_OUTPUT}
  echo "  Environment=NODE_ENV=${BUILD_ENV}" >> ${SERVICE_OUTPUT}
  echo >> ${SERVICE_OUTPUT}
  echo "[Install]" >> ${SERVICE_OUTPUT}
  echo "  WantedBy=multi-user.target" >> ${SERVICE_OUTPUT} && \
	  { printf '\n%s\n' "    [✓] created ${SERVICE_OUTPUT}"; } || \
		  { printf '\n%s\n' "    [⨯] failed to write ${SERVICE_OUTPUT}"; }
   
  unset BUILD_ENV RUN_CMD SERVICE_OUTPUT

  done

  printf '\n%s\n' " [✓]  Your service files are located here: $(pwd)"
  menu
}

function menu() {
  printf "
  OnceUI Service Tool
  ---
  1. Generate systemd service files 
  4. Exit 

  Input Selection: "
  read MENU_OPT && \
	  case $MENU_OPT in
	    1) configure;
			  ;;
	    2) uninstall;
			  ;;
	    3) modify;
			  ;;
	    4) exit 0;
			  ;;
	    *) echo "Invalid selection, valid options: 1-4"
	       menu; 
	  esac
}

menu
