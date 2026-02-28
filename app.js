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
app.get("/brawlers", (req, res) => {
  let brawlmops = [
    {
      name: "Bibi",
      rarity: "epic",
      class: "tank",
      description:
        "Bibi is a tough punk with a baseball bat and an attitude to match. She's a bit of a nerd too, but she'd never show it. She's got an image to maintain!",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/716387d2-90e0-4210-aa74-e5e7396c98cc/dixmv0b-1612ff58-a8d4-4cc5-8104-7829801982e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83MTYzODdkMi05MGUwLTQyMTAtYWE3NC1lNWU3Mzk2Yzk4Y2MvZGl4bXYwYi0xNjEyZmY1OC1hOGQ0LTRjYzUtODEwNC03ODI5ODAxOTgyZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7LqKqqynUIfJQaASCrJj6ZYQRJrq2UYc8_C5mLM3jBQ",
    },
    {
      name: "Crow",
      rarity: "legendary",
      class: "assasin",
      description:
        "Crow throws a triple threat of daggers. Enemies hit by the poisoned blades will take damage over time and have all healing effects reduced for the duration.",
      image:
        "https://i.pinimg.com/originals/f2/df/fe/f2dffed251894e547f2a348c78b38698.png",
    },
  ];

  res.render("brawlers", { brawlers: brawlmops });
});
app.listen(PORT);
console.log(`Server is running on http://localhost:${PORT}`);
