/**
 * Created by chaika on 09.02.16.
 */
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/stratsdb');
var db=mongoose.connection;
db.on('error', console.error.bind(console,'connecting error'));
db.once('open',function(){
    console.log('Connected DB');
});

var StratBp=new mongoose.Schema({
    name:String,
    description:String,
    moves:[String],
});
var Strat=mongoose.model('Strat',StratBp);
function configureEndpoints(app) {
    var pages = require('./pages');

    //Сторінки
    //Головна сторінка
    app.get('/', pages.mainPage);
    app.get('/choice', pages.choice);
    app.get('/h2h', pages.h2h);
    app.get('/h2m', pages.h2m);
    app.get('/strats',pages.strats);
    app.get('/strats/lol',function (req,res) {
        console.log("aaaaa")
        Strat.find({},function (err,stratArr) {
            res.send(stratArr);
        })
    })
    //Якщо не підійшов жоден url, тоді повертаємо файли з папки www
    app.use(express.static(path.join(__dirname, '../Frontend')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;