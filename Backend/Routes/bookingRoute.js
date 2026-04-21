const express = require("express");
const {
  insertBookingController,
  getBookingsController,
} = require("../Controllers/bookingController");

const router = express.Router();

router.post("/book", insertBookingController);
router.get("/admin/getAllBookings", getBookingsController);

module.exports = router;