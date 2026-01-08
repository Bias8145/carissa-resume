import { ResumeData } from './types';

export const data: Record<'ID' | 'EN', ResumeData> = {
  ID: {
    ui: {
      nav: {
        profile: "Profil",
        experience: "Pengalaman",
        education: "Pendidikan",
        achievements: "Prestasi",
        skills: "Keahlian"
      },
      header: {
        resume: "Resume"
      },
      profile: {
        hello: "HALO, SAYA",
        downloadCv: "Unduh CV"
      },
      education: {
        gpa: "IPK",
        thesis: "Tugas Akhir"
      },
      achievements: {
        awards: "Penghargaan",
        certifications: "Sertifikasi"
      },
      skills: {
        hard: "Keahlian Teknis",
        soft: "Keahlian Interpersonal"
      }
    },
    profile: {
      name: "Carissa Ratri Kusuma Dewi",
      role: "Lulusan Teknologi Pangan",
      phone: "+62 812 4157 5406",
      email: "ichacarissa16@gmail.com",
      location: "Kota Batu, Jawa Timur",
      summary: "Lulusan S1 Teknologi Pangan, Universitas Muhammadiyah Malang dengan pengalaman di bidang pengolahan produk pangan, layanan pelanggan dan manajemen acara. Mampu mengolah bahan pangan hingga menjadi produk yang siap dipasarkan. Berpengalaman dalam memberikan solusi pelanggan dan meningkatkan kepuasan melalui pelayanan yang efisien. Memiliki keterampilan manajemen proyek, komunikasi, dan pemecahan masalah yang kuat."
    },
    education: [
      {
        institution: "Universitas Muhammadiyah Malang",
        period: "September 2018 – Juli 2022",
        degree: "S1 Jurusan Teknologi Pangan",
        gpa: "3.80/4.00",
        thesis: "Studi Ekstraksi Pigmen Antosianin Kulit Kopi Arabika dan Aplikasinya Dalam Pembuatan Soft Candy."
      }
    ],
    experience: [
      {
        role: "Freelance Wedding Organizer",
        company: "Krisna Wedding Planner, Blitar",
        period: "Februari 2023 – Juni 2024",
        description: [
          "Mengelola dan melaksanakan lebih dari 10 acara pernikahan dan event lainnya.",
          "Berhasil mendapatkan kontrak acara besar dengan mengelola hubungan klien secara profesional.",
          "Menyusun materi promosi yang menarik untuk meningkatkan kesadaran merek dan keterlibatan."
        ]
      },
      {
        role: "Call Center Agent 147",
        company: "PT Infomedia Nusantara, Malang",
        period: "Agustus 2023 – Maret 2024",
        description: [
          "Menerima panggilan masuk dan memberikan solusi tepat untuk keluhan pelanggan.",
          "Berhasil meningkatkan kepuasan pelanggan hingga 90% dengan penyelesaian keluhan yang cepat.",
          "Bertanggung jawab atas pengelolaan keluhan pelanggan hingga selesai."
        ]
      },
      {
        role: "Praktik Kerja Lapang",
        company: "CV Bagus Agriseta Mandiri, Batu",
        period: "Agustus 2021 – Oktober 2021",
        description: [
          "Melakukan proses produksi olahan buah dari bahan baku hingga produk jadi.",
          "Berinovasi dalam pembuatan produk baru yang siap kemas dan dipasarkan.",
          "Memimpin branding dan desain produk untuk meningkatkan daya tarik pasar."
        ]
      },
      {
        role: "Staf Paruh Waktu",
        company: "Universitas Muhammadiyah Malang Bakery",
        period: "November 2020",
        description: [
          "Melakukan proses produksi roti berbagai varian dari bahan baku hingga siap dipasarkan.",
          "Pemasaran produk roti berbagai varian di sekitar kampus hingga mencapai penjualan 50 roti selama 3 hari."
        ]
      }
    ],
    organization: [
      {
        role: "Anggota",
        name: "Koperasi Mahasiswa UMM",
        period: "September 2019 – Mei 2022",
        description: [
          "Mengelola Koperasi Mahasiswa.",
          "Melakukan kegiatan kewirausahaan lingkup universitas."
        ]
      }
    ],
    achievements: [
      {
        title: "Pendanaan Program Kreativitas Mahasiswa: Riset",
        institution: "Universitas Muhammadiyah Malang",
        period: "Oktober 2021",
        description: "Pekan Ilmiah Nasional: 'Pemanfaatan Pigmen Kulit Kopi Guna Meningkatkan Kualitas Hard Candy Tinggi Antioksidan'."
      },
      {
        title: "Beasiswa Kampus Mengajar I",
        institution: "SDN 2 Gadingkembar Jabung, Malang",
        period: "Maret 2021 – Juni 2021",
        description: "Berinovasi dalam pengembangan strategi pembelajaran kreatif serta peningkatan literasi siswa."
      }
    ],
    certifications: [
      { name: "Mindo Intensive Bootcamp Batch 17: Departemen Kualitas", year: "2024" },
      { name: "Kepemimpinan dan Manajemen Waktu", year: "2024" },
      { name: "Persiapan Mencari Kerja", year: "2024" },
      { name: "Sistem Manajemen Mutu ISO 9001:2015", year: "2024" },
      { name: "Sistem Manajemen Lingkungan ISO 14001:2015", year: "2024" },
      { name: "Sistem Manajemen K3 ISO 45001:2018", year: "2024" },
      { name: "Sistem Manajemen K3 SMK3 PP No. 50 Tahun 2012", year: "2024" },
      { name: "Sistem Manajemen Keamanan Pangan ISO 22000:2018", year: "2024" },
      { name: "Cara Produksi Pangan yang Baik (GMP)", year: "2024" },
      { name: "Analisis Bahaya dan Pengendalian Titik Kritis (HACCP)", year: "2024" },
      { name: "Prosedur Operasi Standar Sanitasi (SSOP)", year: "2024" },
      { name: "Pengendalian Mutu (QC): Alat, Penanganan Keluhan", year: "2024" },
      { name: "Jaminan Mutu (QA): Alat, Penanganan Produk Reject", year: "2024" },
      { name: "Label Pangan berdasarkan Regulasi Terbaru BPOM", year: "2024" },
      { name: "FMCG Fest 2.0", year: "2023" },
      { name: "Kemahiran Bahasa Inggris UMM (Skor: 241)", year: "2022" },
      { name: "Pengembangan Produk Pangan", year: "2022" },
    ],
    skills: {
      soft: ["Teknologi Pangan", "Manajemen Proyek", "Komunikasi Efektif", "Pelayanan Pelanggan"],
      hard: ["Microsoft Office", "Google Workspace", "Fotografi", "Videografi", "Canva", "Capcut"]
    }
  },
  EN: {
    ui: {
      nav: {
        profile: "Profile",
        experience: "Experience",
        education: "Education",
        achievements: "Achievements",
        skills: "Skills"
      },
      header: {
        resume: "Resume"
      },
      profile: {
        hello: "HELLO, I'M",
        downloadCv: "Download CV"
      },
      education: {
        gpa: "GPA",
        thesis: "Final Thesis"
      },
      achievements: {
        awards: "Awards",
        certifications: "Certifications"
      },
      skills: {
        hard: "Hard Skills",
        soft: "Soft Skills"
      }
    },
    profile: {
      name: "Carissa Ratri Kusuma Dewi",
      role: "Food Technology Graduate",
      phone: "+62 812 4157 5406",
      email: "ichacarissa16@gmail.com",
      location: "Batu City, East Java",
      summary: "Bachelor of Food Technology graduate from University of Muhammadiyah Malang with experience in food product processing, customer service, and event management. Capable of processing food materials into market-ready products. Experienced in providing customer solutions and increasing satisfaction through efficient service. Possesses strong project management, communication, and problem-solving skills."
    },
    education: [
      {
        institution: "University of Muhammadiyah Malang",
        period: "September 2018 – July 2022",
        degree: "Bachelor of Food Technology",
        gpa: "3.80/4.00",
        thesis: "Study of Arabica Coffee Skin Anthocyanin Pigment Extraction and Its Application in Soft Candy Making."
      }
    ],
    experience: [
      {
        role: "Freelance Wedding Organizer",
        company: "Krisna Wedding Planner, Blitar",
        period: "February 2023 – June 2024",
        description: [
          "Managed and executed over 10 weddings and other events.",
          "Successfully secured large event contracts by managing client relationships professionally.",
          "Created engaging promotional materials to increase awareness and engagement."
        ]
      },
      {
        role: "Call Center Agent 147",
        company: "PT Infomedia Nusantara, Malang",
        period: "August 2023 – March 2024",
        description: [
          "Handled inbound calls and provided precise solutions for customer complaints.",
          "Successfully increased customer satisfaction to 90% with fast and effective complaint resolution.",
          "Responsible for managing customer complaints until completion."
        ]
      },
      {
        role: "Field Work Practice",
        company: "CV Bagus Agriseta Mandiri, Batu",
        period: "August 2021 – October 2021",
        description: [
          "Conducted fruit processing production from raw materials to finished products.",
          "Innovated in creating new products ready for packaging and marketing.",
          "Led product branding and design to increase market appeal."
        ]
      },
      {
        role: "Part-Time Staff",
        company: "University of Muhammadiyah Malang Bakery",
        period: "November 2020",
        description: [
          "Performed bread production of various variants from raw materials to market-ready.",
          "Marketed various bread products around campus, achieving sales of 50 breads in 3 days."
        ]
      }
    ],
    organization: [
      {
        role: "Member",
        name: "UMM Student Cooperative",
        period: "September 2019 – May 2022",
        description: [
          "Managed the Student Cooperative.",
          "Conducted university-scope entrepreneurial activities."
        ]
      }
    ],
    achievements: [
      {
        title: "Student Creativity Program Funding: Research",
        institution: "University of Muhammadiyah Malang",
        period: "October 2021",
        description: "National Scientific Week: 'Utilization of Coffee Skin Pigments to Improve High Antioxidant Hard Candy Quality'."
      },
      {
        title: "Kampus Mengajar I Scholarship",
        institution: "SDN 2 Gadingkembar Jabung, Malang",
        period: "March 2021 – June 2021",
        description: "Innovated in developing creative learning strategies and improving student literacy and numeracy."
      }
    ],
    certifications: [
      { name: "Mindo Intensive Bootcamp Batch 17: Quality Department", year: "2024" },
      { name: "Leadership and Time Management", year: "2024" },
      { name: "Job Seeking Preparation", year: "2024" },
      { name: "Quality Management System ISO 9001:2015", year: "2024" },
      { name: "Environmental Management System ISO 14001:2015", year: "2024" },
      { name: "OHS Management System ISO 45001:2018", year: "2024" },
      { name: "OHS Management System SMK3 PP No. 50 Year 2012", year: "2024" },
      { name: "Food Safety Management System ISO 22000:2018", year: "2024" },
      { name: "Good Manufacturing Practice (GMP)", year: "2024" },
      { name: "Hazard Analysis Critical Control Point (HACCP)", year: "2024" },
      { name: "Sanitation Standard Operating Procedure (SSOP)", year: "2024" },
      { name: "Quality Control (QC): Tools, Handling Complaints", year: "2024" },
      { name: "Quality Assurance (QA): Tools, Handling Reject", year: "2024" },
      { name: "Food Label based on BPOM Newest Regulation", year: "2024" },
      { name: "FMCG Fest 2.0", year: "2023" },
      { name: "English Proficiency UMM (Score: 241)", year: "2022" },
      { name: "Food Product Development", year: "2022" },
    ],
    skills: {
      soft: ["Food Technology", "Project Management", "Effective Communication", "Customer Service"],
      hard: ["Microsoft Office", "Google Workspace", "Photography", "Videography", "Canva", "Capcut"]
    }
  }
};
