## 1. Requirement

I have developped & tested the application with:

- Windows 10
- MS-DOS terminal
- Node 8.9
- Npm 5
- Docker for Windows version 17.09.1-ce

## 2. Usage

1.  The application use `@ledger/live-common` external library to handle

    run the follow command to install it

         yarn

4)  With Docker

        #Build the image
        $ docker build -t <app-name> .
        #Run image
        $ docker run <app-name>

It will monitor the file /var/log/access.log within the container, the path can be overrideable in Dockerfile

## 3. Tests

In the application directory:

    npm run test
