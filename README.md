# Your Application Name

Welcome to NoteApp! This document provides essential information to set up and run the application successfully.

## Table of Contents

- [System Requirements](#system-requirements)
  - [MySQL](#mysql)
  - [Node.js and npm](#nodejs-and-npm)
- [Installation](#installation)
- [Instructions](#instructions)
- [Tested Enviroment](#tested-enviroment)

## System Requirements

### Node.js and Npm

The application is built with `Node.js`, and it requires version `20.10.0`. Additionally, `npm` (Node Package Manager) version `9.6.3` is needed for managing project dependencies.

### MySQL

The application utilizes `MySQL` as its database, and it specifically requires version `8.0.35` of MySQL Community Server under the GPL license

## Installation

This repository contains a script that automates the setup process for running the application in a local environment.

## Instructions

1. **Clone the Repository:**

   - Open the terminal.
   - Run the following command to clone the repository:
     ```bash
     git clone [repository_url]
     ```
     Replace `[repository_url]` with the actual URL of the repository.

2. **Navigate to the Repository:**

   - Change your current directory to the cloned repository using:
     ```bash
     cd [repository_directory]
     ```
     Replace `[repository_directory]` with the name of the cloned repository.

3. **Run the Setup Script:**

   - Execute the following command to run the setup script:
     ```bash
     bash run_app.sh
     ```
     This script will handle all the necessary steps to set up and run the application in your local environment.

4. **Follow the Instructions:**

   - During the script execution, follow any on-screen instructions to complete the setup process.

5. **Access the Application:**

   - Once the setup is complete, the script will provide a link to access the application.
   - Open your web browser and enter the provided link to access the application.

6. **Login:**

   - Please note that the complete implementation of the login feature is pending due to personal issues.
   - In the meantime, you can use any email and password combination to access the application.

## Tested Environment

The application has been successfully tested on the following environment:

- **Virtual Machine:** OracleVM
  - **Memory:** 5186MB
  - **Processors:** 3
  - **Video Memory:** 16MB
  - **Storage:** 60GB
  - **Ubuntu Version:** 22.04 LTS
  - **Node.js Version:** 20.10.0
  - **npm Version:** 9.6.3
  - **MySQL Version:** 8.0.35

### Installation Tutorials

- [Node.js and npm Installation](https://github.com/nodesource/distributions?tab=readme-ov-file#debian-and-ubuntu-based-distributions)

  - Follow the tutorial to install Node.js and npm.

- [MySQL Installation](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04)
  - Refer to this tutorial for MySQL installation.
