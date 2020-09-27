var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries === 0) {
        return 0
    }
    let time = duration;
    for(let i = 0 ; i < timeSeries.length; i++){
        time += Math.min(timeSeries[i] - timeSeries[i - 1], duration)
    }
    return time
}