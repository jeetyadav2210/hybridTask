
let db =require("../config/connection")


exports.Registeration =(req, res) => {
    console.log(req.body, "jkhjggh");
    const { username, type, password } = req.body
    
    var sql = "SELECT * FROM hybrid_users Where username=? And type=?";
    db.query(sql, [username, type], function (err, result) {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            if (result.length == 0) {
                var sql = `INSERT INTO hybrid_users (username, password,type) VALUES ('${username}','${password}','${type}')`;
                db.query(sql, function (err, result) {
                    if (err) {
                        console.log(err);
                        res.json({
                            code: 400,
                            msg: err
                        })
                    } else {
                        res.json({
                            code: 200,
                            msg: "registration successfully"
                        })
                    }
                });
            } else {
                res.json({
                    code: 400,
                    msg: "This Username already exists"
                })
            }

        }
    })
}

exports.Login =  (req, res) => {
    const { username, type, password } = req.body
    console.log(req.body);
    var sql = "SELECT * FROM hybrid_users Where username=? And type=?";
    db.query(sql, [username, type], async function (err, result) {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            if (result.length != 0) {
                let dataPass = result[0]
                console.log(dataPass, "dataPass");
                if (dataPass.password == password) {
                    let jwtSecretKey = process.env.JWT_SECRET_KEY;
                    let data = {
                        time: Date(),
                        userId: dataPass.userId,
                        email: dataPass.username
                    }
                    const token = jwt.sign(data, jwtSecretKey);
                    dataPass.token = token
                    res.json({
                        code: 200, msg: dataPass
                    })
                } else {
                    res.json({
                        code: 400,
                        msg: "password is wrong"
                    })
                }
            } else {
                res.json({
                    code: 400,
                    msg: "This username doesn't exists"
                })
            }

        }
    })
}
