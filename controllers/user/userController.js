const express = require("express");

const userController = (req, res) => {
  res.render("user.ejs", { isLoggedIn: false, user_id: 1, name: "mohimenol islam" });
};

module.exports = userController;
