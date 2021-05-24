let arr = [3,9,11,3]
var twoSum = function(nums, target) {
    for( let i = 0; i<nums.length; i++){
        for( let j = 0; j<nums.length; j++){
            if(i !== j){
                let x = nums[i]+ nums[j]
                if( x ===target){
                    return [i,j]
                }
            }

        }
    }
}

console.log(twoSum(arr,6));