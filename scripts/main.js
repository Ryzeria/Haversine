// Buat objek peta dengan tampilan awal dan tingkat zoom
var map = L.map("map").setView([47.558, 7.941], 5);

// Tambahkan basemap
var basemap_topo = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), dan GIS User Community",
    maxZoom: 16,
  }
).addTo(map);

var Esri_PetaDunia = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC",
    maxZoom: 16,
  }
);

// Tambahkan basemap Imagery dari ESRI
var Esri_Imagery = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Esri, DigitalGlobe, GeoIQ, USDA, USGS, AER, iPC, NOAA",
    maxZoom: 16,
  }
);

// Tambahkan pop-up dengan koordinat saat diklik
var popup = L.popup();
function padaKlikPeta(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(e.latlng.lat.toFixed(5) + ", " + e.latlng.lng.toFixed(5))
    .openOn(map);
}
map.on("click", padaKlikPeta);

// Tambahkan tombol info
var kotakInfo = document.getElementById("infoBox");
kotakInfo.style.display = "none";
L.easyButton("<span>&#8505;</span>", function () {
  kotakInfo.style.display =
    kotakInfo.style.display === "none" ? "block" : "none";
}).addTo(map);

// Tampilkan koordinat saat mouse berada di atas peta
var tampilanKoordinat = document.getElementById("coordInfo");
map.on("mousemove", function (e) {
  tampilanKoordinat.innerHTML =
    "Lintang: " +
    e.latlng.lat.toFixed(5) +
    ", Bujur: " +
    e.latlng.lng.toFixed(5);
});

// Koordinat untuk Titik A dan B pada klik
var titikALintang = document.getElementById("latA");
var titikABujur = document.getElementById("lonA");
var titikBLintang = document.getElementById("latB");
var titikBBujur = document.getElementById("lonB");

var isiTitikA = true;

map.on("dblclick", function (e) {
  var lintang = e.latlng.lat.toFixed(5);
  var bujur = e.latlng.lng.toFixed(5);

  if (isiTitikA) {
    titikALintang.value = lintang;
    titikABujur.value = bujur;
    perbaruiTitikA();
    isiTitikA = false;
  } else {
    titikBLintang.value = lintang;
    titikBBujur.value = bujur;
    perbaruiTitikB();
    isiTitikA = true;
  }
});

// Kontrol lapisan peta
var lapisanDasar = {
  "Peta Topografi Esri": basemap_topo,
  "Peta Dunia Esri": Esri_PetaDunia,
  "Peta Imagery Esri": Esri_Imagery, // Tambahkan Imagery ke kontrol lapisan
};
L.control.layers(lapisanDasar).addTo(map);

// Tambahkan kontrol skala ke peta
L.control.scale({ position: "bottomleft" }).addTo(map);
