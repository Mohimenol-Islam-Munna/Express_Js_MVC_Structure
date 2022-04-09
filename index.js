const express = require("express");
const bodyParser = require("body-parser");

// initialize express application
const app = express();

// body parser
app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");

app.use("/", (req, res) => {
  res.render("index.ejs", { name: "munna", campus: "PUST" });
});

// server PORT
const PORT = "8000";

// running server
app.listen(PORT, () => {
  console.log(`server running at ${PORT}...`);
});
