function calcAge(age: number): number {
    return age * 365
}

console.log(calcAge(54))

function calcAgeAdvanced(birthdate: string | number): number {
    if(typeof birthdate === "string"){
        birthdate = Date.parse(birthdate)
    }
    let now = Date.now()
}