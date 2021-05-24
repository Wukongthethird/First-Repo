function humanReadable(sec) {
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = Math.floor(sec - (hours * 3600) - (minutes * 60));
  
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours + ":" + minutes + ":" + seconds
  }

console.log(humanReadable(5))