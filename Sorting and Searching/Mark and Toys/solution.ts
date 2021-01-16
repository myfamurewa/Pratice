function maximumToys(prices: number[], k: number){
    let sortedPrices = prices.sort((a, b) => a - b)
    let toyCount = 0
    for(let i = 0; i < sortedPrices.length; i ++){
        if(k - sortedPrices[i] >= 0){
            toyCount++
            k -= sortedPrices[i]
        } else {
            break
        }
    }
    return toyCount
}