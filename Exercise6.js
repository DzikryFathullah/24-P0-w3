function angkaPalindrome(num) {
    // you can only write your code here!
    var search = true
    while (search) {
        num++
        var numStr = String(num)
        var index = numStr.length - 1
        var tampung = ''
        while (index >= 0) {
            tampung += numStr[index]
            index--
        }
        //console.log(tampung)
        if (tampung === numStr) {
            search = false
        }

    }
    return num
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001