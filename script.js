// --- 1. CONFIGURATION & TRANSLATIONS ---


let currentLang = 'ko';

// --- 2. LANGUAGE LOGIC ---

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Save to LocalStorage
    localStorage.setItem('uniWorkLang', lang);

    // Update Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Hide Modal & Show App
    const modal = document.getElementById('language-modal');
    if (!modal.classList.contains('hidden')) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.getElementById('app-container').classList.remove('hidden');
            document.getElementById('app-container').classList.add('animate-fade-in');

            // Default to Landing Page
            switchTab('landing');

            // Map resize fix if loaded directly
            if (map) map.invalidateSize();
        }, 300);
    }
}

function showLanguageModal() {
    document.getElementById('language-modal').classList.remove('hidden', 'opacity-0', 'pointer-events-none');
}

// --- 3. TAB LOGIC ---

function switchTab(tabName) {
    // Hide all
    ['landing', 'check', 'guide', 'job', 'living', 'safety'].forEach(id => {
        const sec = document.getElementById(`section-${id}`);
        const btn = document.getElementById(`tab-${id}`);
        if (sec) sec.classList.add('hidden');
        if (btn) btn.classList.remove('text-blue-600', 'tab-active');
    });

    // Show target
    document.getElementById(`section-${tabName}`).classList.remove('hidden');

    // Active style (Bottom Nav)
    const btn = document.getElementById(`tab-${tabName}`);
    if (btn) btn.classList.add('text-blue-600', 'tab-active');

    // Reset Scroll Position with smooth behavior
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // Fix Map
    if (tabName === 'living' && map) {
        setTimeout(() => {
            map.invalidateSize();
            map.panTo([36.322, 127.369]);
        }, 100);
    }

    // Toggle Bottom Nav
    const bottomNav = document.getElementById('bottom-nav');
    if (bottomNav) {
        if (tabName === 'landing') {
            bottomNav.classList.add('hidden');
        } else {
            bottomNav.classList.remove('hidden');
        }
    }
}

// --- 4. VISA CALCULATOR LOGIC (ENHANCED) ---

