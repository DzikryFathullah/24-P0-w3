function pasanganTerbesar(num) {
    // you can only write your code here!
    var index = 0
    var tampung = 0
    while (index < String(num).length - 1) {
        if (tampung < String(num).slice(index, index + 2)) {
            tampung = String(num).slice(index, index + 2)
        }
        index++
    }
    return Number(tampung)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99