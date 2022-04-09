const express = require("express");

const adminRouter = express.Router();

// controllers
const adminController = require("../../controllers/admin/adminController");

adminRouter.get("/", adminController);

module.exports = adminRouter;