function calculateVisa() {
    const visa = document.querySelector('input[name="visa"]:checked')?.value || 'D-2';
    const topik = parseInt(document.getElementById('input-topik').value);
    const gpaInput = document.getElementById('input-gpa');
    const gpa = parseFloat(gpaInput.value);
    const isUnder6Months = document.getElementById('input-residence').checked;
    const isFirstSem = document.getElementById('input-first-sem').checked;

    const t = translations[currentLang];

    let resultText = "";
    let status = 'safe'; // 'safe', 'warning', 'error', 'neutral'
    let isExempt = false;

    // Logic Tree
    if (visa === 'D-4' && isUnder6Months) {
        // FAIL: D-4 Residence
        resultText = t.res_fail_d4;
        status = 'error';
    } else if (!isFirstSem && (isNaN(gpa) || gpa < 1.9)) {
        // FAIL: GPA
        if (isNaN(gpa)) {
            resultText = t.msg_req_gpa;
            status = 'neutral';
        } else {
            resultText = t.res_fail_gpa.replace('2.0', '1.9');
            status = 'error';
        }
    } else {
        // SUCCESS PATHS
        isExempt = isFirstSem; // Flag for UI
        let weekdayLimit = 10;
        let weekendUnlimited = false;

        if (visa === 'D-2') {
            // D-2 Rule: GPA 1.9+ (checked above) AND TOPIK 4+ -> Weekend Unlimited
            // Pai Chai Univ (IEQAS) -> +5 hours benefit on weekdays
            if (topik >= 4) {
                weekdayLimit = 25; // 20 + 5 (IEQAS)
                weekendUnlimited = true;
            } else if (topik >= 3) {
                // TOPIK 3: Eligible for weekday work but maybe not unlimited weekends?
                weekdayLimit = 25;
                weekendUnlimited = false;
            } else {
                weekdayLimit = 10; // Low TOPIK
                weekendUnlimited = false;
            }
        } else if (visa === 'D-4') {
            // D-4 Rule: TOPIK 2+ -> 20h Total (Weekends Included)
            if (topik >= 2) {
                weekdayLimit = 20;
                weekendUnlimited = false;
            } else {
                weekdayLimit = 10;
                weekendUnlimited = false;
            }
        }

        if (weekendUnlimited) {
            // Apply D-2 or D-4 specific success strings
            if (visa === 'D-2') {
                resultText = t.res_safe_d2_exempt.replace('{hours}', weekdayLimit);
            } else {
                resultText = t.res_safe_d4.replace('20', weekdayLimit);
            }
            status = 'safe';
        } else {
            // For D-4 or Limited D-2
            if (visa === 'D-4') {
                resultText = t.res_safe_d4;
            } else {
                resultText = t.res_safe_low.replace('{hours}', weekdayLimit);
            }
            status = 'warning';
        }
    }

    // Render
    const box = document.getElementById('result-box');
    const icon = document.getElementById('result-icon');
    const title = document.getElementById('result-title');
    const desc = document.getElementById('result-desc');

    box.classList.remove('hidden', 'bg-green-50', 'bg-red-50', 'bg-yellow-50', 'border-green-200', 'border-red-200', 'border-yellow-200', 'text-green-800', 'text-red-800', 'text-yellow-800');
    icon.className = "fa-solid text-4xl mb-3";

    if (status === 'neutral') {
        // Input Required (Neutral/Warning)
        box.classList.add('bg-yellow-50', 'border-yellow-200', 'text-yellow-800');
        icon.classList.add('fa-circle-exclamation');
        title.textContent = "Check Required";
        desc.innerHTML = `<span class="font-bold text-lg">${resultText}</span>`;
    } else if (status === 'error') {
        // Illegal
        box.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        icon.classList.add('fa-ban');
        title.textContent = t.calc_title;
        desc.innerHTML = `<span class="font-bold text-xl">${resultText}</span>`;
    } else if (status === 'safe') {
        // Safe (Unlimited Weekend)
        box.classList.add('bg-green-50', 'border-green-200', 'text-green-800');
        icon.classList.add('fa-check-circle');
        if (isExempt) title.textContent += " " + t.res_gpa_exempt;
        desc.innerHTML = `<span class="font-bold text-lg">${resultText.replace('Unlimited', '<u class="text-green-600">Unlimited</u>').replace('무제한', '<u class="text-green-600">무제한</u>')}</span>`;
    } else {
        // Limited (Warning)
        box.classList.add('bg-yellow-50', 'border-yellow-200', 'text-yellow-800');
        icon.classList.add('fa-triangle-exclamation');
        title.textContent = t.res_title_warn;
        if (isExempt) title.textContent += " " + t.res_gpa_exempt;
        desc.innerHTML = `<span class="font-bold text-lg">${resultText}</span>`;
    }

    // Auto-scroll to result (UX Improvement)
    setTimeout(() => {
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}




// --- 5. SALARY CALCULATOR LOGIC ---

function updateSalary() {
    const wageInput = document.getElementById('calc-wage');
    const hoursInput = document.getElementById('calc-hours');
    const totalDisplay = document.getElementById('calc-total');
    const warningBox = document.getElementById('salary-warning');

    const wage = parseInt(wageInput.value) || 0;
    const hours = parseInt(hoursInput.value) || 0;
    const minWage = 10030;

    // 1. Calculate Monthly (Simple 4 weeks)
    const monthlyBasic = wage * hours * 4;
    totalDisplay.textContent = `${monthlyBasic.toLocaleString()} `;

    // 1.5 Calculate Holiday Pay (If >= 15 hours)
    const holidayBox = document.getElementById('holiday-pay-box');
    const holidayVal = document.getElementById('holiday-pay-val');

    if (hours >= 15) {
        // Simple Formula: (Hours / 40) * 8 * Wage * 4 weeks? 
        // Or just Weekly Holiday Pay = (Hours/40)*8*Wage.
        // Let's show MONTHLY total benefit.
        // Week: (Hours / 40) * 8 * Wage. (Capped at 40h)
        const calcHours = Math.min(hours, 40);
        const weeklyHolidayPay = (calcHours / 40) * 8 * wage;
        const monthlyHolidayPay = weeklyHolidayPay * 4;

        holidayBox.classList.remove('hidden');
        holidayVal.textContent = `+${Math.floor(monthlyHolidayPay).toLocaleString()}`;

        // Add to total? Maybe better to show separate or total.
        // Let's show Total INCLUDING it for "WOW" effect.
        totalDisplay.textContent = `${(monthlyBasic + monthlyHolidayPay).toLocaleString()} `;
    } else {
        holidayBox.classList.add('hidden');
    }

    // Append Unit Span (re-creating it since textContent wipes it)
    const unitSpan = document.createElement('span');
    unitSpan.className = "text-sm text-gray-300";
    unitSpan.textContent = "KRW";
    totalDisplay.appendChild(unitSpan);

    // 2. Check Min Wage
    if (wage > 0 && wage < minWage) {
        warningBox.classList.remove('hidden');
        wageInput.classList.add('text-red-600', 'bg-red-50');
    } else {
        warningBox.classList.add('hidden');
        wageInput.classList.remove('text-red-600', 'bg-red-50');
    }
}

// --- 5. PAPERWORK LOGIC DEPRECATED / REMOVED ---


// --- 6. MAP LOGIC ---

let map;
function initMap() {
    map = L.map('map').setView([36.32054, 127.36587], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Marker 1: Baejae University (Blue) - Updated accurate coords
    const schoolMarker = L.marker([36.32054, 127.36587]).addTo(map);
    schoolMarker.bindPopup(`
        <b>Pai Chai Univ</b><br>
        International Office<br>
        <a href='https://naver.me/xZQzQzQz' target='_blank' style='color:blue; text-decoration:underline;'>Open Naver Map</a>
    `);

    // Marker 2: Immigration Office (Red)
    const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const officeMarker = L.marker([36.33678, 127.41106], { icon: redIcon }).addTo(map);
    officeMarker.bindPopup(`
        <b>Daejeon Immigration</b><br>
        16-8 Jungchon-dong<br>
        <a href='https://naver.me/FXVdMdMd' target='_blank' style='color:red; text-decoration:underline;'>Open Naver Map</a>
    `);
}

// --- 7. UTILS ---

// --- App Store Redirection Logic ---
// --- App Store Redirection Logic ---
function openApp(iosId, androidPackage) {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for iOS (iPhone, iPad, iPod)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = `https://apps.apple.com/app/id${iosId}`;
    } else if (/android/i.test(userAgent)) {
        // Android: Open directly in Play Store app
        window.location.href = `market://details?id=${androidPackage}`;
    } else {
        // Desktop / Other: Open in Browser
        window.location.href = `https://play.google.com/store/apps/details?id=${androidPackage}`;
    }
}

// --- 7. INITIALIZATION (DOMContentLoaded) ---

document.addEventListener('DOMContentLoaded', () => {
    // --- App Store Redirection Logic ---
    // Moved to global scope
    // -----------------------------------
    // -----------------------------------

    // Language Data
    // 1. Language Check (LocalStorage)
    const savedLang = localStorage.getItem('uniWorkLang');
    if (savedLang) {
        setLanguage(savedLang);
        // Ensure app is visible immediately if lang is known
        document.getElementById('language-modal').classList.add('hidden');
    }

    // 2. Init components
    initMap();

    // 3. Attach Form Listeners - REMOVED


    // 4. Attach Calculator Listeners (Optional auto-calc or just keep button)
    // Keeping button as per original design, but let's allow Enter key? 
    // Stick to generic requirements.

    // 5. Data Persistence (Bonus: Keep form data if changed)
    // Basic persistence for input fields
    loadFormData();
    document.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('input', saveFormData);
    });

    // 5.1 Toggle Input on Checkbox
    const semCheckbox = document.getElementById('input-first-sem');
    const gpaInput = document.getElementById('input-gpa');

    // Function to toggle
    function toggleGpa() {
        if (semCheckbox.checked) {
            gpaInput.value = '';
            gpaInput.disabled = true;
            gpaInput.classList.add('bg-gray-100', 'cursor-not-allowed');
        } else {
            gpaInput.disabled = false;
            gpaInput.classList.remove('bg-gray-100', 'cursor-not-allowed');
        }
    }

    semCheckbox.addEventListener('change', () => {
        toggleGpa();
        saveFormData();
    });

    // Call once on init (after loadFormData)
    setTimeout(toggleGpa, 100);

    // 6. Salary Listeners
    ['calc-wage', 'calc-hours'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateSalary);
    });
});

