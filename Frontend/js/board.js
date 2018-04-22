
var init = function() {
    selfplay = false;
    var uci = require('node-uci').Engine;
    var board,
        game = new Chess();
    var onDragStart = function(source, piece, position, orientation) {
        if (game.in_checkmate() === true || game.in_draw() === true ||
            piece.search(/^b/) !== -1) {
            return false;
        }
    };

    var makeRandomMove = function() {
        var engine = new uci('..stockfish');
        var chain = engine.chain();
        chain.init();
        chain.setoption('MultiPV',3);
        chain.position(fen);
        chain.go({depth:15});
        console.log("0",chain.bestmove);
    };

    var onDrop = function(source, target) {
        // see if the move is legal
        var move = game.move({
            from: source,
            to: target,
            promotion: 'q' // NOTE: always promote to a queen for example simplicity
        });

        // illegal move
        if (move === null) return 'snapback';

        // make random legal move for black
        window.setTimeout(makeRandomMove, 250);
    };

// update the board position after the piece snap
// for castling, en passant, pawn promotion
    var onSnapEnd = function() {
        board.position(game.fen());
    };

    var cfg = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd
    };
    board = ChessBoard('board', cfg);
}; // end init()
$(document).ready(init);
