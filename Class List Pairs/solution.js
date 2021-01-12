// 1. create an object that keeps id numbers as keys and stores the classes that student is taking in an array
// 2. loop through the array of classes and update the object accordingly
// 3. compare the classes that each student is taking
// 4. if students share a class pair them together and add the class(es) they are taking together as an array
// 4a. if they don't share a class add the pair with an empty array
// 5. return the object

function studentPairs(classes){
    let classList = {}
    for(let i = 0; i < classes.length; i++){
      if(classList[classes[i][0]]){
        classList[classes[i][0]].push(classes[i][1])
      } else {
        classList[classes[i][0]] = [classes[i][1]]
      }
    }
    let pairsList = {}
    for(let key in classList){
      for(let subKey in classList){
        if (subKey === key){
          continue
        } else {
          pairsList[`${Math.max(Number(key), Number(subKey))} ${Math.min(Number(key), Number(subKey))}`] = classList[key].filter(course => classList[subKey].includes(course))
        }
        
      }
     
    }
    return pairsList
  }
  