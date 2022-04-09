const express = require("express");

const adminController = (req, res) => {
  res.send("<h2>Admin Dashboard Serve From Admin Controller</h2>");
};

module.exports = adminController;
