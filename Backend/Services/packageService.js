const Package = require("../Models/packageModel");

const insertpackage = async (
  title,
  destination,
  duration,
  price,
  rating,
  image,
  tourType,
  badge,
  description,
  includes,
  date
) => {
  try {
    const newPackage = await Package.create({
      title,
      destination,
      duration,
      price,
      rating,
      image,
      tourType,
      badge,
      description,
      includes,
      date,
    });

    return {
      id: newPackage._id,
    };
  } catch (err) {
    throw err;
  }
};

const getpackageById = async (id) => {
  try {
    return await Package.findById(id);
  } catch (err) {
    throw err;
  }
};

const getpackage = async () => {
  try {
    return await Package.find();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  insertpackage,
  getpackageById,
  getpackage,
};