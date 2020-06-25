const viralAdvertising = (n) => {
    //on the first day we advertise to 5 people and math.floor(5/2) people share it with three of their friends
    // the next day math.floor(5/2) * 3 people receive the advert
    // each day, floor(recipients/ 2) willl share the ad with 3 of their friends the next day
    // assuming people don't receive the add twice how many people will have seen the add after n days
    let recipients = 5
    let cumulative = 0 
    let shared = 0
    let liked = 0
    for(let i = 0; i < n; i++){
        shared = recipients
        liked = Math.floor(recipients/2)
        cumulative = cumulative + Math.floor(recipients/2)
        recipients = Math.floor(recipients/2) * 3
    }
    return shared
} // I need to reed instuctions more closely
console.log(viralAdvertising(5))