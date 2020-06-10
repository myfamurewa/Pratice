function stringInt(str) {
  return Number(str);
}

function sliceSum(arr, n) {
  return arr.slice(0, n).reduce((acc, cv) => {
    return acc + cv;
  }, 0);
}

function mean(arr) {
  return Number(
    (
      arr.reduce((acc, cv) => {
        return acc + cv;
      }, 0) / arr.length
    )
      .toFixed(2)
      .toString()
  );
}

function isAvgWhole(arr) {
  return Number.isInteger(
    arr.reduce((acc, cv) => {
      return acc + cv;
    }, 0) / arr.length
  );
}

function inkLevels(inks) {
	let cyan = inks.cyan
	let magenta = inks.magenta
	let yellow = inks.yellow
	let pages = 0
		if(cyan === 0 || magenta === 0 || yellow === 0){
			return 0
		}
		do{
			cyan--
			magenta--
			yellow--
			pages++
		}while(cyan > 0 && magenta > 0 && yellow > 0)
		return pages
}
