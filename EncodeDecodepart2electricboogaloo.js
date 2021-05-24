
let decode = function(encodedWord){
    let retStr = ""
    for( let i = 0; i<encodedWord.length; i++){                                ///match i variable w the index and the digit
      if(isNaN(encodedWord[i]) === false ){
        i += Number(encodedWord[i])
    }else{
        retStr += encodedWord[i];
    }
}return retStr;
}


let word = "3ashl0o0v2r1e!"

console.log(decode(word))


