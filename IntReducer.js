/*function solve(n, k) {
    let nArr =  n.toString().split("");
    if(n===0 ) {return 0}
    if(nArr.length<k) { return 0}
    let stackVal = nArr.length - k
    let stack = []
    for(let j=0; j<nArr.length; j++){
        while(k>0 && stack[stack.length-1] > nArr[j]){
           stack.pop()
           k--
       } 
       stack.push(nArr[j]) 
    }
    let retStack = stack.slice(0,stackVal)
    return retStack.join("")
};*/
function solve(n, k) {
    let nArr =n.toString().split("");
    if(n===0){return 0}
    if(nArr.length<k){return 0}
    let stackVal = nArr.length-k;
    let stack = [];
    for(let i =0; i<nArr.length; i++){
        while(k>0 && stack[stack.length-1]>nArr[i]){
            stack.pop()
            k--
        }
        stack.push(nArr[i])

    }
    console.log(stack)
    let retStack = stack.slice(0,stackVal);
    return retStack.join("")
 };


 console.log(solve(1284569,2))