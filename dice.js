function doubleDiceRoll() {
  let die1 = Math.floor(Math.random() * Math.floor(7));
  let die2 = Math.floor(Math.random() * Math.floor(7));
  return [die1, die2];
}

const d20 = () => Math.floor(Math.random() * 21 + 1);
console.log(d20());
console.log(doubleDiceRoll());

function betterd6(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(betterd6(1, 6));

