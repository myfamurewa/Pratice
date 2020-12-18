function sqInRect(lng: number, wdth: number): number[] {
    if (lng === wdth){
        return []
    }
    let result = []
    while(wdth !== lng){
        if(wdth > lng){
            wdth -= lng
            result.push(lng)
        } else if (wdth > lng) {
            lng -= wdth
            result.push(wdth)
        }
        result.push(wdth)
    } 
    return result
}

// function sqInRect(lng, wdth){
//     //your code here
//     let maxValue = 0
//     let squarearr = []
//     if(lng === wdth){
//       return null
//     } else {
//       let area = lng * wdth
//       lng > wdth ?  area -= wdth**2, squarearr.push(wdth) : area -= lng**2,  squarearr.push(lng)
//       lng > wdth ? area -= (lng - wdth)**2, squarearr.push(lng - wdth) : area -= (wdth - lng)**2, squarearr.push(wdth - lng)
//       for (let i = 1; i < Math.sqrt(area); i++){
//         if(Math.pow(i, 2) > maxValue){
//           maxValue = i
//         }
//       }
      
//     }
//     return squarearr
//   }