function removeNb (n) {
    // n is a positive number
    // given a series of numbers between 1 and n 
    //return two numbers who's product is equal to the sum of all the other numbers added together
    // the answer should be an array with both numbers two times
    // if no answer can be found return an empty array
    //once with the smaller number appearing first and once with the larger number appearing first
    //////////////////////////////////STEPS////////////////////////////////////////////////////////
    //1. caluclate the sum of the range
    // -- figure out how to take out both numbers from the sum
    //2. divide the sum by each number within the range
    //3. if the quotient is contained in the range return those two numbers
    let range = []
    let divisor, quotient;
    for(let i = 1; i <= n; i++){ range.push(i) }
    let rangeSum = range.reduce((acc, cv) => {
     return acc + cv
    }, 0)
    // console.table(range)
    console.log("This is range sum", rangeSum)
    for(let j = 1; j < range.length - 1; j++){
      console.log(`Now checking range ${j}`, range[j], "quotient", ((rangeSum - range[j])/range[j]) )
      if(range.includes((rangeSum - range[j])/range[j])){
        quotient = (rangeSum/range[j])
        divisor = range[j]
        return [[quotient, divisor], [divisor, quotient]]
      }
    }
    return []
    }


function cutNb (n) {
    let range = []
    let divisor, quotient;
    for(let i = 1; i <= n; i++){ range.push(i) }
    let rangeSum = range.reduce((acc, cv) => {
     return acc + cv
    }, 0)


}