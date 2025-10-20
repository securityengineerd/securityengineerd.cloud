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

  printf '\nInput %s: ' "${input}"

}

function uninstall() {
  local GET_FILES=$( ls /etc/systemd/system/onceui-* )

  [ -z ${GET_FILES} ] && { printf '%s\n' "No service files are present to uninstall."; menu; } 

  printf "Confirm removal of files: \n${GET_FILES}"
  printf "\n\n1. Proceed / Any-key to cancel: "
  read CONFIRM_REMOVE
  if [[ "${CONFIRM_REMOVE}" -ne "1" ]]
  then
	  menu; 
  fi

  rm -rfv "${GET_FILES}" && { echo -e "  - Service files successfully uninstalled."; menu; } || { echo -e "  - Failed to remove service files."; exit 10; }

}

function configure() {
  clear

  printf "
  Service Configuration
  
  Enter configuration details of the server hosting your application
  when prompted.\n\n"; sleep 3; 

  prompt "User"
  read GET_USER

  prompt "Group"
  read GET_GROUP

  prompt "Application Path"
  read GET_APPDIR

  export APP_USER=${GET_USER}
  export APP_GROUP=${GET_GROUP}
  export APP_PATH=${GET_APPDIR}

  case $GET_ENV in
      1) export BUILD_ENV=development ;;
      2) export BUILD_ENV=production ;;
      3) export BUILD_ENV=test ;;
      *) printf ' - %s\n' "Invalid option."
  esac

  for i in dev prod test; do

  case $i in
    dev) BUILD_ENV=development ;;
    prod) BUILD_ENV=production ;;
    test) BUILD_ENV=test ;;
  esac

    SERVICE_OUTPUT="onceui-$i.service"
    echo "[Unit]" > ${SERVICE_OUTPUT}
    echo "  Description=OnceUI Service - ${BUILD_ENV}" >> ${SERVICE_OUTPUT}
    echo "  After=network.target" >> ${SERVICE_OUTPUT}
    echo "[Service]" >> ${SERVICE_OUTPUT}
    echo "  WorkingDirectory=${APP_PATH}" >> ${SERVICE_OUTPUT}
    echo "  ExecStart=/usr/bin/npm start" >> ${SERVICE_OUTPUT}
    echo "  Restart=always" >> ${SERVICE_OUTPUT}
    echo "  User=${APP_USER}" >> ${SERVICE_OUTPUT}
    echo "  Group=${APP_GROUP}" >> ${SERVICE_OUTPUT}
    echo "  Environment=NODE_ENV=${BUILD_ENV}" >> ${SERVICE_OUTPUT}
    echo >> ${SERVICE_OUTPUT}
    echo "[Install]" >> ${SERVICE_OUTPUT}
    echo "  WantedBy=multi-user.target" >> ${SERVICE_OUTPUT}
    printf '\n%s\n' " - created ${SERVICE_OUTPUT}"
    
    unset BUILD_ENV
  done
}

function menu() {
  printf "
  OnceUI Service Manager
  ---
  1. Install OnceUI Services 
  2. Remove OnceUI Services
  3. Modify Services
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
















