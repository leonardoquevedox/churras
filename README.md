# Churras

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Simple barbecue events management system built from scratch within four days. To use it, it's quite simple:
  - Create an account
  - Add a barbecue
  - Invite friends
  - Enjoy!

### Stack

Churras uses a number of open source projects to work properly, the main being:

* [MongoDB](https://www.mongodb.com/download-center#community)
* [ReactJS](https://reactjs.org)
* [Express](http://expressjs.com)
* [Node.js](http://nodejs.org)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Material UI](https://material-ui.com)

And, of course, Churras itself is open source with a [public repository][churras] on GitHub.

### Installation

##### Server

Churras server requires [Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies and devDependencies.

```sh
$ cd server
$ npm install
```

##### Client

Install the dependencies and devDependencies and start the app.
```sh
$ cd client
$ npm install
```

### Development

Churras uses React + Webpack (client) and Nodemon (server) for fast developing.
Make a change in your file and instantanously see your updates!

##### Steps:
Open your favorite Terminal and run these commands.

First Tab (Database):
```sh
$ mongod
```

Second Tab  (Server):
```sh
$ cd server && npm run dev
```

Third Tab (Client):
```sh
$ cd client && npm start
```

#### Building for production
For production release:
```sh
$ cd client 
$ npm run build
```

### Deploying

Churras has 

```sh
$ npm run deploy
```

### Todos

 - Add  [Capacitor](https://capacitor.ionicframework.com) for mobile native wrapping
 - Add  [Redux](https://redux.js.org) for better state management

License
----

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[churras]: <https://github.com/leopq/churras>
