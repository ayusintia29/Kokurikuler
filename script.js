/* ========= MODAL OPEN & CLOSE ========= */
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}


/* ========= MAP INTERAKTIF LEAFLET ========= */
var map = L.map('map').setView([-8.4095, 115.1889], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

const kabupaten = [
    {
        nama: "Badung",
        lat: -8.581, lon: 115.146,
        tradisi: "Tradisi Mepantigan",
        destinasi: "Pantai Kuta, GWK",
        kuliner: "Ayam Betutu Gilimanuk",
        event: "Festival Layang-Layang",
        img: "badung.jpg"
    },
    {
        nama: "Gianyar",
        lat: -8.544, lon: 115.325,
        tradisi: "Tari Barong",
        destinasi: "Ubud Palace",
        kuliner: "Lawar Kuwir",
        event: "Ubud Art Festival",
        img: "gianyar.jpg"
    },
    {
        nama: "Tabanan",
        lat: -8.540, lon: 115.118,
        tradisi: "Ngusaba",
        destinasi: "Tanah Lot",
        kuliner: "Jaje Laklak",
        event: "Tanah Lot Art Festival",
        img: "tabanan.jpg"
    },
    {
        nama: "Karangasem",
        lat: -8.450, lon: 115.600,
        tradisi: "Usabha Sambah",
        destinasi: "Lempuyang Temple",
        kuliner: "Serombotan",
        event: "Pesta Kesenian Karangasem",
        img: "karangasem.jpg"
    },
    {
        nama: "Bangli",
        lat: -8.326, lon: 115.354,
        tradisi: "Upacara Ngusaba Desa",
        destinasi: "Kintamani - Batur",
        kuliner: "Bebek Timbungan",
        event: "Batur Cultural Festival",
        img: "bangli.jpg"
    }
];

kabupaten.forEach(k => {
    L.marker([k.lat, k.lon])
        .addTo(map)
        .bindPopup(`
            <h3>${k.nama}</h3>
            <img src="${k.img}" style="width:100%; border-radius:10px; margin:10px 0;">
            <b>Tradisi Khas:</b> ${k.tradisi}<br>
            <b>Destinasi Populer:</b> ${k.destinasi}<br>
            <b>Kuliner Khas:</b> ${k.kuliner}<br>
            <b>Event Budaya:</b> ${k.event}
        `);
});
