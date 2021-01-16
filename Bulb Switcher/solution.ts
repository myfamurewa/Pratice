// function bulbSwitch(n: number): number {
//     if(n < 2){
//         return n
//     }
//     let lights = new Array(n+1)
//     lights.fill(1)
//     for(let i = 1; i < lights.length; i += 2){
//         lights[i] = 0
//     }
//     for(let i = 2; i < lights.length; i += 3){
//         if(lights[i] === 0){
//             lights[i] = 1
//         } else {
//             lights[i] = 0
//         }
//     }
//     return lights.filter(lightbulb => lightbulb === 1).length
// };

console.log(bulbSwitch(4))
console.log(bulbSwitch(3))
function bulbSwitchMath(n: number): number {
    // return parseInt(Math.sqrt(n));
    return Math.floor(Math.sqrt(n))
}