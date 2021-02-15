function whatDayWillItBe(day: string, daysfromNow: number): string {
    let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
    let daystoGo = daysfromNow % 7
    let expectedDay = days.indexOf(day) + daystoGo
    if(days[expectedDay] !== undefined){
        return days[expectedDay]
    } else {
        return days[expectedDay - 7]
    }
}