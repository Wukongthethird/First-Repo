function sqInRect(lng, wdth){
    if(lng === wdth){return null}
    let y = Math.max(lng,wdth)
    let x = Math.min(lng,wdth)  //gives the biggest square by finding the minmal side of the rectangle
    let area = lng*wdth         // maybe use it as a checker if my current sum will match
    let retarr = [];
    while(area >0 && y>0 && x>0){
        if(y>x){
          retarr.push(x);
          area -= x**2;
          y = y-x;
        }
        if(x>y){
          retarr.push(y);
          area -= y**2;
          x = x-y;
        }
        if(x==y && area!=0){
          retarr.push(x);
          area -= x**2
        }
      
    }
    return retarr
  } 
