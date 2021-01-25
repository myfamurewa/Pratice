function isRepdigit(num: number): boolean {
    if(num >= 0){
		let numstring = num + ""
		let numSet = new Set()
		for(let i = 0; i < numstring.length; i++){
			numSet.add(numstring[i])
		}
	return	numSet.size === 1
	} else {
		return false
	}
}