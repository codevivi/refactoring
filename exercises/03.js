const assert = require("assert");

console.clear();
function fac1(list) {
  return list;
}

function fac2(list) {
  return list.map((skaicius) => {
    return skaicius * 2;
  });
}

function fac3(list) {
  //this is doing same as fac2 with map method
  var new_grand = [];
  let i = 0;
  while (i < list.length) {
    new_grand.push(list[i++] * 3);
  }
  return new_grand;
}

function arrayValuesMultiplier(numbersArray = [], multiplier = 1) {
  let fac = null;

  if (multiplier == 1) {
    fac = fac1;
  } else if (multiplier == 2) {
    fac = fac2;
  } else if (multiplier === 3) {
    fac = fac3;
  } else {
    // return;
    return numbersArray.map((number) => number * multiplier); //just temp general to stop errors
    // FIX:
    // not sure how, but there has to be a way
    // to call a single EXTERNAL FUCNTION with
    // any "double" value, so that we would not
    // need to call infinite amount of else-if's
    //-- Not sury why to call external when everything can be done there... But ok..
  }

  // DO NOT EDIT THIS LINE
  return fac(numbersArray);
}

const factory = arrayValuesMultiplier;
// ***********************************
// DO NOT EDIT CODE BELOW THIS COMMENT
// ***********************************

assert.deepStrictEqual(factory([1]), [1]);
assert.deepStrictEqual(factory([1], 2), [2]);
assert.deepStrictEqual(factory([2], 2), [4]);
assert.deepStrictEqual(factory([2], 3), [6]);
assert.deepStrictEqual(factory([1, 2, 3], 1), [1, 2, 3]);
assert.deepStrictEqual(factory([1, 2, 3], 2), [2, 4, 6]);
assert.deepStrictEqual(factory([1, 2, 3], 0), [0, 0, 0]);
assert.deepStrictEqual(factory([1, 2, 3], 10), [10, 20, 30]);
