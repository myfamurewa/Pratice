// this method is probalby what comes to mind first but it isn't very efficient
// it runs in O(N^2) time

function searchMatrix(matrix, target) {
  let rows = matrix.length
  for (let i = 0; i < rows; i++) {
      let cols = matrix[i]
      for (let j = 0; j < cols.length; i++) {
          if (cols[j] === target) {
              return true;
            }
        }
    }
    return false;
}

function binarySearch(arr, target, start, end){
    if( start > end){
        return false
    }
    let middle = Math.floor((start + end)/2)
    if(arr[middle]===target){
        return true
    } else if ( arr[middle] > target){
        return binarySearch(arr, target, start, middle-1)
    } else {
        return binarySearch(arr, target, middle+1, end)
    }
}
// this solution runs in O(n log(b)) time and is possible because we know that the matrix we're given is a sorted one

function searchMatrixV2(matrix, target) {
    let rows = matrix.length
    for (let i = 0; i < rows; i++) {
        if (target > matrix[i][matrix[i].length - 1]){
            continue
        }
        if(binarySearch(matrix[i], target, 0, matrix[i].length -1) === true){
            return true
        } else {
            continue
        }
      }
      return false;
  }
  

console.log(
    searchMatrixV2(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 50],
    ],
    3
  )
);
