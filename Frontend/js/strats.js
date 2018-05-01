
var boards=[];
var id=0;
var moves=[];
function getStrats(callback) {
    $.ajax({
        url:'/strats/lol',
        type:'GET',
        success:function(data){
            spawnStrats(data);
        },
        fail:function () {
          callback(new Error('Ajax failed'))
        }
    })
}
function spawnStrats(strats) {
    for(var i=0;i<strats.length;i++){
        var $node='<div class="strat">' + '<div class="strat-title"><i>'+strats[i].name+'</i></div>' + '<div class="description">'+strats[i].description+'</div>' + '<div class="board"><div id="board'+id+'"></div></div></div>'
        $('.strat-holder').append($node);
        boards.push(ChessBoard('board'+id,
            {draggable: false,
                moveSpeed: 'slow',
                snapbackSpeed: 500,
                snapSpeed: 100,
                position: 'start'
            }));
        moves.push(strats[i].moves);
        id++;
    }
    console.log(moves);
}

/*var moves1 = ['rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR','rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR','rnbqkb1r/pppp1ppp/5n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR'];
var moves2 = ['rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR'];
var moves = [moves1,moves2];
var onMove = [0,0];*/
$(document).ready(function(){
    var currentMove=0;
    var moved=false;
    setInterval(function () {
        for(var i = 0;i<boards.length;i++){
            console.log(moves[i].length)
            if(moves[i].length>currentMove) {
                boards[i].position(moves[i][currentMove])
                console.log(moves[i])
                moved=true;
            }
            console.log('cur move:'+currentMove)
        };
        currentMove++;
        if(!moved)
            currentMove=0;
        moved=false;
    },1000);
    getStrats()
});