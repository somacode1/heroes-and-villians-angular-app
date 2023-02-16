
# Prerequisites:

- Basic knowledge of Angular and TypeScript.
- Node.js and npm installed on your local machine.
- A text editor or integrated development environment (IDE) for editing Angular projects.
- Git installed on your local machine.


# Step 1: Set up the project

- Open a terminal or command prompt and navigate to the directory where you want to create the project.
- Run the command `ng new my-heroes-app --routing --style=scss` to create a new Angular project called "my-heroes-app" with a routing module and SCSS styling.
- Navigate to the project directory with the command c`d my-heroes-app`.
- Open the project in your text editor or IDE.

# Step 2: Add Bootstrap

- Run the command `npm install bootstrap` to install Bootstrap.
- Open the file `angular.json` in the root of the project.
- Add the following code to the `styles` array:

```json

"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
]

```

- Save the changes to `angular.json`.

OR 

Another option is to add the following  bootstrap cdn link to the `index.html` file in the `<head></head>` section:

```html

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
```

<!-- # Step 3: Create components

- Run the command `ng generate component heroes` to generate a new component called `"heroes"`.
- Repeat step 1 to create another component called `"villains"`.
- Open the `"app.component.html"` file and replace the existing code with the following:

```html

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" routerLink="/">Heroes and Villains</a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/heroes">Heroes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/villains">Villains</a>
      </li>
    </ul>
  </div>
</nav>
<router-outlet></router-outlet>


```

- Open the "app-routing.module.ts" file and replace the existing code with the following:


```typescript

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { VillainsComponent } from './villains/villains.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'villains', component: VillainsComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

- Open the "heroes.component.html" file and add the following code:


```html

<div class="container">
  <h1>Heroes</h1>
</div>


```

- Open the "villains.component.html" file and add the following code:

```html

<div class="container">
  <h1>Villains</h1>
</div>

```

# Step 4: Test the app

- Run the command ng serve to start the development server.
- Open a web browser and navigate to `"http://localhost:4200"`.
- Verify that the app is running and that you can navigate between the "Heroes" and "Villains" pages in the navbar.


# Step 5: Final touches

- Add error handling to your app. If the user enters -->


# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

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
