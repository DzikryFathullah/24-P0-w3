function reverse(input) {
    var balikKata = ''
    var index = input.length - 1

    while (index >= 0) {
        balikKata += input[index]
        index--
    }
    return balikKata
}

console.log(reverse('hello world'))