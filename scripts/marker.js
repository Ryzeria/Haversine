// Variabel untuk menyimpan marker Titik A dan B
var markerA;
var markerB;

var ikonKustom = L.divIcon({
    html: '<i class="fa-solid fa-location-dot" style="color: blue; font-size: 40px;"></i>',
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
    className: ''
});

document.getElementById('latA').addEventListener('blur', perbaruiTitikA);
document.getElementById('lonA').addEventListener('blur', perbaruiTitikA);
document.getElementById('latB').addEventListener('blur', perbaruiTitikB);
document.getElementById('lonB').addEventListener('blur', perbaruiTitikB);

function perbaruiTitikA() {
    var lintangA = document.getElementById('latA').value;
    var bujurA = document.getElementById('lonA').value;

    if (lintangA && bujurA) {
        var lat = parseFloat(lintangA);
        var lon = parseFloat(bujurA);

        if (!isNaN(lat) && !isNaN(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) {
            map.setView([lat, lon], 4);

            if (markerA) map.removeLayer(markerA);

            markerA = L.marker([lat, lon], {icon: ikonKustom}).addTo(map)
                .bindPopup('Titik A: (' + lat + ', ' + lon + ')')
                .openPopup();

            if (markerB) gambarGarisAntaraTitik();
        } else {
            alert('Masukkan koordinat valid untuk Titik A.');
        }
    }
}

function perbaruiTitikB() {
    var lintangB = document.getElementById('latB').value;
    var bujurB = document.getElementById('lonB').value;

    if (lintangB && bujurB) {
        var lat = parseFloat(lintangB);
        var lon = parseFloat(bujurB);

        if (!isNaN(lat) && !isNaN(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) {
            map.setView([lat, lon], 4);

            if (markerB) map.removeLayer(markerB);

            markerB = L.marker([lat, lon], {icon: ikonKustom}).addTo(map)
                .bindPopup('Titik B: (' + lat + ', ' + lon + ')')
                .openPopup();

            if (markerA) gambarGarisAntaraTitik();
        } else {
            alert('Masukkan koordinat valid untuk Titik B.');
        }
    }
}
