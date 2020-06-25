function circularArray (a, k, q) {
    // a = the array to be rotated
    // k = the rotation count
    // queries = an array of integers whose new indices need to be returned
    ///////// How To Rotate An Array ////////
    // 1. move the last index to the first index
    // a.unshift(a[a.length - 1]), a.pop()
    // repeat this process until k = 0
    // do{}while()
    // 2. find the new indices of the moved numbers
      //  a.index(the numbers in question) given that q is an array of integers 
      //loop through q and console.log the value at each index

      do {
          last = a[a.length - 1]
          a.pop()
          a.unshift(last)
          k--
      } while (k > 0)
    for(let index in q){
        console.log(a[q[index]])
    }
}

