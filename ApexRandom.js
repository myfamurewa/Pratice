let legends = ["Bloodhound", "Gibraltar", "Lifeline", "Wraith", "Caustic", "Mirage", "Octane", "Wattson", "Revenant", "Loba", "Rampart", "Horizon", "Fuze", "Ashe"]

function randomLegend(){
    let rand = Math.floor(Math.random() * legends.length)
    return legends[rand]
}

console.log(randomLegend(), randomLegend(), randomLegend())