let compliments = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
}

function dnaCompliment(dna: string): string {
    let complimentaryStrand = ""
    for(let i = dna.length - 1; i <= 0; i--){
        complimentaryStrand += compliments[dna[i]]
    }
    return complimentaryStrand
}