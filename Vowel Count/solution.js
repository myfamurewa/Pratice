function vowelCount(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count += 1
        }
    }
    return count
}

test1 = "aeiouAEIOU"
test2 = 'The quick brown fox jumped over the lazy dog.'
test3 = '-bcd-fgh-jklmn-pqrst-vwxyz-BCD-FGH-JKLMN-PQRST-VWXYZ'

console.log(vowelCount(test1))