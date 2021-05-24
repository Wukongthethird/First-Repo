let bAccounts = [[1,2,4],[3,2,1],[10,10,10]] // first brackets is one customer

var maximumWealth = function(accounts) {
  let ind =[];  
  // goes through first array
  for (let i = 0; i< accounts.length; i++  ){
    // squashes each array
    let x  =  accounts[i].reduce((accumulator,currentValue) => {
        return accumulator + currentValue
    }, 0);
    ind.push(x)
// picking out largest value
  }return Math.max.apply(null,ind)
};

console.log(maximumWealth(bAccounts))
