/* layout.js - Mengatur Sidebar, Auth, dan Global Scripts */

const APP_VERSION = "v1.0"; 
const CURRENT_PAGE = window.location.pathname.split("/").pop();
const NAV_STEPS = [
    { file: 'step1_profil.html', label: '1. Profil Guru', icon: '👤' },
    { file: 'step2_analisis.html', label: '2. Analisis Materi', icon: '📊' },
    { file: 'step3_kalender.html', label: '3. Kalender', icon: '📅' },
    { file: 'step4_alokasi.html', label: '4. Alokasi JP', icon: '⏳' },
    { file: 'step5_prota.html', label: '5. Prota', icon: '📋' },
    { file: 'step6_promes.html', label: '6. Promes', icon: '🗓️' },
    { file: 'step7_rpp.html', label: '7. Modul Ajar', icon: '📝' },
    { file: 'step8_lampiran.html', label: '8. Lampiran', icon: '📎' },
    { file: 'step9_cetak.html', label: '9. Cetak Dokumen', icon: '🖨️' }
];

document.addEventListener("DOMContentLoaded", async function() {
    // 1. Load SweetAlert2 otomatis
    if (typeof Swal === 'undefined') {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
        document.head.appendChild(script);
    }

    // 2. Render Sidebar
    renderSidebar();

    // 3. Cek Auth (Kecuali di login)
    if (CURRENT_PAGE !== 'index.html' && CURRENT_PAGE !== '') {
        await checkAuth();
    }
});

function renderSidebar() {
    const container = document.getElementById('sidebar-container');
    if (!container) return;

    // Pastikan container sidebar statis & tinggi penuh
    container.className = "flex-none w-72 bg-slate-900 text-slate-300 flex flex-col h-screen shadow-2xl z-50 print:hidden";

    let navHTML = '';
    NAV_STEPS.forEach(s => {
        const isActive = CURRENT_PAGE === s.file;
        const activeClass = isActive 
            ? 'bg-blue-600 text-white shadow-md translate-x-1 ring-1 ring-blue-400' 
            : 'text-slate-400 hover:text-white hover:bg-slate-800';
        
        navHTML += `
        <a href="${s.file}" class="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${activeClass} mb-1 group">
            <span class="text-lg group-hover:scale-110 transition">${s.icon}</span>
            <span class="font-medium text-sm">${s.label}</span>
        </a>`;
    });

    container.innerHTML = `
        <div class="h-20 flex items-center px-6 border-b border-slate-800 shrink-0 bg-slate-950">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/50">AI</div>
                <div>
                    <h1 class="font-bold text-white text-lg leading-tight tracking-tight">Smart Teacher</h1>
                    <p class="text-[10px] text-slate-500 uppercase tracking-wider">Administrasi Guru</p>
                </div>
            </div>
        </div>

        <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
            ${navHTML}
        </nav>

        <div class="h-20 px-4 border-t border-slate-800 shrink-0 bg-slate-900/50 flex flex-col justify-center">
            <button onclick="globalLogout()" class="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white px-4 py-2 rounded-xl transition-all duration-300 group ring-1 ring-slate-700 hover:ring-red-500">
                <svg class="w-5 h-5 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                <span class="font-bold text-sm">Keluar Aplikasi</span>
            </button>
            <p class="text-center text-[10px] text-slate-600 mt-1 font-mono">${APP_VERSION} &copy; 2026</p>
        </div>
    `;
}

async function checkAuth() {
    const db = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);
    const { data: { session } } = await db.auth.getSession();
    if (!session) window.location.href = 'index.html';
    else window.currentUser = session.user;
}

async function globalLogout() {
    const result = await Swal.fire({
        title: 'Keluar Aplikasi?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ya, Keluar!',
        cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
        const db = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);
        await db.auth.signOut();
        window.location.href = 'index.html';
    }
}