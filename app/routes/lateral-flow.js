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
    res.redirect('/app/share-result-lateral-flow/first-report/test-reason')
  } else {
    res.redirect('/app/share-result-lateral-flow/first-report/did-you-take-this-test-for-your-job-gov')
  }
});

// Tell us why you took the test (first report) - GOV styles

router.post('/app/share-result-lateral-flow/first-report/test-reason', function (req, res) {
  let answer = req.body.testReason;
  if (answer === 'To go to school, college or university') {
    res.redirect('/app/share-result-lateral-flow/first-report/school-name')
  }
  if (answer === 'Someone in the household goes to school or college') {
    res.redirect('/app/share-result-lateral-flow/first-report/school-name')
  }
  if (answer === 'As someone in a support or childcare bubble of a student') {
    res.redirect('/app/share-result-lateral-flow/first-report/school-name')
  }
  if (answer === 'As a foster carer') {
    res.redirect('/app/share-result-lateral-flow/first-report/test-date')
  }
  if (answer === 'Another reason') {
    res.redirect('/app/share-result-lateral-flow/first-report/test-reason-2')
  } else {
    res.redirect('/app/share-result-lateral-flow/first-report/test-reason')
  }
});

// Tell us why you took the test (continued) (first report) - GOV styles

router.post('/app/share-result-lateral-flow/first-report/test-reason-2', function (req, res) {
  let answer = req.body.testReason2;
  if (answer === 'A community organisation provided the test and a Community Number') {
    res.redirect('/app/share-result-lateral-flow/first-report/urg-number')
  }
  if (answer === 'For visiting someone who gets care or support from social care services') {
    res.redirect('/app/share-result-lateral-flow/first-report/social-care-uon')
  }
  if (answer === 'For getting care or support from social care services') {
    res.redirect('/app/share-result-lateral-flow/first-report/social-care-uon')
  }
  if (answer === 'Another reason - not listed') {
    res.redirect('/app/share-result-lateral-flow/first-report/test-date')
  } else {
    res.redirect('/app/share-result-lateral-flow/first-report/test-reason-2')
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