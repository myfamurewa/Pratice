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