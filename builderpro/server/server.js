const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./Routes");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require('express-session')
const user = require('./Routes/User')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dbConnection = require('./Database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport'); 

// Define middleware here
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)


app.use(passport.initialize());
app.use(passport.session());
app.use (routes);


// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
