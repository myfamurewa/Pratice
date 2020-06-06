function fullRomanConverter(input) {
    return typeof(input) === "string" ? arabicNumeralize(input) : romanNumeralize(input)
    
    function romanNumeralize(n) {
        let number = n;
        const rome = {
      // key: value
          M:  1000,
          CM:  900,
          D:   500,
          CD:  400,
          C:   100,
          XC:   90,
          L:    50,
          XL:   40,
          X:    10,
          IX:    9,
          V:     5,
          IV:    4,
          I:     1,
        };
        let returnString = '',
            key,
            count = 1;
        for (key in rome) {
          let value = rome[key];
          while (number >= value) {
            console.log(`Step #${count}`);
            console.log(`while (${number} >= ${value})`);
            console.log(`${returnString === '' ? '""' : returnString} += ${key} ---> ${returnString + key}`);
            returnString += key;
            console.log(`${number} -= ${value} ---> ${number - value}\n`);
            number -= value;
            count++;
          }
        }
    return returnString
}

    function arabicNumeralize(roman) {
        var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
        var numbers = roman.split('');
        var sum = 0, i;
      
        for(i = 0; i < numbers.length; i++)
        {
          if(data[numbers[i]] < data[numbers[i+1]])
          {
            sum += data[numbers[i+1]] - data[numbers[i]];
            i++;
          }
          else
          {
            sum += data[numbers[i]];
          }
        }
        
        return sum;

    }

}
console.log(fullRomanConverter("XVII"))
console.log(fullRomanConverter(1776))
console.log(fullRomanConverter("CVII"))