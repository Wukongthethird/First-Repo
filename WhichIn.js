function inArray(array1,array2){
    let retArr = []
    for(let n of array1){
        for(let y of array2){
            if(y.includes(n)){retArr.push(n)}
        }
    }
    return array1.filter((val) => retArr.indexOf(val)!=-1).sort()
}
let a1 = ["live", "strong","arp"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let a3 = ["tarp", "mice", "bull"]

console.log(inArray(a1,a2))


