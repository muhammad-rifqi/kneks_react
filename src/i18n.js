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
                "bisnisDanKewirausahaan": "Sharia Business and Entrepreneurship",
                "infrastrukturEkosistem": "Sharia Ecosystem Infrastructure",
                "beritaKegiatan": "News & Activities",
                "beritaTerkini": "Latest News",
                "beritaDirektorat": "Directorate News",
                "beritaKdeks": "KDEKS News",
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

            "event": "Islamic Economics and Finance Events",
            "bannerJudul": "Uniting steps, advancing the country",
            "bannerIsi": "By accelerating, expanding and advancing the development of Islamic economics and finance in order to strengthen national economic resilience.",
            "tombol": "See More",

            "beritaTerkait": "Related News",
            "zona": "Khas Zone",
            "agenda_maps" : "Maps Agenda",
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

            "sosialMedia": "Social Media",
            "ePustaka": "E-Library",
            "instagram": "Instagram Post",
            "tidakAdaData": "No data available",
            "instansi": "KNEKS Members",
            "instansiIsi": "KNEKS consists of 3 Coordinating Ministers, 7 Ministers, 3 Chairmen of government institutions,",
            "instansiIsi2": "Chairman of the MUI and Chairman of KADIN, with the Minister of Finance also serving as Secretary.",
            "nama": 'name',
            "email": 'email',
            "phone": 'phone',
            "subjek": 'subject',
            "tulisPesan": 'Write Message',
            "kirim": 'Send',
            'divisi': 'Division',
            "direktorat": {
                'direktoratIndustriProdukHalal': 'Directorate of Halal Product Industry',
                'direktoratIndustriProdukHalalAdalah': 'The Directorate of Halal Product Industry is a directorate under the National Committee for Islamic Economy and Finance (KNEKS) focused on the development and empowerment of the halal product industry in Indonesia.',
                'kneksSendiriAdalah': 'KNEKS is an institution established to promote the development of Islamic economy and finance in Indonesia, with the Directorate of Halal Product Industry playing a key role in enhancing the competitiveness of Indonesian halal products in both domestic and international markets. By focusing on improving the quality and quantity of halal products, this Directorate plays an important role in supporting Indonesia as a leading player in the global halal product industry.',
                'direktoratJasaKeuanganSyariah': 'Directorate of Islamic Financial Services',
                'direktoratJasaKeuanganSyariahDibawahKneks': 'The Directorate of Islamic Financial Services under the National Committee for Islamic Economy and Finance (KNEKS) is responsible for developing and strengthening the Islamic financial services sector in Indonesia. As an institution with a strategic role in accelerating the development of the Islamic economy and finance, KNEKS has established the Directorate of Islamic Financial Services to focus on financial sectors that adhere to Islamic principles, including Islamic banking, Islamic insurance, Islamic capital markets, and other Sharia-compliant financial sectors.',
                'direktoratJasaKeuanganSyariahMemiliki': 'The Directorate of Islamic Financial Services plays a crucial role in creating an inclusive, sustainable financial ecosystem that aligns with Sharia values, enabling Indonesia to become a global hub for Islamic economy and finance.',
                'direktoratKeuanganSosialSyariah': 'Directorate of Islamic Social Finance',
                'direktoratKeuanganSosialSyariahDiKneks': 'The Directorate of Islamic Social Finance within the National Committee for Islamic Economy and Finance (KNEKS) focuses on developing the Sharia-based social finance sector in Indonesia. This directorate plays a role in managing and optimizing the potential of Islamic social finance, including zakat (almsgiving), infak (voluntary charity), sedekah (donations), and waqf (endowments), collectively known as ZISWAF.',
                'direktoratIniBertujuanUntuk': 'This directorate aims to strengthen the Islamic social finance ecosystem in Indonesia to make a more significant contribution in addressing economic inequality and supporting sustainable development in accordance with Sharia principles.',
                'direktoratBisnisDanKewirausahaanSyariah': 'Directorate of Islamic Business and Entrepreneurship',
                'direktoratBisnisDanKewirausahaanSyariahDiKneks': 'The Directorate of Islamic Business and Entrepreneurship within the National Committee for Islamic Economy and Finance (KNEKS) is responsible for driving economic growth through the development of businesses and entrepreneurship based on Sharia principles. The main focus of this directorate is to strengthen the Islamic business ecosystem and create opportunities for entrepreneurs and micro, small, and medium enterprises (MSMEs) that wish to operate in accordance with Sharia principles.',
                'denganPeranIniDirektoratBisnisDanKewirausahaanSyariah': 'With this role, the Directorate of Islamic Business and Entrepreneurship at KNEKS aims to foster the creation of an inclusive and sustainable business climate in line with Sharia values, while positioning Indonesia as a competitive global hub for Islamic business.',
                'direktoratInfrastrukturEkosistemSyariah': 'Directorate of Islamic Ecosystem Infrastructure',
                'direktoratInfrastrukturEkosistemSyariahDiKneks': 'The Directorate of Islamic Ecosystem Infrastructure within the National Committee for Islamic Economy and Finance (KNEKS) is responsible for building and strengthening the infrastructure that supports the development of the Islamic economy in Indonesia. This directorate aims to create a solid and sustainable ecosystem to enable the faster growth of the Islamic economy and make a significant contribution to the national economy.',
                'denganBerfokusPadaInfrastrukturYangMendukung': 'By focusing on infrastructure that supports the development of various sectors, the Directorate of Islamic Ecosystem Infrastructure at KNEKS strives to position Indonesia as one of the leading centers for Islamic economy in the world and enhance the global competitiveness of the Islamic industry.'
            },
            "about": {
                "kneksMerupakan": "The National Committee for Islamic Economy and Finance (KNEKS) is a transformation from KNKS aimed at enhancing the development of the Islamic economic and financial ecosystem and positioning Indonesia as the Global Halal Hub.",
                "pencananganTitikAwal": "The initial milestone to position Indonesia as one of the key players and a global hub for Islamic economy was marked by the launch of the Indonesia Sharia Economic Masterplan in May 2019."
            },
            "sejarahKneks": "History of KNEKS",
            "dalamRangkaMendukung": "In support of national economic development and to accelerate the growth of the Islamic finance sector, the government established KNKS on November 8, 2016, to enhance the effectiveness and efficiency of implementing national development plans in the field of Islamic finance and economy. Later, with the enactment on February 10, 2020, the government reformed the National Islamic Finance Committee into the National Committee for Islamic Economy and Finance (KNEKS) with the aim of strengthening the development of the Islamic economic and financial ecosystem to support national economic growth.",
            "landasanHukum": "Legal Basis",
            "peraturanPresiden": "Presidential Regulation of the Republic of Indonesia No. 28 of 2020",
            "isiPerpres": "The National Committee for Islamic Economy and Finance. JDIH Marves – To enhance the development of the Islamic economy and finance ecosystem in support of national economic development, it was necessary to transform the National Committee for Islamic Finance into the National Committee for Islamic Economy and Finance.",
            "filosofiLogo": "Logo Philosophy",
            "hurufN": "Letter N",
            "hurufNdariKneks": "The letter N in the KNEKS logo has been uniquely modified to become the logo's focal point. Its placement aligns with and integrates into the KNEKS letters, giving the logo a more streamlined appearance and directing the audience's focus directly to KNEKS. This design choice enhances immediate recognition of the KNEKS logo. The N is further modified into an angled line with three dots, symbolizing KNEKS’s three primary missions: to accelerate, expand, and advance the development of sharia economy and finance to strengthen national economic resilience.",
            "pintuGerbang": "The Gateway",
            "sengajaDirancangAgarMenyerupaiPintuGerbang": "Intentionally designed to resemble a gateway, symbolizing openness. KNEKS is open to stakeholders for the development of the sharia economy and finance. This gateway also represents openness to foreign investors looking to invest in Indonesia.",
            "arah": "Direction",
            "arahPanahKesampingKananAtas": "The upward-right arrow symbolizes progressiveness. This direction conveys a positive impression. Through this symbol, KNEKS communicates its progressive functions, such as providing policy direction recommendations and strategic national development programs, among other initiatives.",
            "tugasKneks": "KNEKS Responsibilities",
            "KneksBertugasMempercepat": "KNEKS is responsible for accelerating, expanding, and advancing the development of the sharia economy and finance to support national economic resilience.",
            "fungsiKneks": "Functions of KNEKS",
            "pemberianRekomendasiArahKebijakan": "Provision of recommendations for policy directions and strategic programs in the development of the national sharia economy and finance sector.",
            "pelaksanaanKoordinasiSinkronisasi": "Implementation of coordination, synchronization, and synergy in the preparation and execution of policy direction plans and strategic programs in the sharia economy and finance sector.",
            "perumusanDanPemberianRekomendasi": "Formulation and provision of recommendations for solving issues in the sharia economy and finance sector.",
            "pemantauanDanEvaluasi": "Monitoring and evaluation of the implementation of policy directions and strategic programs in the sharia economy and finance sector.",
            "sejarahEkonomiSyariah": "History of Islamic Economics",
            "beritaDanKegiatan": "News and Activities",
            "manajemenEksekutif": "Executive Management"
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
                "bisnisDanKewirausahaan": "Bisnis dan Kewirausahaan Syariah",
                "infrastrukturEkosistem": "Infrastruktur Ekosistem Syariah",
                "beritaKegiatan": "Berita & Kegiatan",
                "beritaTerkini": "Berita Terkini",
                "beritaDirektorat": "Berita Direktorat",
                "beritaKdeks": "Berita KDEKS",
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
            "instagram": "Postingan Instagram",

            "event": "Event Ekonomi dan Keuangan Syariah",

            "zona": "Zona KHAS",
            "agenda_maps" : "Agenda Maps",
            "bannerJudul": "Menyatukan langkah, Memajukan Negeri",
            "bannerIsi": "Dengan mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka memperkuat ketahanan ekonomi nasional ",
            "tombol": "Lihat Selengkapnya",


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
            "sosialMedia": "Media Sosial",
            "ePustaka": "E-Pustaka",
            "tidakAdaData": "Tidak ada data",
            "instansi": "Anggota KNEKS",
            "instansiIsi": "KNEKS beranggotakan 3 Menteri Koordinator, 7 Menteri, 3 Ketua lembaga pemerintah,",
            "instansiIsi2": "Ketua Umum MUI dan Ketua Umum KADIN, dengan Menteri Keuangan merangkap sebagai Sekretaris.",
            "nama": 'nama',
            "email": 'email',
            "phone": 'nomor telepon',
            "subjek": 'subjek',
            "tulisPesan": 'Tulis Pesan',
            "kirim": 'Kirim',
            'divisi': 'Divisi',
            "direktorat": {
                'direktoratIndustriProdukHalal': 'Direktorat Industri Produk Halal',
                'direktoratIndustriProdukHalalAdalah': 'Direktorat Industri Produk Halal adalah salah satu direktorat di bawah KNEKS (Komite Nasional Ekonomi dan Keuangan Syariah) yang berfokus pada pengembangan dan pemberdayaan industri produk halal di Indonesia.',
                'kneksSendiriAdalah': 'KNEKS sendiri adalah lembaga yang dibentuk untuk mendorong pengembangan ekonomi dan keuangan syariah di Indonesia, dan Direktorat Industri Produk Halal memiliki peran penting dalam meningkatkan daya saing produk halal Indonesia di pasar domestik maupun internasional. Dengan fokus pada peningkatan kualitas dan kuantitas produk halal, Direktorat ini berperan penting dalam mendukung Indonesia sebagai salah satu pemain utama dalam industri produk halal global.',
                'direktoratJasaKeuanganSyariah': 'Direktorat Jasa Keuangan Syariah',
                'direktoratJasaKeuanganSyariahDibawahKneks': 'Direktorat Jasa Keuangan Syariah di bawah KNEKS (Komite Nasional Ekonomi dan Keuangan Syariah) bertugas untuk mengembangkan dan memperkuat sektor jasa keuangan syariah di Indonesia. KNEKS sebagai lembaga yang memiliki peran strategis dalam mempercepat pengembangan ekonomi dan keuangan syariah, memiliki Direktorat Jasa Keuangan Syariah untuk fokus pada sektor keuangan yang sesuai dengan prinsip-prinsip syariah Islam, termasuk perbankan syariah, asuransi syariah, pasar modal syariah, dan sektor keuangan lainnya yang berbasis syariah.',
                'direktoratJasaKeuanganSyariahMemiliki': 'Direktorat Jasa Keuangan Syariah memiliki peran yang sangat penting dalam menciptakan ekosistem keuangan yang inklusif, berkelanjutan, dan sesuai dengan nilai-nilai syariah, sehingga Indonesia dapat menjadi pusat ekonomi dan keuangan syariah global.',
                'direktoratKeuanganSosialSyariah': 'Direktorat Keuangan Sosial Syariah',
                'direktoratKeuanganSosialSyariahDiKneks': 'Direktorat Keuangan Sosial Syariah di Komite Nasional Ekonomi dan Keuangan Syariah (KNEKS) berfokus pada pengembangan sektor keuangan sosial berbasis prinsip syariah di Indonesia. Direktorat ini memiliki peran dalam mengelola dan mengoptimalkan potensi keuangan sosial syariah, termasuk zakat, infak, sedekah, dan wakaf (ZISWAF).',
                'direktoratIniBertujuanUntuk': 'Direktorat ini bertujuan untuk memperkuat ekosistem keuangan sosial syariah di Indonesia agar dapat berkontribusi lebih signifikan dalam mengatasi ketimpangan ekonomi serta mendukung pembangunan berkelanjutan sesuai prinsip-prinsip syariah.',
                'direktoratBisnisDanKewirausahaanSyariah': 'Direktorat Bisnis Dan Kewirausahaan Syariah',
                'direktoratBisnisDanKewirausahaanSyariahDiKneks': 'Direktorat Bisnis dan Kewirausahaan Syariah di Komite Nasional Ekonomi dan Keuangan Syariah (KNEKS) bertanggung jawab untuk mendorong pertumbuhan ekonomi melalui pengembangan bisnis dan kewirausahaan yang berlandaskan prinsip syariah. Fokus utama dari direktorat ini adalah memperkuat ekosistem bisnis syariah dan menciptakan peluang bagi para pengusaha dan pelaku usaha mikro, kecil, dan menengah (UMKM) yang ingin menjalankan usahanya sesuai dengan prinsip syariah.',
                'denganPeranIniDirektoratBisnisDanKewirausahaanSyariah': 'Dengan peran ini, Direktorat Bisnis dan Kewirausahaan Syariah KNEKS berupaya mendorong terciptanya iklim usaha yang inklusif dan berkelanjutan sesuai dengan nilai-nilai syariah, serta menjadikan Indonesia sebagai pusat bisnis syariah yang kompetitif di tingkat global.',
                'direktoratInfrastrukturEkosistemSyariah': 'Direktorat Infrastruktur Ekosistem Syariah',
                'direktoratInfrastrukturEkosistemSyariahDiKneks': 'Direktorat Infrastruktur Ekosistem Syariah di Komite Nasional Ekonomi dan Keuangan Syariah (KNEKS) bertugas untuk membangun dan memperkuat infrastruktur yang mendukung pengembangan ekonomi syariah di Indonesia. Direktorat ini bertujuan menciptakan ekosistem yang solid dan berkelanjutan agar ekonomi syariah dapat tumbuh lebih cepat dan berkontribusi signifikan terhadap perekonomian nasional.',
                'denganBerfokusPadaInfrastrukturYangMendukung': 'Dengan berfokus pada infrastruktur yang mendukung perkembangan berbagai sektor, Direktorat Infrastruktur Ekosistem Syariah KNEKS berupaya untuk menjadikan Indonesia sebagai salah satu pusat ekonomi syariah terkemuka di dunia dan meningkatkan daya saing industri syariah di tingkat global.'
            },
            "about": {
                "kneksMerupakan": "Komite Nasional Ekonomi dan Keuangan Syariah (KNEKS) merupakan perubahan dari KNKS untuk peningkatan pembangunan ekosistem ekonomi dan keuangan syariah serta menjadikan Indonesia sebagai Pusat Halal Dunia.",
                "pencananganTitikAwal": "Pencanangan titik awal untuk memposisikan Indonesia sebagai salah satu pelaku utama dan hub ekonomi syariah dunia dilakukan seiring dengan peluncuran Masterplan Ekonomi Syariah Indonesia pada bulan Mei 2019."
            },
            "sejarahKneks": "Sejarah KNEKS",
            "dalamRangkaMendukung": "Dalam rangka mendukung pembangunan ekonomi nasional dan mendorong percepatan pengembangan sektor keuangan syariah, pemerintah secara khusus mendirikan KNKS pada tanggal 8 November 2016 agar dapat meningkatkan efektifitas, efisiensi pelaksanaan rencana pembangunan nasional bidang keuangan dan ekonomi Syariah. Selanjutnya sejak diundangkan tanggal 10 Februari 2020, pemerintah melakukan perubahan Komite Nasional Keuangan Syariah menjadi Komite Nasional Ekonomi dan Keuangan Syariah yang bertujuan meningkatkan pembangunan ekosistem ekonomi dan keuangan syariah guna mendukung pembangunan ekonomi nasional.",
            "landasanHukum": "Landasan Hukum",
            "peraturanPresiden": "Peraturan Presiden RI No.28 Tahun 2020",
            "isiPerpres": "Komite Nasional Ekonomi dan Keuangan Syariah. JDIH Marves – Dalam rangka peningkatan pembangunan ekosistem ekonomi dan keuangan syariah guna mendukung pembangunan ekonomi nasional, perlu dilakukan perubahan Komite Nasionai Keuangan Syariah menjadi Komite Nasional Ekonomi dan Keuangan Syariah.",
            "filosofiLogo": "Filosofi Logo",
            "hurufN": "Huruf N",
            "hurufNdariKneks": "Huruf N dari KNEKS ini dimodifikasi sedemikian rupa menjadi unique point dari logo. Penempatannya yang sejajar dengan dan menjadi kesatuan dalam huruf KNEKS dimaksudkan agar logo terlihat lebih sederhana. Agar perhatian atau point of view audience langsung tertuju pada KNEKS. Sehingga hal ini membuat audience mengenali logo KNEKS dengan tepat dan seketika. Huruf N ini kemudian dimodIfikasi menjadi garis bersudut dengan tiga titik, yang menggambarkan tiga tugas utama KNEKS, yaitu mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka memperkuat ketahanan ekonomi nasional.",
            "pintuGerbang": "Pintu Gerbang",
            "sengajaDirancangAgarMenyerupaiPintuGerbang": "Sengaja dirancang agar menyerupai pintu gerbang yang berarti keterbukaan. KNEKS terbuka terhadap pemangku kepentingan untuk pengembangan ekonomi dan keuangan syariah. Pintu gerbang ini juga melambangkan keterbukaan terhadap investor asing untuk menanamkan modalnya di Indonesia.",
            "arah": "Arah",
            "arahPanahKesampingKananAtas": "Arah panah ke samping kanan atas adalah simbol dari progresif. Arah panah ke samping kanan atas ini mampu memberikan kesan positif. Melalui simbol ini ingin dikomunikasikan fungsi-fungsi KNEKS yang progresif, seperti pemberian rekomendasi arah kebijakan dan program strategis pembangunan nasional, dan lain-lain.",
            "tugasKneks": "Tugas KNEKS",
            "KneksBertugasMempercepat": "KNEKS bertugas mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka mendukung ketahanan ekonomi nasional.",
            "fungsiKneks": "Fungsi KNEKS",
            "pemberianRekomendasiArahKebijakan": "Pemberian rekomendasi arah kebijakan dan program strategis pembangunan nasional di sektor ekonomi dan keuangan syariah.",
            "pelaksanaanKoordinasiSinkronisasi": "Pelaksanaan koordinasi, sinkronisasi, sinergisitas penyusunan dan pelaksanaan rencana araha kebijakan dan program strategis pada sektor ekonomi dan keuangan syariah.",
            "perumusanDanPemberianRekomendasi": "Perumusan dan pemberian rekomendasi atas penyelesaian masalah di sektor ekonomi dan keuangan syariah.",
            "pemantauanDanEvaluasi": "Pemantauan dan evaluasi atas pelaksanaan arah kebijakan dan program strategis di sektor ekonomi dan keuangan syariah.",
            "sejarahEkonomiSyariah": "Sejarah Ekonomi Syariah",
            "beritaDanKegiatan": "Berita Dan Kegiatan",
            "manajemenEksekutif": "Manajemen Eksekutif"

        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'id',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie', 'navigator'], // Deteksi dari cookie dulu, baru dari browser
            caches: ['cookie'] // Simpan pilihan bahasa di cookie
        }
    });

export default i18n;
