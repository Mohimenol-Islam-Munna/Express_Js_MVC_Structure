const express = require("express");
const bodyParser = require("body-parser");

// initialize express application
const app = express();

// body parser
app.use(bodyParser.urlencoded());

app.use("/", (req, res) => {
  res.send("<h2>Home Page</h2>");
});

// server PORT
const PORT = "8000";

// running server 
app.listen(PORT, () => {
  console.log(`server running at ${PORT}...`);
});
