function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var index = 0
    var counter = 0

    while (index < kalimat.length) {
        //tampung += kalimat[index]
        if (kalimat[index] === ' ' || index === kalimat.length - 1) {
            counter++
        }
        index++
    }
    return counter
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5