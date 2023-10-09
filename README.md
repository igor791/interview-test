# Interview test

This project was created to practice with `RxJS` and `Mobx`. The main idea is to create a CRUD application for different types of `media`.

## This project was created with next tehnologies:

- `Typescript` - types for JS (https://www.typescriptlang.org)
- `ReactJS` - create components (https://react.dev)
- `SASS/SCSS` - style components https://sass-lang.com
- `RxJS` - mock API (https://www.learnrxjs.io)
- `Mobx` - store (https://mobx.js.org)

## Project structure

```
.
├── build                   # Compiled files
├── src                     # Source files
├──── api                   # Mocked API with RxJS to simulate BE API calls
├──── components            # UI reusable components
├──── features              # "Business" components
├──── store                 # Mobx store and data structure for the application
├──── styles                # Global styles/variables
├──── types                 # Global types
├──── App.tsx               # The main component
├──── AppContext.tsx        # The main context that loads store to share with child components
├──── index.tsx             # Init file to inject components into html and to create store
├── LICENSE
└── README.md
```

## Project tools

- `eslint` - adds code styling rules
- `prettier` - format the code and maintain consistency throughout the project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
