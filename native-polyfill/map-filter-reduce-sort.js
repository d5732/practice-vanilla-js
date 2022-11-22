Array.prototype.myMap = function (callback) {
    let newArray = [];
    for (x of this) {
        newArray.push(callback(x));
    }
    return newArray;
};

Array.prototype.myFilter = function (callback) {
    let newArray = [];

    //iterate conditionally
    for (x of this) {
        //cond
        if (callback(x)) {
            newArray.push(x);
        }
    }
    return newArray;
};

Array.prototype.myReduce = function (callback) {
    let accumulator = this[0];
    for (x of this.slice(1)) {
        accumulator = callback(accumulator, x);
    }
    return accumulator;
};

function quickSort(array, compareFn) {
    if (array.length <= 1) return array;
    //features of quicksort: pivot, subarray left, subarray right
    //
    //return conditonally [?recursive(left), pivot, ?recursive(right)];
    const pivot = array[0];
    const left = [];
    const right = [];
    // iterate: push items to left or right based on compareFn
    for (let i = array.length - 1; i > 0; i--) {
        let x = array[i];
        if (compareFn(x, pivot) < 0) {
            left.push(x);
        } else {
            right.push(x);
        }
    }

    if (left.length && right.length) {
        return [
            ...quickSort(left, compareFn),
            pivot,
            ...quickSort(right, compareFn),
        ];
    } else if (left.length) {
        return [...quickSort(left, compareFn), pivot];
    } /*if (right.length)*/ else {
        return [pivot, ...quickSort(right, compareFn)];
    }
}

function defaultCompare(a, b) {
    return a.toString().localeCompare(b.toString());
}

Array.prototype.mySort = function (compareFn) {
    if (compareFn === undefined) {
        compareFn = defaultCompare;
    }
    const result = quickSort(this, compareFn);
    //[].sort() mutates original array, let's do that then
    for (let i = 0; i < result.length; i++) {
        this[i] = result[i];
    }
    return result;
};

let array = [
    9,
    8,
    2,
    "dog",
    3,
    22,
    832,
    111,
    23,
    "cat",
    "cow",
    13,
    116,
    177,
    195,
    203,
    208,
    211,
    222,
    232,
    265,
    290,
    304,
    305,
    432,
    452,
    463,
    465,
    482,
    528,
    572,
    647,
    653,
    661,
    694,
    741,
    765,
    811,
    818,
    821,
    922,
    990,
    995,
];
let array2 = [...array];
console.log(
    "mySort:",
    array.mySort((a, b) => a - b)
);
console.log(
    "sort:",
    array2.sort((a, b) => a - b)
);
console.log("array:", array);
console.log("array2:", array2);
