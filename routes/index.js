var express = require('express');
var router = express.Router();
var submittedFormData = require('./formdata');

router.get('/', function(req, res, next) {
    //res.render('bot.html');
    res.send('reached index');
});

/* //old working post handler
router.post('/', function(req, res, next) {
    //res.send('got form');
    //console.log(req.body);
    submittedFormData.DPDRules = req.body.DPDRules;
    submittedFormData.CreditRules = req.body.CreditRules;
    submittedFormData.IsSecured = req.body.IsSecured;
    submittedFormData.gender = req.body.gender;
    res.render('form.html');
    console.log(submittedFormData.CreditRules);
    res.json(submittedFormData);
})
*/

router.post('/', function(req, res, next) {
    console.log('post request received');
    var liveRuleCreated = req.body;
    if(!liveRuleCreated.DPDvalue) {
        res.status(400);
        res.json({
            "error": "Bad Data - DPDValue missing"
        });
    } else {
        console.log(liveRuleCreated);
        res.json(liveRuleCreated);
    }
});

module.exports = router;