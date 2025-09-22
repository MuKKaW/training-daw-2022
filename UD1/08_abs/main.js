const assert = require('assert').strict;

function abs(value) {
    let resultAbs = Math.abs(value)
    let result = Math.sqrt(value*value)

    let result2 = value;
    if(value < 0){
        result2 = result * -1
    }


    return resultAbs;
}

console.log(abs(-4));



/* assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0) */