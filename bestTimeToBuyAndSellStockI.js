// first pass solution
var maxProfit = function (prices) {
  let bestprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    let potentialSales = prices.slice(i + 1);
    if (Math.max(...potentialSales) - prices[i] > bestprofit) {
      bestprofit = Math.max(...potentialSales) - prices[i];
    }
  }
  return bestprofit;
};
test1 = [7, 1, 5, 3, 6, 4];
test2 = [7, 6, 4, 3, 1];

console.log(maxProfit(test1));
console.log(maxProfit(test2));

var maxProfitV2 = function (prices) {
  let max = 0
  let min = Infinity
  for(let i = 0; i < prices.length; i++){
      if(prices[i] < min) {
          min = prices[i]
      } else {
          max = Math.max(max, prices[i] - min)
      }
  }
  return max
};
