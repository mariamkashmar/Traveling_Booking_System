const { insertBooking, getBookings } = require("../Services/bookingService");

const insertBookingController = async (req, res) => {
  try {
    const {
      userid,
      packageid,
      packagetitle,
      fullname,
      email,
      phone,
      peoplecount,
      notes,
      totalprice,
      packagedate,
    } = req.body;

    if (
      !userid ||
      !packageid ||
      !packagetitle ||
      !fullname ||
      !email ||
      !phone ||
      !peoplecount ||
      totalprice === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "All required booking fields must be provided",
      });
    }

    const response = await insertBooking(
      userid,
      packageid,
      packagetitle,
      fullname,
      email,
      phone,
      peoplecount,
      notes,
      totalprice,
      packagedate
    );

    return res.status(201).json({
      success: true,
      data: response,
      message: "Booking submitted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getBookingsController = async (req, res) => {
  try {
    const response = await getBookings();

    return res.status(200).json({
      success: true,
      data: response,
      message: "Bookings returned successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

module.exports = {
  insertBookingController,
  getBookingsController,
};