var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

let connection =require("./config/connection")

let user_auth = require("./routes/user")
let buyers = require("./routes/buyers");
let sellers = require("./routes/sellers")
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", user_auth)
app.use("/api",buyers)
app.use("/api",sellers)




var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})