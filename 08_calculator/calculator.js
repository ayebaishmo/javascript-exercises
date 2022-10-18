const add = function(x, y) {
	const addResult = x + y;
  return addResult;
};

const subtract = function(p, y) {
	const subResult = p - y;
  return subResult;
};

const sum = function(numbers) {
  if(numbers == 0) {
    return(0);
  } else {
    let sumUp = 0
    for(var i = 0; i < numbers.length; i++) {
      sumUp = sumUp + numbers[i];
    }
    return(sumUp);
  }
}

const multiply = function(mult) {
  let Rmult = 1;
  for (let i = 0; i < mult.length; i++) {
    Rmult = Rmult * mult[i];
  }
  return(Rmult)
};

const power = function(k, l) {
  const pResult =	Math.pow(k, l);
  return pResult;
};

const factorial = function(no) {
  if(no === 0 ){
    return(1);
  } else if (no == 1){
    no == 1;
    return(no)
  } else {
    for(var i= no -1; i>=1; i-- ) {
      no = no * i;
    }
    return(no);
  }
};
sum(1, 2, 3, 4);
factorial(-8);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
