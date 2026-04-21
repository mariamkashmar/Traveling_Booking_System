const User = require("../Models/userModel");

const insertUser = async (firstname, lastname, phonenumber, email, country, password) => {
  try {
    console.log("INSERT USER INPUT:", {
      firstname,
      lastname,
      phonenumber,
      email,
      country,
      password
    });

    const userToCreate = {
      firstname,
      lastname,
      phonenumber,
      email,
      country,
      password
    };

    if (country && country.trim() !== '') {
      userToCreate.country = country;
    }

    const newUser = await User.create(userToCreate);

    console.log("USER CREATED:", newUser);

    return {
      id: newUser._id
    };
  } catch (err) {
    console.log("SERVICE ERROR:", err);
    throw err;
  }
};
const signInUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.password !== password) {
      throw new Error("Invalid password");
    }

    return {
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    };
  } catch (err) {
    throw err;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw err;
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw err;
  }
};

module.exports = { insertUser , signInUser , getUserById, getUsers };