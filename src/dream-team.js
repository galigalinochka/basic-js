const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arr) {
  if(Array.isArray(arr)) {

    let newArr = arr.filter(item => typeof item === 'string');
    let result = newArr.map(i => i.trim()[0].toUpperCase());

    return result.sort().join('');
  }
   else return false
}

module.exports = {
  createDreamTeam
};
