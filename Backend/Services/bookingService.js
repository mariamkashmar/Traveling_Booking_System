const Booking = require("../Models/bookingModel");

const insertBooking = async (
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
) => {
  try {
    const newBooking = await Booking.create({
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
    });

    return {
      id: newBooking._id,
    };
  } catch (err) {
    throw err;
  }
};

const getBookings = async () => {
  try {
    return await Booking.find()
      .populate("userid", "firstname lastname email")
      .populate("packageid", "title destination image tourType");
  } catch (err) {
    throw err;
  }
};

module.exports = {
  insertBooking,
  getBookings,
};