function sortArray(array) {
    let wArray = array
    let oddArr= [];
    let oddIndArr = [];
    for (let i =0; i<wArray.length; i++){
        if(Math.abs(wArray[i]%2) == 1){
            oddArr.push(wArray[i])
            oddIndArr.push(i)
        }
    }
    oddArr.sort((a,b) => a-b)
    for(let i = 0; i<oddIndArr.length; i++){
        wArray[oddIndArr[i]] = oddArr[i]
    }
    return wArray
  }

console.log(sortArray([5, 3, 1, 8, 0]))