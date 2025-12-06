// --- 1. CONFIGURATION & TRANSLATIONS ---

const translations = {
    ko: {
        tab_check: "자격 조회",
        tab_paperwork: "서류 작성",
        tab_map: "지도",
        calc_title: "아르바이트 가능 여부 확인",
        ieqas_badge: "🏆 배재대: 교육국제화역량 인증대학 (+5시간)",
        label_visa: "비자 종류",
        label_topik: "TOPIK 등급",
        label_gpa: "직전 학기 학점 (0.0 - 4.5)",
        label_residence: "입국 6개월 미만 (D-4 인 경우)",
        btn_check: "결과 확인",


        // Documents Checklist
        check_title: "필수 지참 서류 리스트",
        check_desc: "사무실 방문 전 꼭 확인하세요!",
        doc_passport: "여권 (Passport)",
        doc_arc: "외국인등록증 (ARC)",
        doc_form: "통합신청서 (Application Form)",
        doc_biz: "사업자등록증 사본",
        doc_contract: "표준근로계약서 (사본)",

        doc_confirm: "시간제취업 확인서 (학교 직인 필수)",

        map_title: "주요 기관 안내",
        footer_warning: "허가 없이 일하면 최대 2천만 원 벌금!",


        // Result Strings
        res_fail_gpa: "❌ 불가 (학점 2.0 미만)",
        res_fail_d4: "❌ 불가 (6개월 미만)",
        res_safe_d2: "주중: 25시간 / 주말: 무제한 (권장)",
        res_safe_d4: "주중: 20시간 / 주말: 포함 (최대 20시간)",
        res_safe_d4: "주중: 20시간 / 주말: 포함 (최대 20시간)",
        res_safe_low: "주중: {hours}시간 / 주말: 10시간",
        res_title_success: "허가 신청 가능 (Eligible)",
        res_title_warn: "주의 (시간 제한)",



        // Salary Calc
        salary_title: "급여 계산기",
        min_wage_label: "2025년 법정 최저시급",
        label_my_wage: "내 시급 (원)",
        label_hours: "주간 근무 시간",
        label_monthly: "예상 월급 (4주 기준)",
        msg_low_wage: "🚨 불법입니다! 최저시급보다 적습니다.",

        // Safety
        tab_safety: "안전/보험",
        safety_title: "긴급 연락처 (원터치)",
        emerg_police: "범죄 신고 (112)",
        emerg_fire: "화재/병원 (119)",
        emerg_immi: "출입국 (1345)",
        ins_title: "건강보험 필수 가입!",
        ins_desc: "모든 유학생은 국민건강보험 또는 민영보험에 가입해야 합니다. 보험 없이 병원에 가면 매우 비쌉니다.",
        warn_title: "⚠️ 절대 하지 마세요!",
        warn_bank: "통장 빌려주지 않기 (보이스피싱 공범 처벌)",
        warn_drug: "마약은 한국에서 중범죄입니다.",

        // PM Safety
        pm_title: "전동 킥보드 안전 수칙",
        pm_helmet: "헬멧 미착용",
        pm_license: "무면허 운전",
        pm_ride: "2인 이상 탑승",
        pm_path: "인도(보도) 주행",

        // Validation
        msg_req_gpa: "직전 학기 성적을 입력해주세요.",

        // 1345 Help
        help_title: "외국인종합안내센터 (1345)",
        help_desc_1: "유학생 인권침해 및 임금체불 상담 지원",

        // Footer
        disclaimer: "본 앱의 결과는 참고용이며, 최종 판단은 출입국사무소에 있습니다. 본 정보의 활용으로 인한 불이익에 대해 책임지지 않습니다.",

        // Job Prep (New)
        tab_paperwork: "취업 준비",
        resume_title: "1분 알바 지원서",
        resume_desc: "사장님께 보낼 공손한 지원 문자를 만들어보세요.",
        name_ph: "이름 (예: 마이클)",
        age_ph: "나이 (예: 24)",
        topik_ph: "한국어 능력 (예: 4급)",
        btn_gen_resume: "문자 생성 및 복사",
        resume_template: "안녕하세요! 아르바이트 공고 보고 연락드렸습니다.\n이름: {name}\n나이: {age}세\n비자: {visa} (유학생)\n한국어: {topik}\n\n성실하게 일하겠습니다. 면접 기회 주시면 감사하겠습니다!",

        // Holiday Pay
        holiday_pay_label: "예상 주휴수당 (포함 시):",
    },
    en: {
        tab_check: "Check Status",
        tab_paperwork: "Paperwork",
        tab_map: "Map",
        tab_safety: "Safety",
        calc_title: "Int'l Student Visa Checker",
        ieqas_badge: "🏆 Pai Chai Univ: IEQAS Certified (+5hr)",
        label_visa: "Visa Type",
        label_topik: "TOPIK Level",
        label_gpa: "Prev. Semester GPA (0.0 - 4.5)",
        label_residence: "Residence < 6 months (D-4 only)",
        btn_check: "Check Result",


        // Check Docs
        check_title: "Required Documents",
        check_desc: "Check before visiting the office!",
        doc_passport: "Passport",
        doc_arc: "Alien Registration Card (ARC)",
        doc_form: "Integrated Application Form",
        doc_biz: "Business License Copy",
        doc_contract: "Standard Labor Contract",
        doc_confirm: "Part-time Work Confirmation",

        map_title: "Nearby Locations",
        footer_warning: "Working without permission = Max 20M KRW Fine!",


        // Result Strings
        res_fail_gpa: "❌ Not Eligible (GPA < 2.0)",
        res_fail_d4: "❌ Not Eligible (< 6 months)",
        res_safe_d2: "Weekday: 25hr / Weekend: Unlimited",
        res_safe_d4: "Weekday: 20hr / Weekend: Included (Max 20hr)",
        res_safe_d4: "Weekday: 20hr / Weekend: Included (Max 20hr)",
        res_safe_low: "Weekday: {hours}hr / Weekend: 10hr",
        res_title_success: "Eligible to Apply",
        res_title_warn: "Warning (Limited Hours)",



        // Salary Calc
        salary_title: "Salary Calculator",
        min_wage_label: "2025 Legal Min. Wage",
        label_my_wage: "Hourly Wage",
        label_hours: "Hours/Week",
        label_monthly: "Est. Monthly Income (4 weeks)",
        msg_low_wage: "🚨 Illegal! Below minimum wage.",

        // Safety
        tab_safety: "Safety",
        safety_title: "Emergency Contacts",
        emerg_police: "Police (112)",
        emerg_fire: "Fire/EMS (119)",
        emerg_immi: "Immigration (1345)",
        ins_title: "Health Insurance is Mandatory!",
        ins_desc: "You must enroll in National Health Insurance (NHIS). Hospital bills are very expensive without it.",
        warn_title: "⚠️ NEVER do this!",
        warn_bank: "Do NOT lend your bank account (Phishing/Fraud).",
        warn_drug: "Drug use is a serious crime in Korea.",

        // PM Safety
        pm_title: "Electric Scooter Safety",
        pm_helmet: "No Helmet",
        pm_license: "No License",
        pm_ride: "No Passengers (2+)",
        pm_path: "Sidewalk Riding",

        // Validation
        msg_req_gpa: "Please enter your GPA.",

        // 1345 Help
        help_title: "Immigration Contact Center (1345)",
        help_desc_1: "Support for Human Rights & Unpaid Wages",

        // Footer
        disclaimer: "Results are for reference only. Final authority rests with the Immigration Office. We are not liable for any issues.",

        // Job Prep
        tab_paperwork: "Job Prep",
        resume_title: "1-Minute Resume",
        resume_desc: "Create a polite Korean job application message.",
        name_ph: "Name (e.g. Michael)",
        age_ph: "Age",
        topik_ph: "TOPIK Level (e.g. Level 4)",
        btn_gen_resume: "Generate & Copy",
        resume_template: "Hello! I am contacting you regarding the part-time job.\nName: {name}\nAge: {age}\nVisa: {visa} (Student)\nKorean Level: {topik}\n\nI am hardworking and responsible. I would appreciate an interview!",

        // Holiday Pay
        holiday_pay_label: "Est. Weekly Holiday Pay:",
    },
    cn: {
        tab_check: "资格查询",
        tab_paperwork: "필수 서류",
        tab_map: "地图",
        tab_safety: "안전",
        calc_title: "留学生打工资格查询",
        ieqas_badge: "🏆 培材大学: 教育国际化认证大学 (+5小时)",
        label_visa: "签证类型",
        label_topik: "韩语等级 (TOPIK)",
        label_gpa: "上学期绩点 (GPA)",
        label_residence: "入境不满6个月 (D-4)",
        btn_check: "查询结果",


        // Docs
        check_title: "必备材料清单",
        check_desc: "访问前请务必确认！",
        doc_passport: "护照 (Passport)",
        doc_arc: "外国人登陆证 (ARC)",
        doc_form: "综合申请表",
        doc_biz: "营业执照副本",
        doc_contract: "标准劳动合同书",
        doc_confirm: "打工确认书",

        map_title: "主要地点",
        footer_warning: "非法打工最高罚款2000万韩元！",


        res_fail_gpa: "❌ 不可打工 (GPA < 2.0)",
        res_fail_d4: "❌ 不可打工 (入境不满6个月)",
        res_safe_d2: "工作日: 25小时 / 周末: 无限制",
        res_safe_d4: "工作日: 20小时 / 周末: 包含 (最大20/周)",
        res_safe_low: "工作日: {hours}小时 / 周末: 10小时",
        res_title_success: "可以申请许可 (Eligible)",
        res_title_warn: "注意 (时间限制)",



        // Salary Calc
        salary_title: "薪资计算器",
        min_wage_label: "2025年 法定最低时薪",
        label_my_wage: "我的时薪",
        label_hours: "每周工作时间",
        label_monthly: "预计月薪 (4周)",
        msg_low_wage: "🚨 违法！低于最低时薪。",

        // Safety
        tab_safety: "安全/保险",
        safety_title: "紧急联系热线",
        emerg_police: "报警 (112)",
        emerg_fire: "消防/急救 (119)",
        emerg_immi: "出入境 (1345)",
        ins_title: "必须加入健康保险!",
        ins_desc: "留学生必须加入国民健康保险。没有保险医疗费非常贵。",
        warn_title: "⚠️ 绝对禁止!",
        warn_bank: "禁止出借银行账户 (电信诈骗风险)",
        warn_drug: "在韩国吸毒是重罪。",

        // PM Safety
        pm_title: "电动滑板车安全规则",
        pm_helmet: "未戴头盔",
        pm_license: "无照驾驶",
        pm_ride: "二人以上搭乘",
        pm_path: "人行道行驶",

        // Validation
        msg_req_gpa: "请输入上学期成绩。",

        // 1345 Help
        help_title: "外国人综合咨询中心 (1345)",
        help_desc_1: "支援留学生维权及拖欠工资咨询",

        // Footer
        disclaimer: "结果仅供参考，最终决定权归出入境管理事务所所有。对于使用此信息造成的任何问题，我们概不负责。",

        // Job Prep
        tab_paperwork: "求职准备",
        resume_title: "1分钟求职信",
        resume_desc: "生成发送给老板的礼貌求职短信。",
        name_ph: "姓名",
        age_ph: "年龄",
        topik_ph: "韩语等级 (例: 4级)",
        btn_gen_resume: "生成并复制",
        resume_template: "您好！看到兼职招聘联系您。\n姓名: {name}\n年龄: {age}岁\n签证: {visa} (留学生)\n韩语: {topik}\n\n我会认真工作的，希望能给我面试机会！",

        // Holiday Pay
        holiday_pay_label: "预计周休津贴:",
    },
    vn: {
        tab_check: "Kiểm tra",
        tab_paperwork: "Giấy tờ",
        tab_map: "Bản đồ",
        calc_title: "Kiểm tra điều kiện làm thêm",
        ieqas_badge: "🏆 ĐH Pai Chai: Đạt chuẩn IEQAS (+5 giờ)",
        label_visa: "Loại Visa",
        label_topik: "Cấp TOPIK",
        label_gpa: "Điểm GPA kỳ trước",
        label_residence: "Dưới 6 tháng (D-4)",
        btn_check: "Xem kết quả",


        // Docs
        check_title: "Danh sách hồ sơ cần thiết",
        check_desc: "Hãy kiểm tra trước khi đến văn phòng!",
        doc_passport: "Hộ chiếu (Passport)",
        doc_arc: "Thẻ người nước ngoài (ARC)",
        doc_form: "Đơn đăng ký tổng hợp",
        doc_biz: "Giấy phép kinh doanh (Bản sao)",
        doc_contract: "Hợp đồng lao động chuẩn",
        doc_confirm: "Giấy xác nhận làm thêm",

        map_title: "Địa điểm chính",
        footer_warning: "Làm chui phạt tới 20 triệu won!",


        res_fail_gpa: "❌ Không được làm (GPA < 2.0)",
        res_fail_d4: "❌ Không được làm (Dưới 6 tháng)",
        res_safe_d2: "Ngày thường: 25h / Cuối tuần: Không giới hạn",
        res_safe_d4: "Ngày thường: 20h / Cuối tuần: Bao gồm (Max 20h)",
        res_safe_low: "Ngày thường: {hours} giờ / Cuối tuần: 10 giờ",
        res_title_success: "Có thể đăng ký (Eligible)",
        res_title_warn: "Cảnh báo (Giới hạn giờ)",



        // Salary Calc
        salary_title: "Tính lương",
        min_wage_label: "Lương tối thiểu 2025",
        label_my_wage: "Lương giờ của tôi",
        label_hours: "Giờ làm/tuần",
        label_monthly: "Lương tháng (4 tuần)",
        msg_low_wage: "🚨 Phạm pháp! Thấp hơn mức tối thiểu.",

        // Safety
        tab_safety: "An toàn",
        safety_title: "Liên hệ khẩn cấp",
        emerg_police: "Cảnh sát (112)",
        emerg_fire: "Cứu hỏa/Y tế (119)",
        emerg_immi: "Xuất nhập cảnh (1345)",
        ins_title: "Bắt buộc có BHYT!",
        ins_desc: "Du học sinh phải tham gia BHYT. Chi phí bệnh viện ở Hàn Quốc rất đắt nếu không có bảo hiểm.",
        warn_title: "⚠️ Tuyệt đối cấm!",
        warn_bank: "Không cho mượn tài khoản ngân hàng (Lừa đảo).",
        warn_drug: "Ma túy là trọng tội tại Hàn Quốc.",

        // PM Safety
        pm_title: "Quy tắc an toàn xe điện",
        pm_helmet: "Không đội mũ",
        pm_license: "Không bằng lái",
        pm_ride: "Chở người (2 người)",
        pm_path: "Đi trên vỉa hè",

        // Validation
        msg_req_gpa: "Vui lòng nhập điểm GPA.",

        // 1345 Help
        help_title: "Trung tâm Thông tin cho Người nước ngoài (1345)",
        help_desc_1: "Hỗ trợ tư vấn nhân quyền & nợ lương",

        // Footer
        disclaimer: "Kết quả chỉ mang tính tham khảo. Quyết định cuối cùng thuộc về Cục Quản lý Xuất nhập cảnh.",

        // Job Prep
        tab_paperwork: "Chuẩn bị việc làm",
        resume_title: "Hồ sơ xin việc 1 phút",
        resume_desc: "Tạo tin nhắn xin việc lịch sự gửi cho chủ quán.",
        name_ph: "Tên",
        age_ph: "Tuổi",
        topik_ph: "Năng lực tiếng Hàn (VD: Cấp 4)",
        btn_gen_resume: "Tạo và Sao chép",
        resume_template: "Xin chào! Tôi liên hệ vì thấy tin tuyển dụng.\nTên: {name}\nTuổi: {age}\nVisa: {visa} (Du học sinh)\nTiếng Hàn: {topik}\n\nTôi sẽ làm việc chăm chỉ. Mong nhận được cơ hội phỏng vấn!",

        // Holiday Pay
        holiday_pay_label: "Trợ cấp nghỉ tuần (Dự kiến):",
    }
};

