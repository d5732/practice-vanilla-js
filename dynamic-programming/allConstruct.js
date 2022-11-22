function allConstruct(target, elements) {
    if (target === "") return [[]];
    const all = [];

    for (const element of elements) {
        if (target.indexOf(element) === 0) {
            const remainder = target.slice(element.length);
            const remainderWays = allConstruct(remainder, elements);
            console.log(remainderWays);
            const targetWays = remainderWays.map((x) => [element, ...x]);
            all.push(...targetWays);
        }
    }

    return all;
}

console.log(allConstruct("abcdef", ["ab", "cd", "ef", "abc", "def"]));
// allConstruct("abcdef", ["ab", "cd", "ef", "abc", "def"]);
