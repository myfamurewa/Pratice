var bitwiseComplement = function(N) {
    let nbinary = N.toString(2)
    console.log(nbinary)
    let complement = ""
    for(let i = 0; i < nbinary.length; i++){
        if(nbinary[i] === "1"){
            complement += 0
        } else {
            complement += 1
        }
    }
    return parseInt(complement, 2)
}

console.log(bitwiseComplement(7))
console.log(bitwiseComplement(10))


var bitwiseComplementv2 = function(num) {
    var count = 0;
    var tmp = 0;
    var tmp2 = num;
    while(tmp2 > 0){
        tmp2 = tmp2 >> 1;
        tmp |= 1 << count;
        count++;
    }
    
    return num ^ tmp;
}

console.log(bitwiseComplementv2(7))
console.log(bitwiseComplementv2(10))