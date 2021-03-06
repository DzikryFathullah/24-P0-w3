function perkalianUnik(arr) {
    // you can only write your code here!
    var index = 0
    var hasil = []
    while (index < arr.length) {
        var indexDalam = 0
        var jumlah = 1
        while (indexDalam < arr.length) {
            if (indexDalam === index) {
                indexDalam++
            } else {
                jumlah *= arr[indexDalam]
                indexDalam++
            }
        }
        hasil.push(jumlah)
        index++
    }
    return hasil
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]