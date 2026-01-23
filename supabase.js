// --- KONFIGURASI SUPABASE ---
// Pastikan URL dan Key ini sesuai dengan project Supabase Anda
const supabaseUrl = 'https://qbcovsobbdpbhjaptvre.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiY292c29iYmRwYmhqYXB0dnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxMDc1NjksImV4cCI6MjA4NDY4MzU2OX0.PvAcTWo6fQzimQ6F4c2j1yGqU8zvzONwEwxss-cTryA';

// Inisialisasi Client
const db = supabase.createClient(supabaseUrl, supabaseKey);

// Expose variable 'db' ke window agar bisa dibaca oleh index.html
window.db = db; 

console.log("✅ Koneksi Database Siap!");

// CATATAN:
// Kita tidak lagi memerlukan GEMINI_API_KEY di sini 
// karena fitur "AI" sekarang dijalankan langsung oleh 
// Logic Engine di dalam index.html (Offline Mode).