let arr = [1,1,1,1,1]

var runningSum = function(nums) {
    let retArr = [];
    let runSum = 0;
    for ( let n of nums){
      runSum += n;
      retArr.push(runSum);
    }return retArr;
};

console.log(runningSum(arr))