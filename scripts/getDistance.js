// Tombol untuk menghitung jarak
var tombolHitung = document.getElementById("submit");
tombolHitung.onclick = function () {
    // Ambil nilai lintang dan bujur dari dua titik
    var lintangA = document.getElementById('latA').value;
    var bujurA = document.getElementById('lonA').value;
    var lintangB = document.getElementById('latB').value;
    var bujurB = document.getElementById('lonB').value;

    // Rumus hukum kosinus untuk menghitung jarak di permukaan bola (akurasi memadai untuk Bumi)
    var φ1 = (lintangA * Math.PI) / 180;
    var φ2 = (lintangB * Math.PI) / 180;
    var Δλ = ((bujurB - bujurA) * Math.PI) / 180;
    var R = 6371; // Jari-jari Bumi dalam km
    var jarak = Math.acos(
        Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)
    ) * R;

    // Tampilkan jarak yang telah dihitung
    $("#output").html(jarak.toFixed(2));
};
