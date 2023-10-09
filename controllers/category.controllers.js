// category controller for mr-ravi

const category_model = require("../models/category.models");
const sub_category_model = require("../models/subcategory.models");
const apiResponse=require("../helpers/apiResponse")
const {body,sanitizeBody, validationResult } = require("express-validator");


//create category

exports.create_category = async (req, res) => {
    const { name, description, isActive } = req.body;
    try {
        const category = await category_model.create({
            name,
            description,
            isActive,
        });
        return apiResponse.successResponseWithData(
            res,
            "Category created successfully",
            category
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    };
}

//get single category

exports.get_category = async (req, res) => {
    try {
        const category = await category_model.findById(req.params.id);
        if (!category) {
            return apiResponse.notFoundResponse(res, "No category found");
        }
        return apiResponse.successResponseWithData(res, "Category found", category);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    };
}

//get all categories

exports.get_all_categories = async (req, res) => {
    try {
        const categories = await category_model.find();
        if (!categories) {
            return apiResponse.notFoundResponse(res, "No category found");
        }
        return apiResponse.successResponseWithData(res, "Categories found", categories);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    };
}

//update category

exports.update_category = async (req, res) => {
    const { name, description, isActive } = req.body;
    try {
        const category = await category_model.findByIdAndUpdate(req.params.id, {
            name,
            description,
            isActive,
        }, { new: true });
        if (!category) {
            return apiResponse.notFoundResponse(res, "No category found");
        }
        return apiResponse.successResponseWithData(res, "Category updated", category);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    };
}



