const greedIsGood = (arr) => {
  function counter(arr) {
    let counts = {};
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts;
  }

  let counts = Object.entries(counter(arr));
  let score = 0;
  for (key in counts) {
    console.log(
      "this is the current key",
      key,
      counts[key],
      counts[key][0],
      counts[key][1]
    );
    let count = counts[key][1];
    if (counts[key][0] === "1") {
      if (count > 3) {
        score = score + 1000 * Math.floor(count / 3);
        count = count % 3;
        score = score + 100 * count;
        count = 0;
        console.log("this is score", score);
      }
    }
    if (counts[key][0] == "5") {
      if (count > 3) {
        score = score + 500 * Math.floor(count / 3);
        count = count % 3;
        score += 50 * count;
        count = 0;
        console.log("this is score", score);
      }
    }
    if (
      counts[key][0] == "2" ||
      counts[key][0] === "3" ||
      counts[key][0] === "4" ||
      counts[key][0] === "6"
    ) {
      if (count > 3) {
        score = score + Number(key) * 100;
        count = 0;
        console.log("this is score", score);
      }
    }
  }
  return score;
};

let roll1 = [2, 3, 4, 6, 2]; // 0
let roll2 = [4, 4, 4, 3, 3]; // 400
let roll3 = [2, 4, 4, 5, 4]; // 450
let roll4 = [1, 1, 1, 5, 5];

// console.log(greedIsGood(roll1))
// console.log(greedIsGood(roll2))
// console.log(greedIsGood(roll3))
console.log(greedIsGood(roll4));
