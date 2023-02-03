# The Task:

## Our goal is to embed a page inside a dashboard. The page should be simple but responsive.
According to the image below, you have multiple cards, a filter, and an add button, and you need to design them accordingly.
1. Create a responsive page.
2. Create and design the card.
3. implement a search filter.
4. Implement the "Add new organization" button.



## Additional info
1. The page must be neat, clean, and responsive.
2. No need for the "Load More" button.
3. The "Add new organization" button creates a new card.
4. The cards do not need to be edited.
5. Use React Material UI framework (https://mui.com/).
6. Use SCSS
7. Make the design as similar to the image below as possible.
8. Send me a git repository or a zip file, whatever works for you.


## Implementation approach
I used Atomic Design Strucuture as an Architecture. It was more relevant rather than Feature sliced design because of size of the application.
Used TypeScript for more control over application and safety.
To manage the store, React Context is used with the useReducer hook. This makes applications more independent and lightweight. If the project grows in the future, I will use the Redux Toolkit to simplify development.
I tried use more SCSS ( as described in requirments ) as I can but in real project prefer styled components or built in theming MUI.




## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
