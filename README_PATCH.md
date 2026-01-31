# Patch – Buku Kerja HK (Step 7 memakai Groq)

Paket ini adalah patch yang memindahkan **Generator RPP Step 7** dari Gemini ke **Groq** (OpenAI-compatible API).

Fokus patch:
- Step 7 memakai **Groq** langsung dari frontend (tanpa Edge Function)
- Ada throttling + auto-retry saat 429 (rate limit)
- Sanitasi output HTML AI (DOMPurify) tetap dipakai

## 1) Konfigurasi Groq (wajib)
Buka `config.js`, isi:
- `GROQ_API_KEY`
- (opsional) ganti `GROQ_MODEL`

Referensi endpoint (OpenAI-compatible):
- Base URL: https://api.groq.com/openai/v1
- Chat completions: POST https://api.groq.com/openai/v1/chat/completions

## 2) Catatan keamanan
Groq menyarankan API key **jangan** ditaruh di frontend untuk produksi.
Patch ini sengaja client-side karena kamu bilang key "gratisan" dan kamu siap jika ketahuan.

Untuk produksi, solusi yang benar adalah pakai proxy/backend/Edge Function agar key aman.

## 3) Perubahan yang dilakukan di frontend
- `config.js`
  - Ditambah: `GROQ_API_KEY`, `GROQ_BASE_URL`, `GROQ_MODEL`, dan pengaturan rate-limit Step 7

- `step6_promes.html`
  - Bugfix libur: `calendarData[k]` adalah boolean (bukan string 'holiday')
  - Ditambah `escapeHTML()` untuk menahan injeksi lewat judul materi

- `step2_analisis.html`
  - Render tabel sekarang pakai DOM API (`textContent`) bukan string `innerHTML`.

- `step4_alokasi.html`, `step5_prota.html`, `step6_promes.html`, `step7_rpp.html`, `step9_cetak.html`
  - Ditambah `escapeHTML()` pada data teks yang berasal dari input user

- `step7_rpp.html` dan `step9_cetak.html`
  - Ditambah DOMPurify untuk sanitasi HTML output AI sebelum `innerHTML`

- Semua file HTML
  - Ditambah meta CSP baseline (masih mengizinkan inline script karena desain awal menggunakan inline JS)

## 4) Catatan kompatibilitas
- Step 7 sekarang tidak perlu Edge Function.
- Jika kamu melihat error CORS dari Groq di browser, maka kamu harus pakai proxy (server/Edge Function), karena browser akan mengirim preflight untuk header Authorization.

