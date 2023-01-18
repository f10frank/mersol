const express = require('express');
const router = express.Router();


const {singup} = require('../controllers/ongControllers')

router.route('/singup').post(singup)

module.exports = router;