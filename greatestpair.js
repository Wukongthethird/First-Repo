let arr = [1,1,1,1];
var numIdenticalPairs = function(nums){
  let count = 0;  
  for (let i = 0; i<nums.length; i++){
    let numAtIdx = nums[i];
    for (let j = i+1; j<nums.length; j++){
      if(numAtIdx == nums[j]){
          count++
      }
    }
  }return count
};

console.log(numIdenticalPairs(arr));