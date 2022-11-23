function canSum(target, nums, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;

    for (const num of nums) {
        const remainder = target - num;
        if (canSum(remainder, nums, memo)) return true;
    }
    memo[target] = false;
    return false;
}

// console.log(canSum(2, [1]));
// console.log(canSum(7, [2, 3, 7, 5]));
// console.log(canSum(1000, [22, 33, 7, 5]));

function tabCanSum(target, nums) {
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < target; i++) {
        if (dp[i] === true) {
            for (const num of nums) {
                if (dp[i + num] === false) dp[i + num] = true;
            }
        }
    }
    console.log(dp);

    return dp[target];
}

console.log(tabCanSum(7, [5]));
// console.log(canSum(1000, [22, 33, 7, 5]));
