let rect = [[2,3],[3,7],[4,3],[3,7]]

var countGoodRectangles = function(rectangles) {
    let goodRectCount = 0
    let maxRectLen = 0
    for (let n of rectangles){
      let rectangleLength = Math.min(...n)
      if(maxRectLen < rectangleLength ){
          maxRectLen = rectangleLength
      }
    }
        
    for (let n of rectangles){
        if (n.every(x => x>=maxRectLen)){
          goodRectCount++;
      }
   }return goodRectCount
}

console.log(countGoodRectangles(rect))