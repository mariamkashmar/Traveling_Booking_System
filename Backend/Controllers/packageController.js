const {
  insertpackage,
  getpackageById,
  getpackage,
} = require("../Services/packageService");

const insertpackageController = async (req, res) => {
  try {
    const {
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
    } = req.body;

    const response = await insertpackage(
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
    );

    return res.status(201).json({
      success: true,
      data: response,
      message: "Package added successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getpackageByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getpackageById(id);

    return res.status(200).json({
      success: true,
      data: response,
      message: "Package returned successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getpackageController = async (req, res) => {
  try {
    const response = await getpackage();

    return res.status(200).json({
      success: true,
      data: response,
      message: "Packages returned successfully",
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
  insertpackageController,
  getpackageByIdController,
  getpackageController,
};