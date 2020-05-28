function triangle(n) {
	// n = number[n-1] + n
	let tri = 0;
	let triArr = [0, 1, 3, 6, 10, 15]
	if(triArr[n]){
		return triArr[n]
	} else {
		if(triArr[n-1]){
			tri = triArr[n - 1] + n
            triArr.push(tri)
            return tri
		} else {
             tri = triangle(n - 1) + n
             triArr.push(tri)
             return tri
		}
	}
}
console.log(triangle(5))
console.log(triangle(6))
console.log(triangle(736))