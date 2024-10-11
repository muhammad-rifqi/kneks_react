import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "menu": {
                "home": "Home",
                "profile": "Profile",
                "direktorat": "Directorate",
                "beritaKegiatan": "News & Activities",
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
                "direktorat": "Direktorat",
                "beritaKegiatan": "Berita & Kegiatan",
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
