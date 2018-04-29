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
var boards=[board,board2];
var moves1 = ['rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR','rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR','rnbqkb1r/pppp1ppp/5n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR'];
var moves2 = ['rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR','rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR'];
var moves = [moves1,moves2];
var onMove = [0,0];
$(document).ready(function(){
    setInterval(function () {
        for(var i = 0;i<boards.length;i++){
            boards[i].position(moves[i][onMove[i]]);
            onMove[i] +=1;
            if(onMove[i]-1===moves[i].length){
                console.log(moves[i][onMove[i]]);
                boards[i].position('start');
                onMove[i] = 0;
            };
        };
    },1000);
});