const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup);



/*---------- Protected Routes ----------*/




module.exports = router;