function gridTraveler(m, n, memo = {}) {
    if (m === 0 || n === 0) return 0;
    if (n === 1 || m === 1) return 1;
    if (m > n) [m, n] = [n, m];
    if ([m, n] in memo) return memo[[m, n]];
    memo[[m, n]] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[[m, n]];
}

// console.log(gridTraveler(333, 155));

function tabGridTraveler(m, n) {
    let dp = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    dp[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (j + 1 <= n) dp[i][j + 1] += dp[i][j];
            if (i + 1 <= m) dp[i + 1][j] += dp[i][j];
        }
    }

    return dp[m][n];
}

console.log(tabGridTraveler(3, 7));
