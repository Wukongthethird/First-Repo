

function findNb(m) {
    let n =0;
    let volume =0;
    while (volume<m){
        n++;
        volume += n*n*n;
    }
    return volume!=m ? -1:n
}

console.log(findNb(91716553919377))