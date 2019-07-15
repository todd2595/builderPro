const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const WordSchema = new Schema({
    title: { type: String, required: true },
    
    key: ObjectId
  });
  
  const Word = mongoose.model("Word", WordSchema);
  
  module.exports = Word;
  
