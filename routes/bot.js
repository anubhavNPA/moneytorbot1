var express = require('express');
var router = express.Router();
var submittedFormData = require('./formdata');

router.get('/bot', function(req, res, next) {
    res.render('bot.html');
});

module.exports = router;