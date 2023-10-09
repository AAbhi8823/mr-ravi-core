//category model of product for Mr.Ravi

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
    },
    product_specifications: [
      {
        type: String,
        required: false,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
    thumbnail_image: {
      type: String,
      required: false,
    },
    product_images: [
      {
        type: String,
        required: false,
      },
    ],
    createdAt: {
      type: Date,
      default: new Date(Date.now()),
    },
    updatedAt: {
      type: Date,
      default: new Date(Date.now()),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
