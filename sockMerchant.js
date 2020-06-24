function sockMerchant(arr) {
    console.time("original")
    let pairs = 0
    function counter(arr) {
        let counts = {};
        for (var i = 0; i < arr.length; i++) {
            var num = arr[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
          }
          return counts
    }
    // for(let key in count){
    //     console.log(count[key])
    //     if(Math.floor(count[key]/ 2) > 1){
    //         pairs += Math.floor(count[key]/ 2)
    //         console.log(pairs)
    //     }
    // }
    // return pairs
    let count = Object.values(counter(arr))
    for(let index in count){
        pairs += Math.floor(count[index] / 2)
    }
    console.timeEnd("original")
    return pairs
} // time and space intensive 
 // with this method I create a new array, as well as a new object
 // I also run through loops making the time complexity O(n)^2
 // after cutting down on the number of variables i'm creating the function runs a bit faster

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log("original", sockMerchant(socks))

function sockMerchantV2 (arr) {
    console.time("V2")
    arr.sort()
    let last
    return arr.reduce((acc, cv) => {
        if( cv === last) {
            last = ""
            acc += 1
        } else {
            last = cv
        }
        console.timeEnd("V2")
        return acc
    }, 0)
}
console.log("v2", sockMerchantV2(socks)) 