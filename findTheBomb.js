function findTheBomb(str) {
   let bombSearch = /bomb/gi
  return str.search(bombSearch) === -1? "There is no bomb, relax.":"Duck!!!"
}

let test1 = "That's not a basket it's a bomb"
let test2 = "oil"
findTheBomb(test1)
findTheBomb(test2)