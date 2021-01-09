function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const dict = new Set(wordList);
    let step = 1;
    let q = [beginWord];
  
    while (q.length) {
      const next = [];
      for (let w of q) {
        if (w === endWord) return step;
  
        for (let i = 0; i < w.length; i++) {
          for (let j = 0; j < 26; j++) {
            const w2 = w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1);  // 97 -> 'a'
  
            if (dict.has(w2)) {
              next.push(w2);
              dict.delete(w2);
            }
          }
        }
      }
      q = next;
      step++;
    }
  
    return 0;
};