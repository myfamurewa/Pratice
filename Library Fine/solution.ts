function dateDiff(startingDate, endingDate) {
    var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
        endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
    }
    var endDate = new Date(endingDate);
    if (startDate > endDate) {
        var swap = startDate;
        startDate = endDate;
        endDate = swap;
    }
    var startYear = startDate.getFullYear();
    var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var yearDiff = endDate.getFullYear() - startYear;
    var monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    var dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
        if (monthDiff > 0) {
            monthDiff--;
        } else {
            yearDiff--;
            monthDiff = 11;
        }
        dayDiff += daysInMonth[startDate.getMonth()];
    }

    return [yearDiff, monthDiff, dayDiff]
}


function libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
    // let expectedDate = new Date(`${d1}-${m1}-${y1}`)
    // let actualDate = new Date(`${d2}-${m2}-${y2}`)
    // if(y1 === y2 && m1 === m2){
    //     if(d2 > d1){
    //         return 0
    //     } else if(d1 > d2){
    //         let diff = d1 - d2
    //         let fine = 15 * diff
    //         return fine
    //     }
    // } else if(y1 === y2 && m1 !== m2){
    //     let [yearDiff, monthDiff, dayDiff] = dateDiff(`${d1}-${m1}-${y1}`, `${d2}-${m2}-${y2}`)

    // }
    if (y1 > y2) return 10000
    if (m1 > m2 && y1 >= y2) return (m1 - m2) * 500
    if (d1 > d2 && m1 >= m2 && y1 >= y2) return (d1 - d2) * 15
    else return 0
}
