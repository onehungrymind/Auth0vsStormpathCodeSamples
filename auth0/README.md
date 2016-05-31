# Auth0 Sample

This is a simple app that shows how to secure backend API's as well as add user authentication to your app with Auth0. For this example we are using Node/Express on the backend and AngularJS on the frontend.

To get this example running, you will need to replace the values located in the `.env` file with your Auth0 credentials. Additionally, you will nedd to update the `auth0-variables.js` file as well location in the `/public` directory with your Auth0 credentials.

## Running the example

1. run `npm install`
2. run `node server`
3. navigate to `localhost:3000`

## Interacting with the app

The app has two views `login` and `home`. On both of the views you will be able to call a public and private API.

### Login View

Calling the public API will work fine as it does not require you to be authenticated. If you try to call the private API, you will get an error message instead.

Additionally on the login view you will have the option to either Register or Login. Here, we'll use the Auth0 Lock widget to handle both user signup and login.

### Home View

Once you are succesfully authenticated you will be able to call the private API and get the correct response. If you examine the resources from developer tools you'll see the JWT located in an `token` key:value pair in localStorage. You'll also see the decoded token information located in the `profile` key:value pair in localStorage.

Lastly, you will be able to logout from the home view and will be redirected back to the login and the localStorage key:value pairs deleted.
