const jwt = require("jsonwebtoken");


exports.tokenCheck = (req, res, next) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);

    if (bearerHeader != undefined) {
        const s = bearerHeader.split(" ");
        let token = s[1]
        req.token = token

        jwt.verify(req.token, jwtSecretKey, (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    err: err,
                    msg: "authentication failled"
                })
            } else {
                next()
            }
        })
    } else {
        res.json({
            code: 400,
            msg: "token not found"
        })
    }

}