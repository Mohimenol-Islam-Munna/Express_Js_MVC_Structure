const express = require("express");
const userRouter = express.Router();

// controllers
const userController = require("../../controllers/user/userController");

// user/ GET
userRouter.get("/", userController);

module.exports = userRouter;
