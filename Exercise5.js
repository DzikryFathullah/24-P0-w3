function palindrome(kata) {
    // you can only write your code here!
    var pembanding = ''
    var index = kata.length - 1

    while (index >= 0) {
        pembanding += kata[index]
        index--
    }
    if (pembanding === kata) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false