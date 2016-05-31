# Stormpath Sample

This is a simple app that shows how to secure backend API's as well as add user authentication to your app with Stormpath. For this example we are using Node/Express on the backend and AngularJS on the frontend.

To get this example running, you will need to replace the values located in the `.env` file with your Stormpath credentials.

## Running the example

1. run `npm install`
2. run `node server`
3. navigate to `localhost:3000`

## Interacting with the app

The app has two views `login` and `home`. On both of the views you will be able to call a public and private API.

### Login View

Calling the public API will work fine as it does not require you to be authenticated. If you try to call the private API, you will get an error message instead.

Additionally on the login view you will have the option to either Register or Login. If you don't have an account, you can easily create one and then login.

### Home View

Once you are succesfully authenticated you will be able to call the private API and get the correct response. If you examine the resources from developer tools you'll see the JWT located in an `access_token` cookie.

Lastly, you will be able to logout from the home view and will be redirected back to the login with the `access_token` cookie removed.
