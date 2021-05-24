function zeros (n) {
    count = 0;
    while(n>=5){
        n /=5;
        count += Math.floor(n);
    }
    return count;
  }

console.log(zeros(10))