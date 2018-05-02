
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
    $('.sbm-button').click(function () {
        var $node='<div class="popup"' +
            '    <div class="submit-form">' +
            '        <span class="close">&times</span>' +
            '        <div class="submission">' +
            '            <span class="subm-text">Strat name:</span><input class="sbm-input name" text="text" name="stratName"><br>' +
            '            <span class="subm-text">Description:</span><input class="sbm-input desc" text="text" name="description"><br>' +
            '            <span class="subm-text">Moves in FEN:</span><input class="sbm-input fen" text="text" name="fen"><br>' +
            '            <span class="smt">Submit</span>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        $('body').append($node);
        $('.close').click(function () {
            $('.popup').remove();
        });
        $('.smt').click(function () {
            //var $input=$('.sbm-input');
            //console.log($input);
            var name=$('.sbm-input.name').val();
            var description=$('.sbm-input.desc').val();
            var moves=$('.sbm-input.fen').val().split(',');
            var data={
                name:name,
                description:description,
                moves:moves
            }
            $.ajax({
               url:'/strats/addstrat',
               type:'POST',
               contentType:'application/json',
                data:JSON.stringify(data),
                success:function (data) {
                   if(data.result=='+')
                    console.log(data);
                },
                fail:function () {
                    console.log('submit strat failed');
                }
            });
            $('.popup').remove();
        })
    });
    var currentMove=0;
    setInterval(function () {
        for(var i = 0;i<boards.length;i++){
            //console.log(moves[i].length)
            // if(moves[i].length>currentMove) {
                var move=currentMove%moves[i].length;
                console.log(move);
                boards[i].position(moves[i][move])
               // console.log(moves[i])
            //console.log('cur move:'+currentMove)
        };
        currentMove++;

    },1000);
    getStrats()
});