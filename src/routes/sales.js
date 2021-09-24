const express = require('express')
const router = express.Router()
const salesController =   require('../controllers/sales');


router.post('/add', salesController.create);
router.get('/daily', salesController.getDailyStats);
router.get('/weekly', salesController.getWeeklyStats);
router.get('/monthly', salesController.getMonthlyStats);

module.exports = router