# Read Me

- This project is only for the take home test for applying the Sr. Frontend Engineer role at portto.

## Some tech detail

- This project was created with [Create React App](https://github.com/facebook/create-react-app).
- The client-side routing is done with [react-router-dom](https://reactrouter.com).
- The components are styled with [Bootstrap](https://getbootstrap.com) and a component library called [react-bootstrap](https://react-bootstrap.github.io) is used to quickly build up the UI.
- [RxJS](https://www.npmjs.com/package/rxjs) is used for listening for scrolling event and fetch the next 20 items when user scrolled to the bottom.
- A [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) like workflow is implemented when working on the project.

### Organization of files

- Single function components or pure components are placed in the `components` folder.
- The `containers` folder is for the composition/aggregation of components.
- Fetch related functions were extracted in `functions.js`.
- A part from Bootstrap classes, custom styles were specified in `App.scss`. (Usually we'll use `module.css`, however, in this case, we don't have many components that need styling, so we just go with a central style sheet for simplicity).
