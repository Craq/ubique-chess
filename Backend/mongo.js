var mongoose=require('mongoose');
mongoose.connect('mongodb://admin:admin@ds111420.mlab.com:11420/chessai');
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
Strat.remove({},function (err) { console.log('removed') })
var strat1=new Strat({
    name:'Urusov Gambit',
    description:'The Urusov Gambit is an aggressive line in the Bishop’s opening that starts with the moves:<p>1. e4 e5</p><p>2. Bc4 Nf6</p><p>3. d4</p>Instead of playing the normal Nc3 or Nf3, white looks to add pressure to the center of the board with d4 and open up more lanes for white’s remaining pieces to get involved into the attack. Black has two responses. Black taking on e4 with his knight is definitely a worse move. White can play dxe5 and then start to attack the knight on e4. The main line for black is to take exd4. White continues with Nf3 with many strong attacking lines. While this gambit isn’t as possible as the King’s Gambit or the Queen’s Gambit I do think this offers many great attacking lines for white and if black is not careful can find themselves in some tricky situations. As the case with most Bishop openings, black always has to fear the bishop taking on f7 forcing the king to recapture and lose the ability to castle.\n' +
    'Make sure you check out the video below to learn more about all the variations.',
    moves:['rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR']
})
strat1.save(function (err,strat_db) {
    if(!err) console.log('added '+strat_db)
})
var strat2=new Strat({
    name:'King’s Gambit',
    description:'The King’s Gambit is one of the oldest openings in chess and for good reason. The possibilities the opening presents have intrigued the greatest chess minds for years including greats such as Spassky, Tal, and Fischer. White, on the second move challenges black’s center and begins an attack at the black kingside.Black can accept or decline the gambit. Most players choose to accept the gambit and try to counterattack the now semi-exposed king side of white. If accepted white should focus their attention on the f7 square which is now a big weakness for black. After 2 exf4 white has two good options. The first option is to immediately start the attack with 3. Bc4, putting immediate pressure on the f7 square. The second option is 3. Nf3 which defends against 3 Qh4+ and also starts to develop an attack on the king side.The good thing about the King’s Gambit is it is very unpredictable. If your opponent is not very familiar with how to defend they can find themselves in big trouble early.',
    moves:[ "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR", "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR", "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR", "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR", "rnbqkb1r/pppp1ppp/5n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR" ]
})
strat2.save(function (err,strat_db) {
    if(!err) console.log('added '+strat_db)
})

Strat.find({},function (err,stratArr) {
    for(var i=0;i<stratArr.length;i++)
        console.log(stratArr[i])
})