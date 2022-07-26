var express = require('express');
var router = express.Router();
const {orderList,add_product,create_catalog}=require("../controllers/sellers")

// buyer route.
router.post('/seller/create-catalog',create_catalog )
router.post('/seller/create-product',add_product )

router.get('/seller/orders',orderList )

module.exports = router