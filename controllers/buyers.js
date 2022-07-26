
let db =require("../config/connection")


exports.sellers_list = (req, res) => {
    var sql = "SELECT * FROM hybrid_users where type='seller'";
    db.query(sql, function (err, result) {
        if (err){
            res.json({
                code:400,
                msg:err
            })
        }else{
            res.send(
                result
            )
        }
        // console.log("1 record inserted",result);
    });
}


exports.CatalogDetails = (req, res) => {
    let id = req.params.seller_id
    const queries = 'SELECT * FROM catalog where userId=? JOIN product_items ON product_items.catelogId = catalog.catelogId';
    var sql = "SELECT * FROM catalog where type='seller'";
    db.query(queries,[id], function (err, result) {
        if (err){
            res.json({
                code:400,
                msg:err
            })
        }else{
            res.send(
                result
            )
        }
        // console.log("1 record inserted",result);
    });
}
