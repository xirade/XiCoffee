const express = require("express");
const productsRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

productsRoutes.route("/api/product").get((req, res) => {
  let db_connect = dbo.getDb("productsDB");
  db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
productsRoutes.route("/api/product/:id").get((req, res) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").findOne(myquery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new product.
productsRoutes.route("/api/product/add").post((req, response) => {
  let db_connect = dbo.getDb();
  let myobj = {
    _id: req.body._id,
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    img: req.body.img,
    isProduction: req.body.isProduction,
  };
  db_connect.collection("products").insertOne(myobj, (err, res) => {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a product by id.
productsRoutes.route("/api/update/:id").post((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  console.log(myquery);
  let newvalues = {
    $set: {
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      img: req.body.img,
      isProduction: req.body.isProduction,
    },
  };
  db_connect
    .collection("products")
    .updateOne(myquery, newvalues, (err, res) => {
      if (err) throw err;
      console.log("The document updated");
      response.json(res);
    });
});

// This section will help you delete a product
productsRoutes.route("/api/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").deleteOne(myquery, (err, obj) => {
    if (err) throw err;
    console.log("The document deleted");
    response.status(obj);
  });
});

module.exports = productsRoutes;
