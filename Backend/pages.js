/**
 * Created by chaika on 09.02.16.
 */
exports.choice = function(req, res){
    res.render('chooseChess', {
        pageTitle: 'Choice'
    });
};

exports.h2h = function(req, res) {
    res.render('h2h',{
        pageTitle:'Human VS Human'
    })
};

exports.h2m = function(req, res) {
    res.render('h2m',{
        pageTitle:'Human VS Stockfish'
    })
};
exports.strats = function(req, res) {
    res.render('strats',{
        pageTitle:'Strats'
    })
};