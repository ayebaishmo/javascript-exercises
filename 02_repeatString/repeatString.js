const repeatString = function(string, num) {
 var strArray = "";
 if (num < 0){
   return('ERROR')
  } else {
  for(var i = 1; i<=num; i++) {
   strArray = strArray + string;
  }
 }
 return(strArray);
};

repeatString('hey', -1);
// Do not edit below this line
module.exports = repeatString;
