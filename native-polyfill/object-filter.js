// Given an object and a filter function,
// write a function that recursively filters the object,
// returning only values which return true when called with
// the filter function (like Array.prototype.filter but for objects).
// filter function format? let's do filterFn(key, value) if need to test keys for some reason

function objectFilter(obj = {}, filterFn) {
    console.log("--objectFilter");
    if (!filterFn) return obj;
    let result = [];
    let entries = Object.entries(obj);
    for (const x of entries) {
        //if (isObject && isNotArray) objectFilter()
        console.log(">>try>>", x);
        if (filterFn(x[0], x[1])) {
            console.log("pushing", x[1]);
            result.push(x[1]);
        }
        if (!Array.isArray(x[1]) && typeof x[1] === "object") {
            console.log(">>re>>", x[1]);
            let tmp = objectFilter(x[1], filterFn);
            if (tmp.length) result = result.concat(tmp);
        }
    }
    return result;
}

const myObj = {
    1: "one",
    2: { 0: "deepZero", 1: "deepOne", 2: { 3: "deeperThree" } },
    3: "",
};

function myFn(key, value) {
    if (key > 0) return true;
}

console.log(objectFilter(myObj, myFn));
