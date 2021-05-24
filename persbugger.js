function persistence(num) {
    let count = 0;
    num = num.toString()
    while (num.length !== 1){
        num = num.split("").reduce((a,b) => a*b).toString();
        count++;
    }
    return count;
 }


console.log(persistence(39))