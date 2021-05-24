function productFib(prod){
    let fibSeq = [0,1]
    let fibProduct = 0
    while (fibProduct < prod ){
      curFibSeq = fibSeq.length
      fibProduct = fibSeq[curFibSeq-1]*fibSeq[curFibSeq-2]
      fibSeq.push(fibSeq[curFibSeq-1]+fibSeq[curFibSeq-2]);
    }
    return [fibSeq[fibSeq.length-3],fibSeq[fibSeq.length-2],fibProduct == prod]
  }

console.log(productFib(4895))