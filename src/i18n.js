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
                "kontak": "Contact"
            }
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
                "kontak": "Kontak"
            }
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
