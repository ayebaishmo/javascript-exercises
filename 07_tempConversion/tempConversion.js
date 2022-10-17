const ftoc = function(far) {
  const result = Math.round((far - 32) * (5/9) * 10)  / 10;
  return(result);
};

const ctof = function(cel) {
  const cresult =(cel * 1.8)  + 32;
  return(cresult);
};

ftoc(100);
ctof(0);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
