function wait3(x){
    return new Promise(r => {
        setTimeout(function() {
          return  r(x)
        }, 3000)
    })
}

async function doSomething() {
    console.log(1)
    console.log(await wait3(2))
    console.log(await wait3(3))
}

console.log(doSomething())


let maxed = [23, 24, 25, 26, 17]
let mode = Math.max(...maxed)
console.log(mode)