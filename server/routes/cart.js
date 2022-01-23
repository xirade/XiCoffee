const express = require("express");
const cartRoute = express.Router();
const dbo = require("../db/conn");

cartRoute.route("/api/cart").get((req, res) => {
  let db_connect = dbo.getDb("productsDB");
  db_connect
    .collection("cart")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

cartRoute.route("/api/cart/add").post((req, response) => {
  console.log(req.body)
  let db_connect = dbo.getDb();
  let myobj = {
    _id: req.body._id,
    cartContent: req.body
  };
  db_connect.collection("cart").insertOne(myobj, (err, res) => {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = cartRoute;