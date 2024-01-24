const express = require("express");

const Food = require("./models/FoodModel");

const app = express();
const db = require("./db");
app.use(express.json());

const port = 6001;

app.get("/", (req, res) => res.send("Hello World!" + port));

app.get("/getfood", (req, res) => {
  Food.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
