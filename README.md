# ghteam

Please create a React TypeScript app - "Create Your Engineering Team" - that allows you to:

- Pass a GitHub user name in a form.
- Click on a button ‘Load User' next to the from.
- Load the user from the GitHub API (https://docs.github.com/en/rest/users/users#get-a-user).
- Display loaded users.
- Remove loaded users.
- Add a role to loaded users, e.g. "Frontend Engineer".

- The app does not have to persist data when closing the tab.
- The app does not need to have tests.

## Solution overview

To bootstrap app I used create-react-app with redux-toolkit and typescript template. RTK's `createSlice`, `createAction`, `createAsyncThunk` are used to define redux state tree, reducers, and actions / action creator for async thunk talking to API. I decided to choose `createAsyncThunk` over `redux-saga` or `RTK Query` because it's sufficiently powerful and also because there is just a single async request which doesn't even demand any special treatment. TypeScript-friendly versions of hooks `useDispatch` and `useSelector` are used in components to "talk" to redux. Project is structured using `feature-folders` approach, with some by-type grouping inside of feature folder. Styles are organized mostly using built-in CSS modules functionality (with role dropdown being exception because I use `react-select` library which is customized using inline CSS props). All components are functional components using hooks for state management, effects and synchronisation. LoadedUsersList component uses per-row render prop `renderExtras` for role dropdown, which isn't necessary for this simple app, but I wanted to showcase the approach (and also to remind myself how to do this).

You can see app in action at https://ivxvm.github.io/ghteam/ (uses my personal testing API token, configured to only have readonly access and only to user endpoints), if you want to run it yourself, clone repository, use `npm install` to install dependencies and then `npm start`, also make sure you have `.env` file at project root with github API token, like this:
```
REACT_APP_GITHUB_API_TOKEN = ghp_UEo2BYCcBbtU4cbG2okSZfWxzoUXa714lDyB
```
