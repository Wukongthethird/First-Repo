function pigIt(str){
    let strArr = str.split(" ")
    let wArr = []
    for(let n of strArr){
        wArr.push( n.split("") );
    }
    for( let i=0; i<wArr.length; i++){
      let firstLetter = wArr[i].shift()
      wArr[i].push(firstLetter)
      wArr[i] = wArr[i].join("")
      if( /[a-zA-z0-9]+/g.test(wArr[i])===true){
        wArr[i]+="ay"
      }
    }
    return  wArr.join(" ")
  }

let a  = 'Hello world !'
console.log(pigIt(a))