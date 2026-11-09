/* =====================================================
   SCRIPT.JS - PT Erick Garda Pratama
   JavaScript = bahasa pemrograman yang membuat halaman web interaktif.
   ===================================================== */

/* 1. JAM DIGITAL */
function tampilkanJam() {
    var sekarang = new Date();                       // objek Date = waktu saat ini

    // padStart(2, "0") menambah angka 0 di depan, contoh: 5 -> "05"
    var jam = String(sekarang.getHours()).padStart(2, "0");
    var menit = String(sekarang.getMinutes()).padStart(2, "0");
    var detik = String(sekarang.getSeconds()).padStart(2, "0");

    // getElementById = mencari elemen HTML berdasarkan id
    var elemenJam = document.getElementById("jam");
    if (elemenJam) {
        elemenJam.innerHTML = jam + ":" + menit + ":" + detik; // innerHTML = ubah isi elemen
    }

    var elemenTanggal = document.getElementById("tanggal-hari");
    if (elemenTanggal) {
        elemenTanggal.innerHTML = sekarang.toLocaleDateString("id-ID", {
            weekday: "long", day: "numeric", month: "long", year: "numeric"
        });
    }
}

// setInterval = jalankan fungsi berulang setiap 1000 milidetik (1 detik)
setInterval(tampilkanJam, 1000);
tampilkanJam();

/* 2. SALAM SESUAI WAKTU (halaman Home) */
function tampilkanSalam() {
    var elemen = document.getElementById("salam");
    if (!elemen) {
        return;                                      // keluar jika halaman ini tidak punya elemen salam
    }

    var jam = new Date().getHours();
    var salam;

    // if ... else if ... else = percabangan
    if (jam < 11) {
        salam = "Selamat Pagi";
    } else if (jam < 15) {
        salam = "Selamat Siang";
    } else if (jam < 18) {
        salam = "Selamat Sore";
    } else {
        salam = "Selamat Malam";
    }

    elemen.innerHTML = salam + ", selamat datang di PT Erick Garda Pratama!";
}
tampilkanSalam();

/* 3. VALIDASI FORM REGISTRASI */
function kirimRegistrasi() {
    var nama = document.getElementById("nama").value;       // .value = isi yang diketik
    var telepon = document.getElementById("telepon").value;

    if (nama === "" || telepon === "") {
        alert("Nama dan nomor telepon wajib diisi!");       // alert = kotak pesan pop-up
        return false;                                       // false = batalkan pengiriman form
    }

    alert("Terima kasih, " + nama + "! Pendaftaran Anda sudah kami terima. Tim kami akan menghubungi Anda.");
    return false;
}

/* 4. FORM KONTAK */
function kirimPesan() {
    var nama = document.getElementById("nama-pesan").value;
    alert("Terima kasih, " + nama + ". Pesan Anda sudah kami terima.");
    return false;
}

