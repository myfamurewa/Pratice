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
    function test(i){
        if(i % 5 === 0 && i % 3 === 0){
            return 1
        } else if (i % 3 === 0) {
            return 2
        } else if (i % 5 === 0){
            return 3
        } else {
            return -1
        }
    }
    for ( let i = 1; i <= 100; i++){
        let output = ""

        switch(test(i)){

            case 1:
                output += " Fizzbuzz,"
                break;
            

            case 2:
                output += " Fizz,"
                break;
            
            case 3:
                output += " Buzz,"
                break;
            default:
                output = ` ${i},`;
                break

        }
        console.log(i, output)
    }
}
console.log(fizzBuzz())

