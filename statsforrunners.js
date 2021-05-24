function stat(strg) {
    if (strg === ""){
        return ""
    }
    let statsArr = strg.replace(/\s+/g, '').split(",");
    
    for( let i = 0; i<statsArr.length; i++){
        statsArr[i] = statsArr[i].split("|")
        for(let j = 0; j<statsArr[i].length; j++){
            statsArr[i][j] = parseInt(statsArr[i][j])            /// you have to call parent to child to loop through all arrays
        }
    }
    let wStatsArr = [...statsArr];
    let result = []
    for (n of wStatsArr){                                      /// you do not have to call the whole chain w/ let n of
        n[0] = n[0]*3600;                                      // converting all time to seconds
        n[1] = n[1]*60;
        result.push(n.reduce((a,b) => a+b));
    
   }
    result.sort((a,b) => a-b); 
  // stat data  
    let rangeSec = (Math.max(...result) -  Math.min(...result));
    let averageSec =  result.reduce((a,b) => a+b)/result.length
   // find median of an unknown arr length that has been sorted

    let medianSec;
    let half = Math.floor(result.length/2);
    if (result.length%2 == 1 ){
      medianSec = result[half];
    }else{
      medianSec = (result[half-1] + result[half])/2
   }
   
    let secArr = [rangeSec,averageSec,medianSec];
    let formattedSecArr = [];
   // converting seconds until hours mins seconds
    let convert = function(sec){
      let hours = Math.floor(sec / 3600); // get hours
      let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
      let seconds = Math.floor(sec - (hours * 3600) - (minutes * 60));
    
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return hours + "|" + minutes + "|" + seconds
   }

   for (let n of secArr){
       formattedSecArr.push(convert(n))
   }
   //"Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"
   let formattedStr = "Range: " + formattedSecArr[0] + " Average: " + formattedSecArr[1] + " Median: " +  formattedSecArr[2] ;
   return formattedStr;
}                                                             


console.log(stat(""))