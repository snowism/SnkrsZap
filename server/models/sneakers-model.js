const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SneakersSchema = new Schema(
  {
    name: String,
    brand: String,
    id: String,
    filepath: String,
    colour: String,
    newprice: String,
    oldprice: String,
    
  },
  {
    timestamps: true,
  }
);

// singular capitalized name for the mongo collection - Writer
module.exports = mongoose.model("Sneaker", SneakersSchema);
