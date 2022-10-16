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

  if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const newArr = arr.slice();
  const conditions = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']

  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] === conditions[0] && newArr[i + 2] === conditions[1] || 
      newArr[i] === conditions[0] && newArr[i + 2] === conditions[3]) {
      newArr.splice(i, 3)
    }
    
    if (newArr[i] === conditions[2] && newArr[i + 2] === conditions[3]) {
      newArr.splice(i, 3,newArr[i + 1], newArr[i + 1], newArr[i + 1])
    }

    if(newArr[i] === conditions[0]) {
      i === newArr.length - 1 ? newArr.splice(i, 1) : newArr.splice(i, 2)
    }

    if((newArr[i] === conditions[1])) {
      i === 0 ? newArr.splice(i, 1) : newArr.splice(i-1, 2)
    }

    if(newArr[i] === conditions[2]) {
      i === newArr.length - 1 ? newArr.splice(i, 1) : newArr.splice(i, 1, newArr[i + 1])
    } 
    
    if((newArr[i] === conditions[3])) {
      i === 0 ? newArr.splice(i, 1) : newArr.splice(i, 1, i-1)
    }

    if (newArr[i] === conditions[0] && newArr[i + 2] === conditions[1] || newArr[i] === conditions[1] && newArr[i + 2] === conditions[3]) {
      newArr.splice(i, 3)
    }


  }

return newArr;
}

module.exports = {
  transform
};
 