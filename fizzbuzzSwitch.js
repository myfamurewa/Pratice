function fizzbuzz(num){
    for( let i = 0; i <= num; i++){
        switch(true){
            case (i % 5 === 0 && i % 3 === 0):
                console.log("fizzbuzz")
                break;
            case (i % 3 === 0):
                console.log("fizz")
                break;
            case (i % 5 === 0):
                console.log("buzz")
                break;
            default:
                console.log(i)
                break;
        }
    }
}

console.log(fizzbuzz(100))

function fizzBuzz(){
    for ( let i = 1; i <= 100; i++){
        let output = ""

        switch(i){

            case ( i % 5 === 0 && i % 3 === 0):
                output += "Fizzbuzz"
                break;
            

            case (i % 3 === 0):
                output += "Fizz"
                break;
            
            case (i % 5 === 0):
                output += "Buzz"
                break;
            default:
                output = i;
                break

        }
        console.log(i, output)
    }
}
console.log(fizzBuzz())

