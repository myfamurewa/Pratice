function findUnsortedSubarray(N: number[]): number {
    let len = N.length - 1, left = -1, right = -1,
       max = N[0], min = N[len]
   for (let i = 1; i <= len; i++) {
       let a = N[i], b = N[len-i]
       a < max ? right = i : max = a
       b > min ? left = i : min = b
   }
   return Math.max(0, left + right - len + 1)
};