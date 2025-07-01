const events = [
  // Fase Awal (Selalu Hari ke-1)
    {
        eventId: 1,
        naration_name: 'GAJIAN!',
        naration_dialogue: 'Hore! Gajian tiba! Kamu menerima Rp 3.000.000. Apa yang akan kamu lakukan pertama kali?',
        choices: [
            { text: 'Bayar semua tagihan (kos, internet dan listrik)', cash: -1100000, savings: 0, bills: -1100000, happiness: -20, health: 0 },
            { text: 'Tabung 20% dulu', cash: -700000, savings: 700000, bills: 0, happiness: 10, health: 0 },
            { text: 'Traktir diri, makan enak!', cash: -350000, savings: 0, bills: 0, happiness: 10, health: 5 },
        ],
    },
  // Fase Mingguan: Tagihan 1
    {
        eventId: 2,
        naration_name: 'TAGIHAN KOS',
        naration_dialogue: 'Ibu kos mengingatkan, "Uang kos bulan ini jangan lupa ya!". Tagihan sebesar Rp 800.000.',
        choices: [
            { text: 'Bayar sekarang', cash: -800000, savings: 0, bills: -800000, happiness: -15, health: 0 },
            { text: 'Nanti saja, masih ada waktu', cash: 0, savings: 0, bills: 0, happiness: 10, health: 0 },
            { text: 'Ambil dari tabungan untuk bayar', cash: 0, savings: -800000, bills: -800000, happiness: -15, health: 0 },
        ],
    },
    // Fase Mingguan: Tagihan 2
    {
        eventId: 3,
        naration_name: 'TAGIHAN INTERNET',
        naration_dialogue: 'Pemberitahuan: Tagihan internet Anda sebesar Rp 150.000 akan jatuh tempo.',
        choices: [
            { text: 'Langsung bayar', cash: -150000, savings: 0, bills: -150000, happiness: -5, health: 0 },
            { text: 'Ah, nanti saja', cash: 0, savings: 0, bills: 0, happiness: 10, health: 0 },
            { text: 'Cari wifi gratisan dulu', cash: 0, savings: 0, bills: 0, happiness: -5, health: 0 },
        ],
    },
    // Fase Mingguan: Tagihan 3
    {
        eventId: 4,
        naration_name: 'TAGIHAN LISTRIK',
        naration_dialogue: 'Token listrik berbunyi! Saatnya isi ulang. Perkiraan Rp 150.000.',
        choices: [
            { text: 'Isi sekarang', cash: -150000, savings: 0, bills: -150000, happiness: -5, health: 0 },
            { text: 'Besok saja, masih cukup', cash: 0, savings: 0, bills: 0, happiness: 10, health: 0 },
            { text: 'Pakai seperlunya, hemat!', cash: 0, savings: 0, bills: 0, happiness: -5, health: 0 },
        ],
    },
    // 4 s/d 27 - Fase Harian (Acak)
    {
        eventId: 5,
        naration_name: 'AJAKAN NGOPI',
        naration_dialogue: 'Teman mengajak, "Ngopi yuk!". Perkiraan habis Rp 50.000.',
        choices: [
            { text: 'Ikut!', cash: -50000, savings: 0, bills: 0, happiness: 10, health: 0 },
            { text: 'Tolak, bilang sibuk', cash: 0, savings: 0, bills: 0, happiness: -10, health: 0 },
            { text: 'Usul bikin kopi di kosan', cash: -10000, savings: 0, bills: 0, happiness: 5, health: 0 },
        ],
    },
    {
        eventId: 6,
        naration_name: 'FLASH SALE!',
        naration_dialogue: 'Notifikasi! Headphone incaranmu diskon 50% jadi Rp 200.000!',
        choices: [
            { text: 'Beli sekarang!', cash: -200000, savings: 0, bills: 0, happiness: 20, health: 0 },
            { text: 'Masukkan keranjang dulu', cash: 0, savings: 0, bills: 0, happiness: 5, health: 0 },
            { text: 'Tutup aplikasi. Bukan prioritas.', cash: 0, savings: 0, bills: 0, happiness: -5, health: 0 },
        ],
    },
    {
        eventId: 7,
        naration_name: 'MAKAN SIANG',
        naration_dialogue: 'Perut keroncongan. Waktunya makan siang.',
        choices: [
            { text: 'Makan di warteg (sehat & hemat)', cash: -15000, savings: 0, bills: 0, happiness: 5, health: 10 },
            { text: 'Pesan fast food online', cash: -55000, savings: 0, bills: 0, happiness: 15, health: -10 },
            { text: 'Masak mi instan', cash: -4000, savings: 0, bills: 0, happiness: 5, health: -5 },
        ],
    },
    {
        eventId: 8,
        naration_name: 'KERJA SAMPINGAN 💻',
        naration_dialogue: 'Ada tawaran jadi penulis lepas untuk sebuah blog. Deadline-nya ketat tapi bayarannya lumayan. Ambil?',
        choices: [
            { text: 'Ambil, butuh uang tambahan', cash: 300000, savings: 0, bills: 0, happiness: -20, health: -10 },
            { text: 'Tolak, mau istirahat', cash: 0, savings: 0, bills: 0, happiness: 10, health: 5 },
            { text: 'Nego deadline lebih longgar', cash: 140000, savings: 0, bills: 0, happiness: -10, health: -5 },
        ],
    },
    {
        eventId: 9,
        naration_name: 'NONTON KONSER 🎤',
        naration_dialogue: 'Band favoritmu akan konser di kota sebelah! Tiketnya lumayan mahal, sekitar Rp 500.000.',
        choices: [
            { text: 'Gas! Kapan lagi nonton langsung!', cash: -500000, savings: 0, bills: 0, happiness: 30, health: -5 },
            { text: 'Nonton dari medsos aja', cash: 0, savings: 0, bills: 0, happiness: -10, health: 0 },
            { text: 'Cari tiket dari calo, lebih murah?', cash: -300000, savings: 0, bills: 0, happiness: 15, health: -5 },
        ],
    },
    {
        eventId: 10,
        naration_name: 'KENDARAAN MOGOK 🛵',
        naration_dialogue: 'Di tengah jalan, kendaraanmu tiba-tiba mogok. Harus dibawa ke bengkel.',
        choices: [
            { text: 'Servis lengkap biar tuntas', cash: -200000, savings: 0, bills: 0, happiness: -15, health: 0 },
            { text: 'Servis seadanya yang penting jalan', cash: -75000, savings: 0, bills: 0, happiness: -10, health: 0 },
            { text: 'Coba perbaiki sendiri', cash: 0, savings: 0, bills: 0, happiness: -5, health: -10 },
        ],
    },
    {
        eventId: 11,
        naration_name: 'LANGGANAN STREAMING 📺',
        naration_dialogue: 'Serial yang sedang viral hanya ada di platform streaming baru. Mau berlangganan?',
        choices: [
            { text: 'Langganan sebulan', cash: -55000, savings: 0, bills: 0, happiness: 10, health: 0 },
            { text: 'Numpang akun teman', cash: 0, savings: 0, bills: 0, happiness: 5, health: 0 },
            { text: 'Cari spoiler di internet aja', cash: 0, savings: 0, bills: 0, happiness: -5, health: 0 },
        ],
    },
    {
        eventId: 12,
        naration_name: 'KENCAN PERTAMA ❤️‍🔥',
        naration_dialogue: 'Gebetanmu akhirnya ngajak jalan! Kamu mau ajak dia kemana?',
        choices: [
            { text: 'Makan di restoran bagus', cash: -300000, savings: 0, bills: 0, happiness: 35, health: 0 },
            { text: 'Jalan-jalan di taman kota', cash: -20000, savings: 0, bills: 0, happiness: 5, health: 5 },
            { text: 'Nonton film di bioskop', cash: -150000, savings: 0, bills: 0, happiness: 20, health: 0 },
        ],
    },
    {
        eventId: 13,
        naration_name: 'MERASA DEMAM 🤒',
        naration_dialogue: 'Badanmu terasa tidak enak, sepertinya demam dan butuh istirahat.',
        choices: [
            { text: 'Pergi ke klinik & beli obat', cash: -100000, savings: 0, bills: 0, happiness: 0, health: 20 },
            { text: 'Istirahat total di kosan', cash: 0, savings: 0, bills: 0, happiness: -5, health: 10 },
            { text: 'Tetap kerja, minum parasetamol', cash: -5000, savings: 0, bills: 0, happiness: -10, health: -10 },
        ],
    },
    {
        eventId: 14,
        naration_name: 'JAGA WARUNG KOPI ☕',
        naration_dialogue: 'Temanmu butuh bantuan jaga warung kopinya di akhir pekan. Ada upahnya.',
        choices: [
            { text: 'Bantu seharian penuh', cash: 200000, savings: 0, bills: 0, happiness: -15, health: -10 },
            { text: 'Bantu setengah hari saja', cash: 100000, savings: 0, bills: 0, happiness: -5, health: -5 },
            { text: 'Maaf, akhir pekan mau santai', cash: 0, savings: 0, bills: 0, happiness: 10, health: 5 },
        ],
    },
    {
        eventId: 15,
        naration_name: 'WAKTUNYA HEALING! 🍃',
        naration_dialogue: 'Pekerjaan terasa sangat berat. Kamu butuh "healing" untuk menyegarkan pikiran.',
        choices: [
            { text: 'Liburan singkat ke luar kota', cash: -700000, savings: 0, bills: 0, happiness: 40, health: -10 },
            { text: 'Staycation di hotel dalam kota', cash: -400000, savings: 0, bills: 0, happiness: 25, health: 0 },
            { text: '"Me time" di kosan, nonton film', cash: -25000, savings: 0, bills: 0, happiness: 15, health: 5 },
        ],
    },
    {
        eventId: 16,
        naration_name: 'UNDANGAN KONDANGAN 💌',
        naration_dialogue: 'Teman lama menikah dan mengundangmu. Perlu menyiapkan amplop dan ongkos.',
        choices: [
            { text: 'Datang dan beri amplop', cash: -200000, savings: 0, bills: 0, happiness: 5, health: 0 },
            { text: 'Kirim kado online saja', cash: -100000, savings: 0, bills: 0, happiness: 0, health: 0 },
            { text: 'Ucapkan selamat via WA', cash: 0, savings: 0, bills: 0, happiness: -5, health: 0 },
        ],
    },
    {
        eventId: 17,
        naration_name: 'INVESTASI KRIPTO? 📈',
        naration_dialogue: 'Seorang teman pamer keuntungan dari koin kripto baru dan mengajakmu ikut. Terlihat menggiurkan.',
        choices: [
            { text: 'Coba sedikit, Rp 250.000', cash: -250000, savings: 0, bills: 0, happiness: 10, health: 0 },
            { text: 'Tidak, terlalu berisiko', cash: 0, savings: 0, bills: 0, happiness: -5, health: 0 },
            { text: 'Beli reksadana saja, lebih aman', cash: -100000, savings: 0, bills: 0, happiness: 5, health: 0 },
        ],
    },
    {
        eventId: 18,
        naration_name: 'BELANJA BULANAN 🛒',
        naration_dialogue: 'Stok sabun, sampo, dan bahan makanan sudah habis. Saatnya belanja bulanan.',
        choices: [
            { text: 'Belanja lengkap sesuai daftar', cash: -300000, savings: 0, bills: 0, happiness: 5, health: 5 },
            { text: 'Beli yang paling penting saja', cash: -150000, savings: 0, bills: 0, happiness: 0, health: 0 },
            { text: 'Tunda dulu, masih bisa dihemat', cash: 0, savings: 0, bills: 0, happiness: -10, health: -5 },
        ],
    },
    {
        eventId: 19,
        naration_name: 'IKUT WORKSHOP 🎨',
        naration_dialogue: 'Ada workshop menarik untuk menambah skill baru, tapi biayanya tidak murah.',
        choices: [
            { text: 'Daftar! Investasi untuk diri sendiri', cash: -400000, savings: 0, bills: 0, happiness: 15, health: 0 },
            { text: 'Cari tutorial gratis di YouTube', cash: 0, savings: 0, bills: 0, happiness: 5, health: 0 },
            { text: 'Nanti saja jika ada diskon', cash: 0, savings: 0, bills: 0, happiness: 0, health: 0 },
        ],
    },
    {
        eventId: 20,
        naration_name: 'JADI JOKI TUGAS 🤫',
        naration_dialogue: 'Adik tingkat meminta bantuan untuk mengerjakan tugasnya dan bersedia membayar mahal.',
        choices: [
            { text: 'Terima, uangnya besar', cash: 400000, savings: 0, bills: 0, happiness: -25, health: -20 },
            { text: 'Tolak, itu tidak jujur', cash: 0, savings: 0, bills: 0, happiness: 0, health: 0 },
            { text: 'Bantu ajari saja, tidak usah bayar', cash: 0, savings: 0, bills: 0, happiness: 15, health: 0 },
        ],
    },
    {
        eventId: 21,
        naration_name: 'ULANG TAHUN PACAR 🎁',
        naration_dialogue: 'Pacarmu akan berulang tahun. Kamu ingin memberikan kejutan spesial untuknya.',
        choices: [
            { text: 'Beri kado mahal dan ajak makan malam', cash: -400000, savings: 0, bills: 0, happiness: 80, health: 0 },
            { text: 'Buat kado DIY dan masak di rumah', cash: -70000, savings: 0, bills: 0, happiness: 10, health: 5 },
            { text: 'Cukup ucapkan selamat saja', cash: 0, savings: 0, bills: 0, happiness: -20, health: 0 },
        ],
    },
    {
        eventId: 22,
        naration_name: 'NGE-GYM BARENG 🏋️',
        naration_dialogue: 'Teman mengajak daftar jadi anggota gym. Biayanya bulanan tapi baik untuk kesehatan.',
        choices: [
            { text: 'Daftar sekarang', cash: -250000, savings: 0, bills: 0, happiness: 5, health: 25 },
            { text: 'Coba trial gratis dulu', cash: 0, savings: 0, bills: 0, happiness: 0, health: 10 },
            { text: 'Olahraga di rumah saja', cash: 0, savings: 0, bills: 0, happiness: 0, health: 15 },
        ],
    },
    {
        eventId: 23,
        naration_name: 'TAWARAN CICILAN 💳',
        naration_dialogue: 'Smartphone impianmu bisa dibeli dengan cicilan 0% selama 12 bulan. Tergoda?',
        choices: [
            { text: 'Ambil! Kesempatan langka', cash: 0, savings: 0, bills: 0, happiness: 20, health: 0 },
            { text: 'Tidak, lebih baik menabung dulu', cash: 0, savings: 0, bills: 0, happiness: 5, health: 0 },
            { text: 'Hitung dulu budgetnya', cash: 0, savings: 0, bills: 0, happiness: 0, health: 0 },
        ],
    },
    {
        eventId: 24,
        naration_name: 'IKUT TREN THRIFTING ✨',
        naration_dialogue: 'Thrifting (belanja baju bekas) sedang tren. Kamu ingin mencoba mencari harta karun.',
        choices: [
            { text: 'Pergi ke pasar dan borong!', cash: -150000, savings: 0, bills: 0, happiness: 15, health: 0 },
            { text: 'Cari satu atau dua potong saja', cash: -50000, savings: 0, bills: 0, happiness: 10, health: 0 },
            { text: 'Tidak tertarik, pakai baju yang ada', cash: 0, savings: 0, bills: 0, happiness: 0, health: 0 },
        ],
    },
    {
        eventId: 25,
        naration_name: 'KEBUTUHAN DADAKAN 🩹',
        naration_dialogue: 'Kamu butuh membeli sesuatu yang tidak terduga, seperti obat atau memperbaiki charger laptop.',
        choices: [
            { text: 'Ambil dari uang tunai', cash: -80000, savings: 0, bills: 0, happiness: -10, health: 0 },
            { text: 'Pakai dana darurat di tabungan', cash: 0, savings: -80000, bills: 0, happiness: -5, health: 0 },
            { text: 'Pinjam teman dulu', cash: 0, savings: 0, bills: 0, happiness: -15, health: 0 },
        ],
    },
    {
        eventId: 26,
        naration_name: 'LEMBUR AKHIR BULAN 😩',
        naration_dialogue: 'Bos memintamu lembur untuk menyelesaikan laporan akhir bulan. Ada uang lemburnya.',
        choices: [
            { text: 'Siap, gas lembur!', cash: 300000, savings: 0, bills: 0, happiness: -20, health: -15 },
            { text: 'Minta bantuan teman setim', cash: 150000, savings: 0, bills: 0, happiness: -10, health: -10 },
            { text: 'Tolak, sudah terlalu lelah', cash: 0, savings: 0, bills: 0, happiness: 10, health: 10 },
        ],
    },
    {
        eventId: 27,
        naration_name: 'HARI MALAS SEDUNIA 😴',
        naration_dialogue: 'Hari ini kamu merasa sangat tidak produktif dan hanya ingin bermalas-malasan.',
        choices: [
            { text: 'Pesan makanan dan marathon serial', cash: -60000, savings: 0, bills: 0, happiness: 15, health: -5 },
            { text: 'Tidur sepanjang hari', cash: 0, savings: 0, bills: 0, happiness: 5, health: 10 },
            { text: 'Paksa diri untuk bersih-bersih', cash: 0, savings: 0, bills: 0, happiness: -10, health: 5 },
        ],
    },
    {
        eventId: 28,
        naration_name: 'MINGGU TENANG',
        naration_dialogue: 'Semua tagihan sudah lunas. Kamu bisa bersantai sejenak dan menikmati akhir pekan dengan tenang.',
        choices: [], // Pilihan kosong menandakan hanya ada tombol lanjut
    },
];

module.exports = events;