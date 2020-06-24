function sockMerchant(arr) {
    let pairs = 0
    function counter(arr) {
        let counts = {};
        for (var i = 0; i < arr.length; i++) {
            var num = arr[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
          }
          return counts
    }
    let count = counter(arr)
    console.log(count)
    // for(let key in count){
    //     console.log(count[key])
    //     if(Math.floor(count[key]/ 2) > 1){
    //         pairs += Math.floor(count[key]/ 2)
    //         console.log(pairs)
    //     }
    // }
    // return pairs
    Object.values(count)
    for(let index in count){
        pairs += Math.floor(count[index] / 2)
    }
    return pairs
}

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(socks))