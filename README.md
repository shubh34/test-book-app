# test-book-app
This is the test applicaition
This project is a responsive demo application where you can find huge collection of Books.
The Books are displayed in Table Format and user can change per page view from 10 to 80 and can view books from one page to another.

Click on this to view the app. Please use http url
http://find-my-books.herokuapp.com/ 
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
- `Deployed  on http://find-my-books.herokuapp.com/ `
- `Loading state- when api call in progress`
- `Error Handling when api fails`
- `Page Not Found when URL is wrong`
- `No books found when Api Doesn't return books`

## Tech Stack

React, Redux, Jest, React testing library, Webpack, Prettier, Styled Component,

## TO DO

- `Search Functionality`
-
## Screens
<img width="1400" alt="Screenshot 2021-03-14 at 20 49 02" src="https://user-images.githubusercontent.com/10782765/111083486-3464f500-850e-11eb-8bff-75030afc5061.png">
<img width="1440" alt="Screenshot 2021-03-14 at 20 49 59" src="https://user-images.githubusercontent.com/10782765/111083488-375fe580-850e-11eb-9ed9-a5811e6080ec.png">
<img width="1412" alt="Screenshot 2021-03-14 at 20 50 07" src="https://user-images.githubusercontent.com/10782765/111083493-3929a900-850e-11eb-9a97-b3deca8401e4.png">
<img width="428" alt="Screenshot 2021-03-14 at 20 54 23" src="https://user-images.githubusercontent.com/10782765/111083496-3a5ad600-850e-11eb-982e-045c65920804.png">
<img width="567" alt="Screenshot 2021-03-14 at 20 54 38" src="https://user-images.githubusercontent.com/10782765/111083497-3b8c0300-850e-11eb-8beb-9f146f2c1fba.png">
<img width="744" alt="Screenshot 2021-03-14 at 20 55 12" src="https://user-images.githubusercontent.com/10782765/111083498-3c249980-850e-11eb-85b3-98600cec2487.png">
<img width="833" alt="Screenshot 2021-03-14 at 20 55 23" src="https://user-images.githubusercontent.com/10782765/111083499-3d55c680-850e-11eb-8393-411177d238c6.png">
<img width="1354" alt="Screenshot 2021-03-14 at 20 56 43" src="https://user-images.githubusercontent.com/10782765/111083501-3e86f380-850e-11eb-851e-2540c14be075.png">
<img width="1329" alt="Screenshot 2021-03-14 at 20 56 53" src="https://user-images.githubusercontent.com/10782765/111083505-4050b700-850e-11eb-906e-138d1ed024b0.png">
<img width="1317" alt="Screenshot 2021-03-14 at 20 58 49" src="https://user-images.githubusercontent.com/10782765/111083507-40e94d80-850e-11eb-8058-0b6026a99d6a.png">


<img width="1435" alt="Screenshot 2021-03-14 at 21 44 51" src="https://user-images.githubusercontent.com/10782765/111083579-8efe5100-850e-11eb-856c-afbf576cc136.png">
