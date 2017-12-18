export default [
  {
    key: 'pns',
    value: 'PNS',
    keterangan: [
      {
        type: 'text',
        key: 'jabatan',
        label: 'Jabatan'
      }
    ]
  },
  {
    key: 'tni',
    value: 'TNI',
    keterangan: [
      {
        type: 'text',
        key: 'jabatan',
        label: 'Jabatan'
      }
    ]
  },
  {
    key: 'instansi',
    value: 'Bekerja di Instansi/Perusahaan',
    keterangan: [
      {
        type: 'text',
        key: 'perusahaan',
        label: 'Nama Perusahaan'
      },
      {
        type: 'text',
        key: 'sebagai',
        label: 'Bekerja Sebagai'
      }
    ]
  },
  {
    key: 'pengusaha',
    value: 'Pengusaha',
    keterangan: [
      {
        type: 'text',
        key: 'nama_usaha',
        label: 'Nama Usaha'
      },
      {
        type: 'select',
        key: 'sektor_usaha',
        label: 'Sektor Usaha',
        options: [
          {
            key: 'pertanian',
            label: 'Pertanian'
          },
          {
            key: 'peternakan',
            label: 'Peternakan'
          },
          {
            key: 'jasa',
            label: 'Jasa'
          },
          {
            key: 'lain-lain',
            label: 'Lain-Lain'
          }
        ]
      }
    ]
  },
  {
    key: 'lanjut-studi',
    value: 'Melanjutkan Studi (S1/S2/S3)',
    keterangan: [
      {
        type: 'select',
        key: 'jenjang',
        label: 'Jenjang Studi',
        options: [
          {
            key: 's1',
            label: 'S1'
          },
          {
            key: 's2',
            label: 'S2'
          },
          {
            key: 's3',
            label: 'S3'
          }
        ]
      },
      {
        type: 'text',
        key: 'universitas',
        label: 'Universitas'
      },
      {
        type: 'text',
        key: 'prodi',
        label: 'Fakultas dan Prodi'
      }
    ]
  },
  {
    key: 'belum-bekerja',
    value: 'Belum Bekerja',
    keterangan: []
  }
]
