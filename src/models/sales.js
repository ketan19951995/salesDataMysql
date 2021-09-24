const { v4: uuidv4 } = require('uuid');


let Sales = function (sales) {
    this.id = uuidv4();
    this.userName = sales.userName;
    this.amount = sales.amount;
    this.date = new Date();
};

module.exports = { Sales };