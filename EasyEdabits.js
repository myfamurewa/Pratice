function divisible(num) {
	return num % 100 ==0 ? true : false
}

function firstVowel(str) {
	if(str.match(/[aeiou]/gi)){
		return str.indexOf(str.match(/[aeiou]/gi)[0])
	} else {
		return -1
	}
}

// regex quantifier practice
const REGEXP = /\.{3,}/g

//num to arr and arr to num
function toArray(num) {
	let numArr = (num + "").split("")
	let final = numArr.map(number => Number(number))
	return final
}

function toNumber(arr) {
	return Number(arr.join(""))
}
//repetition with built in js function
function repetition(txt, n) {
	return txt.repeat(n)
}

//learned how to get the count of an element ina multidimensional array
function countOnes(matrix) {
	let flattened = matrix.flat()
	console.log(flattened)
	let ones = flattened.filter(n => n === 1)
	return ones.length
}

function leftDigit(num) {
	let numbers = /[0-9]/g;
	
	return Number(num.match(numbers)[0]) !== 0 ? Number(num.match(numbers)[0]) : Number(num.match(numbers)[1])
}