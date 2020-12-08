/**
 Do not return anything, modify board in-place instead.
 */
function check_group(row: number, col: number, board: string[][]): void {
    let oQueue = []
    let checked_spots = new Set([row, col])
    
}
function solve(board: string[][]): void {
    let checked_spots = new Set()
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[row].length; col++){
            if(board[row][col] === "O" && checked_spots[row , col]){
                check_group(row, col, board)
            }
        }
    }
};