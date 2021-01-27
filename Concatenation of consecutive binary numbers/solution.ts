function concatenatedBinary(n: number): number {
    let binaryString = ""
    for(let i = 1; i <= n; i++){
        binaryString += i.toString(2)
    }
    let final = parseInt(binaryString, 2)
    return final % (10**9 + 7)
};


var concatenatedBinaryII = function(n) {
    let num = 0;
    
    for(let i = 1; i <= n; i++) {
        //OR num *= (1 << i.toString(2).length)
        num *= (2 ** i.toString(2).length) 
        num += i;
        num %= (10 ** 9 + 7)
    }
    return num;
};

var concatenatedBinaryIII = function(n) {
    let ans = 1, len = 4
    for (let i = 2; i <= n; i++) {
        if (i === len) len <<= 1
        ans = (ans * len + i) % 1000000007
    }
    return ans
};

var result = [0];
var ceil = 2;
var k = 0;
var n = 1;
var mod = Math.pow(10, 9) + 7;

while (n <= 100000) {
    for(; n < ceil && n <= 100000; n++) {
        result[n] = (result[n-1] * ceil + n) % mod;
    }
    k++;
    ceil*=2;
}

/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinaryIV = function(n) {
    return result[n];
};