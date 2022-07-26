
let db = require("../config/connection")


exports.sellers_list = (req, res) => {
    var sql = "SELECT * FROM hybrid_users where type='seller'";
    db.query(sql, function (err, result) {
        console.log(err);
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.send(
                result
            )
        }
        // console.log("1 record inserted",result);
    });
}


exports.CatalogDetails = (req, res) => {
    let id = req.params.seller_id
    const queries = 'SELECT * FROM catalog INNER JOIN product_items ON product_items.catelogId = catalog.catelogId where userId=?';
    var sql = "SELECT * FROM catalog where type='seller'";
    db.query(queries, [id], function (err, result) {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.send(
                result
            )
        }
        // console.log("1 record inserted",result);
    });
}




exports.create_Orders = (req, res) => {
    const { orderName, price, catelogId } = req.body
    let userId =req.params.seller_id
    var sql = "SELECT * FROM hybrid_users Where userId=?";
    db.query(sql, [userId], async function (err, result) {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            if (result.length != 0) {
                var sql = `INSERT INTO orderdetail (orderName,price,UserId,catelogId) VALUES ('${orderName}','${price}','${userId}','${catelogId}')`;
                db.query(sql, function (err, result) {
                    if (err) {
                        res.json({
                            code: 400,
                            msg: err
                        })
                    } else {
                        res.json({
                            code: 200,
                            msg: "Order added"
                        })
                    }
                });
            } else {
                res.json({
                    code: 400,
                    msg: "User not found"
                })
            }
        }
    })
}

