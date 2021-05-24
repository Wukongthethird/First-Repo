function firstNonRepeatingLetter(s) {
    if(s == false) {return s}
    let wS = s.toLowerCase().split("");
    let sCount = {};
    for(let n of wS ){
        if(sCount.hasOwnProperty(n)){
            sCount[n] += 1;
        }else{
            sCount[n] =1;
        }
    }
    
    let idxCheck;
    for(let n in sCount){
        if (sCount[n] === 1 && typeof idxCheck === "undefined") {idxCheck = n}
    }
    let checker =  idxCheck === "undefined" ? '': s[wS.indexOf(idxCheck)] ;
    return typeof checker === 'undefined'? "": checker
}

console.log(firstNonRepeatingLetter('aaaaa'))