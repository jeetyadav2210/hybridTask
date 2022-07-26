var express = require('express');
var router = express.Router();
const {orderList,add_product,create_catalog}=require("../controllers/sellers")
let {tokenCheck}=require("../helper")

// buyer route.
router.post('/seller/create-catalog',tokenCheck,create_catalog )
router.post('/seller/create-product',tokenCheck,add_product )

router.get('/seller/orders',tokenCheck,orderList )

module.exports = router