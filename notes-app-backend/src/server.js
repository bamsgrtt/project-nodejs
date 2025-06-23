// Import module utama Hapi.js dan daftar rute aplikasi
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    // Inisialisasi instance server dengan konfigurasi host, port, dan pengaturan CORS
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'], // Mengizinkan permintaan dari semua origin (CORS terbuka)
            },
        },
    });

    // Registrasi rute-rute yang tersedia ke dalam server
    server.route(routes);

    // Memulai server secara asynchronous
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}!`);
};

init(); // Eksekusi fungsi inisialisasi server
