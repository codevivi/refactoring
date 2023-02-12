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
  var new_grand = [];
  let i = 0;
  while (i < list.length) {
    new_grand.push(list[i++] * 3);
  }
  return new_grand;
}

function f_a_c_t_o_r_y(skaiciu_grandinele = [], double = 1) {
  let fac = null;

  if (double == 1) {
    fac = fac1;
  } else if (double == 2) {
    fac = fac2;
  } else if (double === 3) {
    fac = fac3;
  } else {
    // FIX:
    // not sure how, but there has to be a way
    // to call a single EXTERNAL FUCNTION with
    // any "double" value, so that we would not
    // need to call infinite amount of else-if's
  }

  // DO NOT EDIT THIS LINE
  return fac(skaiciu_grandinele);
}

const factory = f_a_c_t_o_r_y;

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
