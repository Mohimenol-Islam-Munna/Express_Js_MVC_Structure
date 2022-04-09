const express = require("express");

const userController = (req, res) => {
  res.send("<h2>User Home Page Serve From Controller</h2>");
};

module.exports = userController;
