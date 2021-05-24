var minDeletionSize = function(strs) {
    let Matrix = [];
    let idxRem = 0;
    
    for(let i=0; i<strs[0].length;i++){
        Matrix.push([]);
    }
    for(let i=0;i<strs.length;i++){
        for(j=0; j<strs[i].length;j++){
            Matrix[j].push(strs[i][j]);
        }
    }
    for(let i = Matrix.length-1; i>=0;i--){

        for(let j=0; j<Matrix[i].length-1;j++){
            if(Matrix[i][j]>Matrix[i][j+1]){
                idxRem++;
                break;
            }
        }
    }
    return idxRem;
};