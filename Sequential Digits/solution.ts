function sequentialDigits(low: number, high: number): number[] {
    let digits = '123456789'
   let lowLength = low.toString().length;
   let highLength = high.toString().length;
   let result = [];
   
   for(let i= lowLength; i<=highLength; i++){
       for(let j=0; j<10-i;j++){
           let num = Number(digits.substr(j,i)) 
           if(num>=low && num<=high){
               result.push(num)
           }
       }
   }
   return result;

};

function sequentialDigitsDumb(low: number, high: number): number[]{
    let allSeqNumsArr = [
        12,23,34,45,56,67,78,89,
        123,234,345,456,567,678,789,
        1234,2345,3456,4567,5678,6789,
        12345,23456,34567,45678,56789,
        123456,234567,345678,456789,
        1234567,2345678,3456789,
        12345678,23456789,
        123456789
    ];
    
    return allSeqNumsArr.filter(num => num >= low && num <= high);
};