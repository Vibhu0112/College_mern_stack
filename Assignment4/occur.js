function digitOccurance(num) {
    var temp = num
    var map = new Object()
    while (temp > 0) {
        var digit = temp % 10
        temp /= 10
        temp = Math.floor(temp)
        if (!(`${digit}` in map)) {
            map[digit] = 1
        } else {
            map[digit]++
        }
    }
    return map

}

console.log(digitOccurance(233456332))

