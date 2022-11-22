function gridTraveler(m, n, memo = {}) {
    if (m === 0 || n === 0) return 0;
    if (n === 1 || m === 1) return 1;
    if (m > n) [m, n] = [n, m];
    if ([m, n] in memo) return memo[[m, n]];
    memo[[m, n]] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[[m, n]];
}

console.log(gridTraveler(333, 155));
