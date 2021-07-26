const express = require('express');
const router = express.Router();
var moment = require('moment');

// Taken test for job? - NHS styles

router.post('/app/share-result-lateral-flow/nhs-styles/did-you-take-this-test-for-your-job-nhs', function (req, res) {
  let answer = req.body.takeTestForJobNHS;
  if (answer === 'Yes') {
    res.redirect('/app/share-result-lateral-flow/nhs-styles/about-work')
  }
  if (answer === 'No') {
    res.redirect('/app/share-result-lateral-flow/nhs-styles/test-reason')
  } else {
    res.redirect('/app/share-result-lateral-flow/nhs-styles/did-you-take-this-test-for-your-job-nhs')
  }
});

// Taken test for job? - GOV styles

router.post('/app/share-result-lateral-flow/did-you-take-this-test-for-your-job-gov', function (req, res) {
  let answer = req.body.testForWork;
  if (answer === 'yes') {
    res.redirect('/app/share-result-lateral-flow/about-work')
  }
  if (answer === 'no') {
    res.redirect('/app/share-result-lateral-flow/test-date')
  } else {
    res.redirect('/app/share-result-lateral-flow/did-you-take-this-test-for-your-job-gov')
  }
});

// Test result - previously reported a result journey

router.post('/app/share-result-lateral-flow/choose-result', function (req, res) {
  let testResultAnswer = req.body.testResult;
  if (testResultAnswer === 'check-answers-positive') {
    res.redirect('/app/share-result-lateral-flow/positive-result')
  }
  if (testResultAnswer === 'check-answers-negative') {
    res.redirect('/app/share-result-lateral-flow/negative-result')
  }
  if (testResultAnswer === 'check-answers-invalid') {
    res.redirect('/app/share-result-lateral-flow/invalid-result')
  } else {
    res.redirect('/app/share-result-lateral-flow/choose-result')
  }
});


module.exports = router;