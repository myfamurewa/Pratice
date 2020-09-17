function minimumDistances(a){
    let distances = []
    for(let i = 0; i < a.length; i++){
        if(a[i] === a.lastIndexOf(a[i])){
            continue
        } else {
            let count = 0
            for(let j = i + 1; j < a.length + 1; j++){
                count++
                if(a[j] === a[i]){
                    distances.push(count)
                    console.log(count)
                }
            }

        }
    }

    if(distances.length > 0){
        return Math.min.apply(null, distances)
    } else {
        return - 1
    }
}
console.log(minimumDistances([1,2,3,4,1]))
console.log(minimumDistances([7,1,3,4,1,7]))