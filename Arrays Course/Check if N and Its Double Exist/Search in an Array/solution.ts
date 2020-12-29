function checkIfExist(arr: number[]): boolean {
    let newSet = new Set()
    for(let i=0;i<arr.length;i++){
        if(newSet.has(arr[i]/2) || newSet.has(arr[i]*2)){
            return true
        }else{
            newSet.add(arr[i])
        }
    }
      return false
}