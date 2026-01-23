// GANTI DENGAN KREDENSIAL SUPABASE ANDA
const SUPABASE_URL = 'https://qbcovsobbdpbhjaptvre.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiY292c29iYmRwYmhqYXB0dnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxMDc1NjksImV4cCI6MjA4NDY4MzU2OX0.PvAcTWo6fQzimQ6F4c2j1yGqU8zvzONwEwxss-cTryA'; 

if (typeof window.supabase === 'undefined') {
    console.error('Library Supabase gagal dimuat.');
} else {
    // Export ke window agar bisa diakses global
    window.db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log("✅ Koneksi Database Siap!");
}