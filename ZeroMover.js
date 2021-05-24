var moveZeros = function (arr) {
    for(let i=arr.length; i>=0; i--){
        if(arr[i] === 0){
            let x = arr.splice(i,1);
            arr.push(0);
        }
    }
    return arr
}

let a = [false,1,0,1,2,0,1,3,"a"];

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))