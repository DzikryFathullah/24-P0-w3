function targetTerdekat(arr) {
    // you can only write your code here!
    //find 'o'
    var posO = 0
    for (var idx = arr.length - 1; idx >= 0; idx--) {
        if (arr[idx] === 'o') {
            posO = idx + 1
        }
    }
    var posX = null
    var counterX = 0
    var selisihPos = arr.length - 1
    for (var idxA = arr.length - 1; idxA >= 0; idxA--) {
        if (arr[idxA] === 'x') {
            posX = idxA + 1
            counterX++
        }
        if (selisihPos > Math.abs(posX - posO)) {
            selisihPos = Math.abs(posX - posO)
        }

    }
    if (counterX === 0) {
        return 0
    }
    return selisihPos
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'o', ' ', ' ', ' ', ' ', ' ', ' '])); // 0
