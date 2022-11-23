function allConstruct(target, elements) {
    if (target === "") return [[]];
    const result = [];

    for (const elem of elements) {
        if (target.indexOf(elem) === 0) {
            const remainder = target.slice(elem.length);
            const remainderWays = allConstruct(remainder, elements);
            const targetWays = remainderWays.map((combo) => [elem, ...combo]);
            result.push(...targetWays);
        }
    }

    return result;
}

// console.log(allConstruct("abcdef", ["ab", "cd", "ef", "abc", "def"]));

// time: O(n**m)
// space: O(m)
//
// m: target.length
// n: elements.length

function tabAllConstruct(target, elements) {
    const dp = new Array(target.length + 1).fill().map(() => []);
    dp[0] = [[]];

    console.log(dp);
    for (let i = 0; i < target.length; i++) {
        for (const elem of elements) {
            if (target.slice(i, i + elem.length) === elem) {
                const _new = dp[i].map((curr) => [...curr, elem]);
                dp[i + elem.length].push(..._new);
            }
        }
    }
    return dp[target.length];
}

console.log(tabAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
