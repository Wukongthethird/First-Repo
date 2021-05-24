function tribonacci(signature,n){
    let sigSum = signature.reduce((a,b) => a+b,0)
    for (i=3; i<n; i++){
        signature.push(sigSum)
        sigSum += (signature[i-2] + signature[i-1])
    }
    return signature.slice(0,n)
  }

let sig = [1,1,1];
console.log(tribonacci(sig,10))
