function anagrams(word, words) {
    let sortWord = word.split("").sort().join("")
    let retArr = []
    for(let n of words){
        if(n.split("").sort().join('') == sortWord){
            retArr.push(n)
        }
    }
    return retArr
}


let a = 'abba'
let b = ['aabb', 'abcd', 'bbaa', 'dada']
console.log(anagrams(a,b))