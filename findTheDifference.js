function findTheDifference(s, t){
    for(let i = 0; i < t.length; i++){
        if(s.includes(t[i])){
            continue
        } else {
            return t[i]
        }
    }
}

s = "abcd"
t = "abcde"
console.log(findTheDifference(s,t))