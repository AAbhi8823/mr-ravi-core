// create user model/schema for Mr.Ravi
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: false,
        },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
        required:false,
      },
      url: {
        type: String,
        required: false,
      },
    },

    role: {
      type: String,
      default: "user",
    },
    createdAt: {
      type: Date,
      default: new Date(Date.now()),
    },
    resetPasswordToken: {
      type: String,
      trim: true,
    },
    resetPasswordExpire: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
