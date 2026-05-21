// ==========================================
// 1. DATA JURUSAN & TOP 3 PTN (Jalur Lokal/Offline)
// ==========================================
const databasePTN = {
    IPA: {
        "Kedokteran": [
            { nama: "UI", logo: "logo ui.png" },
            { nama: "UGM", logo: "logo ugm.png" },
            { nama: "UNAIR", logo: "logo unair.png" }
        ],
        "Teknik Informatika": [
            { nama: "ITB", logo: "logo itb.png" },
            { nama: "ITS", logo: "logo its.png" },
            { nama: "Universitas Padjajaran", logo: "logo unpad.png" }
        ],
        "Aktuaria": [
            { nama: "Universitas Indonesia", logo: "logo ui.png" },
            { nama: "Universitas Udayana", logo: "logo itb
    },
    IPS: {
        "Hukum": [
            { nama: "UI", logo: "logo_ui.png" },
            { nama: "UGM", logo: "logo_ugm.png" },
            { nama: "UNDIP", logo: "logo_undip.png" }
        ],
        "Akuntansi": [
            { nama: "UI", logo: "logo_ui.png" },
            { nama: "UGM", logo: "logo_ugm.png" },
            { nama: "UNPAD", logo: "logo_unpad.png" }
        ]
    }
};

// ==========================================
// 2. NAVIGASI MENU RESPONSIF (Code Asli Lo)
// ==========================================
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// ==========================================
// 3. LOGIKA PRODUK CHOOSE YOUR PTN
// ==========================================

// Fungsi untuk membuka lock dan update isi dropdown jurusan spesifik
function updateJurusan() {
    const kategoriSelect = document.getElementById('kategori');
    const jurusanSelect = document.getElementById('jurusan');
    const kategoriTerpilih = kategoriSelect.value;
    
    // Teks ini akan muncul di Inspect Console browser buat pembuktian
    console.log("Kategori yang lo pilih adalah: " + kategoriTerpilih);
    
    jurusanSelect.innerHTML = '<option value="">-- Pilih Jurusan --</option>';
    
    if (kategoriTerpilih && databasePTN[kategoriTerpilih]) {
        // Baris ini yang bertugas membuka gembok dropdown jurusan
        jurusanSelect.disabled = false; 
        
        const daftarJurusan = Object.keys(databasePTN[kategoriTerpilih]);
        daftarJurusan.forEach(jurusan => {
            const opt = document.createElement('option');
            opt.value = jurusan;
            opt.textContent = jurusan;
            jurusanSelect.appendChild(opt);
        });
    } else {
        jurusanSelect.disabled = true;
        jurusanSelect.innerHTML = '<option value="">-- Pilih Kategori Dulu --</option>';
    }
}
// Fungsi untuk menampilkan hasil pencarian 3 PTN terbaik beserta animasinya
function cekPTN() {
    const kategori = document.getElementById('kategori').value;
    const jurusan = document.getElementById('jurusan').value;
    const hasilDiv = document.getElementById('hasil');
    const containerLogo = document.getElementById('container-logo');
    const namaJurusanTerpilih = document.getElementById('nama-jurusan-terpilih');

    // Validasi jika user belum memilih form secara lengkap
    if (!kategori || !jurusan) {
        alert("Pilih kategori dan jurusan dulu ya!");
        return;
    }

    // Update teks nama jurusan yang dicari pada judul hasil
    namaJurusanTerpilih.textContent = jurusan;
    
    // Kosongkan container hasil pencarian yang sebelumnya
    containerLogo.innerHTML = ''; 

    // Ambil data top 3 PTN dari database di atas
    const dataKampus = databasePTN[kategori][jurusan];

    // Inject element HTML logo kampus secara dinamis
    dataKampus.forEach((ptn, index) => {
        const item = document.createElement('div');
        item.className = 'item-ptn';
        
        // Memberikan jeda waktu muncul animasi (staggered delay) antar kampus
        item.style.animationDelay = `${index * 0.15}s`; 

        item.innerHTML = `
            <img src="${ptn.logo}" alt="Logo ${ptn.nama}" class="logo-campus">
            <p class="nama-ptn-bawah">${ptn.nama}</p>
        `;
        containerLogo.appendChild(item);
    });

    // Tampilkan block container hasil pencarian ke layar
    hasilDiv.style.display = 'block';
}
