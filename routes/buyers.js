var express = require('express');
var router = express.Router();
const {sellers_list,CatalogDetails,create_Orders}=require("../controllers/buyers")
let {tokenCheck}=require("../helper")
// buyer route.
router.get('/buyer/list-of-sellers',tokenCheck,sellers_list )
router.get('/buyer/seller-catalog/:seller_id',tokenCheck,CatalogDetails )
router.post("/buyer/create-order/:seller_id",tokenCheck,create_Orders)


module.exports = router