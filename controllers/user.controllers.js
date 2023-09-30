//user controllers for Mr.Ravi
const user_model = require("../models/user.models");
const apiResponse = require("../helpers/apiResponse");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
// const { OAuth2Client } = require("google-auth-library");
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// const sendEmail = require("../helpers/sendEmail");

// register user => /api/v1/register
exports.registerUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const user = await user_model.create({
      first_name,
      last_name,
      email,
      password,
    });

    return apiResponse.successResponseWithData(
      res,
      "User created successfully",
      user
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// // login user => /api/v1/login
// exports.loginUser = async (req, res, next) => {
//   const { email, password } = req.body;
//   // check if email and password is entered by user
//   if (!email || !password) {
//     res.status(400).json({
//       success: false,
//       message: "Please enter email and password",
//     });
//   }
//   // finding user in database
//   const user = await user_model.findOne({ email }).select("+password");
//   if (!user) {
//     res.status(404).json({
//       success: false,
//       message: "Invalid credentials",
//     });
//   }
//   // check if password is correct or not
//   const isPasswordMatched = await user.matchPassword(password);
//   if (!isPasswordMatched) {
//     res.status(404).json({
//       success: false,
//       message: "Invalid credentials",
//     });
//   }
//   // if everything is ok
//   sendToken(user, 200, res);
// };
