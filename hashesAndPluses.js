function hashPlusCount(str) {
	let hashes = 0 
	let pluses = 0
	for(let i = 0; i < str.length; i++){
		if(str[i] === "+"){
			 pluses++
			 }
		if(str[i] === "#"){
			hashes++
		}
	}
	return [hashes, pluses]
}

// from edabit