function saveFormData() {
    const data = {
        visa: document.querySelector('input[name="visa"]:checked')?.value,
        topik: document.getElementById('input-topik').value,
        gpa: document.getElementById('input-gpa').value,
        residence: document.getElementById('input-residence').checked,
        firstSem: document.getElementById('input-first-sem').checked,
        cWage: document.getElementById('calc-wage').value,
        cHours: document.getElementById('calc-hours').value
    };
    localStorage.setItem('uniWorkForm', JSON.stringify(data));
}

function generateResume() {
    const name = document.getElementById('resume-name').value;
    const age = document.getElementById('resume-age').value;
    const visa = document.getElementById('resume-visa').value;
    const topik = document.getElementById('resume-topic').value;

    if (!name || !age) {
        alert("Please enter Name and Age!");
        return;
    }

    // Always use Korean template for the output message (for Korean employers)
    const t = translations[currentLang];
    const template = translations['ko'].resume_template;

    const msg = template
        .replace('{name}', name)
        .replace('{age}', age)
        .replace('{visa}', visa)
        .replace('{topik}', topik);

    const textArea = document.getElementById('resume-text');
    textArea.value = msg;
    document.getElementById('resume-result').classList.remove('hidden');

    // Copy - Modern Clipboard API with fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
        // Modern browsers
        navigator.clipboard.writeText(msg).then(() => {
            showToast();
        }).catch(() => {
            // Fallback if clipboard API fails
            textArea.select();
            document.execCommand('copy');
            showToast();
        });
    } else {
        // Legacy browsers
        textArea.select();
        document.execCommand('copy');
        showToast();
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');

    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 3000);
}

function loadFormData() {
    const saved = localStorage.getItem('uniWorkForm');
    if (!saved) return;
    try {
        const d = JSON.parse(saved);
        if (d.visa) { const r = document.querySelector(`input[name="visa"][value="${d.visa}"]`); if (r) r.checked = true; }
        if (d.topik) document.getElementById('input-topik').value = d.topik;
        if (d.gpa) document.getElementById('input-gpa').value = d.gpa;
        if (d.residence !== undefined) document.getElementById('input-residence').checked = d.residence;
        if (d.firstSem !== undefined) document.getElementById('input-first-sem').checked = d.firstSem;

        if (d.cWage) document.getElementById('calc-wage').value = d.cWage;
        if (d.cHours) document.getElementById('calc-hours').value = d.cHours;

        // Trigger initial calc
        updateSalary();
    } catch (e) { }
}