let currentLang = 'ko';

// --- 2. LANGUAGE LOGIC ---

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Save to LocalStorage
    localStorage.setItem('visaSafeLang', lang);

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
    ['check', 'paperwork', 'map', 'safety'].forEach(id => {
        document.getElementById(`section-${id}`).classList.add('hidden');
        document.getElementById(`tab-${id}`).classList.remove('tab-active', 'bg-white', 'shadow-sm', 'text-blue-600');
    });

    // Show target
    document.getElementById(`section-${tabName}`).classList.remove('hidden');

    // Active style
    const btn = document.getElementById(`tab-${tabName}`);
    btn.classList.add('tab-active', 'bg-white', 'shadow-sm', 'text-blue-600');

    // Fix Map
    if (tabName === 'map' && map) {
        setTimeout(() => {
            map.invalidateSize();
            map.panTo([36.322, 127.369]);
        }, 100);
    }
}

// --- 4. VISA CALCULATOR LOGIC (ENHANCED) ---

function calculateVisa() {
    const visa = document.querySelector('input[name="visa"]:checked')?.value || 'D-2';
    const topik = parseInt(document.getElementById('input-topik').value);
    const gpa = parseFloat(document.getElementById('input-gpa').value);
    const isUnder6Months = document.getElementById('input-residence').checked;

    const t = translations[currentLang];

    let resultText = "";
    let isSafe = true; // green vs red/yellow

    // Logic Tree
    if (isNaN(gpa)) {
        // Validation: Empty GPA
        resultText = t.msg_req_gpa;
        isSafe = null; // Neutral state
    } else if (gpa < 2.0) {
        // FAIL: GPA
        resultText = t.res_fail_gpa;
        isSafe = false;
    } else if (visa === 'D-4' && isUnder6Months) {
        // FAIL: D-4 Residence
        resultText = t.res_fail_d4;
        isSafe = false;
    } else {
        // SUCCESS PATHS
        let weekdayLimit = 10;
        let weekendUnlimited = false;

        if (visa === 'D-2') {
            // Pai Chai Univ is IEQAS certified -> +5 hours benefit
            if (topik >= 3) {
                weekdayLimit = 25; // Standard 20 + 5
                weekendUnlimited = true;
            } else {
                weekdayLimit = 10; // No benefit if TOPIK criteria not met
                weekendUnlimited = false;
            }
        } else if (visa === 'D-4') {
            // D-4 often doesn't get IEQAS hour benefits, usually strictly monitored
            if (topik >= 2) {
                weekdayLimit = 20; // Standard D-4 limit
                weekendUnlimited = false;
            } else {
                weekdayLimit = 10;
                weekendUnlimited = false;
            }
        }

        if (weekendUnlimited) {
            // Apply D-2 or D-4 specific success strings
            if (visa === 'D-2') {
                resultText = t.res_safe_d2.replace('{hours}', weekdayLimit);
            } else {
                resultText = t.res_safe_d4.replace('{hours}', weekdayLimit); // D-4 uses limited string
            }
            isSafe = true;
        } else {
            resultText = t.res_safe_low.replace('{hours}', weekdayLimit);
            isSafe = false; // logic says warning color for low hours
        }
    }

    // Render
    const box = document.getElementById('result-box');
    const icon = document.getElementById('result-icon');
    const title = document.getElementById('result-title');
    const desc = document.getElementById('result-desc');

    box.classList.remove('hidden', 'bg-green-50', 'bg-red-50', 'bg-yellow-50', 'border-green-200', 'border-red-200', 'border-yellow-200', 'text-green-800', 'text-red-800', 'text-yellow-800');
    icon.className = "fa-solid text-4xl mb-3";

    if (isSafe === null) {
        // Input Required (Neutral/Warning)
        box.classList.add('bg-yellow-50', 'border-yellow-200', 'text-yellow-800');
        icon.classList.add('fa-circle-exclamation');
        title.textContent = "Check Required";
        desc.innerHTML = `<span class="font-bold text-lg">${resultText}</span>`;
    } else if (resultText.includes('❌') || isSafe === false) {
        // Illegal
        box.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        icon.classList.add('fa-ban');
        title.textContent = t.calc_title; // Just reuse generic title or 'Illegal' if translated
        desc.innerHTML = `<span class="font-bold text-xl">${resultText}</span>`;
    } else if (isSafe) {
        // Safe (Unlimited Weekend)
        box.classList.add('bg-green-50', 'border-green-200', 'text-green-800');
        icon.classList.add('fa-check-circle');
        title.textContent = t.res_title_success;
        desc.innerHTML = `<span class="font-bold text-lg">${resultText.replace('Unlimited', '<u class="text-green-600">Unlimited</u>').replace('무제한', '<u class="text-green-600">무제한</u>')}</span>`;
    } else {
        // Limited (Warning)
        box.classList.add('bg-yellow-50', 'border-yellow-200', 'text-yellow-800');
        icon.classList.add('fa-triangle-exclamation');
        title.textContent = t.res_title_warn;
        desc.innerHTML = `<span class="font-bold text-lg">${resultText}</span>`;
    }



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
        // Week: (Hours / 40) * 8 * Wage.
        // Month: * 4.
        const weeklyHolidayPay = (hours / 40) * 8 * wage;
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

// --- 7. INITIALIZATION (DOMContentLoaded) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Check (LocalStorage)
    const savedLang = localStorage.getItem('visaSafeLang');
    if (savedLang) {
        setLanguage(savedLang);
        // Ensure app is visible immediately if lang is known
        document.getElementById('language-modal').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');
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
        cWage: document.getElementById('calc-wage').value,
        cHours: document.getElementById('calc-hours').value
    };
    localStorage.setItem('visaSafeForm', JSON.stringify(data));
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

    const t = translations[currentLang];
    const msg = t.resume_template
        .replace('{name}', name)
        .replace('{age}', age)
        .replace('{visa}', visa)
        .replace('{topik}', topik);

    const textArea = document.getElementById('resume-text');
    textArea.value = msg;
    document.getElementById('resume-result').classList.remove('hidden');

    // Copy
    textArea.select();
    document.execCommand('copy'); // Legacy but works everywhere
    // Or navigator.clipboard.writeText(msg);

    const copyMsg = document.getElementById('resume-copied');
    copyMsg.classList.remove('hidden');
    setTimeout(() => copyMsg.classList.add('hidden'), 3000);
}

function loadFormData() {
    const saved = localStorage.getItem('visaSafeForm');
    if (!saved) return;
    try {
        const d = JSON.parse(saved);
        if (d.visa) { const r = document.querySelector(`input[name="visa"][value="${d.visa}"]`); if (r) r.checked = true; }
        if (d.topik) document.getElementById('input-topik').value = d.topik;
        if (d.gpa) document.getElementById('input-gpa').value = d.gpa;
        if (d.residence !== undefined) document.getElementById('input-residence').checked = d.residence;

        if (d.cWage) document.getElementById('calc-wage').value = d.cWage;
        if (d.cHours) document.getElementById('calc-hours').value = d.cHours;

        // Trigger initial calc
        updateSalary();
    } catch (e) { }
}
