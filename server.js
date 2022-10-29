const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const User = require("./models/User");
const route = require('./routes/route');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// conecting to database 
require("./config/connectDB").connect();

// config enviroment 
require("dotenv").config();


// express server created
app.listen(PORT, () => {
  console.log(`the server started at port ${PORT}`);
});

app.use("/api", route())