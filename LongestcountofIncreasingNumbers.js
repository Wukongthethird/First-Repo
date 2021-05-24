var findLengthOfLCIS = function(nums) {
    if(nums.length ===0){return 0}
    if(nums.length ===1){return 1}
    let count =1;
    let max = 1;
    for(i=1; i<nums.length; i++){
        if(nums[i-1]<nums[i]){
            count++
            max= Math.max(count,max)
        }
        else{
            count = 1
        }
        
        
    }
    return max
};

let a = [1,3,5,4,7]

console.log(findLengthOfLCIS(a))