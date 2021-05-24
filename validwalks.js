let a = ['n','s','n','s','n','s','n','s','e','s'];


function isValidWalk(walk){
    // declare cordinates and use this to keep track of position
    let ns = 0
    let we = 0
    // loop through an array and adjust coordinates to see if youy end in the center at 0,0
    for (let i of walk){
        if(i =='n') ns += 1;
        if(i =='s') ns -= 1;
        if(i =='w') we += 1;
        if(i =='e') we -= 1;
    }
    return walk.length == 10 && ns ==0 && we ==0? true:false;
}

console.log(isValidWalk(a))