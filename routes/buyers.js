var express = require('express');
var router = express.Router();
const {sellers_list,CatalogDetails}=require("../controllers/buyers")

// buyer route.
router.get('/buyer/list-of-sellers',sellers_list )
router.get('/buyer/create-catalog/:seller_id',CatalogDetails )

module.exports = router