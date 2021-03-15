This project is a responsive demo application where you can find huge collection of Books.
The Books are displayed in Table Format and user can change per page view from 10 to 80 and can view books from one page to another.

## Project Setup

- Clone the project using `git clone https://github.com/shubh34/test-book-app.git`
- Switch to develop branch using `git checkout develop`
- Install the dependency using `npm install` install node if it complains
- open the project in any IDE like Visual studio code to make changes
- Run the application using `npm start`
- Build the production application using `npm build`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run lint`

This will check the code quality with Eslint.

### `npm run format`

Will format the source file with Prettier

## Folder Structure

- `build`: production build of application.
- `src`: source code of project.
  - `components`- list of all resuable component. Each component has its own style and test file.
  - `configs` - configuration properties for endpoints, routes and variable.
  - `container` - Application layout, Container components(with Redux) and App Routes
  - `states` - redux states that includes action, selector, reducer and their tests
  - `store` - redux setup combine reducer, middlewares and store initialisation
  - `utils` - global resuable functions
- `test`: Test Utils for the Project
- `mockStates`- Stores all the mocked states that is used for application test
- `utils`- For Test setup mocking redux store and test functions at one place

## Requirement

- `​Using React, build a webapp that queries this paginated endpoint. Use Redux to save the results and then print out the results as a list on the page.` - DONE
- `The app should be paginated with the pagination reflected in the url`- DONE
- `Write at least one component as a React class based component `- BooksPagination is the class component
- `Write at least one unit test`- DONE
- ​`Host your code on Github, put all the code in a Pull Request against the (probably) empty repo`- https://github.com/shubh34/test-book-app/pull/18

## Additional functionality

- `Responsive web application for all type of user mobile tablet web`
- `Loading state- when api call in progress`
- `Error Handling when api fails`
- `Page Not Found when URL is wrong`
- `No books found when Api Doesn't return books`

## Tech Stack

React, Redux, Jest, React testing library, Webpack, Prettier, Styled Component,

## TO DO

- `Search Functionality`
