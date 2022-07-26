
let db =require("../config/connection")

exports.create_catalog = (req, res) => {
    const { userId, name } = req.body
    var sql = "SELECT * FROM catalog Where userId=?";
    db.query(sql, [userId], async function (err, result) {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            if (result.length == 0) {
                var sql = `INSERT INTO catalog (name,userId) VALUES ('${name}','${userId}')`;
                db.query(sql, function (err, result) {
                    if (err) {
                        res.json({
                            code: 400,
                            msg: err
                        })
                    } else {
                        res.json({
                            code: 200,
                            msg: "Catalog inserted"
                        })
                    }
                });
            } else {
                res.json({
                    code: 400,
                    msg: " this username Catalog already exists"
                })
            }
        }
    })
}




exports.add_product = (req, res) => {
    const { name, price, catalog_id } = req.body
    var sql = "SELECT * FROM catalog Where catelogId=?";
    db.query(sql, [catalog_id], async function (err, result) {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            if (result.length != 0) {
                var sql = `INSERT INTO product_items (name,price,catelogId) VALUES ('${name}','${price}','${catalog_id}')`;
                db.query(sql, function (err, result) {
                    if (err) {
                        res.json({
                            code: 400,
                            msg: err
                        })
                    } else {
                        res.json({
                            code: 200,
                            msg: "products inserted"
                        })
                    }
                });
            }else{
                res.json({
                    code: 400,
                    msg: "catalog not found"
                })
            }
        }
    })
}

