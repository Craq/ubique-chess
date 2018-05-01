/**
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/usersdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connecting error'));
db.once('open', function () {
    console.log('Connected DB');
});
var UsersBp = new mongoose.Schema({login: String, mail: String, password: [String],});

var Users = mongoose.model('Strat', UsersBp);
var users1 = new Users(f);
var users4 = new Users({//reads from func
    //login
    //mail
    //password
})


users1.insert(newUser, {w: 1}, function (err, strat_db) {
    if (!err) console.log('added ' + strat_db)
})
users1.save(function (err, strat_db) {
    if (!err) console.log('added ' + strat_db)
})

Users.find({}, function (err, stratArr) {
    for (var i = 0; i < stratArr.length; i++)
        console.log(stratArr[i])
})

function addUser(var v
) {
    users1.insert(v, {w: 1}, function (err, strat_db) {
        if (!err) console.log('added ' + strat_db)
    });
    users1.save(function (err, strat_db) {
        if (!err) console.log('added ' + strat_db)
    })
}
*/