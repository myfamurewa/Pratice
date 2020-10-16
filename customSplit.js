function customSplit(domain, character){
    let container = []
    current = ""
    for(let i = 0; i < domain.length; i++){
        if(domain[i] !== `${character}`){
            current += domain[i]
        } else {
            container.push(current)
            current = ""
            continue
        }
    }
    container.push(current)
    return container
}

console.log(customSplit("www.google.com", "."))
console.log(customSplit("www,bing,com", ","))
console.log(customSplit("www,bing,com1letter", 1))
