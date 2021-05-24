/*[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)*/

function findOutlier(integers){
    let evenArr = []
    let oddArr = []
    for(let n of integers){
        if(n%2 ===0) {evenArr.push(n)}
        if(Math.abs(n%2) ===1) {oddArr.push(n)}
    }
    return evenArr.length ===1? evenArr[0]: oddArr[0]
  }

let a =   
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))