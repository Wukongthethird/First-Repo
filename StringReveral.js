
// solve("your code rocks") = "skco redo cruoy". 
/*let solve = function(str){
  let wStr = str.split("")
  let spaceArr = [];
  for(let i = 0; i<wStr.length;  i++){
      if (wStr[i] == " "){
        spaceArr.push(i)
    }
 } let newStr = wStr.join("").replace(/ /g,"").split("").reverse()
   for( let m of spaceArr){
       newStr.splice(m,0, " ")
   }
  return newStr.join("")
}

function solves(str)
{
  var s = "";
  for (let i = str.length - 1; i >= 0; i--)
  {
    if (str[i] != " ")        s += str[i];
    if (str[s.length] == " ") s += str[s.length];
  }
  return s;
}*/
var reverseOnlyLetters = function(S) {
    let ind = [];
    let indBank =[];
    for(let i=0; i<S.length; i++){
      if(/[A-Za-z]/.test(S[i]) ===false){
        ind.push(i)
        indBank.push(S[i])
      }
    }
    if(S.length == indBank.length){return S}
    let newS =  S.replace(/[^a-z]/gi,"").replace(/\^/g,"").split("").reverse()
    for(let i=0; i< ind.length; i++){
      newS.splice(ind[i],0,indBank[i])
    }
    return newS.join("")
};

console.log(reverseOnlyLetters("Czyr^"))