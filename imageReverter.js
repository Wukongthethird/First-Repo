let arr = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
//[[1,0,0],[0,1,0],[1,1,1]]
var flipAndInvertImage = function(A) {
    for (let n of A){
        n.reverse()
        console.log(n)
    }return A
};

console.log(flipAndInvertImage(arr));