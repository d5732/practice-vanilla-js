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

// console.log(bestSum(100, [1, 2, 5, 25]));

function tabBestSum(target, nums) {
    const dp = [];
    dp[target] = null;
    dp.fill(null);
    dp[0] = [];

    for (let i = 0; i < target; i++) {
        if (dp[i]) {
            for (const num of nums) {
                let contender = [num, ...dp[i]];
                if (!dp[i + num] || contender.length < dp[i + num].length) {
                    dp[i + num] = contender;
                }
            }
        }
    }
    return dp[target];
}

console.log(tabBestSum(71, [2, 4, 5]));
console.log(tabBestSum(100, [25, 2, 4, 5]));

// n: numbers.length
// m: target
// time: O(m * m * n)
// space: O(m * m)
