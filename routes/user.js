var express = require('express');
var router = express.Router();
const {Registeration,Login}=require("../controllers/user")

// Home page route.
router.post('/auth/register',Registeration )
router.post("/auth/login",Login)

module.exports = router