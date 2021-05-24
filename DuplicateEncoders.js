/*function duplicateEncode(word){
    let nWord =  word.toLowerCase().split("");
    let result = {};
    for(let n of nWord){
        if(result.hasOwnProperty(n)){
            result[n] +=1;
        }else{
            result[n] =1;
        }
    }
    for (let i=0; i<nWord.length; i++){
      if( result[nWord[i]]>1){
          nWord[i] = ")"
      }else{
          nWord[i] = "("
      }
    }
    return nWord.join("")
}*/

function duplicateCount(word){
    let wordArr = word.toLowerCase().split("")
    let letterCount = {}
    let count = 0
    for (let n of wordArr){
        if(letterCount.hasOwnProperty(n)){
            letterCount[n] +=1
        }else{
            letterCount[n] = 1
        }
    }
    for(let n in letterCount){
        if(letterCount[n] >1) {count++}
    }
    return count
}



console.log(duplicateCount('aabbcde'))