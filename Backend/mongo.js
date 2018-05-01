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
var strat1=new Strat({
    name:'Urusov Gambit',
    description:'The Urusov Gambit is an aggressive line in the Bishop’s opening that starts with the moves:<p>1. e4 e5</p><p>2. Bc4 Nf6</p><p>3. d4</p>Instead of playing the normal Nc3 or Nf3, white looks to add pressure to the center of the board with d4 and open up more lanes for white’s remaining pieces to get involved into the attack. Black has two responses. Black taking on e4 with his knight is definitely a worse move. White can play dxe5 and then start to attack the knight on e4. The main line for black is to take exd4. White continues with Nf3 with many strong attacking lines. While this gambit isn’t as possible as the King’s Gambit or the Queen’s Gambit I do think this offers many great attacking lines for white and if black is not careful can find themselves in some tricky situations. As the case with most Bishop openings, black always has to fear the bishop taking on f7 forcing the king to recapture and lose the ability to castle.\n' +
    'Make sure you check out the video below to learn more about all the variations.',
    moves:['rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR']
})
strat1.save(function (err,strat_db) {
    if(!err) console.log('added '+strat_db)
})

Strat.find({},function (err,stratArr) {
    for(var i=0;i<stratArr.length;i++)
        console.log(stratArr[i])
})