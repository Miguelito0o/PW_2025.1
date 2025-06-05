var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
    res.render('myGardens')})

module.exports = router;