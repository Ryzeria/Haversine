var garisAB; // Variabel untuk menyimpan garis antara Titik A dan Titik B

function gambarGarisAntaraTitik() {
    var lintangA = document.getElementById('latA').value;
    var bujurA = document.getElementById('lonA').value;
    var lintangB = document.getElementById('latB').value;
    var bujurB = document.getElementById('lonB').value;

    // Jika Titik A dan Titik B valid, gambar garis di antaranya
    if (lintangA && bujurA && lintangB && bujurB) {
        var titikA = [parseFloat(lintangA), parseFloat(bujurA)];
        var titikB = [parseFloat(lintangB), parseFloat(bujurB)];

        // Hapus garis sebelumnya jika ada
        if (garisAB) {
            map.removeLayer(garisAB);
        }

        // Gambar garis (polyline) antara Titik A dan Titik B
        garisAB = L.polyline([titikA, titikB], {
            color: 'blue',
            weight: 4,           // Ketebalan garis dalam piksel
            opacity: 0.7,        // Opasitas garis
            dashArray: '10, 10', // Pola garis putus-putus
            lineJoin: 'round'    // Gaya sambungan garis
        }).addTo(map);

        // Sesuaikan pusat dan zoom peta untuk memuat kedua titik
        map.fitBounds([titikA, titikB], {padding: [100, 100]});
    }
}
