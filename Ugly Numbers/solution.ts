function uglyNumber(num: number): boolean {
    for (var p of [2, 3, 5])
    while (num && num % p == 0)
        num /= p;
    return num == 1;
}