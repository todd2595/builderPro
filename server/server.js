const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./Routes");
const PORT = process.env.PORT || 3001;
const app = express();
const user = require('./Routes/User')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const passport = require('./passport');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./Database') 

if (process.env.NODE_ENV !== 'production'){
	require('longjohn');
  }
// Define middleware here
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("../client/build"));
}

app.use(passport.initialize());
app.use(passport.session());
app.use (routes);


app.use( (req, res, next) => {
	console.log('req.session', req.session);
	return next();
  });

  app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
