import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "menu": {
                "home": "Home",
                "profile": "Profile",
                "tentangKami": "About Us",
                "tentangEkonomiSyariah": "About Sharia Economics",
                "strukturOrganisasi": "Organizational Structure",
                "galeriFoto": "Photo Gallery",
                "galeriVideo": "Video Gallery",
                "direktorat": "Directorate",
                "industriProdukHalal": "Halal Product Industry",
                "jasaKeuanganSyariah": "Sharia Financial Services",
                "keuanganSosialSyariah": "Sharia Social Finance",
                "bisnisDanKewirausahaan": "Business and Entrepreneurship",
                "infrastrukturEkosistem": "Sharia Ecosystem Infrastructure",
                "beritaKegiatan": "News & Activities",
                "siaranPers": "Press Releases",
                "liputanMedia": "Media Coverage",
                "infoTerkini": "Latest Info",
                "opini": "Opinion",
                "agenda": "Agenda",
                "ePustaka": "E-Library",
                "data": "Data",
                "kdeks": "KDEKS",
                "kontak": "Contact",
            },
            "pencarian": "Search...",
            "alamat": "Address",


            "bannerJudul": "Uniting steps, advancing the country",
            "bannerIsi": "By accelerating, expanding and advancing the development of Islamic economics and finance in order to strengthen national economic resilience.",
            "tombol": "See More",

            "beritaTerkait": "Related News",

            "pernekalkan": "About Us",
            "pernekalkanJudul": "National Committee for Sharia Economics and Finance (KNEKS)",
            "pernekalkanIsi": "It is a change from KNKS to improve the development of the sharia economic and financial ecosystem and make Indonesia the World Halal Center. The launch of the starting point to position Indonesia as one of the main players and hubs of the world's sharia economy was carried out in line with the launch of the Indonesian Sharia Economic Masterplan in May 2019.",
       
            "isuUtama": "The main issue",
            "isuJudul": "Economy & Finance",
            "isuJudul2": "Sharia",
            "isuIsi": "Indonesia is a country with the largest Muslim majority and the largest number of Islamic financial institutions in the world. KNKS is present as a catalyst in efforts to accelerate, expand and advance the development of Islamic economics and finance in order to strengthen national economic resilience.",
            
            "isuPengembanganProdukIndustriHalal": "Halal Industrial Product Development",
            "isuPengembanganJasaKeuanganSyariah": "Development of Islamic Financial Services",
            "isuPengembanganKeuanganSosialSyariah": "Development of Sharia Social Finance",
            "isuPengembanganBisnisDanKewirausahaanSyariah": "Sharia Business and Entrepreneurship Development",
            "isuPengembanganInfrastrukturEkosistemSyariah": "Development of Sharia Ecosystem Infrastructure",

            "rekomendasi": "Other Agenda Recommendations",

            "sosialMedia" : "Social Media",

            "instansi" : "KNEKS Member",
            "instansiIsi" : "KNEKS consists of 3 Coordinating Ministers, 7 Ministers, 3 Chairmen of government institutions,",
            "instansiIsi2" : "Chairman of the MUI and Chairman of KADIN, with the Minister of Finance also serving as Secretary.",
        }
    },
    id: {
        translation: {
            "menu": {
                "home": "Beranda",
                "profile": "Profil",
                "tentangKami": "Tentang Kami",
                "tentangEkonomiSyariah": "Tentang Ekonomi Syariah",
                "strukturOrganisasi": "Struktur Organisasi",
                "galeriFoto": "Galeri Foto",
                "galeriVideo": "Galeri Video",
                "direktorat": "Direktorat",
                "industriProdukHalal": "Industri Produk Halal",
                "jasaKeuanganSyariah": "Jasa Keuangan Syariah",
                "keuanganSosialSyariah": "Keuangan Sosial Syariah",
                "bisnisDanKewirausahaan": "Bisnis dan Kewirausahaan",
                "infrastrukturEkosistem": "Infrastruktur Ekosistem Syariah",
                "beritaKegiatan": "Berita & Kegiatan",
                "siaranPers": "Siaran Pers",
                "liputanMedia": "Liputan Media",
                "infoTerkini": "Info Terkini",
                "opini": "Opini",
                "agenda": "Agenda",
                "ePustaka": "E-Pustaka",
                "data": "Data",
                "kdeks": "KDEKS",
                "kontak": "Kontak",
            },
            "pencarian": "Cari...",

            "alamat": "Alamat",


            "bannerJudul": "Menyatukan langkah, Memajukan Negeri",
            "bannerIsi": "Dengan mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka memperkuat ketahanan ekonomi nasional ",
            "tombol": "Lihat Selengkap",


            "beritaTerkait": "Berita Terkait",

            "pernekalkan": "Perkenalkan",
            "pernekalkanJudul": "Komite Nasional Ekonomi dan Keuangan Syariah (KNEKS)",
            "pernekalkanIsi": "Merupakan perubahan dari KNKS untuk peningkatan pembangunan ekosistem ekonomi dan keuangan syariah serta menjadikan Indonesia sebagai Pusat Halal Dunia. Pencanangan titik awal untuk memposisikan Indonesia sebagai salah satu pelaku utama dan hub ekonomi syariah dunia dilakukan seiring dengan peluncuran Masterplan Ekonomi Syariah Indonesia pada bulan Mei 2019.",
            
            "isuUtama": "Isu Utama",
            "isuJudul": "Ekonomi & Keuangan",
            "isuJudul2": "Syariah",
            "isuIsi": "Indonesia merupakan negara dengan mayoritas muslim terbesar dan jumlah institusi keuangan syariah terbanyak di dunia. KNKS hadir sebagai katalisator dalam upaya mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka memperkuat ketahanan ekonomi nasional.",
            
            "isuPengembanganProdukIndustriHalal": "Pengembangan Produk Industri Halal",
            "isuPengembanganJasaKeuanganSyariah": "Pengembangan Jasa Keuangan Syariah",
            "isuPengembanganKeuanganSosialSyariah": "Pengembangan Keuangan Sosial Syariah",
            "isuPengembanganBisnisDanKewirausahaanSyariah": "Pengembangan Bisnis dan Kewirausahaan Syariah",
            "isuPengembanganInfrastrukturEkosistemSyariah": "Pengembangan Infrastruktur Ekosistem Syariah",

            "rekomendasi": "Rekomendasi Agenda Lainnya",
            "sosialMedia" : "Media Sosial",

            "instansi" : "Anggota KNEKS",
            "instansiIsi" : "KNEKS beranggotakan 3 Menteri Koordinator, 7 Menteri, 3 Ketua lembaga pemerintah,",
            "instansiIsi2" : "Ketua Umum MUI dan Ketua Umum KADIN, dengan Menteri Keuangan merangkap sebagai Sekretaris.",
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie', 'navigator'], // Deteksi dari cookie dulu, baru dari browser
            caches: ['cookie'] // Simpan pilihan bahasa di cookie
        }
    });

export default i18n;
