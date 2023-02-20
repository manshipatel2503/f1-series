# f1series

# f1series
This is the project that displays F1 World Champions  from 2005 to the current year.
Application consists of 2 pages, first page displays the world champion from every year and its details and second page displays the list of winner for the every race of the selected year.
ERGAST (https://ergast.com/mrd/) API are consumed for this application.

Module structure is created for this application. I have used module structure for scalability purpose. Modules created are Common Utility Module, Shared Module, World championship Module.

To simplify the code Custom Data table and pagination are created inside seperate shared module. So when I need to add another table for different feature I can directly use that component. More features like sorting, searching can be added whenever required and can be used all over the application.

Highlight directive is created for the purpose of Highlighting the champion from the list of all race winners. Highlight directive can be resued based on different highlighting criteria in same as well as different components.

For UI/UX I have used the bootstrap to keep it simple.

# Steps to run the Application
1. Clone using HTTP or SSH
2. ng build
3. ng serve
4. Go to browser and open http://localhost:4200 


# F1Series

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

