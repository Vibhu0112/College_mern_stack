function charOccurance(str) {
    var map = new Object()
    for (var i = 0; i<str.length; i++) {
        var ch = str[i]
        if (ch == ' ') {
            continue
        }
        if (!(`${ch}` in map)) {
            map[ch] = 1
        } else {
            map[ch]++
        }
    }
    return map
}

console.log(charOccurance("This is a string"))
