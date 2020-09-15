const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup);
router.post("/login", authCtrl.login);

/*---------- Protected Routes ----------*/

module.exports = router;