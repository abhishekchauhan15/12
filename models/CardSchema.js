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
  isSaved: {
    type: Boolean,
    default: false,
  },
  isFollowed: {
    type: Boolean,
    default: false,
  },
  isReport: {
    type: Boolean,
    default: false,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
});

const CardInfo = mongoose.model("CardInfo", cardSchema);

module.exports = CardInfo;
