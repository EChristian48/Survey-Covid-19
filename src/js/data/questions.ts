const questions: string[] = [
  // Bagian 1
  'Saya pergi keluar rumah',
  'Saya menggunakan transportasi umum',
  'Saya tidak menggunakan masker saat berkumpul',
  'Saya berjabat tangan dengan orang lain',
  'Saya tidak membersihkan tangan',
  'Saya menyentuh benda yang juga disentuh orang lain',
  'Saya tidak menjaga jarak dengan orang lain',
  'Saya makan diluar rumah',
  'Saya tidak meminum air hangat & tidak cuci tangan',
  'Saya berada di kelurahan pasien tertular',

  // Bagian 2
  'Saya tidak pasang hand sanitizer di depan rumah',
  'Saya tidak mencuci tangan dengan sabun setelah tiba di rumah',
  'Saya tidak menyediakan pembersih tangan di rumah',
  'Saya tidak segera mencuci baju setelah tiba di rumah',
  'Saya tidak segera keramas setelah tiba di rumah',
  'Saya tidak mempromosikan aplikasi ini ke keluarga di rumah',

  // Bagian 3
  'Saya tidak berjemur selama 15 menit setiap harinya',
  'Saya berolahraga kurang dari 30 menit setiap harinya',
  'Saya jarang minum vitamin C & E dan kurang tidur',
  'Usia saya di atas 60 tahun',
  'Saya memiliki riwayat penyakit: Jantung/Diabetes/Gangguan pernafasan Kronik',
]

type Answer = {
  questionIndex: number
  answer: boolean
}

export { questions, Answer }
