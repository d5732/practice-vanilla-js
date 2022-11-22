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

console.log(howSum(10, [2, 3, 5]));
