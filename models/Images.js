const mongoose = require("mongoose");

const ImagesSchema = new mongoose.Schema(
  {
    imageLocation: {
      type: String,
      require: true,
      max: 500,
    },
  },
  { timestamps: true }
);

const Images = mongoose.model("Images", ImagesSchema);
module.exports = Images;
