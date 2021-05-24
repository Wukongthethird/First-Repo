var canThreePartsEqualSum = function(arr) {
    let aThird = arr.reduce((a,b) => a+b,0)/3
    if(aThird%1 !==0){return false}
    let first =0
    let third =0
    firstInd = 0
    ThirdInd = arr.length-1
    for(let i=0; i<arr.length-1;i++){
        first += arr[i]
        if(first === aThird){
            firstInd = i
            break;
        }
    }
    for(let i=arr.length-1; i>=0;i--){
        third += arr[i]
        if(third === aThird){
            ThirdInd = i
            break;
        }
    }
    if(firstInd>= ThirdInd){return false}
    if(arr.slice(firstInd+1,ThirdInd).length ==0){return false}
    let second = arr.slice(firstInd+1,ThirdInd).reduce((a,b)=>a+b,0)
    return first ==second && first == third
}
console.log(canThreePartsEqualSum( [1,-1,1,-1]))

