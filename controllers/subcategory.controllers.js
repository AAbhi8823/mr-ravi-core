//based on my schemas we are going to create controllers for our subcategory model  

const sub_category_model = require("../models/subcategory.models");
const apiResponse = require("../helpers/apiResponse");
const { body, sanitizeBody, validationResult } = require("express-validator");

//create subcategory

exports.create_subcategory = async (req, res) => {
    const { name, category_id, description, isActive } = req.body;
    try {
        const subcategory = await sub_category_model.create({
        name,
        description,
        category: category_id,
        isActive,
        });
        return apiResponse.successResponseWithData(
        res,
        "Subcategory created successfully",
        subcategory
        );
    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message,
        });
    }
    }

//get single subcategory

exports.get_subcategory = async (req, res) => {
    try {
        const subcategory = await sub_category_model.findById(req.params.id);
        if (!subcategory) {
            return apiResponse.notFoundResponse(res, "No subcategory found");
        }
        return apiResponse.successResponseWithData(res, "Subcategory found", subcategory);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    };
}

//get all subcategories

exports.get_all_subcategories = async (req, res) => {
    try {
        const subcategories = await sub_category_model.find();
        if (!subcategories) {
            return apiResponse.notFoundResponse(res, "No subcategory found");
        }
        return apiResponse.successResponseWithData(res, "Subcategories found", subcategories);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    };
}

//update subcategory

exports.update_subcategory = async (req, res) => {

    const { name, description, isActive } = req.body;
    try {
        const subcategory = await sub_category_model.findByIdAndUpdate(req.params.id, {
            name,
            description,
            isActive,
        });
        if (!subcategory) {
            return apiResponse.notFoundResponse(res, "No subcategory found");
        }
        return apiResponse.successResponseWithData(res, "Subcategory updated successfully", subcategory);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    };
}

