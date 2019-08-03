const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const wordSchema = new Schema({
    title: { type: String, required: true },
    id:{ type: Number, required:true },
    key: ObjectId
  });
  
  const word = mongoose.model("word", wordSchema);
  
  module.exports = word;
  
