function changeEnough(change: number[], amountDue: number): boolean {
    function changify (change: number[]): number[] {
        let coinValue = []
        for(let i = 0 ; i < change.length; i++){
            switch(i) {
                case 0:
                    coinValue.push(change[i]*25)
                    break;
                case 1:
                    coinValue.push(change[i]*10)
                    break;
                case 2:
                    coinValue.push(change[i]*5)
                    break;
                case 3:
                    coinValue.push(change[i])
                    break;
                default:
                    console.log(i)
                    break;

            }
        }
        return coinValue
    }
    let totalChange = changify(change).reduce((acc, cv) => {
    return  acc + cv
    }, 0) / 100
    return totalChange >= amountDue ? true : false 
}

let testarr = [2, 100, 0, 0]
let testval = 14.11
let testarr2 =  [ 10, 0, 0, 50 ] 
let testval2 = 13.85

console.log(changeEnough(testarr, testval))
console.log(changeEnough(testarr2, testval2))