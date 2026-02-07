require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 2015;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/views"));

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/send",(req, res) => {
  res.render("send");
});
app.listen(PORT);
console.log(`Server is running on http://localhost:${PORT}`);
