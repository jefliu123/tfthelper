# TFT Helper

## Description
TFT Helper analyzes a player's TFT match history and displays their most used carries as well as tips for their playstyle.
- Data taken from [RIOT API](https://developer.riotgames.com/)

## About the app
The current application is seperated into a frontend (client) and backend (api) which are both run locally. 
The frontend is a simple React application that prompts the user for their summoner name. The backend then makes API calls 
to the Riot's API and sends parsed player information back to the frontend to display.  
  
Currently, there is one backend route that returns a player's carried champion(s) in their past 10 games, but there are 
plans to utilize the API even further to display additional analysis on item choice, trait tendencies, etc.

## How To Run
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the server.
4. In another terminal, navigate to the `client` directory.
5. Run `npm install` to install all dependencies.
6. Run `npm start` to start the client

## Technologies
- [React JS](https://reactjs.org/)
- [Express](https://expressjs.com/)

## TODO
- Documentation and inline comments on everything