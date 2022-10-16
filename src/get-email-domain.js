const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (!email.includes('@')) {
    throw new Error('Not implemented');
  }
  
    let arr = email.split('');
     let res = [];
     if (arr.includes('@')) {
       for (let i = 0; i < arr.length; i++) {
         if (arr[i] === '@') {
           console.log(arr.indexOf(arr[i+1]))
          res =  arr.splice(arr.lastIndexOf('@'));
          res.shift();
         }
         }
       }
     return res.join('');
}


module.exports = {
  getEmailDomain
};
