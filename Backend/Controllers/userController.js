const { validationResult } = require('express-validator');
const { insertUser , signInUser, getUserById, getUsers } = require('../Services/userServices');

const insertUserController = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("VALIDATION ERRORS:", errors.array());

      return res.status(400).json({
        success: false,
        error: errors.array(),
        message: errors.array()[0].msg
      });
    }

    const { firstname, lastname, phonenumber, email, country, password } = req.body;

    const response = await insertUser(
      firstname,
      lastname,
      phonenumber,
      email,
      country,
      password
    );

    return res.status(201).json({
      success: true,
      data: response,
      message: 'Signed Up Successfully'
    });
  } catch (err) {
    console.log("SIGNUP ERROR FULL:", err);
    console.log("SIGNUP ERROR MESSAGE:", err.message);
    console.log("SIGNUP ERROR CODE:", err.code);

    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });
    }

    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error"
    });
  }
};

const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await signInUser(email, password);

    return res.status(200).json({
      success: true,
      data: response,
      message: "Signed in successfully"
    });
  } catch (err) {
    if (err.message === "User not found" || err.message === "Invalid password") {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }

    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error"
    });
  }
};

const getUserByIdController = async (req,res) => {
  try{
    const {id}= req.params;
    const response = await getUserById(id);
    res.status(200).json({
      success:true,
      data: response,
      message:' User returned Successfully'
    })
  }catch(err){
    return res.status(500).json({
      success:false,
      error: err.message,
      message:'Server error'
    })
  }
}

const getUsersController = async (req,res) => {
  try{
    const response = await getUsers();
    res.status(200).json({
      success:true,
      data: response,
      message:' Users returned Successfully'
    })
  }catch(err){
    return res.status(500).json({
      success:false,
      error: err.message,
      message:'Server error'
    })
  }
}

module.exports = { insertUserController, signInController, getUserByIdController, getUsersController };