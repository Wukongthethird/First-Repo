let numArr = "2134326780938543"

function descendingOrder(n){
    let m = n.split("");
    m.sort(function(a,b){
        return b-a;
    })
    return m.join("");
}


console.log(descendingOrder(numArr))

