function findOdd(A) {
    let result ={};
    for (let n of A){
        if( result.hasOwnProperty(n) === false){
            result[n] = 1
        }else if(result.hasOwnProperty(n)){
            result[n] +=1
        }
    }
    let retValue;
    for (let n in result){
       if(result[n]%2 ===1){
           retValue = parseInt(n)
       }
   }
   return retValue
}

let a =[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

console.log(findOdd(a))


/*for( let i =0 ; i<A.length; i++){
    if(result[textArr[i]]){
        result[textArr[i]] += 1
    }else{
        result[textArr[i]] = 1
    }*/