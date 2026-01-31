const CONFIG = {
    // --- KONFIGURASI SUPABASE ---
    // Ganti dengan URL dan Anon Key project Supabase Anda
    SUPABASE_URL: 'https://qbcovsobbdpbhjaptvre.supabase.co', 
    SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiY292c29iYmRwYmhqYXB0dnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxMDc1NjksImV4cCI6MjA4NDY4MzU2OX0.PvAcTWo6fQzimQ6F4c2j1yGqU8zvzONwEwxss-cTryA', 

    // --- GROQ (dipakai untuk Step 2 Analisis Materi, frontend direct) ---
    GROQ_API_KEY: "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",
    GROQ_BASE_URL: "https://api.groq.com/openai/v1",
    GROQ_MODEL: "llama-3.3-70b-versatile",
    GROQ_TEMPERATURE: 0.3,
    GROQ_MAX_TOKENS: 2500,
    // Anti-429: guru rela menunggu
    GROQ_MIN_INTERVAL_MS: 6000,
    GROQ_MAX_RETRIES: 12,

    // --- GEMINI (dipakai untuk Step 7 Generator RPP) ---
    // Provider diset GEMINI saja, model fixed: gemini-2.5-flash-lite.
    GEMINI_API_KEY: 'AIzaSyClMROz_iiYE1bmu_gLnXZTfGgZa7ZTR90',
    GEMINI_MODEL: 'gemini-2.5-flash-lite',
    GEMINI_TEMPERATURE: 0.5,
    GEMINI_MAX_OUTPUT_TOKENS: 8192
};