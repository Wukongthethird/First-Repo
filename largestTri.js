    var largestTriangleArea = function(points) {
        let maxWidth=0;
        let maxLength=0;
        let curWidth=0;
        let curLength=0;
        for(let i=0; i<points.length-1;  i++){
            for(let j=i+1; j<points.length; j++){
                curWidth = Math.abs(points[i][0]-points[j][0])
                curLength = Math.abs(points[i][1]-points[j][1])
                if(curWidth>maxWidth){maxWidth=curWidth}
                if(curLength>maxLength){maxLength=curLength}
            }
        }
        return (maxLength*maxWidth)/2
    };

let a =[[0,0],[0,1],[1,0],[0,2],[2,0]];
console.log(largestTriangleArea(a))