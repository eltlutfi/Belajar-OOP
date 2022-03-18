function cabe(jenis, warna) {
    console.log(`cabe jenis ${jenis}`);
    console.log(`yang berwarna ${warna}`);
    console.log('sekarang lagi banyak terjual');
}

cabe("kriting", "merah");
cabe("rawit", "hijau");

function hargaCabe(harga, kg) {
    const hasil = harga * kg;
    return hasil;
}

const hitung1 = hargaCabe(70000, 50);
console.log(hitung1);

