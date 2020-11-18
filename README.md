# Dance Break

Dance Break allows users to find and play the most danceable top track from their favorite artist.

## Table of Contents
  1. How To Use
  2.
  3. Tests

## How To Use
To clone and run this application, you'll need Git and Node.js installed on your computer. You'll also need to register for a Spotify developer account. 

To register with Spotify:
1. In a browser, navigate to: https://developer.spotify.com/dashboard/login
2. Either log in to your existing account, or create an account
3. Select "Create An App" and follow instructions to create a non-commercial app
4. Make note of your Client ID and Client Secret

Then, from the command line:
```
# Clone this repository
$ git clone https://github.com/margotTenenbaum/danceBreak.git

# Go into the repository
$ cd danceBreak

# Install dependencies
$ npm install

# Create a .env file and format it with your Spotify Client ID and Secret:

  CLIENTID='YOUR_CLIENT_ID'
  SECRET='YOUR_CLIENT_SECRET'

# Run the app
$ npm run build
$ npm start

# View the app by opening a browser window and navigating to http://localhost:3000

# (Optional) Run tests
$ npm run test
```

## Screenshots

## Built With:
-React

## Installation

## Tests
This app uses the Jest testrunner and react-testing-library.