const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  description: {
    type: String,
  },
  likes: {
    type: Number,
  },
  views: {
    type: Number,
  },
});

const cardinfo = mongoose.model("CardInfo", cardSchema);

module.exports = cardinfo;
