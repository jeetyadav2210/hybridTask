var express = require('express');
var router = express.Router();
const {sellers_list,CatalogDetails,create_Orders}=require("../controllers/buyers")

// buyer route.
router.get('/buyer/list-of-sellers',sellers_list )
router.get('/buyer/seller-catalog/:seller_id',CatalogDetails )
router.post("/buyer/create-order/:seller_id",create_Orders)


module.exports = router