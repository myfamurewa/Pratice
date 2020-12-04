function kthFactor(n: number, k: number): number {
    function isPrime(n: number): boolean {
        if ( n === 2){
            return true;
        }

        if(n<2 || n%2 === 0){
            return false;
          }
        
          for(let i =3; i <= n-1; i++, i++){
              if(n%i === 0){
                  return false
              }
          }
        return true
    }

    var factors = (num: number): number[] => {
        let fac = [], i = 1, ind = 0;
        
        while (i <= Math.floor(Math.sqrt(num))) {
          if (num%i === 0) {
            fac.splice(ind,0,i);
            if (i != num/i) {
              fac.splice(-ind,0,num/i);
            }
            ind++;
          }
          i++;
        }
        
        let temp = fac[fac.length - 1];
        fac[fac.length - 1] = fac[0];
        fac[0] = temp;
        
        return fac;
        };
    

    if(isPrime(n) && k > 2){
        return -1
    } else if (isPrime(n) && k <= 2){
        return k === 1? 1 : n
    } else {
        let facArr = factors(n)
        return facArr[k - 1]? facArr[k - 1] : -1
    }
};