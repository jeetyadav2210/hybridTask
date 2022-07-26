var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

let connection =require("./config/connection")

let user_auth = require("./routes/user")
app.use("/api", user_auth)


// Body-parser middleware
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
// app.use(bodyParser.json())
// app.use(express.json());
app.use(express.urlencoded({ extended: true }))
     
// parse application/json
app.use(express.json())

var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})