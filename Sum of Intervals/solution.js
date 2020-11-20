function sumIntervals(intervals){
  final = [];
  intervals.forEach(e => {
    for (let i = e[0]; i < e[1]; i++){
      final.push(i)
    }
  });
  console.log(final)
  final = [...new Set(final)];
  return final.length
}

console.log(sumIntervals( [
  [1,2],
  [6, 10],
  [11, 15]
] ))