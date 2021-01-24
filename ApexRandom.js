let legends = ["Bloodhound", "Gibraltar", "Lifeline", "Wraith", "Caustic", "Mirage", "Octane", "Wattson", "Revenant", "Loba", "Rampart", "Horizon", "Fuze"]

function randomLegend(){
    let rand = Math.floor(Math.random() * legends.length)
    return legends[rand]
}

console.log(randomLegend())