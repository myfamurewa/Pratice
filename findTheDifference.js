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
s1 = "a"
t1 = "aa"
console.log(findTheDifference(s,t))

// function findTheDifferenceV2(s, t){
//     let tSet = new Set(t)
//     let sSet = new Set(s)
//     let intersection = new Set(s.filter(x => tSet.has(x)))
//     return intersection[0]
// }

let findTheDifferenceV3 = function(s, t) {
    let maps=new Map();
    let mapt=new Map();
    for(let i=0;i<t.length;i++){
        if(mapt.has(t.charAt(i))){
            mapt.set(t.charAt(i),mapt.get(t.charAt(i))+1)
            
        }
        else{
            mapt.set(t.charAt(i),1);
        }
    }
    for(let i=0;i<s.length;i++){
        if(maps.has(s.charAt(i))){
            maps.set(s.charAt(i),maps.get(s.charAt(i))+1);
            
        }
        else{
            maps.set(s.charAt(i),1);
        }
    }
    for(let [k,v] of mapt){
        if(v!==maps.get(k)){
            return k;
        }
    }
};
console.log(findTheDifferenceV3(s,t))
console.log(findTheDifferenceV3(s1,t1))