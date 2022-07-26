const mysql = require("mysql2")
let config = {
    // HOST: "192.168.7.36",
    // USER: "akash1",
    // PASSWORD: "e9UzvykmX1@",
    // DB: "db_angularcore",
    // dialect: "mysql",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }

    host: '192.168.7.36',
    user: 'akash1',
    password: 'e9UzvykmX1@',
    database: 'db_angularcore',
    port: 3306,
    dialect: "mysql"

}
let connection = mysql.createConnection(config);
connection.connect(function (err) {
    if (err) {
        return console.error('error when connecting to db:', err);
    } else {
        console.log("connection created sucessfully")

        let createTodos = `create table if not exists hybrid_users(
        userId int primary key auto_increment,
        username varchar(255)not null,
        password varchar(255)not null,
        type varchar(205)not null
    )`;

        // connection.query(createTodos, function (err, results, fields) {
        //     if (err) {
        //         console.log(err.message);
        //     }
        // });

        let catalog = `create table if not exists Catalog(
            catelogId int primary key auto_increment,
            name varchar(255)not null,
            userId int,  FOREIGN KEY (userId)
            REFERENCES hybrid_users(userId) 
        )`;
        connection.query(catalog, function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
        });

        let Product = `create table if not exists Product_items(
                productId int primary key auto_increment,
                name varchar(255)not null,
                price varchar(255)not null,
                catelogId int,  FOREIGN KEY (catelogId)
                REFERENCES Catalog(catelogId) 
            )`;
        connection.query(Product, function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
        });

        let Orders = `create table if not exists OrderDetail(
                    orderId int primary key auto_increment,
                    orderName varchar(255)not null,
                    price varchar(255)not null,
                    UserId int,  FOREIGN KEY (UserId)
                    REFERENCES hybrid_users(UserId) 
                )`;
        connection.query(Orders, function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
        });
        // connection.end(function (err) {
        //     if (err) {
        //         return console.log(err.message);
        //     }
        // });
    }
});
module.exports = connection;