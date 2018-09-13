function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var selisih = arr[arr.length - 1] - arr[arr.length - 2]
    for (var index = arr.length - 2; index > 0; index--) {
        if (selisih !== arr[index] - arr[index - 1]) {
            return false
        }
    }
    return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false