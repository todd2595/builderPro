const mongoose = require("mongoose");
const db = require("../server/Database/models");

// This file empties the Words collection and inserts the Words below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/builderPro"
);

const WordSeed = [
    {
        title:"Adult"
    }, 
    {
        title:"Child"
    }
]

db.Word.collection.insertMany(WordSeed)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
