# MatthewriceXyz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.


## Running production verion in Docker Container with Nginx

First you will need to do a production build of the project using `ng build --prod`. This will put the prod files in the /dist directory. Next, you will need to create a new image using the Dockerfile by running `docker build -t matthewrice-xyz .`. Now, the container can be started up by running `docker run -d -p8080:80 matthewrice-xyz`. Visiting localhost:8080 in the browser will hit port 80 in the container, which is now serving the compiled Angular application from an Nginx web server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
