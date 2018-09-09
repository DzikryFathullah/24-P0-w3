function dataHandling2(bio) {

    bio.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
    bio.splice(4, 1, 'pria', 'SMA Internasional Metro')
    console.log(bio)


    var tanggal = (bio[3].split('/'))
    bulan = tanggal[1]
    switch (bulan) {
        case '01': { console.log('Januari'); break; }
        case '02': { console.log('Februari'); break; }
        case '03': { console.log('Maret'); break; }
        case '04': { console.log('April'); break; }
        case '05': { console.log('Mei'); break; }
        case '06': { console.log('Juni'); break; }
        case '07': { console.log('Juli'); break; }
        case '08': { console.log('Agustus'); break; }
        case '09': { console.log('September'); break; }
        case '10': { console.log('Oktober'); break; }
        case '11': { console.log('November'); break; }
        case '12': { console.log('Desember'); break; }
    }
    var sortTanggal = tanggal.slice(0)

    sortTanggal.sort(function (num1, num2) { return (num2 - num1) })
    console.log(sortTanggal)
    console.log(tanggal.join('-'))
    console.log(bio[1].slice(0, 15))


}

var biodata = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

console.log(dataHandling2(biodata))