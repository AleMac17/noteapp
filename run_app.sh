#!/bin/bash

# Script to set up and run the app

# Define paths
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
BACKEND_DIR="${SCRIPT_DIR}/backend"
FRONTEND_DIR="${SCRIPT_DIR}/frontend/NoteApp"

# Function to wait for a service to become available
waitForService() {
  local service_url=$1
  echo -n "Waiting for ${service_url} to be available... "
  until $(curl --output /dev/null --silent --head --fail ${service_url}); do
      printf '.'
      sleep 1
  done
  echo -e "\n${service_url} is available "
}

# Function to set up the backend
setUpBackend() {
  echo "Setting up the backend..."
  cd "${BACKEND_DIR}"
  npm install
  read -s -p "Enter your MySQL password: " mysql_password
  echo
  sed -i "s/password: 'password'/password: '${mysql_password}'/" "${BACKEND_DIR}/config/dbConfig.js"
  sudo mysql -u root -p"${mysql_password}" < "${BACKEND_DIR}/db/setup.sql"
}

# Function to set up the frontend
setUpFrontend() {
  echo "Setting up the frontend..."
  cd "${FRONTEND_DIR}"
  npm install
}

# Function to run the app
runApp() {
  echo "Running the app..."
  # Start the backend in the background
  cd "${BACKEND_DIR}"
  node app.js &
  
  # Wait for the backend to become available
  # waitForService "http://localhost:3000/api"
  
  # Start the frontend
  cd "${FRONTEND_DIR}"
  npm run dev
}

# Main script execution
setUpBackend
setUpFrontend
runApp