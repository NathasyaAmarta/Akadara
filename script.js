// ==========================================
// 1. DATA JURUSAN & TOP 3 PTN (Jalur Lokal/Offline)
// ==========================================
const databasePTN = {
    IPA: {
        "Kedokteran": [
            { nama: "Universitas Indonesia", logo: "logo ui.png" },
            { nama: "Universitas Airlangga", logo: "logo unair.png" },
            { nama: "Universitas Gadjah Mada", logo: "logo ugm.png" }
        ],
        "Teknik Informatika": [
            { nama: "Institut Teknologi Bandung", logo: "logo itb.png" },
            { nama: "Institut Teknologi Sepuluh Nopember", logo: "logo its.png" },
            { nama: "Universitas Padjajaran", logo: "logo unpad.png" }
        ],
        "Aktuaria": [
            { nama: "Universitas Indonesia", logo: "logo ui.png" },
            { nama: "Universitas Udayana", logo: "logo udayana.png"},
            { nama: "Universitas Airlangga", logo: "logo unair.png"}
        ],
        "Farmasi": [
            { nama: "Universitas Gadjah Mada", logo: "logo ugm.png" },
            { nama: "Universitas Airlangga", logo: "logo unair.png" },
            { nama: "Universitas Indonesia", logo: "logo ui.png" }
        ],
        "Teknik Industri": [
            { nama: "Institut Teknologi Bandung", logo: "logo itb.png" },
            { nama: "Institut Teknologi Sepuluh Nopember", logo: "logo its.png" },
            { nama: "Universitas Sebelas Maret", logo: "logo uns.png" }
        ]
    
    },
    IPS: {
        "Hukum": [
            { nama: "Universitas Indonesia", logo: "logo ui.png" },
            { nama: "Universitas Gadjah Mada", logo: "logo ugm.png" },
            { nama: "Universitas Sebelas Maret", logo: "logo uns.png" }
        ],
        "Hubungan Internasional": [
            { nama: "Universitas Padjadjaran", logo: "logo unpad.png" },
            { nama: "Universitas Indonesia", logo: "logo ui.png" },
            { nama: "Universitas Airlangga", logo: "logo unair.png" }
        ],
        "Psikologi": [
            { nama: "Universitas Indonesia", logo: "logo ui.png" },
            { nama: "Universitas Pendidikan Indonesia", logo: "logo upi.png" },
            { nama: "Universitas Negeri Malang", logo: "logo unm.png" }
        ],
        "Ilmu Komunikasi": [
            { nama: "Universitas Indonesia", logo: "logo ui.png" },
            { nama: "Universitas Gadjah Mada", logo: "logo ugm.png" },
            { nama: "Universitas Unair", logo: "logo unair.png"}
        ],
        "Akuntansi": [
            { nama: "Universitas Indonesia", logo: "logo ui.png" },
            { nama: "Universitas Unair", logo: "logo unair.png"},
            { nama: "Universitas Gadjah Mada", logo: "logo ugm.png" }
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
