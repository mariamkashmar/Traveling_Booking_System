const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: String,
      required: true,
      trim: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    tourType: {
      type: String,
      enum: ["Private Tour", "Group Tour"],
      required: true,
    },

    badge: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    includes: [
      {
        type: String,
        trim: true,
      },
    ],

    date: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;