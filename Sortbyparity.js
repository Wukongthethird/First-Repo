let arr = [3,1,2,4]

var sortArrayByParity = function(A) {
  let evenArr = [];
  let oddArr = [];
  for (let n of A){
    if(n%2 ===0){
        evenArr.push(n);
    }else{
        oddArr.push(n);
    }
  }return evenArr.concat(oddArr);
};

console.log(sortArrayByParity(arr));

    