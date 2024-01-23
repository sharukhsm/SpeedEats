const express = require("express");

const db = require("./db");
const app = express();
const port = 6001;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!" + port));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
