function solve(arr){
    //..
    console.log(arr)
    let count = {}
    let sorted = []
    for(let i = 0; i < arr.length; i++){
      if(count[arr[i]]){
        count[arr[i]] += 1
      } else {
        count[arr[i]] = 1
      }
    }
    for(let key in count){
      let i = 0
      while( i < count[key]) {
        sorted.push(key)
        i++
      }
    }
    return sorted
  }