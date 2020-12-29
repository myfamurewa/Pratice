function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false
    }
    let sSorted = s.split("").sort().join("")
    let tSorted = t.split("").sort().join("")
    return tSorted === sSorted
};

const toHashCounts = (s) => {
    return [...s].reduce((acc, c) => {
        acc[c] = acc[c] ? acc[c] + 1 : 1;
        return acc;
    }, {})
}
function isAnagramImproved(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    
    const sItems = toHashCounts(s);
    const tItems = toHashCounts(t);
    
    for(let [c, count] of Object.entries(sItems)) {
        if (count !== tItems[c]) {
            return false;
        }
    }
    
    return true;
}