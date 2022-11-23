function fib(n, memo = {}) {
    if (n === 1 || n === 2) return 1;
    if (n in memo) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

// console.log(fib(10));

function tabFib(n) {
    let dp = [];
    dp.length = n + 1;
    dp.fill(0);
    dp[1] = 1;
    // for (let i = 2; i <= n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }
    let i = 0;
    while (i < n) {
        dp[i + 1] += dp[i];
        dp[i + 2] += dp[i];
        console.log(dp);
        i++;
    }
    return dp[n];
}
console.log(tabFib(10));
