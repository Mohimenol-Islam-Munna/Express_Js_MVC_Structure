const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./routes/users/userRouter");
const adminRouter = require("./routes/admin/adminRouter");

// initialize express application
const app = express();

// body parser
app.use(bodyParser.urlencoded());

// template engine
app.set("view engine", "ejs");

// ------------ all routes -------------
// user routes
app.use("/user", userRouter);

// admin routes
app.use("/admin", adminRouter);

// home page view
app.use("/", (req, res) => {
  res.render("index.ejs", { name: "munna", campus: "PUST" });
});

// 404 page
app.use((req, res) => {
  res.send("<h2>Opps! 404, Page Not Found</h2>");
});

// ----------- end all routes -----------

// server PORT
const PORT = "8000";

// running server
app.listen(PORT, () => {
  console.log(`server running at ${PORT}...`);
});
