

var uniqueInOrder=function(iterable){

    if(typeof iterable ==="string"){
        iterable = iterable.split("");
    }
    let retArr = [];
    let prev ;
    for(let i = 0; i<iterable.length; i++){
        if(prev !== iterable[i]){
            retArr.push(iterable[i]);
            prev = iterable[i];
        }
    }
    return retArr;
  }

console.log(uniqueInOrder(""))