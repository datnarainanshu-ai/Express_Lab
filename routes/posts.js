const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Posts Home Page');
});

router.get('/new', (req, res) => {
  res.send('Posts New Page');
});

module.exports = router;