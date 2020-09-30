function evenAllTheWay(arr) {
    let evenArr = []
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 === 0 && index % 2 === 0){
            evenArr.push(arr[index])
        }
        
    }
    return evenArr
}