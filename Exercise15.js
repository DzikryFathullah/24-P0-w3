function groupAnimals(animals) {
    // you can only write your code here!
    for (var index = 0; index < animals.length; index++) {
        for (var indexDalam = 0; indexDalam < animals.length; indexDalam++) {
            var temp = ''
            if (animals[index] < animals[indexDalam]) {
                temp = animals[indexDalam]
                animals[indexDalam] = animals[index]
                animals[index] = temp
            }
        }
    }
    var hurufAwal = []
    var hurufAwalStr = ''
    for (var i = 0; i < animals.length; i++) {
        if (hurufAwalStr !== animals[i][0]) {
            hurufAwal.push(animals[i][0])
            hurufAwalStr = animals[i][0]
        }

    }
    var hasil = []
    var indx = 0
    while (indx < hurufAwal.length) {
        hasil.push([])
        for (var z = 0; z < animals.length; z++) {
            if (hurufAwal[indx] === animals[z][0]) {
                hasil[indx].push(animals[z])
            }
        }
        indx++
    }
    return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]