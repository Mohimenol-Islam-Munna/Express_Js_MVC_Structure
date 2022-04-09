const express = require("express");
const userRouter = express.Router();

// user/ GET
userRouter.get("/", (req, res) => {
  res.send("<h2>User Home Page</h2>");
});

module.exports = userRouter;
