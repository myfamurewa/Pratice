function howManyGames(p, d, m, s) {
    let games = 0
    while(s >= p){
        games++
        s -= p
        p = Math.max(p-d, m)
    }
    return games
}

console.log(howManyGames(20, 3, 6, 80))