/**
 * Created by chaika on 09.02.16.
 */
exports.mainPage = function(req, res){
    res.render('mainPage', {
        pageTitle: 'Human VS Stockfish'
    });
};

exports.h2h = function(req, res) {
    res.render('h2h',{
        pageTitle:'Human VS Human'
    })
};

exports.chooseChess = function(req, res) {
    res.render('chooseChess',{
        pageTitle:'Choice'
    })
};