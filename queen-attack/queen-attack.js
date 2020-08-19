const LocationContains = {
  none: "_",
  white: "W",
  black: "B",
};
class ChessBoard {
    constructor() {
        this.BOARD_SIZE = 8;
        this.board = this.buildBoard();
    }
    inRank([x1], [x2]) {
        return x1 == x2;
    }
    inFile([, y1], [, y2]) {
        return y1 == y2;
    }
    inDiagonal([x1, y1], [x2, y2]) {
        return Math.abs(x1 - x2) == Math.abs(y1 - y2);
    }
    placePiece([x, y], piece) {
        this.board[x][y] = piece;
    }
    isOccupied([x, y]) {
        return this.board[x][y] != LocationContains.none;
    }
    toString() {
        let out = "";
        for (let x = 0; x < this.BOARD_SIZE; x++) {
            for (let y = 0; y < this.BOARD_SIZE; y++) {
                out += this.board[x][y] + ((y != this.BOARD_SIZE - 1) ? " " : "");
            }
            out += "\n";
        }
        return out;
    }
    buildBoard() {
        return Array.from(Array(this.BOARD_SIZE), () => Array.from(Array(this.BOARD_SIZE), () => LocationContains.none));
    }
}
export class QueenAttack {
    constructor(input) {
        this.white = (typeof input != "undefined" && input.hasOwnProperty('white'))?input.white:[0, 3];
        this.black = (typeof input != "undefined" && input.hasOwnProperty('black'))?input.black:[7, 3];
        this.board = new ChessBoard();
        this.placeQueen("white", this.white);
        this.placeQueen("black", this.black);
    }
    canAttack() {
        return this.board.inRank(this.white, this.black)
            || this.board.inFile(this.white, this.black)
            || this.board.inDiagonal(this.white, this.black);
    }
    placeQueen(player, loc) {
        if (this.board.isOccupied(loc)) {
            throw new Error("Queens cannot share the same space");
        }
        this[player] = loc;
        this.board.placePiece(loc, LocationContains[player]);
    }
    toString() {
        return this.board.toString();
    }
}
export default QueenAttack;
