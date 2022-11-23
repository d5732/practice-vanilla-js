function countConstruct(target, elements, memo = {}) {
    if (target in memo) return memo[target];
    if (target === "") return 1;
    let count = 0;
    for (const element of elements) {
        if (target.indexOf(element) === 0) {
            const remainder = target.slice(element.length);
            const _count = countConstruct(remainder, elements, memo);
            count += _count;
        }
    }
    memo[target] = count;
    return count;
}

// console.log(countConstruct("abcdef", ["ab", "cd", "ef", "abc", "def"]));

// n: elements[].length
// m: string.length

// time: O(n**m * m)
// space: O(m**2)

function tabCountConstruct(target, elements) {
    const dp = [];
    dp[target.length] = 0;
    dp.fill(0);
    dp[0] = 1; //seed

    for (let i = 0; i < target.length; i++) {
        if (dp[i]) {
            for (const elem of elements) {
                if (target.slice(i, i + elem.length) === elem) {
                    dp[i + elem.length]++;
                }
            }
        }
    }

    return dp[target.length];
}

console.log(tabCountConstruct("abcdef", ["ab", "cd", "ef", "abc", "def"]));
