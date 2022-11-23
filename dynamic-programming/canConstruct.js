function canConstruct(target, elements, memo = {}) {
    if (target in memo) return memo[target];
    if (target === "") return true;

    console.log(target);
    for (const element of elements) {
        if (target.indexOf(element) === 0) {
            //recursion
            const remainder = target.slice(element.length);
            if (canConstruct(remainder, elements, memo)) {
                memo[remainder] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

// console.log(
//     canConstruct(
//         "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
//         ["ab", "cd", "ef"]
//     )
// );
// console.log(
//     canConstruct(
//         "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
//         ["abc", "cd", "ef", "efg"]
//     )
// );

function tabCanConstruct(target, elements) {
    const dp = [];
    dp[target.length] = false;
    dp.fill(false);
    dp[0] = true;

    for (let i = 0; i < target.length; i++) {
        for (const elem of elements) {
            if (dp[i] && target.slice(i, i + elem.length) === elem) {
                dp[i + elem.length] = true;
            }
        }
    }

    return dp[target.length];
}

console.log(tabCanConstruct("abcdef", ["ab", "cde", "abc", "f"]));

// n: elements.length
// m: target.length
// time: O(m ** 2 * n)
// space: O(m)
