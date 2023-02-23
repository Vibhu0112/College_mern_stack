// function revWords(str) {
//     return str.split("").reverse().join("")
// }

// console.log(revWords("Reverse words of this string"))



/*function revEachWord(str) {
    str = str.split(" ")
    var i = 0
    str.forEach(element => {
        str[i] = element.split("").reverse().join("")
        i++
    });
    return str.join(" ")
}

console.log(revEachWord("Reverse Words"))*/



function revEachChar(str) {
    return str.split("").reverse().join("")
}

console.log(revEachChar("Reverse Words"))
