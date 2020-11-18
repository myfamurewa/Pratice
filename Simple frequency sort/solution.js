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

  function solveV2(arr) {
    let cache = {}
    const counter = (n, arr) => {
        if(cache[n]){
            return cache[n]
        }
        let count = 0
    for(let index in arr){
        if(arr[index] === n){
            count ++
        }
    }
    cache[n] = count
    return count
    }
    arr.sort((a, b) => {
        if(counter(a, arr) < counter(b, arr)){
            return 1
        }
        if (counter(a, arr) > counter(b, arr)){
            return -1
        }
        if (counter(a, arr) === counter(b, arr)){
            return a - b
        }
    })
    return arr
}