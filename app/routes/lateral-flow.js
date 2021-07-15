const express = require('express');
const router = express.Router();
var moment = require('moment');

// Taken test for job?

router.post('app/views/app/share-result-lateral-flow/test-reason', function (req, res) {
  let takeTestForJob = req.body.takeTestForJob;

  if (takeTestForJob === 'yes') {

    res.redirect('app/views/app/share-result-lateral-flow/about-work')

  } else {
    res.redirect('app/views/app/share-result-lateral-flow/test-reason')
  }
});

module.exports = router;