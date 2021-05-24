
var maximumUnits = function(boxTypes, truckSize) {
    result =0;
    boxTypes.sort((a,b)=>b[1]-a[1])
    for(let i =0; i<boxTypes.length;i++){
        if(boxTypes[i][0]>truckSize){result += truckSize*boxTypes[i][1]; break;}
        else{
            result += boxTypes[i][1]*boxTypes[i][0];
            truckSize -=boxTypes[i][0]
        }
    }
    return result
};
