# Dance Break

Dance Break is a React application that allows users to find and play the most danceable top track from their favorite artist.

## Table of Contents
  1. [How To Use](##how-to-use)
  2. Features
  3. Screenshots
  4. Built With
  5. Tests

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

## Features
-Search for any artist in Spotify's catalogue and find their most danceable top track
-Listen via the Spotify player widget
-Add the track to your playlist to save it for later
-Play tracks straight from your playlist by clicking on the artist's name

## Screenshots
![Pasted Graphic](https://user-images.githubusercontent.com/49254170/99435477-2d223780-28de-11eb-9ec0-4a1f338f12d0.png)

![Pasted Graphic](https://user-images.githubusercontent.com/49254170/99566259-a67f6000-299a-11eb-9d0c-89fb490463ff.png)

## Built With:
-React
-MongoDB
-Express
-Axios
-Styled Components

## Tests
This app comes with a suite of front-end unit tests built with Jest and react-testing-library.
