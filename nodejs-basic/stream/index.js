const fs = require('fs');
const path = require('path');

// ✅ Tentukan path file
const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

// ✅ Buat readable stream dengan chunk 15 karakter
const readableStream = fs.createReadStream(inputPath, {
  encoding: 'utf-8',
  highWaterMark: 15, // 15 karakter
});

// ✅ Buat writable stream ke output.txt
const writableStream = fs.createWriteStream(outputPath);

// ✅ Saat readable stream siap dibaca
readableStream.on('readable', () => {
  let chunk;
  while (null !== (chunk = readableStream.read())) {
    writableStream.write(chunk + '\n'); // tiap chunk dipisah newline
  }
});

readableStream.on('end', () => {
  console.log('Proses selesai. File berhasil ditulis ke output.txt');
});
