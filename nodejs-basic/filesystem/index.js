const fs = require('fs');
const path = require('path');

// Gunakan path.resolve agar path file bersifat dinamis dan aman
const filePath = path.resolve(__dirname, 'notes.txt');

// Fungsi callback saat file dibaca
const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

// Membaca file
fs.readFile(filePath, 'utf8', fileReadCallback);
