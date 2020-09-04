const partitionLabels = (s) => {
    if(!s){
        return null
    }
    let outputarr = []
    let last_indices = new Array(26)
    for (let i = 0; i < s.length; i++){
        last_indices[s.charAt(i) - 'a'] = i
    }
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++){
        end = Math.max(end, last_indices[s.charAt(i)-'a'])
        if (i == end){
            outputarr.push(end-start+1)
        }
    }
    return outputarr
}

test1 = "ababcbacadefegdehijhklij"
console.log(partitionLabels(test1))