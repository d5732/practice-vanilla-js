function howSum(target, nums, memo = {}) {
    if (target in memo) memo[target];
    if (target < 0) return null;
    if (target === 0) return [];

    for (const num of nums) {
        const remainder = target - num;
        const result = howSum(remainder, nums);
        if (result) {
            memo[remainder] = [...result, num];
            return memo[remainder];
        }
    }
    memo[target] = null;
    return null;
}

// console.log(howSum(10, [2, 3, 5]));

function tabHowSum(target, nums) {
    const dp = [];
    dp[target] = null;
    dp.fill(null);
    dp[0] = [];

    nums.sort((a, b) => b - a);
    console.log(nums);
    for (let i = 0; i < target; i++) {
        if (dp[i]) {
            for (const num of nums) {
                dp[i + num] = [...dp[i], num];
            }
        }
    }
    console.log(dp);

    return dp[target];
}
console.log(tabHowSum(10, [2, 3, 5]));

// n: numbers.length
// m: target
// time: O(m**2 * n)
// space: O(m**2)
