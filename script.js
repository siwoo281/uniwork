// --- 1. CONFIGURATION & TRANSLATIONS ---

const translations = {
    ko: {
        tab_check: "자격 조회",
        tab_guide: "규정 가이드",
        tab_paperwork: "서류 작성",
        tab_map: "지도",
        guide_title: "시간 제한 가이드",
        guide_subtitle: "D-2 / D-4 비자 차이점",
        guide_time_title: "근무 가능 시간",
        guide_ban_title: "🚫 절대 금지 (적발 시 추방)",
        guide_ban_desc: "불법 취업 적발 시 비자 취소 가능성 높음",
        job_delivery: "배달 대행 (라이더)",
        job_construction: "건설 현장 (일용직)",
        job_factory: "제조업 (공장)",
        job_teaching: "개인 과외 (미신고)",
        calc_title: "아르바이트 가능 여부 확인",
        ieqas_badge: "🏆 배재대: 교육국제화역량 인증대학 (+5시간)",
        label_visa: "비자 종류",
        label_topik: "TOPIK 등급",
        label_gpa: "직전 학기 학점 (0.0 - 4.5)",
        label_residence: "입국 6개월 미만 (D-4 인 경우)",
        label_first_sem: "신입생/편입생 (첫 학기) - 성적 면제",
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
        footer_warning: "허가 없이 일하면 최대 3천만 원 벌금!",


        // Result Strings
        res_fail_gpa: "❌ 불가 (학점 2.0 미만)",
        res_fail_d4: "❌ 불가 (6개월 미만)",
        res_safe_d2: "학기 중: 주 25시간 (주말 포함) / 방학: 무제한",
        res_safe_d4: "주중: 20시간 / 주말: 포함 (최대 20시간)",
        res_safe_d2_exempt: "평일: {hours}시간 / 주말: 무제한", // New key
        res_safe_low: "주중: {hours}시간 / 주말: 10시간",
        res_gpa_exempt: "(성적 요건 면제)",
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

        // Job Hunting & Housing
        tab_job: "취업",
        tab_living: "생활",
        job_sites_title: "일자리 찾기",
        job_sites_desc: "한국에서 가장 많이 쓰는 알바 앱",
        job_tip_title: "검색 팁",
        job_tip_1: "'외국인가능' 공고 확인",
        job_tip_2: "'초보가능' (경력 무관) 추천",

        housing_title: "방 구하기",
        housing_desc: "어플 & 부동산",
        house_app_title: "1. 부동산 어플 (시세 확인용)",

        // Dorm
        dorm_title: "학교 기숙사",
        dorm_subtitle: "배재대학교 기숙사",
        dorm_contact_label: "연락처",
        dorm_price_label: "예상 비용",
        dorm_price: "~65-70만원/학기 (룸 타입별 상이)",

        // Apps
        apps_title: "필수 앱",
        apps_desc: "한국 생활 필수템",
        app_delivery_title: "배달 앱",
        app_transport_title: "교통 & 길찾기",
        app_payment_title: "결제 & 송금",
        app_shopping_title: "쇼핑",
        house_app_desc: "평균 월세 가격을 확인하기 좋아요.",
        house_agent_title: "2. 공인중개사 (부동산)",
        house_agent_desc: "학교 후문/정문 근처 부동산을 방문하는 것이 가장 안전합니다.",
        house_check_title: "계약 전 확인:",
        house_check_1: "보증금 (Deposit)",
        house_check_2: "월세 (Monthly Rent)",
        house_check_3: "관리비 (가스/인터넷 포함 여부)",

        resume_title: "1분 알바 지원서",
        resume_desc: "사장님께 보낼 공손한 지원 문자를 만들어보세요.",
        name_ph: "이름 (예: 마이클)",
        age_ph: "나이 (예: 24)",
        topik_ph: "한국어 능력 (예: 4급)",
        btn_gen_resume: "문자 생성 및 복사",
        resume_template: "안녕하세요! 아르바이트 공고 보고 연락드렸습니다.\n이름: {name}\n나이: {age}세\n비자: {visa} (유학생)\n한국어: {topik}\n\n성실하게 일하겠습니다. 면접 기회 주시면 감사하겠습니다!",

        // D-10 & Tax
        d10_title: "졸업 후에는?",
        d10_subtitle: "D-10 구직 비자",
        d10_desc: "D-10으로 변경하여 구직 활동을 할 수 있습니다. 인턴십은 별도 신고 필수!",
        d10_allowed: "신고 필수",
        tax_title: "세금 & 보험 가이드",

        // Tax & Insurance Details
        insurance_mandatory: "의무 가입 조건:",
        insurance_cond_1: "주 60시간 이상 근무",
        insurance_cond_2: "주 15시간 이상 근무",
        insurance_cond_3: "계약 기간 1개월 이상",
        ins_health: "① 건강보험",
        ins_health_desc: "병원비 지원",
        ins_health_auto: "외국인등록증 발급 후 자동 가입",
        ins_employment: "② 고용보험",
        ins_employment_desc: "실업급여 (조건 충족 시)",
        ins_accident: "③ 산재보험",
        ins_accident_desc: "업무 중 부상 보상",
        ins_pension: "④ 국민연금",
        ins_pension_desc: "퇴직후 환급 가능",
        tax_refund_title: "3. 세금 환급 (5월)",
        tax_refund_when: "신고 시기:",
        tax_refund_period: "매년 5월 (종합소득세 신고)",
        tax_refund_tip: "* 3.3% 세금을 낸 경우 일부 환급 가능! 홈택스 방문 또는 학교 사무실 문의",
        tab_tax: "세금/보험",

        // Work Permit Guide
        permit_title: "허가 신청 방법",
        permit_subtitle: "체류자격외 활동허가",
        permit_step1_title: "자격 확인",
        permit_step1_a: "• D-2: GPA ≥ 2.0 + TOPIK 등급",
        permit_step1_b: "• D-4: 입국 후 6개월 이상 + 출석률 90% 이상",
        permit_step2_title: "학교 확인서 발급",
        permit_step2_desc: "국제교류팀 방문하여 '시간제취업확인서' 발급",
        permit_step3_title: "출입국사무소 방문",
        permit_step3_desc: "여권, 외국인등록증, 확인서, 사업자등록증, 근로계약서 지참",

        // Visa Travel
        travel_title: "비자 & 여행",
        travel_subtitle: "방학 때 고향 가도 되나요?",
        travel_expiry_title: "⛔ 비자 만료일 주의",
        travel_expiry_desc: "외국인등록증 뒷면 만료일 전에 반드시 출국해야 합니다.",
        travel_reentry_title: "재입국 (방학 등)",
        travel_reentry_1: "• 유효기간 남음 + 출국일 = 재입국 가능",
        travel_reentry_2: "• 비자 만료됨 = 같은 비자로 재입국 불가 (새로 발급 필요)",

        // Trash
        trash_title: "쓰레기 배출",
        trash_subtitle: "과태료 조심하세요!",
        trash_general_title: "일반 쓰레기",
        trash_general_desc: "흰색 종량제 봉투 (편의점 구매)",
        trash_food_title: "음식물 쓰레기",
        trash_food_desc: "노란색 봉투 (뼈/껍질 제외)",
        trash_recycle_title: "재활용",
        trash_recycle_desc: "투명 봉투 (캔, 병, 플라스틱)",

        // Medicine
        med_title: "약국 & 상비약",
        med_subtitle: "아플 때 어디로?",
        med_conv_title: "24시 편의점",
        med_conv_desc: "안전 상비약 (가벼운 증상)",
        med_pharm_title: "약국 (Yak-guk)",
        med_pharm_desc: "전문 의약품 (처방전 등)",
        permit_step4_title: "승인 대기",
        permit_step4_desc: "처리 기간: 약 1-2주. 외국인등록증에 스탬프 받음!",

        // Korean Phrases
        phrases_title: "유용한 한국어 표현",
        phrases_desc: "구직 및 근무 시",
        phrases_interview: "💼 면접",
        phrases_work: "🏪 근무 중",
        phrases_problem: "⚠️ 문제 발생 시",
        phrase_when_start: "언제부터 시작할 수 있나요?",
        phrase_schedule: "근무 시간이 어떻게 되나요?",
        phrase_understand: "알겠습니다",
        phrase_help: "도와주실 수 있어요?",
        phrase_payday: "급여일이 언제예요?",
        phrase_not_paid: "급여를 못 받았어요",
        phrase_too_many_hours: "근무 시간이 너무 많아요",

        // Holiday Pay
        holiday_pay_label: "예상 주휴수당 (포함 시):",
    },
    en: {
        tab_check: "Check Status",
        tab_guide: "Rules Guide",
        tab_paperwork: "Paperwork",
        tab_map: "Map",
        guide_title: "Time Limits",
        guide_subtitle: "D-2 vs D-4 Differences",
        guide_time_title: "Time Limits",
        guide_ban_title: "🚫 Illegal Jobs (Red Zone)",
        guide_ban_desc: "Strictly Prohibited. Visa cancelled if caught.",
        job_delivery: "Delivery (Rider)",
        job_construction: "Construction",
        job_factory: "Manufacturing",
        job_teaching: "Private Tutoring",
        tab_safety: "Safety",
        calc_title: "Int'l Student Visa Checker",
        ieqas_badge: "🏆 Pai Chai Univ: IEQAS Certified (+5hr)",
        label_visa: "Visa Type",
        label_topik: "TOPIK Level",
        label_gpa: "Prev. Semester GPA (0.0 - 4.5)",
        label_residence: "Residence < 6 months (D-4 only)",
        label_first_sem: "Freshman/Transfer (First Semester) - GPA Exempt",
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
        footer_warning: "Working without permission = Max 30M KRW Fine!",


        // Result Strings
        res_fail_gpa: "❌ Not Eligible (GPA < 2.0)",
        res_fail_d4: "❌ Not Eligible (< 6 months)",
        res_safe_d2: "Semester: 25hr/week (incl. weekends) / Vacation: Unlimited",
        res_safe_d4: "Weekday: 20hr / Weekend: Included (Max 20hr)",
        res_safe_d2_exempt: "Weekdays: {hours}hr / Weekend: Unlimited",
        res_safe_low: "Weekday: {hours}hr / Weekend: 10hr",
        res_gpa_exempt: "(GPA Exempted)",
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

        // Job Hunting & Housing
        tab_job: "Job",
        tab_living: "Living",
        job_sites_title: "Find Jobs",
        job_sites_desc: "Most popular apps in Korea",
        job_tip_title: "Search Tips",
        job_tip_1: "Look for 'Foreigner Possible' (외국인가능)",
        job_tip_2: "Look for 'No Experience' (초보가능)",

        housing_title: "Finding Housing",
        housing_desc: "Apps & Real Estate",
        house_app_title: "1. Real Estate Apps",

        // Dorm
        dorm_title: "School Dormitory",
        dorm_subtitle: "Pai Chai University Housing",
        dorm_contact_label: "Contact",
        dorm_price_label: "Approx. Price",
        dorm_price: "~650,000-700,000 KRW/semester (varies by room type)",

        // Apps
        apps_title: "Essential Apps",
        apps_desc: "Life in Korea",
        app_delivery_title: "Food Delivery",
        app_transport_title: "Transport & Navigation",
        app_payment_title: "Payment & Banking",
        app_shopping_title: "Shopping",
        house_app_desc: "Good for checking average prices (Market Price).",
        house_agent_title: "2. Real Estate Agent (Budongsan)",
        house_agent_desc: "It is safest to visit a real estate agent near the school (West Gate/Main Gate).",
        house_check_title: "Checklist:",
        house_check_1: "Deposit (Bo-jeung-geum)",
        house_check_2: "Monthly Rent (Wol-se)",
        house_check_3: "Maintenance Fee (Gwan-ri-bi) - Ask what's included!",

        resume_title: "1-Minute Resume",
        resume_desc: "Create a polite Korean job application message.",
        name_ph: "Name (e.g. Michael)",
        age_ph: "Age",
        topik_ph: "TOPIK Level (e.g. Level 4)",
        btn_gen_resume: "Generate & Copy",
        resume_template: "Hello! I am contacting you regarding the part-time job.\nName: {name}\nAge: {age}\nVisa: {visa} (Student)\nKorean Level: {topik}\n\nI am hardworking and responsible. I would appreciate an interview!",

        // D-10 & Tax
        d10_title: "After Graduation?",
        d10_subtitle: "D-10 Job Seeker Visa",
        d10_desc: "Switch to D-10 to find a job. Internships require a specific report!",
        d10_allowed: "Report Required",
        tax_title: "Tax & Insurance",

        // Tax & Insurance Details
        insurance_mandatory: "Mandatory if:",
        insurance_cond_1: "Working > 60 hours/month",
        insurance_cond_2: "Working > 15 hours/week",
        insurance_cond_3: "Contract period > 1 month",
        ins_health: "① Health Insurance (건강보험)",
        ins_health_desc: "Covers medical expenses at hospitals",
        ins_health_auto: "Auto-enrolled after getting ARC",
        ins_employment: "② Employment Insurance (고용보험)",
        ins_employment_desc: "Unemployment benefits (if applicable)",
        ins_accident: "③ Industrial Accident Insurance (산재보험)",
        ins_accident_desc: "Covers workplace injuries",
        ins_pension: "④ National Pension (국민연금)",
        ins_pension_desc: "Retirement fund (can get refund when leaving Korea)",
        tax_refund_title: "3. Tax Refund (May)",
        tax_refund_when: "When to Report:",
        tax_refund_period: "Every May (Global Income Tax Reporting)",
        tax_refund_tip: "* If you paid 3.3% tax as a freelancer, you may get some back! Visit Hometax (홈택스) or ask your school's office for help.",
        tab_tax: "Tax",

        // Work Permit Guide
        permit_title: "How to Apply for Work Permit",
        permit_subtitle: "Part-time Work Permit",
        permit_step1_title: "Check Requirements",
        permit_step1_a: "• D-2: GPA ≥ 2.0 + TOPIK level",
        permit_step1_b: "• D-4: Stay ≥ 6 months + Attendance ≥ 90%",
        permit_step2_title: "Get School Confirmation",
        permit_step2_desc: "Visit your school's International Office and get the 'Part-time Work Confirmation (시간제취업확인서)'",
        permit_step3_title: "Visit Immigration Office",
        permit_step3_desc: "Passport, ARC, Confirmation Form, Business License, Contract",

        // Visa Travel
        travel_title: "Visa & Travel",
        travel_subtitle: "Can I go home?",
        travel_expiry_title: "⛔ Visa Expiry Rule",
        travel_expiry_desc: "You MUST leave Korea before the expiration date on your ARC.",
        travel_reentry_title: "Re-entry (Vacation)",
        travel_reentry_1: "• Valid ARC + Date left = OK to re-enter",
        travel_reentry_2: "• Expired ARC = Cannot return on same visa",

        // Trash
        trash_title: "Recycling Guide",
        trash_subtitle: "Don't get fined!",
        trash_general_title: "General Waste",
        trash_general_desc: "Standard White Bag (Jongnyangje)",
        trash_food_title: "Food Waste",
        trash_food_desc: "Yellow Bag (No bones/shells!)",
        trash_recycle_title: "Recycling",
        trash_recycle_desc: "Clear plastic bags (Glass, Can, PET)",

        // Medicine
        med_title: "Medicine",
        med_subtitle: "Where to buy?",
        med_conv_title: "24h Store",
        med_conv_desc: "Safe Medicine (Basic)",
        med_pharm_title: "Pharmacy",
        med_pharm_desc: "Professional Help",
        permit_step4_title: "Wait for Approval",
        permit_step4_desc: "Processing time: ~1-2 weeks. You'll get a stamp on your ARC!",

        // Korean Phrases
        phrases_title: "Useful Korean Phrases",
        phrases_desc: "For job hunting & work",
        phrases_interview: "💼 Interview",
        phrases_work: "🏪 At Work",
        phrases_problem: "⚠️ If Problems",
        phrase_when_start: "When can I start?",
        phrase_schedule: "What's the schedule?",
        phrase_understand: "I understand",
        phrase_help: "Can you help me?",
        phrase_payday: "When is payday?",
        phrase_not_paid: "I wasn't paid",
        phrase_too_many_hours: "Too many hours",

        // Holiday Pay
        holiday_pay_label: "Est. Weekly Holiday Pay:",
    },
    cn: {
        tab_check: "资格查询",
        tab_guide: "规定指南",
        tab_paperwork: "필수 서류",
        tab_map: "地图",
        guide_title: "打工时间限制",
        guide_subtitle: "D-2 / D-4 签证区别",
        guide_time_title: "允许工作时间",
        guide_ban_title: "🚫 绝对禁止 (非法打工)",
        guide_ban_desc: "一旦被发现，签证可能被立即取消",
        job_delivery: "外卖配送 (Rider)",
        job_construction: "建筑工地 (搬砖)",
        job_factory: "制造业 (工厂)",
        job_teaching: "个人家教 (未申报)",
        tab_safety: "安全/保险",
        calc_title: "留学生打工资格查询",
        ieqas_badge: "🏆 培材大学: 教育国际化认证大学 (+5小时)",
        label_visa: "签证类型",
        label_topik: "韩语等级 (TOPIK)",
        label_gpa: "上学期绩点 (GPA)",
        label_residence: "入境不满6个月 (D-4)",
        label_first_sem: "新生/插班生 (第一学期) - 成绩豁免",
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
        footer_warning: "非法打工最高罚款3000万韩元！",


        res_fail_gpa: "❌ 不可打工 (GPA < 2.0)",
        res_fail_d4: "❌ 不可打工 (入境不满6个月)",
        res_safe_d2: "学期中: 周25小时 (含周末) / 假期: 无限制",
        res_safe_d4: "工作日: 20小时 / 周末: 包含 (最大20/周)",
        res_safe_d2_exempt: "工作日: {hours}小时 / 周末: 无限制",
        res_safe_low: "工作日: {hours}小时 / 周末: 10小时",
        res_gpa_exempt: "(成绩豁免)",
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

        // Job Hunting & Housing
        tab_job: "求职",
        tab_living: "生活",
        job_sites_title: "找工作",
        job_sites_desc: "韩国最常用的兼职APP",
        job_tip_title: "搜索技巧",
        job_tip_1: "寻找 '外国人可能' (외국인가능)",
        job_tip_2: "寻找 '新手可能' (초보가능)",

        housing_title: "找房子",
        housing_desc: "APP & 不动产",
        house_app_title: "1. 找房APP (确认行情)",

        // Dorm
        dorm_title: "学校宿舍",
        dorm_subtitle: "培材大学宿舍",
        dorm_contact_label: "联系方式",
        dorm_price_label: "预计费用",
        dorm_price: "~65-70万韩元/学期 (房型不同)",

        // Apps
        apps_title: "必备APP",
        apps_desc: "韩国生活必需",
        app_delivery_title: "外卖APP",
        app_transport_title: "交通 & 地图",
        app_payment_title: "支付 & 银行",
        app_shopping_title: "购物",
        house_app_desc: "适合确认平均月租价格。",
        house_agent_title: "2. 公인중개사 (부동산)",
        house_agent_desc: "最安全的方法是访问学校后门/正门附近的房产中介。",
        house_check_title: "签约前确认:",
        house_check_1: "保证金 (Deposit)",
        house_check_2: "月租 (Monthly Rent)",
        house_check_3: "管理费 (是否包含水网)",

        resume_title: "1分钟求职信",
        resume_desc: "生成发送给老板的礼貌求职短信。",
        name_ph: "姓名",
        age_ph: "年龄",
        topik_ph: "韩语等级 (例: 4级)",
        btn_gen_resume: "生成并复制",
        resume_template: "您好！看到兼职招聘联系您。\n姓名: {name}\n年龄: {age}岁\n签证: {visa} (留学生)\n韩语: {topik}\n\n我会认真工作的，希望能给我面试机会！",

        // D-10 & Tax
        d10_title: "毕业后?",
        d10_subtitle: "D-10 求职签证",
        d10_desc: "可换签为D-10进行求职。实习必须申报！",
        d10_allowed: "必须申报",
        tax_title: "税务 & 保险",

        // Tax & Insurance
        insurance_mandatory: "义务条件:",
        insurance_cond_1: "每月工作 > 60小时",
        insurance_cond_2: "每周工作 > 15小时",
        insurance_cond_3: "合同期 > 1个月",
        ins_health: "① 健康保险 (건강보험)",
        ins_health_desc: "医疗费支付",
        ins_health_auto: "登录证后自动加入",
        ins_employment: "② 就业保险 (고용보험)",
        ins_employment_desc: "失业救济金",
        ins_accident: "③ 工伤保险 (산재보험)",
        ins_accident_desc: "工伤补偿",
        ins_pension: "④ 国民年金 (국민연금)",
        ins_pension_desc: "离韩时可退还",
        tax_refund_title: "3. 退税 (5月)",
        tax_refund_when: "申报时期:",
        tax_refund_period: "每年5月 (综合所得税)",
        tax_refund_tip: "* 3.3%税可能退还! 访问网上税务 (홈택스) 或咨询学校",
        tab_tax: "税务",

        // Permit Guide
        permit_title: "如何申请工作许可",
        permit_subtitle: "资格外活动许可",
        permit_step1_title: "检查资格",
        permit_step1_a: "• D-2: GPA ≥ 2.0 + TOPIK",
        permit_step1_b: "• D-4: 居住 ≥ 6个月 + 出勤 ≥ 90%",
        permit_step2_title: "学校确认书",
        permit_step2_desc: "访问国际交流部门申请'兼职工作确认书'",
        permit_step3_title: "访问出入境管理局",
        permit_step3_desc: "护照, 外国人登录证, 确认书, 营业执照, 劳动合同",

        // Visa Travel
        travel_title: "签证 & 旅行",
        travel_subtitle: "放假可以回国吗？",
        travel_expiry_title: "⛔ 签证到期注意",
        travel_expiry_desc: "必须在外国人登录证背面的到期日之前离境。",
        travel_reentry_title: "再入境 (假期)",
        travel_reentry_1: "• 有效期内 + 出境日期 = 可再入境",
        travel_reentry_2: "• 签证过期 = 不可持同签证入境 (需重新申请)",

        // Trash
        trash_title: "垃圾分类",
        trash_subtitle: "小心罚款!",
        trash_general_title: "一般垃圾",
        trash_general_desc: "白色计量袋 (便利店购买)",
        trash_food_title: "食物垃圾",
        trash_food_desc: "黄色袋子 (去骨/壳)",
        trash_recycle_title: "回收垃圾",
        trash_recycle_desc: "透明袋 (罐, 瓶, 塑料)",

        // Medicine
        med_title: "药店 & 药品",
        med_subtitle: "生病去哪里？",
        med_conv_title: "24小时便利店",
        med_conv_desc: "安全常备药 (轻微症状)",
        med_pharm_title: "药店 (Yak-guk)",
        med_pharm_desc: "专业药品 (处方药等)",
        permit_step4_title: "等待批准",
        permit_step4_desc: "处理时间: 约1-2周. 登录证盖章!",

        // Phrases
        phrases_title: "常用韩语",
        phrases_desc: "求职和工作",
        phrases_interview: "💼 面试",
        phrases_work: "🏪 工作中",
        phrases_problem: "⚠️ 问题时",
        phrase_when_start: "何时开始?",
        phrase_schedule: "工作时间?",
        phrase_understand: "明白了",
        phrase_help: "可以帮忙吗?",
        phrase_payday: "发薪日是何时?",
        phrase_not_paid: "没收到工资",
        phrase_too_many_hours: "工作时间太多",

        // Holiday Pay
        holiday_pay_label: "预计周休津贴:",
    },
    vn: {
        tab_check: "Kiểm tra",
        tab_guide: "Hướng dẫn",
        tab_paperwork: "Giấy tờ",
        tab_map: "Bản đồ",
        guide_title: "Giới hạn thời gian",
        guide_subtitle: "Sự khác biệt D-2 / D-4",
        guide_time_title: "Thời gian làm việc",
        guide_ban_title: "🚫 Tuyệt đối cấm (Việc làm bất hợp pháp)",
        guide_ban_desc: "Nếu bị bắt, visa sẽ bị hủy ngay lập tức",
        job_delivery: "Giao hàng (Shipper)",
        job_construction: "Công trường xây dựng",
        job_factory: "Nhà máy (Sản xuất)",
        job_teaching: "Gia sư (Không báo cáo)",
        calc_title: "Kiểm tra điều kiện làm thêm",
        ieqas_badge: "🏆 ĐH Pai Chai: Đạt chuẩn IEQAS (+5 giờ)",
        label_visa: "Loại Visa",
        label_topik: "Cấp TOPIK",
        label_gpa: "Điểm GPA kỳ trước",
        label_residence: "Dưới 6 tháng (D-4)",
        label_first_sem: "Sinh viên mới/Chuyển trường (Kỳ đầu) - Miễn GPA",
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
        footer_warning: "Làm chui phạt tới 30 triệu won!",


        res_fail_gpa: "❌ Không được làm (GPA < 2.0)",
        res_fail_d4: "❌ Không được làm (Dưới 6 tháng)",
        res_safe_d2: "Học kỳ: 25h/tuần (bao gồm cuối tuần) / Kỳ nghỉ: Không giới hạn",
        res_safe_d4: "Ngày thường: 20h / Cuối tuần: Bao gồm (Max 20h)",
        res_safe_d2_exempt: "Ngày thường: {hours}h / Cuối tuần: Không giới hạn",
        res_safe_low: "Ngày thường: {hours} giờ / Cuối tuần: 10 giờ",
        res_gpa_exempt: "(Miễn GPA)",
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

        // Job Hunting & Housing
        tab_job: "Việc làm",
        tab_living: "Sống",
        job_sites_title: "Tìm việc làm",
        job_sites_desc: "Ứng dụng tìm việc phổ biến nhất",
        job_tip_title: "Mẹo tìm kiếm",
        job_tip_1: "Tìm 'Người nước ngoài' (외국인가능)",
        job_tip_2: "Tìm 'Không kinh nghiệm' (초보가능)",

        housing_title: "Tìm phòng",
        housing_desc: "Ứng dụng & Bất động sản",
        house_app_title: "1. Ứng dụng BĐS",

        // Dorm
        dorm_title: "Ký túc xá trường",
        dorm_subtitle: "Ký túc xá ĐH Pai Chai",
        dorm_contact_label: "Liên hệ",
        dorm_price_label: "Chi phí",
        dorm_price: "~650,000-700,000 won/học kỳ (tùy loại phòng)",

        // Apps
        apps_title: "Ứng dụng cần thiết",
        apps_desc: "Cuộc sống Hàn Quốc",
        app_delivery_title: "Giao đồ ăn",
        app_transport_title: "Giao thông & Bản đồ",
        app_payment_title: "Thanh toán & Ngân hàng",
        app_shopping_title: "Mua sắm",
        house_app_desc: "Tốt để kiểm tra giá thuê trung bình.",
        house_agent_title: "2. Môi giới BĐS (Budongsan)",
        house_agent_desc: "An toàn nhất là đến văn phòng BĐS gần cổng trường.",
        house_check_title: "Kiểm tra:",
        house_check_1: "Tiền cọc (Deposit)",
        house_check_2: "Tiền thuê (Monthly)",
        house_check_3: "Phí quản lý (Điện/Nước/Net?)",

        resume_title: "Hồ sơ xin việc 1 phút",
        resume_desc: "Tạo tin nhắn xin việc lịch sự gửi cho chủ quán.",
        name_ph: "Tên",
        age_ph: "Tuổi",
        topik_ph: "Năng lực tiếng Hàn (VD: Cấp 4)",
        btn_gen_resume: "Tạo và Sao chép",
        resume_template: "Xin chào! Tôi liên hệ vì thấy tin tuyển dụng.\nTên: {name}\nTuổi: {age}\nVisa: {visa} (Du học sinh)\nTiếng Hàn: {topik}\n\nTôi sẽ làm việc chăm chỉ. Mong nhận được cơ hội phỏng vấn!",

        // D-10 & Tax
        d10_title: "Tốt nghiệp thì?",
        d10_subtitle: "D-10 Visa tìm việc",
        d10_desc: "Đổi sang D-10 để tìm việc. Thực tập phải báo cáo!",
        d10_allowed: "Phải báo cáo",
        tax_title: "Thuế & Bảo hiểm",

        // Tax & Insurance
        insurance_mandatory: "Bắt buộc nếu:",
        insurance_cond_1: "Làm > 60 giờ/tháng",
        insurance_cond_2: "Làm > 15 giờ/tuần",
        insurance_cond_3: "Hợp đồng > 1 tháng",
        ins_health: "① Bảo hiểm y tế (건강보험)",
        ins_health_desc: "Chi phí bệnh viện",
        ins_health_auto: "Tự động tham gia sau khi có ARC",
        ins_employment: "② Bảo hiểm thất nghiệp (고용보험)",
        ins_employment_desc: "Trợ cấp thất nghiệp",
        ins_accident: "③ Bảo hiểm tai nạn (산재보험)",
        ins_accident_desc: "Bồi thường chấn thương",
        ins_pension: "④ Lương hưu (국민연금)",
        ins_pension_desc: "Có thể hoàn trả khi rời Hàn Quốc",
        tax_refund_title: "3. Hoàn thuế (Tháng 5)",
        tax_refund_when: "Thời gian:",
        tax_refund_period: "Mỗi năm tháng 5",
        tax_refund_tip: "* Nếu đóng thuế 3.3%, có thể hoàn lại! Truy cập Hometax hoặc hỏi văn phòng trường",
        tab_tax: "Thuế",

        // Permit Guide
        permit_title: "Cách xin giấy phép",
        permit_subtitle: "Giấy phép làm thêm",
        permit_step1_title: "Kiểm tra điều kiện",
        permit_step1_a: "• D-2: GPA ≥ 2.0 + TOPIK",
        permit_step1_b: "• D-4: Ở trên 6 tháng + Đi học ≥ 90%",
        permit_step2_title: "Giấy xác nhận trường",
        permit_step2_desc: "Thăm văn phòng sinh viên quốc tế lấy 'Giấy xác nhận làm thêm'",
        permit_step3_title: "Đến Cục Xuất nhập cảnh",
        permit_step3_desc: "Hộ chiếu, Thẻ cư trú, Giấy xác nhận, Giấy phép KD, Hợp đồng",

        // Visa Travel
        travel_title: "Visa & Du lịch",
        travel_subtitle: "Có thể về nước không?",
        travel_expiry_title: "⛔ Hết hạn Visa",
        travel_expiry_desc: "BẠN PHẢI rời Hàn Quốc trước ngày hết hạn trên thẻ ARC.",
        travel_reentry_title: "Tái nhập cảnh",
        travel_reentry_1: "• Còn hạn ARC = Được phép quay lại",
        travel_reentry_2: "• Hết hạn ARC = Không thể quay lại (Xin mới)",

        // Trash
        trash_title: "Phân loại rác",
        trash_subtitle: "Cẩn thận bị phạt!",
        trash_general_title: "Rác thường",
        trash_general_desc: "Túi trắng tiêu chuẩn (Mua ở cửa hàng)",
        trash_food_title: "Rác thực phẩm",
        trash_food_desc: "Túi vàng (Không xương/vỏ!)",
        trash_recycle_title: "Tái chế",
        trash_recycle_desc: "Túi trong suốt (Lon, Chai, Nhựa)",

        // Medicine
        med_title: "Thuốc & Nhà thuốc",
        med_subtitle: "Mua thuốc ở đâu?",
        med_conv_title: "Cửa hàng 24h",
        med_conv_desc: "Thuốc cơ bản (Cảm nhẹ)",
        med_pharm_title: "Nhà thuốc (Yak-guk)",
        med_pharm_desc: "Thuốc chuyên dụng (Kê đơn)",
        permit_step4_title: "Chờ duyệt",
        permit_step4_desc: "Thời gian: ~1-2 tuần. Đóng dấu ARC!",

        // Phrases
        phrases_title: "Tiếng Hàn hữu ích",
        phrases_desc: "Tìm việc và làm việc",
        phrases_interview: "💼 Phỏng vấn",
        phrases_work: "🏪 Đang làm",
        phrases_problem: "⚠️ Nếu có vấn đề",
        phrase_when_start: "Khi nào bắt đầu?",
        phrase_schedule: "Lịch làm việc?",
        phrase_understand: "Hiểu rồi",
        phrase_help: "Giúp tôi được không?",
        phrase_payday: "Ngày trả lương?",
        phrase_not_paid: "Chưa nhận lương",
        phrase_too_many_hours: "Làm quá nhiều giờ",

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

            // Default to Check Status Tab
            switchTab('check');

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
    ['check', 'guide', 'job', 'living', 'safety'].forEach(id => {
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

    // Reset Scroll Position
    window.scrollTo(0, 0);

    // Fix Map
    if (tabName === 'living' && map) {
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
    const gpaInput = document.getElementById('input-gpa');
    const gpa = parseFloat(gpaInput.value);
    const isUnder6Months = document.getElementById('input-residence').checked;
    const isFirstSem = document.getElementById('input-first-sem').checked;

    const t = translations[currentLang];

    let resultText = "";
    let isSafe = true; // green vs red/yellow
    let isExempt = false;

    // Logic Tree
    if (visa === 'D-4' && isUnder6Months) {
        // FAIL: D-4 Residence (Strict rule, no exemption?)
        // Assuming residence rule applies regardless of school semester
        resultText = t.res_fail_d4;
        isSafe = false;
    } else if (!isFirstSem && (isNaN(gpa) || gpa < 1.9)) {
        // FAIL: GPA (Modified to 1.9 based on specific user feedback)
        if (isNaN(gpa)) {
            resultText = t.msg_req_gpa;
            isSafe = null;
        } else {
            resultText = t.res_fail_gpa.replace('2.0', '1.9'); // Quick fix for text, ideally update translation key
            isSafe = false;
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
                // Standard rule: TOPIK 3 is often min for 20h. 
                // Sticking to 25h weekday (IEQAS) but LIMITED weekends if < TOPIK 4 based on user prompt implication
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
                // Use new exempt string if we are in the exempt branch (weekendUnlimited is true here)
                resultText = t.res_safe_d2_exempt.replace('{hours}', weekdayLimit);
            } else {
                resultText = t.res_safe_d4.replace('20', weekdayLimit);
            }
            isSafe = true;
        } else {
            // For D-4 or Limited D-2
            if (visa === 'D-4') {
                resultText = t.res_safe_d4; // Explicitly showing the "Weekend Included" string
            } else {
                resultText = t.res_safe_low.replace('{hours}', weekdayLimit);
            }
            isSafe = false; // logic says warning color for low hours/limited weekends
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
    const savedLang = localStorage.getItem('uniWorkLang');
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
