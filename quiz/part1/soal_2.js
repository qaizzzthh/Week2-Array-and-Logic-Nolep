//Soal 2 
//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    //Menampilkan array
    input.splice(1,1,"Roman Alamsyah Elsharawy")
    input.splice(2,1,"Provinsi Bandar Lampung")
    input.splice(4,1,"Pria", "SMA Internasional Metro")
    console.log(input)

    //Menampilkan bulan
    let tanggal=input[3].split("/")
    let bulan=tanggal[1]
    let nama_bulan={"01":"Januari","02":"Februari","03":"Maret","04":"April","05":"Mei","06":"Juni","07":"Juli","08":"Agustus","09":"September","10":"Oktober","11":"November","12":"Desember"}
    console.log(nama_bulan[bulan])

    //Menampilkan array tanggal (awal 21/05/1989)
    console.log(`["${tanggal[2]}","${tanggal[0]}","${tanggal[1]}"]`)

    
    //Menampilkan tanggal
    console.log(`${tanggal[0]}-${tanggal[1]}-${tanggal[2]}`)

    //Menampilkan array elemen ke-2 maks. 15 char
    console.log(input[1].substring(0-15))
}

dataHandling2(input);

/*
keluaran yang diharapkan (pada console)

["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
Mei
["1989", "21", "05"]
21-05-1989
Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
*/
