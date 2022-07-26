var express = require('express');
var router = express.Router();
const {Registeration,Login}=require("../controllers/user")

// Home page route.
router.post('/auth/register',Registeration )
router.post("/auth/login",Login)

module.exports = router

// git remote set-url origin https://jeetyadav2210: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@github.com/jeetyadav2210/hybridTask.git
