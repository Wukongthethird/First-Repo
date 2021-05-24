function digPow(n, p){
    let nArr = n.toString().split("")
    let amount =0 ;
    for(let j of nArr){
        amount+= Math.pow(Number(j),p)
        p++ 
    }
    return (amount/n)%1 ==0? (amount/n): -1;
  }

console.log(digPow(695,2))