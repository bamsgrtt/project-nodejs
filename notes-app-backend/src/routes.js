// Mengimpor semua handler untuk setiap endpoint dari modul handler.js
const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
} = require('./handler');

// Definisi endpoint RESTful API untuk resource catatan
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler, // Menangani pembuatan catatan baru
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler, // Mengembalikan seluruh catatan
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler, // Mengambil detail catatan berdasarkan ID
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler, // Memperbarui catatan berdasarkan ID
    },
    {
        method: 'DELETE',
        path: '/notes{id}', // ⚠️ Kesalahan sintaks: seharusnya '/notes/{id}'
        handler: deleteNoteByIdHandler, // Menghapus catatan berdasarkan ID
    },
];

module.exports = routes;
