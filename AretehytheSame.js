function comp(array1, array2){
  if( (array1 ==[] || array1 ==null) || (array2 == [] || array2 == null)){
      return false;
  }
  let sortArr1 = array1.sort((a,b) => b-a )
  let sortArr2  = array2.sort((a,b) => b-a )
  let sortSqrtArr2 = sortArr2.map( el => Math.sqrt(el));
  for (let i = 0; i < sortArr1.length; i++) {
    if (sortArr1[i] !== sortSqrtArr2[i]) {
        return false;
   }
}
  return true;
} 

//false
let a = [8, 8, 7, 9, 5, 9, 8, 3, 2, 0, 1, 9, 3, 0, 6, 9, 9, 6, 2].sort((a,b) => b-a)
let b = [81, 9, 0, 81, 9, 64, 81, 4, 81, 1, 25, 49, 0, 64, 36, 64, 36, 81, 5].sort((a,b) => b-a)
let c = b.map( el => Math.sqrt(el));
console.log(a)
console.log(c[14])
console.log(c[14] == a[14])
console.log(comp(a,b))
