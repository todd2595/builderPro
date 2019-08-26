const mongoose = require("mongoose");
const db = require("../server/Database/models");

// This file empties the Words collection and inserts the Words below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/builderPro"
);

const WordSeed = [
  {
    title: "green",
    id: 1
  }, {
    title: "long",
    id: 2
  }, {
    title: "young",
    id: 3
  }, {
    title: "door",
    id: 4
  }, {
    title: "lamp",
    id: 5
  }, {
    title: "bus",
    id: 6
  }, {
    title: "lost",
    id: 7
  }, {
    title: "forgive",
    id: 8
  }, {
    title: "glass",
    id: 9
  }, {
    title: "spoon",
    id: 10
  }
]

db.word
  .remove({})
  .then(() => db.word.collection.insertMany(WordSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
