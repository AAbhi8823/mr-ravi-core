//subcategory of category model of product for Mr.Ravi

const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
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
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(Date.now()),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subcategory", subcategorySchema);
