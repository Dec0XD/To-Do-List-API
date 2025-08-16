const express = require('express');
const { generateToken } = require('../utils/jwt');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Mock login: returns a token for a dummy user
router.post('/mock-login', (req, res) => {
  const user = { id: 'test-user' };
  const token = generateToken(user);
  res.json({ token });
});

// Example protected route to verify middleware
router.get('/me', authMiddleware, (req, res) => {
  res.json({ id: req.userId });
});

module.exports = router;
