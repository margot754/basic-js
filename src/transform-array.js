const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
let result =[];

if (!Array.isArray(arr)) {
  throw new Error ("'arr' parameter must be an instance of the Array!");
}

if (arr.length === 0) {
  return arr;
}
  arr.forEach((curr, index) => {
    if(curr == '--double-next' && index + 1 < arr.length-1){
      result.push(arr[index+1])
    }
    if(curr == '--double-prev' && index - 1 > 0){
      result.push(arr[index-1])
    }
    if(curr == '--discard-prev' && index-1 > 0){
      result.pop()
    }
    if(curr == '--discard-next' && index+1 < arr.length-1){
     a = arr.indexOf('--discard-next') + 1
     arr.splice(a, 1)
    }
    result.push(arr[index])
  });
  return result.filter(item => item !== '--double-next' && item !== '--double-prev' 
  && item !== '--discard-prev' && item !== '--discard-next' );
  }
  


module.exports = {
  transform
};
