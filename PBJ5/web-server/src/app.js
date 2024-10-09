const path = require('path'); 
const express = require('express');
const hbs = require('hbs');

const app = express();

// Mendefinisikan jalur/path untuk konfigurasi Express
const direktoriPublic = path.join(__dirname, '../public');
const direktoriViews = path.join(__dirname, '../templates/views'); // Kustomisasi path ke folder templates/views
const direktoriPartials = path.join(__dirname, '../templates/partials'); // Path untuk folder partials

// Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs');
app.set('views', direktoriViews); // Mengatur direktori untuk views

// Setup partials untuk handlebars
hbs.registerPartials(direktoriPartials); // Mendaftarkan partials dari direktori partials

// Setup direktori statis
app.use(express.static(direktoriPublic));

// Ini halaman utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Indra Yones'
    });
});

// Ini halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Indra Yones'
    });
});

// Ini halaman bantuan/FAQ (Frequently Asked Questions)
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Halaman Bantuan',
        nama: 'Indra Yones',
        teksBantuan: 'Ini adalah teks bantuan'
    });
});

// Ini halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
    res.send({
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    });
});

// Rute untuk menangani URL bantuan yang tidak ditemukan
app.get('/bantuan/*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Indra Yones',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
    });
});

// Rute untuk menangani semua URL yang tidak ditemukan
app.get('*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Indra Yones',
        pesanKesalahan: 'Halaman tidak ditemukan.' 
    });
});

// Jalankan server pada port 4000
app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.');
});
