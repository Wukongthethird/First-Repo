function findEvenIndex(arr){
  let result = -1 ;
  for(let i =1; i<arr.length; i++){
    let left = arr.slice(0,i).reduce((a,b) => a+b,0);
    let right = arr.slice(i+1).reduce((a,b) => a+b,0);
    if(left == right){result = i}
  }return result
}
console.log(findEvenIndex([8,0]))
