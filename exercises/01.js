/**
 *
 * @param {*} verticalSideLength
 * @param {*} horizontal_walls_Size
 * @returns
 */
function rectangularShapeArea(verticalSideLength, horizontal_walls_Size) {
  function numb(nb) {
    if (typeof nb === "string") {
      return [true, 'Negali buti "string"'];
    }
    if (typeof nb == "object") {
      return [true, 'Negali buti "object"'];
    }
    if (typeof nb == "boolean") {
      return [true, 'Negali buti "boolean"'];
    }
    if (typeof nb === "function") {
      return [true, 'Negali buti "function"'];
    }
    return [false, "OK"];
  }
  if (typeof verticalSideLength === "string") {
    return [true, 'Negali buti "string"'];
  }
  if (typeof verticalSideLength == "object") {
    return [true, 'Negali buti "object"'];
  }
  if (typeof verticalSideLength === "boolean") {
    return [true, 'Negali buti "boolean"'];
  }
  if (typeof verticalSideLength == "function") {
    return [true, 'Negali buti "function"'];
  }
  if (typeof verticalSideLength == "undefined") {
    return [true, 'Negali buti "undefined"'];
  }
  if (verticalSideLength === null) {
    return [true, 'Negali buti "null"'];
  }
  if (verticalSideLength < 0) {
    return [true, "Negali buti neigiamas"];
  }
  if (horizontal_walls_Size === null) {
    return [true, 'Negali buti "null"'];
  }

  if (numb(horizontal_walls_Size)[0] === true) {
    if (numb(horizontal_walls_Size)[1] == 'Negali buti "string"' || numb(horizontal_walls_Size)[1] === 'Negali buti "object"' || numb(horizontal_walls_Size)[1] == 'Negali buti "boolean"' || numb(horizontal_walls_Size)[1] == 'Negali buti "function"') {
      return numb(horizontal_walls_Size);
    }
  }
  if (typeof horizontal_walls_Size === "undefined") {
    return [true, 'Negali buti "undefined"'];
  }

  if (horizontal_walls_Size < 0) {
    return [true, "Negali buti neigiamas"];
  }

  var biggerSide = Math.max(verticalSideLength, horizontal_walls_Size);
  var smallerSide = Math.min(verticalSideLength, horizontal_walls_Size);

  const squarePart = smallerSide * smallerSide;
  const otherPart = (biggerSide - smallerSide) * smallerSide;
  const TOTAL_SIZE = squarePart + otherPart;
  return [false, TOTAL_SIZE];
}

console.log(rectangularShapeArea(-10, 10), "-->", [true, "Negali buti neigiamas"]);
console.log(rectangularShapeArea(10, -10), "-->", [true, "Negali buti neigiamas"]);
console.log(rectangularShapeArea(10, 10), "-->", [false, 100]);
console.log(rectangularShapeArea(5, 4), "-->", [false, 20]);
console.log(rectangularShapeArea(2, 8), "-->", [false, 16]);
console.log(rectangularShapeArea(10, "10"), "-->", [true, `Negali buti "string"`]);
console.log(rectangularShapeArea("10", 10), "-->", [true, `Negali buti "string"`]);
console.log(rectangularShapeArea(10, "false"), "-->", [true, `Negali buti "string"`]);
console.log(rectangularShapeArea("false", 10), "-->", [true, `Negali buti "string"`]);
console.log(rectangularShapeArea(10, { a: 10 }), "-->", [true, `Negali buti "object"`]);
console.log(rectangularShapeArea({ a: 10 }, 10), "-->", [true, `Negali buti "object"`]);
console.log(rectangularShapeArea({}, 10), "-->", [true, `Negali buti "object"`]);
console.log(rectangularShapeArea(10, false), "-->", [true, `Negali buti "boolean"`]);
console.log(rectangularShapeArea(false, 10), "-->", [true, `Negali buti "boolean"`]);
let testFunc = () => {};
console.log(rectangularShapeArea(10, testFunc), "-->", [true, `Negali buti "function"`]);
console.log(rectangularShapeArea(testFunc, 10), "-->", [true, `Negali buti "function"`]);
console.log(rectangularShapeArea(10), "-->", [true, `Negali buti "undefined"`]);
console.log(rectangularShapeArea(undefined, 10), "-->", [true, `Negali buti "undefined"`]);
console.log(rectangularShapeArea(10, null), "-->", [true, `Negali buti "null"`]);
console.log(rectangularShapeArea(null, 10), "-->", [true, `Negali buti "null"`]);
