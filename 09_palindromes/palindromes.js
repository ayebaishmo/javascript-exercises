const palindromes = function (str) {
 var convertString = str.toLowerCase().replace(/[^a-z]/g, "");
 var reverseString = convertString.split('').reverse().join('')
 if(convertString === reverseString) {
  return true;
 } else {
  return false; 
 }
};

// Do not edit below this line
module.exports = palindromes;
