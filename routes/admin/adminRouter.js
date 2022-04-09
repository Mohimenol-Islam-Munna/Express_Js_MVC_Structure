const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/", (req, res)=>{
    res.send("<h2>Admin Dashboard</h2>")
})

module.exports = adminRouter;
