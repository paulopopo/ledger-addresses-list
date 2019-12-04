## 1. Requirement

I have developed & tested the application with:

-   Windows 10
-   Bash for window
-   Node 8.9
-   Npm 5
-   Docker for Windows version 17.09.1-ce

## 2. Usage

1.  The application use external library

    run the follow command to install all dependencies

         yarn

    To run the app in developement mode with live reload, run :

        yarn start

    To build the app, run :

        yarn build

Note : The application use `@ledger/live-common` You can get the source code here :

If you make changes in the source code and want the try it within this app,
run the follow command to install and build it

         yarn && yarn build

Now we need to link it, the following command will create a symlink named
@ledger/live-common that links to your local copy of the @ledger/live-common project, run :

    yarn link

Come back to this project and finally, run :

    yarn link '@ledger/live-common'

## 3. Tests

In the application directory:

    yarn run test

## 4. With Docker

        #Build the image
        $ docker build -t <app-name> .
        #Run image
        $ docker run <app-name>

The Dockerfile contains a command `serve` that will serve the built app on port 5000
To run the image
  
 docker run -p 5000:5000 -d <app-name>
  
Open your browser, you will reach the app at :

        http://localhost:5000
