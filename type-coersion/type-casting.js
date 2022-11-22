const logResult = (_0) => {
    return `
    ${_0 || '""'}
    String(${_0}): ${String(_0)}
    Number(${_0}): ${Number(_0)}
    Object(${_0}): ${Object(_0)}
    Array(${_0}): ${Array(_0)}
    Symbol(${_0}): ${Symbol(_0).toString()}
    BigInt(${_0}): ${BigInt(_0)}
    ${{ _0 }.toString()}`;
};

console.myLog = (_0) => console.log(logResult(_0));

console.myLog("");
