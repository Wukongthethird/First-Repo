/* matrix [1,2,3]
          [4,5,6]
          [7,8,9]*/

let mat = [[1,2,3],[4,5,6],[7,8,9]];

var diagonalSum = function(mat) {
  let squareLength = mat[0].length;
  let diagonalOne = 0;
  let diagonalTwo =0;
  let total = 0
  for (let i =0; i<squareLength; i++){
    diagonalOne += mat[i][i];
    diagonalTwo += mat[i][mat.length-i-1];
  }
  if (squareLength%2 ==0 ){
    total =  diagonalOne + diagonalTwo;
  }else{
    total =  diagonalOne + diagonalTwo - mat[(mat.length/2)-.5][(mat.length/2)-.5]
  }
  return total
};

console.log(diagonalSum(mat))


