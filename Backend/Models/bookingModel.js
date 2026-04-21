const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    packageid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },

    packagetitle: {
      type: String,
      required: true,
      trim: true,
    },

    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    peoplecount: {
      type: Number,
      required: true,
      min: 1,
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },

    totalprice: {
      type: Number,
      required: true,
      min: 0,
    },

    bookingdate: {
      type: Date,
      default: Date.now,
    },

    packagedate: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;