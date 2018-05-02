var express = require('express');
var router = express.Router();
var User = require('user.js');


//GET
router.get('/', function (req, res, next) {
    result.sendFile(path.join('index'));//
});
//POST
router.post('/', function (req, res, next) {
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords dont match");
        return next(err);
    }
    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
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
})

