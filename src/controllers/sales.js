const { Sales } = require('../models/sales');
let dbConn = require('../../config/db');

exports.create = function (req, res) {
    const sales = new Sales(req.body);
    dbConn.query("INSERT INTO sales set ?", sales,  (err, data) =>{
        if (err) {
            res.send(err);
        } else {
            res.json({ status: "SUCCESS", "message": "Sales inserted successfully" });
        }
    });
};


exports.getDailyStats = function (req, res) {
    let query = `SELECT sum(amount) as sum , day(date) as day  , year(date) as year FROM  sales_db.sales group by month(date)`;
    dbConn.query(query, (err, data) => {
        if (err) throw err;
        res.json({ status: "SUCCESS", "message": data });
    });
};

exports.getWeeklyStats = function (req, res) {
    let query = `SELECT sum(amount) as sum , week(date) as week  , year(date) as year FROM  sales_db.sales group by month(date)`;
    dbConn.query(query, (err, data) => {
        if (err) throw err;
        res.json({ status: "SUCCESS", "message": data });
    });
};


exports.getMonthlyStats = async function (req, res) {
    let query = `SELECT sum(amount) as sum , month(date) as month  , year(date) as year FROM  sales_db.sales group by month(date)`;
    dbConn.query(query, (err, data) => {
        if (err) throw err;
        res.json({ status: "SUCCESS", "message": data });
    });
};