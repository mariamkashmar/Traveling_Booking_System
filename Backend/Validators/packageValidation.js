const insertpackageValidation = (req, res, next) => {
  console.log("PACKAGE VALIDATION HIT");
  console.log("BODY:", req.body);

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

  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Package title is required",
    });
  }

  if (!destination || destination.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Destination is required",
    });
  }

  if (!duration || duration.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Duration is required",
    });
  }

  if (!price || price.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Price is required",
    });
  }

  if (rating === undefined || rating === null || isNaN(rating)) {
    return res.status(400).json({
      success: false,
      message: "Rating is required and must be a number",
    });
  }

  if (!image || image.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Image is required",
    });
  }

  const allowedTourTypes = ["Private Tour", "Group Tour"];
  if (!tourType || !allowedTourTypes.includes(tourType)) {
    return res.status(400).json({
      success: false,
      message: "Tour type must be Private Tour or Group Tour",
    });
  }

  if (!badge || badge.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Badge is required",
    });
  }

  if (!description || description.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Description is required",
    });
  }

  if (!includes || !Array.isArray(includes) || includes.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Includes must be a non-empty array",
    });
  }

  if (!date || date.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Date is required",
    });
  }

  next();
};

module.exports = insertpackageValidation;