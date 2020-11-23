function uniqueMorseRepresentations(words: string[]): number{
    let morseLetters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let transcription = {}
    for(let i in morseLetters){
        transcription[morseLetters[i]] = String.fromCharCode(97 + i)
    }
};