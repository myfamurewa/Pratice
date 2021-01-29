let fibnums = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

for(let i = 11; i < 30; i++){
    fibnums[i] = fibnums[i - 1] + fibnums[i - 2] 
}

function fibPreCalc(n: number): number {
    return fibnums[n]
}

function fib(n: number): number {
    if(fibnums[n]){
        return fibnums[n]
    } else {
        let newfib = fibnums[n - 1] && fibnums[n - 2]? fib[n - 1] + fib[n - 2] : fib(n - 1) + fib(n - 2)
        fibnums.push(newfib)
        return newfib
    }
}

var fibII = function(n,hash={ 0:0,1:1 }) {

    if(hash[n] !== undefined) return hash[n];

    else
        hash[n] = fib(n-1, hash) + fib(n-2, hash)
    
    return hash[n];
};