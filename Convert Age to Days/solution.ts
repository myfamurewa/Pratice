function calcAge(age: number): number {
    return age * 365
}

console.log(calcAge(54))

function calcAgeAdvanced(birthdate: string | number): string {
    if(typeof birthdate === "string"){
        birthdate = Date.parse(birthdate)
    }
    let now = Date.now()
    let diffTime = Math.abs(now - birthdate)
    let diffYears = Math.floor(diffTime/ (1000 * 60 * 60 * 24 * 365))
    let diffDays = diffYears > 1? Math.floor((diffTime - diffYears * 1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24)) : Math.floor(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0? `${diffYears} years and ${diffDays} days`: "it's the same day"
}

function calcAgeAtSpecificDate(birthdate: string | number, specificDate: string | number): string {
    if(typeof birthdate === "string"){
        birthdate = Date.parse(birthdate)
    }
    if(typeof specificDate === "string"){
        specificDate = Date.parse(specificDate)
    }
    let diffTime = Math.abs(specificDate - birthdate)
    let diffYears = Math.floor(diffTime/ (1000 * 60 * 60 * 24 * 365))
    let diffDays = diffYears > 1? Math.floor((diffTime - diffYears * 1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24)) : Math.floor(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0? `${diffYears} years and ${diffDays} days`: "it's the same day"

}

console.log(calcAgeAdvanced("7/12/2020"))
console.log(calcAgeAdvanced("12/28/2020"))
console.log(calcAgeAdvanced("12/25/2020"))
console.log(calcAgeAdvanced("05/08/1996"))
console.log(calcAgeAdvanced(0))