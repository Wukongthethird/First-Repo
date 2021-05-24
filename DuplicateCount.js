let testStr = "aabbcde"

let duplicateCount = function (text){
    let textArr =  text.toLowerCase().split("").sort();
    let result = {};
    let retArr = []
        for( let i =0 ; i<textArr.length; i++){
        if(result[textArr[i]]){
            result[textArr[i]] += 1
        }else{
            result[textArr[i]] = 1
        }
      } 
      for(props in result){
        if(result[props] >=2){
          retArr.push(props)
      }
   }if(retArr.length == 0){
       return 0
   }else{
       return (retArr.length)
   }  
}

console.log(duplicateCounts(testStr));