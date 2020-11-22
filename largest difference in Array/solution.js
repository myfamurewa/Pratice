function largestDifference(arr) {
    let diff = 0
    if(arr.indexOf(Math.max(...arr)) > arr.indexOf(Math.min(...arr))){
      let max = Math.max(...arr)
      let min = Math.min(...arr)
      return max - min
    } else {
      let min = Infinity
      let index = 0
      for(let i  = 0; i < arr.length - 1; i++){
          console.log("min", min, "arr[i]", arr[i])
          if (min > arr[i]){
              min = arr[i]
              index = i
          }
          if(min !== Infinity){
            diff = Math.max(diff, arr[i] - min)
          }
      }
      return diff
    }
  }

  test2 = [ 1162, 1094, 880, 585, 1124, 869, 339, 582, 1367, 1222, 1193, 160, 320, 1337, 1284 ]
  console.log(largestDifference(test2))