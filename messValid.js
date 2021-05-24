function isAValidMessage(message){

  if(message ==""){
    return true
  }
  if(/^\d.*\D$/.test(message) === false){
    return false
  }

  // splits all digits including double digits
  let repMessage = message.replace(/\d+/g, " ")
  let arrHold = repMessage.split(" ")
  let valHold = message.match(/\d+/g)
  
  arrHold.shift();

  for(let i = 0; i<valHold.length; i++){
    if(parseInt(valHold[i]) !== arrHold[i].length  ){
      return false
    }
  }
  
  return true
}

let c = "4co3de13hellocodewars"
let b = "1a2bb3ccc4dddd5eeeee"
let a = "3hey5hello2hi"
console.log(isAValidMessage(a))