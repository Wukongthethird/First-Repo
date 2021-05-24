function narcissistic(value) {
    let wVal = value.toString().split("")
    let power = wVal.length
    let count = 0;
    for(let n of wVal){
        count += Number(n)**power
    }
    return count ===value
  }

console.log(narcissistic(153))

let a = ''+153
console.log(typeof a)