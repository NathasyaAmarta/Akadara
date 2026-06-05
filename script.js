// ==========================================
// 1. DATA JURUSAN & TOP 3 PTN (TIDAK DIUBAH)
// ==========================================
const databasePTN = {
    IPA: {
        "Kedokteran": [
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Airlangga", logo: "logo unair remove.png" },
            { nama: "Universitas Gadjah Mada", logo: "logo ugm remove.png" }
        ],
        "Teknik Informatika": [
            { nama: "Institut Teknologi Bandung", logo: "logo itb remove.png" },
            { nama: "Institut Teknologi Sepuluh Nopember", logo: "logo its remove.png" },
            { nama: "Universitas Padjajaran", logo: "logo unpad remove.png" }
        ],
        "Arsitektur": [
            { nama: "Institut Teknologi Bandung", logo: "logo itb remove.png" },
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Institut Teknologi Sepuluh Nopember", logo: "logo its remove.png" }
        ],
        "Aktuaria": [
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Udayana", logo: "logo udayana remove.png"},
            { nama: "Universitas Airlangga", logo: "logo unair remove.png"}
        ],
        "Farmasi": [
            { nama: "Universitas Gadjah Mada", logo: "logo ugm remove.png" },
            { nama: "Universitas Airlangga", logo: "logo unair remove.png" },
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" }
        ],
        "Ilmu Gizi": [
            { nama: "Universitas Diponegoro", logo: "logo undip remove.png" },
            { nama: "Institut Pertanian Bogor", logo: "logo ipb remove.png" },
            { nama: "Universitas Brawijaya", logo: "logo ub remove.png" }
        ],
        "Matematika": [
            { nama: "Universitas Pendidikan Indonesia", logo: "logo upi remove.png" },
            { nama: "Universitas Negeri Malang", logo: "logo unm remove.png" },
            { nama: "Universitas Negeri Yogyakarta", logo: "logo uny remove.png" }
        ],
        "Teknik Industri": [
            { nama: "Institut Teknologi Bandung", logo: "logo itb remove.png" },
            { nama: "Institut Teknologi Sepuluh Nopember", logo: "logo its remove.png" },
            { nama: "Universitas Sebelas Maret", logo: "logo uns remove.png" }
        ],
        "Teknik Sipil": [
            { nama: "Institut Teknologi Bandung", logo: "logo itb remove.png" },
            { nama: "Universitas Gadjah Mada", logo: "logo ugm remove.png" },
            { nama: "Institut Pertanian Bogor", logo: "logo ipb remove.png" }
        ],
        "Peternakan": [
            { nama: "Universitas Diponegoro", logo: "logo undip remove.png" },
            { nama: "Institut Pertanian Bogor", logo: "logo ipb remove.png" },
            { nama: "Universitas Brawijaya", logo: "logo ub remove.png" }
        ]
    },
    IPS: {
        "Hukum": [
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Gadjah Mada", logo: "logo ugm remove.png" },
            { nama: "Universitas Sebelas Maret", logo: "logo uns remove.png" }
        ],
        "Hubungan Internasional": [
            { nama: "Universitas Padjadjaran", logo: "logo unpad remove.png" },
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Airlangga", logo: "logo unair remove.png" }
        ],
        "Ilmu Politik": [
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Diponegoro", logo: "logo undip remove.png" },
            { nama: "Universitas Padjajaran", logo: "logo unpad remove.png" }
        ],
        "Psikologi": [
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Pendidikan Indonesia", logo: "logo upi remove.png" },
            { nama: "Universitas Negeri Malang", logo: "logo unm remove.png" }
        ],
        "Ilmu Komunikasi": [
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Gadjah Mada", logo: "logo ugm remove.png" },
            { nama: "Universitas Unair", logo: "logo unair remove.png"}
        ],
        "Akuntansi": [
            { nama: "Universitas Udayana", logo: "logo udayana remove.png"},
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Trisakti", logo: "logo trisakti remove.png" }
        ],
        "Ilmu ekonomi": [
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Unair", logo: "logo unair remove.png"},
            { nama: "Universitas Gadjah Mada", logo: "logo ugm remove.png" }
        ],
        "Kriminologi": [
            { nama: "Universitas Diponegoro", logo: "logo undip remove.png" },
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Semarang", logo: "logo usm remove.png" }
        ],
        "Manajemen": [
            { nama: "Universitas Indonesia", logo: "logo ui remove.png" },
            { nama: "Universitas Udayana", logo: "logo udayana remove.png"},
            { nama: "Institut Teknologi Bandung", logo: "logo itb remove.png" }
        ],
        "DKV": [
            { nama: "Institut Teknologi Bandung", logo: "logo itb remove.png" },
            { nama: "Institut Teknologi Sepuluh Nopember", logo: "logo its remove.png" },
            { nama: "Universitas Negeri Semarang", logo: "logo unnes remove.png" }
        ]
    }
};

// ==========================================
// 2. NAVIGASI MENU RESPONSIF
// ==========================================
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    if(navbar) navbar.style.transform = "translateY(0px)";
}

function cancelMenu() {
    const navbar = document.querySelector(".dropdown");
    if(navbar) navbar.style.transform = "translateY(-500px)";
}

// ==========================================
// 3. LOGIKA PRODUK CHOOSE YOUR PTN (FIXED TOTAL)
// ==========================================
function updateJurusan() {
    const kategoriSelect = document.getElementById('kategori');
    const jurusanSelect = document.getElementById('jurusan');

    if (!kategoriSelect || !jurusanSelect) return;

    const kategoriTerpilih = kategoriSelect.value;

    // Reset isi dropdown jurusan tiap kali kategori diganti
    jurusanSelect.innerHTML = '<option value="">-- Pilih Jurusan --</option>';

    // Memastikan pemanggilan databasePTN sesuai dengan nama objek di atas
    if (kategoriTerpilih && databasePTN[kategoriTerpilih]) {
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

function cekPTN() {
    const kategoriSelect = document.getElementById('kategori');
    const jurusanSelect = document.getElementById('jurusan');
    const hasilDiv = document.getElementById('hasil');
    const containerLogo = document.getElementById('container-logo');
    const namaJurusanTerpilih = document.getElementById('nama-jurusan-terpilih');

    if (!kategoriSelect || !jurusanSelect || !hasilDiv || !containerLogo || !namaJurusanTerpilih) return;

    const kategori = kategoriSelect.value;
    const jurusan = jurusanSelect.value;

    if (!kategori || !jurusan) {
        alert("Pilih kategori dan jurusan dulu ya!");
        return;
    }

    namaJurusanTerpilih.textContent = jurusan;
    containerLogo.innerHTML = ''; 

    // Memastikan pemanggilan objek databasePTN di sini juga benar menggunakan PTN kapital
    const dataKampus = databasePTN[kategori][jurusan];

    if (dataKampus) {
        dataKampus.forEach((ptn, index) => {
            const item = document.createElement('div');
            item.className = 'item-ptn';
            item.style.animationDelay = `${index * 0.08}s`; 

            item.innerHTML = `
                <img src="${ptn.logo}" alt="Logo ${ptn.nama}" class="logo-campus">
                <p class="nama-ptn-bawah">${ptn.nama}</p>
            `;
            containerLogo.appendChild(item);
        });
    }

    hasilDiv.style.display = 'block';
}
