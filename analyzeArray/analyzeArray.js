function analyzeArray (arr) {
  function average(arr) { return arr.reduce((a, b) => a + b, 0) / arr.length }
  function min(arr) { return Math.min(...arr) }
  function max(arr) { return Math.max(...arr) }
  function length(arr) { return arr.length }

  let obj = {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: length(arr)
  }
  return obj;
}
//  return object with average, min, max, and length.
module.exports = analyzeArray;
