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