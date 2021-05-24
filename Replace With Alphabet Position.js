function alphabetPosition(text) {
    let masterAlpha = "abcdefghijklmnopqrstuvwxyz";
    let wText = text.toLowerCase().replace(/[^a-z]/gi,'').split("")
    for(let i =0; i<wText.length;i++){
        wText[i] = masterAlpha.indexOf(wText[i])+1
    }

    return wText.join(" ");
}


let a = "The sunset sets at twelve o' clock."
let wText = a.toLowerCase().replace(/[^a-z]/gi,'').split("")

console.log(alphabetPosition(a))