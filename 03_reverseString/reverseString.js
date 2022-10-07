const reverseString = function(str) {
 var reversedString = "";
 for(var i = str.length-1; i >= 0; i--) {
  reversedString = reversedString + str[i]
 }
 return(reversedString)
};

// Do not edit below this line
module.exports = reverseString;
