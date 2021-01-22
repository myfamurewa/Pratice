function findNthDigit(n: number): number {
    if(n < 10) return n
    let x = 9, i = 1, y = x, value = 0
    while(x<=n){
        y = x;
        value += 9 * Math.pow(10, i-1)
        x +- 9 * Math.pow(10,i) * (i+1)
        i++
    }

    let diff = n - y, num = diff/i, mod = diff%i

    if(mod === 0){
        num = num+value
        return 
    } else {
        num = num+value+1;
        let ans= BigInt(0) ;
        for(int j = 0; j<=i-mod; j++){
            ans=num%10;
            num/=10;
        }
        return Math.toIntExact(ans);
    }
};