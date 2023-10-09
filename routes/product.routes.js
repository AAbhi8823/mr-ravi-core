const router = require('express').Router();

const product_controller = require('../controllers/product.controllers');


//product routes
router.post('/create', product_controller.create_product);


module.exports = router;