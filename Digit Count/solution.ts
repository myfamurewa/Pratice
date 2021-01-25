function count(n: number): number{
    if (n < 0){
		n *= -1
	}
	return n.toString().length
}