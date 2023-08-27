const express = require('express');
const router = express.Router();
const Log = require('../models/logs');

router.post('/', (req, res) => {
  Log.create(req.body, (err, createdLog) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Created Log:', createdLog);
      res.redirect(`/logs/${createdLog._id}`);
    }
  });
});

module.exports = router;
