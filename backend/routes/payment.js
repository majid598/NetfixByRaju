const express = require("express");
const { makePayment, sendKey } = require("../controllers/pay");
const router = express.Router()

router.route('/pay').post(makePayment);
router.route('/apikey').get(sendKey);
module.exports = router