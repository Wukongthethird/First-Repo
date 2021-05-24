// small  = 2
// Big = 5
// return small amount after using the biggest if needed so use min small
//
function makeChocolates(small, big, goal) {
  // repr
  for (let bigi = big; bigi>=0; bigi-= 1){
    let bigTotal = bigi*5
    for( let smalli = 0; smalli<=small; smalli++){
      let smallTotal = smalli*2
      if( bigTotal+smallTotal == goal){
        return smalli
      }
    }
  }return -1
}

console.log(makeChocolates(4,1,13))