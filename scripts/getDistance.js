// Tombol untuk menghitung jarak
var tombolHitung = document.getElementById("submit");
tombolHitung.onclick = function () {
  // Ambil nilai lintang dan bujur dari dua titik
  var lintangA = parseFloat(document.getElementById("latA").value);
  var bujurA = parseFloat(document.getElementById("lonA").value);
  var lintangB = parseFloat(document.getElementById("latB").value);
  var bujurB = parseFloat(document.getElementById("lonB").value);

  // Konversi derajat ke radian
  var φ1 = (lintangA * Math.PI) / 180;
  var φ2 = (lintangB * Math.PI) / 180;
  var Δφ = ((lintangB - lintangA) * Math.PI) / 180;
  var Δλ = ((bujurB - bujurA) * Math.PI) / 180;

  // Rumus Haversine untuk menghitung jarak
  var a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Jari-jari bumi dalam kilometer
  var R = 6371;

  // Menghitung jarak dalam kilometer
  var jarak = R * c;

  // Tampilkan jarak yang telah dihitung
  $("#output").html(jarak.toFixed(2));
};
