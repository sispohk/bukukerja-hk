document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const page = path.split("/").pop(); 

    const steps = [
        { file: 'step1_profil.html', label: '1. Profil Guru', icon: '👤' },
        { file: 'step2_analisis.html', label: '2. Analisis Materi', icon: '📊' },
        { file: 'step3_kalender.html', label: '3. Kalender', icon: '📅' },
        { file: 'step4_alokasi.html', label: '4. Alokasi JP', icon: '⏳' },
        { file: 'step5_prota.html', label: '5. Prota', icon: '📋' },
        { file: 'step6_promes.html', label: '6. Promes', icon: '🗓️' },
        { file: 'step7_rpp.html', label: '7. Modul Ajar', icon: '📝' },
        { file: 'step8_lampiran.html', label: '8. Lampiran', icon: '📎' },
        { file: 'step9_cetak.html', label: '9. Cetak Buku Kerja', icon: '🖨️' }
    ];

    let navHTML = '';
    steps.forEach(s => {
        const isActive = page === s.file;
        const activeClass = isActive ? 'bg-blue-700 text-white shadow-lg translate-x-1' : 'text-slate-400 hover:text-white hover:bg-slate-800';
        navHTML += `
        <a href="${s.file}" class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeClass} mb-1 group">
            <span class="text-lg group-hover:scale-110 transition">${s.icon}</span>
            <span class="font-medium text-sm">${s.label}</span>
        </a>`;
    });

    const sidebarHTML = `
    <aside class="w-72 bg-slate-900 text-slate-300 flex-none flex flex-col z-50 shadow-2xl h-full font-sans">
        <div class="h-20 flex items-center px-6 border-b border-slate-800 shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-blue-900/50 shadow-lg">AI</div>
                <div>
                    <h1 class="font-bold text-white text-lg leading-tight">Teacher<span class="text-blue-500">.pro</span></h1>
                    <p class="text-[10px] text-slate-500 uppercase tracking-wider">Administrasi Guru</p>
                </div>
            </div>
        </div>

        <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            ${navHTML}
        </nav>

        <div class="p-4 border-t border-slate-800 shrink-0 bg-slate-900/50">
            <button onclick="logout()" class="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 group">
                <svg class="w-5 h-5 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                <span class="font-bold text-sm">Keluar Aplikasi</span>
            </button>
            <p class="text-center text-[10px] text-slate-600 mt-3">v1.0.0 &copy; 2026</p>
        </div>
    </aside>
    `;

    const container = document.getElementById('sidebar-container');
    if (container) container.innerHTML = sidebarHTML;
});

async function logout() {
    if(!confirm("Yakin ingin keluar?")) return;
    const db = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);
    await db.auth.signOut();
    window.location.href = 'index.html';
}