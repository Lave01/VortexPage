const express = require("express");
const app = express();
const path = require("path");

let counter = 0;

app.use(express.static(path.join(__dirname, "public")));

app.get("/up", (req, res) => {
  counter++;
  res.json({ count: counter });
});

app.get("/count", (req, res) => {
  res.json({ count: counter });
});

app.listen(3000, () => console.log("API läuft auf Port 3000"));
