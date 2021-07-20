const express = require('express');
const router = express.Router();
var moment = require('moment');

// Taken test for job?

router.post('/app/share-result-lateral-flow/did-you-take-this-test-for-your-job', function (req, res) {
  let answer = req.body.takeTestForJob;
  if (answer === 'Yes') {
    res.redirect('/app/share-result-lateral-flow/about-work')
  } else {
    res.redirect('/app/share-result-lateral-flow/test-reason')
  }
});

router.post('/app/share-result-lateral-flow/did-you-take-this-test-for-your-job-gov', function (req, res) {
  let answer = req.body.takeTestForJob;
  if (answer === 'Yes') {
    res.redirect('/app/share-result-lateral-flow/about-work')
  } else {
    res.redirect('/app/share-result-lateral-flow/test-reason')
  }
});


module.exports = router;