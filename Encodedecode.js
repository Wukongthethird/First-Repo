
let decode = function(encodedWord){
  let str = encodedWord;
  let frStr = str.split("")
  let strings = "a"+str
  let letReg = /\D/
  let numReg = /\d/
  let partialStrings = [];
  for( i = 1; i<strings.length; i++){                                ///match i variable w the index and the digit
    if(letReg.test(strings[i-1]) && numReg.test(strings[i])){
      partialStrings.push(strings.slice(i, i+1+parseInt(strings[i])));
    }
  }
  // filter iddnt work, because it removed all the values of the lettersToRemove array and not a unique one
  let lettersToRemove = (partialStrings.join("").split(""))
  for (let n of lettersToRemove){
    frStr[frStr.indexOf(n)] = " "
  }
  let retStr = frStr.join("")

  return retStr.replace(/ +/g ,"")
} 

let word = "3abhl0o0v2rae!"
console.log(decode(word))


//codewars 5-7 level