// authRoutes.js

const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const authController = require('../controllers/authController');
const keys = require('../config/keys');

const router = express.Router();

router.post('/register', authController.register);

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    const token = jwt.sign({ user: req.user }, keys.jwtSecret, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  }
);

module.exports = router;
