function sumIntervals(intervals){
  final = [];
  intervals.forEach(e => {
    for (let i = e[0]; i < e[1]; i++){
      final.push(i)
    }
  });
  final = [...new Set(final)];
  return final.length
}