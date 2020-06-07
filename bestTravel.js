// Best Travel from codewars
const chooseBestSum = (t, k , ls) => {
    let distanceTraveled = 0;
    let townsVisited = 0;
    let maxDistance = 0;

    for(let i = 0; i < ls.length; i ++){
        distanceTraveled += ls[i]
        if(distanceTraveled > maxDistance && townsVisited < k && maxDistance < t){
            maxDistance = distanceTraveled
        }
        if(townsVisited == 3 || distanceTraveled > t){
            distanceTraveled = ls[i]
            townsVisited = 1
        }
    }
    return maxDistance
}

let firstTowns = [91, 74, 73, 85, 73, 81, 87];
let secondTowns = [50, 55, 56, 57, 58];
let thirdTowns = [50, 55, 57, 58 , 60, 62];

console.log(chooseBestSum(163, 3, firstTowns))


function subArrays(arr){
    let kLengths = []; 
    if (arr.length === 1) return [arr];
    else {
      subarr = subArrays(arr.slice(1));
      return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
    }
  }
  
  // subArrays([1,2,3,4,5])
  
  // helper to find all subarrays of length N within an array of arrays
  function filterByLength(arr, n) {
    const result = arr.filter(a => a.length == n);
    return result;
  }
  
  function chooseBestSum(maxDist, towns, arr) {
      let subsets = filterByLength(subArrays(arr), towns); 
      let trip = []; 
      let myDist = 0; 
      console.log(subsets)
      for(var a of subsets){
        let sum = a.reduce((a,b)=>a+b);
        console.log(sum)
        if (sum <= maxDist && sum >= myDist) {
          myDist = sum; 
        }
      }
    return myDist === 0 ? null : myDist;  
  }