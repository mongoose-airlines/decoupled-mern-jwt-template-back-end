const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/", checkAuth, usersCtrl.index);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
