//n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
//We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

function nbDig(n, d) {
  let dReg = new RegExp(d, 'g');
  let squareArr =[];
  for( let i =0; i <= n ; i++){
    squareArr.push(i**2);
  }
  let result = squareArr.join("").match(dReg);
  return result.length
}

console.log(nbDig(10,1));