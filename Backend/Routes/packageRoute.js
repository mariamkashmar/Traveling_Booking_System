const express = require("express");
const insertpackageValidation = require("../Validators/packageValidation");
const {
  insertpackageController,
  getpackageByIdController,
  getpackageController,
} = require("../Controllers/packageController");

const router = express.Router();

router.post("/package", insertpackageValidation, insertpackageController);
router.get("/getPackageById/:id", getpackageByIdController);
router.get("/admin/getAllPackages", getpackageController);

module.exports = router;