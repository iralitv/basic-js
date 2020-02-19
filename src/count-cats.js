module.exports = function countCats(matrix) {
  let catCount = 0;
  matrix.map(array => {
    array.filter(item => item === '^^' && catCount++)
  });
  return catCount;
};
