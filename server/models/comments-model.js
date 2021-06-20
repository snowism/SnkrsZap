const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentsSchema = new Schema(
  {
    username: String,
    item: String,
    id: String,
    review: String,
  },
  {
    timestamps: true,
  }
);

// singular capitalized name for the mongo collection 
module.exports = mongoose.model("Comment", CommentsSchema);
