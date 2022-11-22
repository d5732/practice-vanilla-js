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

console.log(canSum(2, [1]));
console.log(canSum(7, [2, 3, 7, 5]));
console.log(canSum(1000, [22, 33, 7, 5]));
