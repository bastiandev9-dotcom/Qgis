document.documentElement.classList.add('js');

document.addEventListener('alpine:init', () => {
  Alpine.data('reveal', () => ({
    shown: false,
  }));

  Alpine.data('stats', () => [
    { value: '254.758', label: 'Unit Industri', note: 'Total Jawa Tengah, 2025' },
    { value: '3.703.980', label: 'Tenaga Kerja Industri', note: 'Orang, 2025' },
    { value: '33,84%', label: 'Kontribusi PDRB', note: 'Industri pengolahan, 2025' },
    { value: '35', label: 'Kabupaten/Kota', note: 'Terpetakan lengkap' },
  ]);

  Alpine.data('latarBelakang', () => ({
    points: [
      'Jawa Tengah menjadi salah satu basis industri manufaktur di Indonesia; sektor ini menyumbang 33,84 persen PDRB pada 2025.',
      'Data industri dan tenaga kerja BPS tersaji dalam tabel 35 kabupaten/kota, sehingga pola antarwilayah sulit dibaca sekilas.',
      'Jumlah industri tidak selalu sejalan dengan tenaga kerja: Purworejo 38.691 unit dengan 49.903 pekerja, Kudus 5.256 unit dengan 373.541 pekerja. SIG dibutuhkan untuk memetakan pola ini.',
    ],
  }));

  Alpine.data('accordion', () => ({
    open: 0,
    items: [
      {
        title: 'Rumusan Masalah',
        points: [
          'Bagaimana sebaran spasial jumlah industri di kabupaten/kota Provinsi Jawa Tengah pada tahun 2025?',
          'Bagaimana sebaran spasial jumlah tenaga kerja industri di kabupaten/kota Provinsi Jawa Tengah pada tahun 2025?',
          'Wilayah mana yang menonjol, dan apakah pola sebaran industri sejalan dengan pola sebaran tenaga kerja?',
        ],
      },
      {
        title: 'Tujuan Penelitian',
        points: [
          'Memetakan sebaran jumlah industri tiap kabupaten/kota di Jawa Tengah tahun 2025.',
          'Memetakan sebaran jumlah tenaga kerja industri tiap kabupaten/kota tahun 2025.',
          'Mengidentifikasi wilayah dengan konsentrasi tinggi serta ketidaksesuaian antara jumlah industri dan tenaga kerja.',
        ],
      },
    ],
  }));

  Alpine.data('mapTabs', () => ({
    active: 'industri',
    loaded: { industri: true, 'tenaga-kerja': false },
    tabs: [
      { id: 'industri', label: 'Peta Sebaran Industri', src: 'map/industri/index.html' },
      { id: 'tenaga-kerja', label: 'Peta Sebaran Tenaga Kerja', src: 'map/tenaga-kerja/index.html' },
    ],
    select(id) {
      this.active = id;
      this.loaded[id] = true;
    },
  }));

  Alpine.data('distribution', () => ({
    industri: {
      title: 'Sebaran Jumlah Industri',
      total: '254.758 unit',
      top: [
        { name: 'Purworejo', value: '38.691' },
        { name: 'Wonosobo', value: '20.738' },
        { name: 'Magelang', value: '20.403' },
      ],
      bottom: [
        { name: 'Brebes', value: '1.083' },
        { name: 'Kota Surakarta', value: '1.487' },
        { name: 'Klaten', value: '1.588' },
      ],
    },
    tenagaKerja: {
      title: 'Sebaran Tenaga Kerja Industri',
      total: '3.703.980 orang',
      top: [
        { name: 'Kab. Semarang', value: '383.983' },
        { name: 'Kudus', value: '373.541' },
        { name: 'Kota Semarang', value: '331.255' },
      ],
      bottom: [
        { name: 'Kebumen', value: '1.808' },
        { name: 'Blora', value: '6.365' },
        { name: 'Kota Magelang', value: '11.034' },
      ],
    },
    anomaly: {
      a: { name: 'Purworejo', unit: '38.691', pekerja: '49.903' },
      b: { name: 'Kudus', unit: '5.256', pekerja: '373.541' },
    },
  }));

  Alpine.data('kesimpulan', () => ({
    points: [
      'Tenaga kerja industri terkonsentrasi di koridor Semarang, Kudus, dan Jepara. Wilayah barat dan tengah-selatan relatif tertinggal.',
      'Industri banyak belum tentu pekerja banyak: Purworejo 38.691 unit dengan 49.903 pekerja, Kudus 5.256 unit dengan 373.541 pekerja.',
      'Koridor Semarang, Kudus, dan Jepara adalah pusat penyerapan tenaga kerja industri.',
    ],
  }));
});
