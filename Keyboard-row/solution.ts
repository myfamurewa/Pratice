function findWords(words: string[]): string[] {
    return words.filter(word =>{
         let presentInTopRow = word.split('').every(c=>"qwertyuiop".indexOf(c.toLowerCase())>-1);
         let presentInTMidRow = word.split('').every(c=>"asdfghjkl".indexOf(c.toLowerCase())>-1);
         let presentInTBottomRow = word.split('').every(c=>"zxcvbnm".indexOf(c.toLowerCase())>-1);
         return presentInTopRow||presentInTMidRow||presentInTBottomRow;
     });   
 };