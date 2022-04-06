# ShoppingBasket

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

It has a simple UI with list of predefault products and a checkout field. The app allows users to add products to the basket, "pay" for them with the submit button and see the prices with taxes as in the receipt. 
All the logic for counting prices with taxes is stored in the service. All the components and service are covered with unit tests

## Thoughts and considerations
It is worth noting that even though the frontend application works
according to the requirements, there are many simplifications and 
things which should have been done (slightly) differently in real
life. The reason for that is the lack of time (since
it is just a test task) and also the fact that it is just a frontend
application without any backend.

For example, the list of products is pre-defined and hardcoded in
the app instead of fetching it from the database. User interface is
also just MVP and is not production ready from the design prespective.
Adding the same product to the shopping cart multiple times adds new
records in the UI isntead of just increasing the number in the basket.

Application has been developed using Anguar framework mainly because
I have experience with it and I also think it might be a good option
to use it (or similar framework) for such apps.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
