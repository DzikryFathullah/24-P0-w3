function tampilData(data) {
    var index = 0
    while (index < data.length) {
        var indexDalam = 0
        while (indexDalam < data[index].length) {
            switch (indexDalam) {
                case 0: { console.log('Nomor ID: ' + data[index][indexDalam]); break; }
                case 1: { console.log('Nama Lengkap: ' + data[index][indexDalam]); break; }
                case 2: { console.log('TTL: ' + data[index][indexDalam], data[index][indexDalam + 1]); break; }
                case 4: { console.log('Hobi: ' + data[index][indexDalam]); break; }
            }
            indexDalam++
        }
        index++
    }
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(tampilData(input))