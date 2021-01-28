function getSmallestString(n: number, k: number): string {
    const alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let sum = 0
    let s = ''
    
    for (let i = n - 1; i >= 0; i--) {
        let target = (k - i) - sum
        if (target > 26) target = 26
        s = alphabet[target] + s
        sum += target
    }

    return s
};

