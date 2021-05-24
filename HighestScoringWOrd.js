function high(x){
  let master ='abcdefghijklmnopqrstuvwxyz';
  let xArr = x.split(" ");
  let xSplitArr =[];
  let xPoints =[];
  for(let i=0; i<xArr.length;i++){
      xSplitArr[i] = xArr[i].split("")
  }
  for(let n of xSplitArr){
    let count =0;
    for(let i=0; i<n.length; i++){
        count += master.indexOf(n[i])+1
    }
    xPoints.push(count)
  }
  let idx = xPoints.indexOf(Math.max(...xPoints))
  return xArr[idx]
}   

console.log(high('what time are we climbing up the volcano'))