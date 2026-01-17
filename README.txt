BUKU KERJA PONTREN HK — BK1 (HTML)

Isi:
- index.html (single file)
- migration.sql (tambahan tabel BK1 v3)

Cara pakai:
1) Jalankan schema BK1 (tanpa auth) di Supabase.
2) Jika menu Lampiran/Kalender/SK/Pemetaan/Model belum jalan, jalankan file migration.sql di Supabase SQL Editor.
3) Buka index.html di browser.
4) Isi SUPABASE_URL + SUPABASE_ANON_KEY.
5) Connect -> Load Assignments -> pilih assignment.
6) Isi data sesuai menu.
7) Export BK1 -> Siapkan Dokumen -> Print / Save PDF.

Menu baru (BK1 v3):
- Lampiran: upload file (disimpan sebagai data_url di tabel file_asset) + link ke assignment.
- Kalender: input kalender akademik/libur nasional/daerah/agenda per tahun ajaran.
- SK/Beban: daftar SK pembagian tugas/beban mengajar (lampiran administratif).
- Pemetaan: matriks CP→TP (Kurikulum Merdeka) atau KI-KD→Indikator (K13).
- Model/Metode: perencanaan model/metode (PBL/PjBL/dll) sebagai dokumen formal.

Export multi-halaman:
Cover -> Identitas -> Kalender -> SK/Beban -> Minggu Efektif -> Prota -> Promes -> ATP -> Pemetaan -> Model/Metode -> Ringkasan Modul Ajar -> KKM/KKTP -> Sumber/Media -> Lampiran -> Pengesahan.
