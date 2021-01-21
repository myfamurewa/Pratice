let legends = ["Bloodhound", "Gibraltar", "Lifeline", "Wraith", "Caustic", "Mirage", "Octane", "Wattson", "Revenant", "Loba", "Rampart", "Horizon"]

function randomLegend(){
    let rand = Math.floor(Math.random() * legends.length - 1)
    return legends[rand]
}

console.log(randomLegend())