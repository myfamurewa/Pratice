function equalizeArr (arr) {
    arr = arr.sort((a, b) => a - b);
    let last = 0, count = 1, curr = 1;
    for (let i of arr) {
        if (i === last) curr++;
        else curr = 1;
        if (curr > count) count = curr;
        last = i;
    }
    return arr.length - count;
}