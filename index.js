// Dependencies
const {loadProfile} = require('./profiles.js');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 3000;
// Database connection
mongoose.connect("mongodb+srv://danielTingcoy:SEVFBufKqrhupSyw@zuitt-bootcamp.0c3cw.mongodb.net/real_time_search?retryWrites=true&w=majority", {
	useNewUrlParser:true,
	useUnifiedTopology:true,
});

mongoose.connection.once("open", () => console.log("Now connected to the database"));

// Server setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Get request
app.get('/profiles', (request, response) => {
	response.send(loadProfile());
});

// API Status
app.listen(port, () => {
	console.log(`API is now online on port ${port}`)
})




