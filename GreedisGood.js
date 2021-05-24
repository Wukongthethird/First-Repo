function score( dice ) {
    let score = 0;
    let six = 0;
    let five = 0;
    let four = 0;
    let three = 0;
    let two = 0;
    let one = 0;

    for (let n of dice){
        if (6 ==n) {six++}
        if (5 == n) {five++}
        if (4 == n) {four++}
        if (3 == n) {three++}
        if (2 == n) {two++}
        if (1 == n) {one++}
    }
    if (one >= 3) {
        score += 1000 
        one -= 3
    }
    if (six >= 3) {
        score += 600
        six -= 3
    }
    if (five >= 3) {
        score += 500
        five -= 3
    }
    if (four >= 3) {
        score += 400
        four -= 3
    }
    if (three >= 3) {
        score += 300
        three -= 3
    }
    if (two >= 3) {
        score += 200
        two -= 3
    
    }
    if (one <= 2 && one > 0) {
        if(one == 2){
            score +=200
            one -= 2
        }else{
            score += 100
            one -= 1
        }
    }
    if (five <= 2 && five > 0) {
        if(five == 2){
            score +=100
            five -= 2
        }else{
            score += 50
            five -= 1
        }
    }
    return score
}


console.log(score([4, 4, 4, 3, 3]))

