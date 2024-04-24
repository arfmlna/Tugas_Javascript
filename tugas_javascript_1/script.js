// latihan soal 1
const nama = "Arif Maulana"
const usia = 20
const kelas = "PTI 22"
const  nilai = 95
console.table([{
    name: nama,
    usia: usia,
    kelas: kelas,
    nilai: nilai,
}])

// latihan soal 2
const nilai1 = 20
const nilai2 = 30
console.table([{
    pertambahan: nilai1 + nilai2,
    pengurangan: nilai1 - nilai2,
    perkalian: nilai1 * nilai2,
    pembagian: nilai1 + nilai2,
}])

// latihan soal 3
const harga = 50
const diskon = 0.2
const totalHarga = harga - (harga * diskon)
console.log(`total harga : RP ${totalHarga}`)