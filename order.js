//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"


function order(words){
   if (words == ""){
       return words
   }
   let retArr = [];
   let wordsArr = words.split(" ");
   let countOrder = wordsArr.length;
   for(let i = 1; i<=countOrder; i++){
       for(let n of wordsArr){
         let regCheck = new RegExp(i);
         if(regCheck.test(n)){
             retArr.push(n);
         }
       }
   }return retArr.join(" ");
  }

  console.log(order("is2 Thi1s T4est 3a"));