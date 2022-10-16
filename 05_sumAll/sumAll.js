const sumAll = function(x, y) {
 if (!Number.isInteger(x) || !Number.isInteger(y)) {
  return('ERROR');
 }
 if (x < 0 || y < 0) {
  return('ERROR');
 }
 if (x > y) {
  const temp = x;
  x = y;
  y = temp;
 }
 const range = [];
 let sum = 0;
 for(var i = x; i<=y; i++) {
  range.push(i);
 }
 for(var p = 0; p<range.length; p++) {
  sum =sum + range[p];
 }
 return(sum);
};
sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
