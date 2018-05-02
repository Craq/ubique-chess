var express = require('express');
var router = express.Router();
var User = require('./user.js');
var url = require("url");

//GET
router.get('/', function (req, res, next) {
    var http = require('http'),request = require('request');

    var pathname = url.parse("https://localhost:5050/(index)").pathname;
    return res.sendFile('/');//
});
//POST
router.post('/', function (req, res, next) {
    if (req.body.email &&
        req.body.username &&
        req.body.password) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        }

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                return res.redirect('/#');
            }
        });

    } else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                return res.redirect('/profile');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
});
module.exports = router;

