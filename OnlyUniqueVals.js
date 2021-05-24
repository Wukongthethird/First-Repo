let str1 = "xyab"
let str2 = "xzca"

function solve(a,b){
    let aArr = a.split("")
    let bArr = b.split("")
    let uniqueArr = []
    for( let n of aArr){
      if(bArr.includes(n) === false){
        uniqueArr.push(n)
      }
}   for( let m of bArr){
      if(aArr.includes(m) === false){
        uniqueArr.push(m)
}}  return uniqueArr.join("");
}

console.log(solve("xyab","xzca"))