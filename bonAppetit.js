const bonAppetit = (bill, k, b) => {
    // bill is an array of prices
    // k is an index of the bill array that Anna refused to eat
    // b is the amount of money that Anna  should contribute to the bill if she shares all the dishes
    let annaShare = (bill.filter(price => price !== bill[k]).reduce((acc, cv) => { return acc + cv}, 0))/2
    return  annaShare < b ? b - annaShare : "Bon Appetit"
}

const firstBill = [3, 10, 2, 9]
console.log(bonAppetit(firstBill, 1, 12))

function bonAppetito (bill, k, b ){
    const fairlyCost = (bill.reduce((sum, cost) => sum + cost ,0) - bill[k]) / 2;
    console.log(fairlyCost < b ? b - fairlyCost : "Bon Appetit");
}