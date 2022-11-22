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

console.log(
    canConstruct(
        "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        ["ab", "cd", "ef"]
    )
);
console.log(
    canConstruct(
        "abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        ["abc", "cd", "ef", "efg"]
    )
);
