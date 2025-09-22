const { cp } = require('fs');

const assert = require('assert').strict;

function nextPairs(value) {

    let paresCercanos = [0,0];
    if(value%2 == 0){
        paresCercanos[0]= value - 2
        paresCercanos[1]= value + 2
    }
    else{
        paresCercanos[0]= value - 1
        paresCercanos[1]= value + 1
    }

    return paresCercanos
}


console.log(nextPairs(3));
console.log(nextPairs(4));

/* assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6]) */