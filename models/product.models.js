const mongoose = require('mongoose');


const productSchema = new mongoose.Schema(
    {
      product_name: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: false,
      },
      category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: true,
      },
      subcategory: {
        type: mongoose.Schema.ObjectId,
        ref: "Subcategory",
        required: true,
      },
  
      default_thumbnail_image: {
        type: String,
        required: false,
      },
      isActive: {
        type: Boolean,
        default: true,
      },
    },
    {
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
  
  module.exports = mongoose.model("Product", productSchema);
  