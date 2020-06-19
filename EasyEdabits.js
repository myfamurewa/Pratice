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