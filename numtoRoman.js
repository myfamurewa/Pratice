class RomanNumerals {
    constructor() {
        this.conversion = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
    }
    toRoman(numeral) {
       let total = 0;
       let counter = 1;
       let numberarr = numeral.split("")
       for(let i = 0; i < numberarr.length; i++){
        if(i === 1){
            total += numberarr[i]
            count++
        }
        if(i > 1 && numberarr[i] === numberarr[i - 1] ){
            total += numberarr[i]
            count++
        }
       }
    
        
    }
}