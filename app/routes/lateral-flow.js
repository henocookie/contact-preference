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

// Taken test for job? (previously reported) - GOV styles

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


// Taken test for job? (first report) - GOV styles

router.post('/app/share-result-lateral-flow/first-report/did-you-take-this-test-for-your-job-gov', function (req, res) {
  let answer = req.body.testForWork;
  if (answer === 'yes') {
    res.redirect('/app/share-result-lateral-flow/first-report/about-work')
  }
  if (answer === 'no') {
    res.redirect('/app/share-result-lateral-flow/first-report/test-date')
  } else {
    res.redirect('/app/share-result-lateral-flow/first-report/did-you-take-this-test-for-your-job-gov')
  }
});


// About work (previously reported) - GOV styles

router.post('/app/share-result-lateral-flow/about-work', function (req, res) {
  let answer = req.body.aboutWork;
  if (answer === 'It’s for a social care service') {
    res.redirect('/app/share-result-lateral-flow/test-date')
  }
  if (answer === 'It’s for an education provider') {
    res.redirect('/app/share-result-lateral-flow/test-date')
  }
  if (answer === 'It’s for the NHS in England, Northern Ireland or Wales') {
    res.redirect('/app/share-result-lateral-flow/test-date')
  }
  if (answer === 'It’s not listed') {
    res.redirect('/app/share-result-lateral-flow/employee-wtp')
  } else {
    res.redirect('/app/share-result-lateral-flow/about-work')
  }
});

// About work (first report) - GOV styles

router.post('/app/share-result-lateral-flow/first-report/about-work', function (req, res) {
  let answer = req.body.aboutWork;
  if (answer === 'It’s for a social care service') {
    res.redirect('/app/share-result-lateral-flow/first-report/test-date')
  }
  if (answer === 'It’s for an education provider') {
    res.redirect('/app/share-result-lateral-flow/first-report/test-date')
  }
  if (answer === 'It’s for the NHS in England, Northern Ireland or Wales') {
    res.redirect('/app/share-result-lateral-flow/first-report/test-date')
  }
  if (answer === 'It’s not listed') {
    res.redirect('/app/share-result-lateral-flow/first-report/employee-wtp')
  } else {
    res.redirect('/app/share-result-lateral-flow/first-report/about-work')
  }
});

// Test result (previously reported) - previously reported a result journey

router.post('/app/share-result-lateral-flow/choose-result', function (req, res) {
  let answer = req.body.testResult;
  if (answer === 'check-answers-positive') {
    res.redirect('/app/share-result-lateral-flow/positive-result')
  }
  if (answer === 'check-answers-negative') {
    res.redirect('/app/share-result-lateral-flow/negative-result')
  }
  if (answer === 'check-answers-invalid') {
    res.redirect('/app/share-result-lateral-flow/invalid-result')
  } else {
    res.redirect('/app/share-result-lateral-flow/choose-result')
  }
});

// Test result (first report) - previously reported a result journey

router.post('/app/share-result-lateral-flow/first-report/choose-result', function (req, res) {
  let answer = req.body.testResult;
  if (answer === 'check-answers-positive') {
    res.redirect('/app/share-result-lateral-flow/first-report/positive-result')
  }
  if (answer === 'check-answers-negative') {
    res.redirect('/app/share-result-lateral-flow/first-report/negative-result')
  }
  if (answer === 'check-answers-invalid') {
    res.redirect('/app/share-result-lateral-flow/first-report/invalid-result')
  } else {
    res.redirect('/app/share-result-lateral-flow/first-report/choose-result')
  }
});


module.exports = router;