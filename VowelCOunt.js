
function getCount(str) {
    var vowelsCount = 0;
    vowels = ["a","e","i","o","u"]
    for (let n of str){
        if(vowels.includes(n)){
            vowelsCount++
        }
    }
    return vowelsCount;
  } 

console.log(getCount("bukkake"))