const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://sharukhsm:crocs@cluster0.umslqxf.mongodb.net/mern-food";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connection Successful");
});

db.on("error", () => {
  console.log("MongoDB connection Failed");
});

module.exports = mongoose;
