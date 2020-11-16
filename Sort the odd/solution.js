function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }

  function sortArray(array) {
    // Return a sorted array.
    length = array.length
    if(length <= 1){
      return array
    } else {
      let indices = []
      array.filter((value, index) => value % 2 && indices.push(index))
      .sort((a, b) => a - b)
      .forEach((value, index) => array[indices[index]] = value)
      return array
    }
  }