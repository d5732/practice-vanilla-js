function bestSum(target, nums, memo = {}) {
    if (target in memo) return memo[target];
    if (target < 0) return null;
    if (target === 0) return [];
    nums.sort((a, b) => b - a);

    let shortest = null;

    for (const num of nums) {
        const remainder = target - num;
        let _result = bestSum(remainder, nums, memo);
        if (_result) {
            _result = [..._result, num];
            if (shortest === null || shortest.length > _result.length) {
                shortest = _result;
            }
        }
    }
    memo[target] = shortest;
    return shortest;
}

console.log(bestSum(100, [1, 2, 5, 25]));
