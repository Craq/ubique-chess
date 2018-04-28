var board = ChessBoard('board', {
    draggable: false,
    moveSpeed: 'slow',
    snapbackSpeed: 500,
    snapSpeed: 100,
    position: 'start'
});
var board2 = ChessBoard('board2', {draggable: false,
    moveSpeed: 'slow',
    snapbackSpeed: 500,
    snapSpeed: 100,
    position: 'start'
});
var positions=['rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR','rnbqkb1r/pppp1ppp/5n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR'];
var boards=[board,board2];
var position=false;
board.position('rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR');
board2.position('rnbqkb1r/pppp1ppp/5n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR');
$(document).ready(function(){
    setInterval(function () {
        if(position) {
            boards.forEach(function (v) {
                v.position('start')
            });
        }
        else for(var i=0;i<boards.length;i++) boards[i].position(positions[i]);
        position=!position;
    },1000);
});