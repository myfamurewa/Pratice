var sortedSquares = function(A) {
    let sortedSquare = A.map(number => number ** 2).sort((a, b) => a - b)
    return sortedSquare
};