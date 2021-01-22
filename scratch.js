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