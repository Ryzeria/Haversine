// Referensi ke tombol lokasi
var tombolLokasi = document.getElementById('gpsButton');

// Fungsi untuk menggerakkan peta ke lokasi pengguna
function lompatKeLokasi(lat, lng) {
    map.setView([lat, lng], 13); 
    L.marker([lat, lng]).addTo(map).bindPopup("Anda berada di sini!").openPopup(); // Tambahkan marker di lokasi
}

// Tombol mudah untuk mendapatkan lokasi dari API Geolocation bawaan browser, kemudian kirim ke fungsi lompatKeLokasi
L.easyButton("fa-solid fa-crosshairs", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(posisi) {
            var lintang = posisi.coords.latitude;
            var bujur = posisi.coords.longitude;
            lompatKeLokasi(lintang, bujur);
        }, function(error) {
            alert("Kesalahan mengambil lokasi: " + error.message);
        });
    } else {
        alert("Geolocation tidak didukung oleh browser ini.");
    }
}, {
    position: 'topright'
}).addTo(map);
