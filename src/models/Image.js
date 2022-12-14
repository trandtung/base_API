const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const image = new Schema(
  {
    originImg: String,
    number: Number,
    feedBackImg: Array,
    previewImg:String
  },
  { versionKey: false,timestamps: true  }
);

module.exports = mongoose.model("image", image);
