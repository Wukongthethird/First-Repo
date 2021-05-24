let deck = [1,2,3,4,4,3,2,1];
let cut = (deck.length)/2
var deckCutter = function(nums, n){
  let retArr = [];
  let dOne = nums.slice(0,n);
  let dTwo = nums.slice(n , nums.length );
  for (let i =0; i<dOne.length; i++){
    retArr.push(dOne[i]);
    retArr.push(dTwo[i]);   
  }return retArr
}

console.log(deckCutter(deck, cut))