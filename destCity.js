var destCity = function(paths) {
    let inBound = [];
    let outBound= [];
    for(let n of paths){
      inBound.push(n[0]);
      outBound.push(n[1]);
    }
    let dest 
    for(let n of outBound){
      if(inBound.includes(n)==false){dest=n}
    }
    return dest
  };