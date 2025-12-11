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
        app_messenger_title: "메신저",
        app_delivery_title: "배달 앱",
        app_transport_title: "교통 & 길찾기",
        app_payment_title: "결제 & 송금",
        app_shopping_title: "쇼핑",
        app_market_title: "중고거래",
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
        app_messenger_title: "Messenger",
        app_delivery_title: "Food Delivery",
        app_transport_title: "Transport & Navigation",
        app_payment_title: "Payment & Banking",
        app_shopping_title: "Shopping",
        app_market_title: "Second-hand Market",
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
    jp: {
        tab_check: "資格確認",
        tab_guide: "規定ガイド",
        tab_paperwork: "必要書類",
        tab_map: "地図",
        guide_title: "時間制限ガイド",
        guide_subtitle: "D-2 / D-4 ビザの違い",
        guide_time_title: "勤務可能時間",
        guide_ban_title: "🚫 絶対禁止 (摘発時追放)",
        guide_ban_desc: "不法就労摘発時、ビザ取消の可能性大",
        job_delivery: "配達代行 (ライダー)",
        job_construction: "建設現場 (日雇い)",
        job_factory: "製造業 (工場)",
        job_teaching: "個人レッスン (未申告)",
        tab_safety: "安全/保険",
        calc_title: "アルバイト資格確認",
        ieqas_badge: "🏆 培材大: 教育国際化力量認証大学 (+5時間)",
        label_visa: "ビザの種類",
        label_topik: "TOPIK等級",
        label_gpa: "直前学期の成績 (GPA)",
        label_residence: "入国6ヶ月未満 (D-4の場合)",
        label_first_sem: "新入生/編入生 (初学期) - 成績免除",
        btn_check: "結果確認",


        // Docs
        check_title: "必須持参書類リスト",
        check_desc: "訪問前に必ず確認してください！",
        doc_passport: "パスポート (Passport)",
        doc_arc: "外国人登録証 (ARC)",
        doc_form: "統合申請書",
        doc_biz: "事業者登録証の写し",
        doc_contract: "標準勤労契約書 (写し)",
        doc_confirm: "時間制就業確認書",

        map_title: "主要機関案内",
        footer_warning: "無許可就労時、最大3千万ウォンの罰金！",


        res_fail_gpa: "❌ 不可 (成績 2.0未満)",
        res_fail_d4: "❌ 不可 (6ヶ月未満)",
        res_safe_d2: "学期中: 週25時間 (週末含む) / 放学: 無制限",
        res_safe_d4: "平日: 20時間 / 週末: 含む (最大20時間)",
        res_safe_d2_exempt: "平日: {hours}時間 / 週末: 無制限",
        res_safe_low: "平日: {hours}時間 / 週末: 10時間",
        res_gpa_exempt: "(成績要件免除)",
        res_title_success: "許可申請可能 (Eligible)",
        res_title_warn: "注意 (時間制限)",



        // Salary Calc
        salary_title: "給与計算機",
        min_wage_label: "2025年 法定最低時給",
        label_my_wage: "私の時給",
        label_hours: "週間勤務時間",
        label_monthly: "予想月給 (4週基準)",
        msg_low_wage: "🚨 違法です！最低賃金より低いです。",

        // Safety
        tab_safety: "安全/保険",
        safety_title: "緊急連絡先",
        emerg_police: "警察 (112)",
        emerg_fire: "消防/救急 (119)",
        emerg_immi: "出入国管理 (1345)",
        ins_title: "健康保険必須加入！",
        ins_desc: "全ての留学生は国民健康保険への加入が義務です。保険がないと医療費が非常に高額になります。",
        warn_title: "⚠️ 絶対にしないでください！",
        warn_bank: "口座を貸さないでください (ボイスフィッシング共犯処罰)",
        warn_drug: "麻薬は韓国で重犯罪です。",

        // PM Safety
        pm_title: "電動キックボード安全規則",
        pm_helmet: "ヘルメット未着用",
        pm_license: "無免許運転",
        pm_ride: "2人以上搭乗",
        pm_path: "歩道走行",

        // Validation
        msg_req_gpa: "直前学期の成績を入力してください。",

        // 1345 Help
        help_title: "外国人総合案内センター (1345)",
        help_desc_1: "留学生の人権侵害および賃金未払い相談支援",

        // Footer
        disclaimer: "本アプリの結果は参考用であり、最終的な判断は出入国管理事務所にあります。本情報の活用による不利益について責任を負いません。",

        // Job Hunting & Housing
        tab_job: "就職",
        tab_living: "生活",
        job_sites_title: "仕事探し",
        job_sites_desc: "韓国で最も使われているバイトアプリ",
        job_tip_title: "検索のヒント",
        job_tip_1: "「外国人可能 (외국인가능)」を確認",
        job_tip_2: "「初心者可能 (초보가능)」推奨",

        housing_title: "部屋探し",
        housing_desc: "アプリ & 不動産",
        house_app_title: "1. 不動産アプリ (相場確認用)",

        // Dorm
        dorm_title: "学校寮",
        dorm_subtitle: "培材大学寮",
        dorm_contact_label: "連絡先",
        dorm_price_label: "予想費用",
        dorm_price: "~65-70万ウォン/学期 (部屋タイプ別)",

        // Apps
        apps_title: "必須アプリ",
        apps_desc: "韓国生活の必需品",
        app_messenger_title: "メッセンジャー",
        app_delivery_title: "デリバリー",
        app_transport_title: "交通 & 地図",
        app_payment_title: "決済 & 送金",
        app_shopping_title: "ショッピング",
        app_market_title: "中古取引",
        house_app_desc: "平均家賃を確認するのに適しています。",
        house_agent_title: "2. 公認仲介士 (不動産屋)",
        house_agent_desc: "学校の後門/正門近くの不動産を訪問するのが最も安全です。",
        house_check_title: "契約前確認:",
        house_check_1: "保証金 (Deposit)",
        house_check_2: "家賃 (Monthly Rent)",
        house_check_3: "管理費 (ガス/ネット等の有無)",

        resume_title: "1分バイト志願書",
        resume_desc: "社長に送る丁寧な志願メッセージを作成してみましょう。",
        name_ph: "名前 (例: マイケル)",
        age_ph: "年齢",
        topik_ph: "韓国語能力 (例: 4級)",
        btn_gen_resume: "作成してコピー",
        resume_template: "こんにちは！アルバイトの募集を見て連絡しました。\n名前: {name}\n年齢: {age}歳\nビザ: {visa} (留学生)\n韓国語: {topik}\n\n誠実に働きます。面接の機会をいただければ幸いです！",

        // D-10 & Tax
        d10_title: "卒業後は？",
        d10_subtitle: "D-10 求職ビザ",
        d10_desc: "D-10に変更して求職活動ができます。インターンシップは別途申告必須！",
        d10_allowed: "申告必須",
        tax_title: "税金 & 保険",

        // Tax & Insurance
        insurance_mandatory: "義務加入条件:",
        insurance_cond_1: "月60時間以上勤務",
        insurance_cond_2: "週15時間以上勤務",
        insurance_cond_3: "契約期間1ヶ月以上",
        ins_health: "① 健康保険",
        ins_health_desc: "病院費支援",
        ins_health_auto: "外国人登録証発給後自動加入",
        ins_employment: "② 雇用保険",
        ins_employment_desc: "失業給付 (条件満たせば)",
        ins_accident: "③ 労災保険",
        ins_accident_desc: "業務中の怪我補償",
        ins_pension: "④ 国民年金",
        ins_pension_desc: "帰国時返還可能",
        tax_refund_title: "3. 税金還付 (5月)",
        tax_refund_when: "申告時期:",
        tax_refund_period: "毎年5月 (総合所得税申告)",
        tax_refund_tip: "* 3.3%税金を払った場合、一部還付可能！ホームタックス (홈택스) 訪問または学校へ問い合わせ",
        tab_tax: "税金",

        // Permit Guide
        permit_title: "就労許可申請方法",
        permit_subtitle: "資格外活動許可",
        permit_step1_title: "資格確認",
        permit_step1_a: "• D-2: GPA ≥ 2.0 + TOPIK等",
        permit_step1_b: "• D-4: 入国6ヶ月以上 + 出席率 90%以上",
        permit_step2_title: "学校確認書発給",
        permit_step2_desc: "国際交流チームを訪問し「時間制就業確認書」を発給",
        permit_step3_title: "出入国事務所訪問",
        permit_step3_desc: "パスポート, 外国人登録証, 確認書, 事業者登録証, 標準勤労契約書",

        // Visa Travel
        travel_title: "ビザ & 旅行",
        travel_subtitle: "休みに帰国してもいい？",
        travel_expiry_title: "⛔ ビザ満了日注意",
        travel_expiry_desc: "外国人登録証裏面の満了日前に必ず出国しなければなりません。",
        travel_reentry_title: "再入国 (放学など)",
        travel_reentry_1: "• 有効期間残存 + 出国日 = 再入国可能",
        travel_reentry_2: "• ビザ満了 = 同じビザで再入国不可 (新規発給必要)",

        // Trash
        trash_title: "ゴミの出し方",
        trash_subtitle: "過料に注意！",
        trash_general_title: "一般ゴミ",
        trash_general_desc: "白い従量制袋 (コンビニ購入)",
        trash_food_title: "生ゴミ",
        trash_food_desc: "黄色い袋 (骨/殻は除く)",
        trash_recycle_title: "リサイクル",
        trash_recycle_desc: "透明な袋 (缶, 瓶, 廃プラ)",

        // Medicine
        med_title: "薬局 & 常備薬",
        med_subtitle: "病気の時は？",
        med_conv_title: "24時間コンビニ",
        med_conv_desc: "安全常備薬 (軽い症状)",
        med_pharm_title: "薬局 (Yak-guk)",
        med_pharm_desc: "専門医薬品 (処方箋など)",
        permit_step4_title: "承認待機",
        permit_step4_desc: "処理期間: 約1-2週間。外国人登録証にスタンプをもらいます！",

        // Phrases
        phrases_title: "便利な韓国語表現",
        phrases_desc: "求職および勤務時",
        phrases_interview: "💼 面接",
        phrases_work: "🏪 勤務中",
        phrases_problem: "⚠️ 問題発生時",
        phrase_when_start: "いつから働けますか？",
        phrase_schedule: "勤務時間はどうなりますか？",
        phrase_understand: "分かりました",
        phrase_help: "手伝ってもらえますか？",
        phrase_payday: "給料日はいつですか？",
        phrase_not_paid: "給料をもらっていません",
        phrase_too_many_hours: "勤務時間が多すぎます",

        // Holiday Pay
        holiday_pay_label: "予想週休手当:",
    },
    ru: {
        tab_check: "Проверка",
        tab_guide: "Правила",
        tab_paperwork: "Документы",
        tab_map: "Карта",
        guide_title: "Ограничения времени",
        guide_subtitle: "Разница D-2 / D-4",
        guide_time_title: "Часы работы",
        guide_ban_title: "🚫 Строго запрещено",
        guide_ban_desc: "При нарушении виза будет аннулирована",
        job_delivery: "Доставка (Курьер)",
        job_construction: "Стройка (Разнорабочий)",
        job_factory: "Завод (Производство)",
        job_teaching: "Репетиторство (Без отчета)",
        tab_safety: "Безопасность",
        calc_title: "Проверка права на работу",
        ieqas_badge: "🏆 Pai Chai Univ: Сертификат IEQAS (+5ч)",
        label_visa: "Тип визы",
        label_topik: "Уровень TOPIK",
        label_gpa: "GPA за прошлый семестр",
        label_residence: "Менее 6 месяцев (для D-4)",
        label_first_sem: "Первокурсник (1-й сем) - GPA не нужен",
        btn_check: "Проверить",


        // Docs
        check_title: "Список документов",
        check_desc: "Проверьте перед посещением офиса!",
        doc_passport: "Паспорт",
        doc_arc: "ID карта (ARC)",
        doc_form: "Единая форма заявления",
        doc_biz: "Копия бизнес-лицензии",
        doc_contract: "Трудовой договор",
        doc_confirm: "Подтверждение о подработке",

        map_title: "Важные места",
        footer_warning: "Штраф до 30 млн вон за нелегальную работу!",


        res_fail_gpa: "❌ Нельзя (GPA < 2.0)",
        res_fail_d4: "❌ Нельзя (Менее 6 мес)",
        res_safe_d2: "Семестр: 25ч/нед (вкл. выходные) / Каникулы: Безлим.",
        res_safe_d4: "Будни: 20ч / Выходные: Включено (Макс 20ч)",
        res_safe_d2_exempt: "Будни: {hours}ч / Выходные: Безлим.",
        res_safe_low: "Будни: {hours}ч / Выходные: 10ч",
        res_gpa_exempt: "(Без учета GPA)",
        res_title_success: "Можно подавать (Eligible)",
        res_title_warn: "Внимание (Лимит времени)",



        // Salary Calc
        salary_title: "Калькулятор ЗП",
        min_wage_label: "Мин. оплата 2025",
        label_my_wage: "Моя часовая ставка",
        label_hours: "Часов в неделю",
        label_monthly: "Прим. месячный доход (4 нед)",
        msg_low_wage: "🚨 Незаконно! Ниже минимума.",

        // Safety
        tab_safety: "Безопасность",
        safety_title: "Экстренные службы",
        emerg_police: "Полиция (112)",
        emerg_fire: "Пожарная/Скорая (119)",
        emerg_immi: "Иммиграция (1345)",
        ins_title: "Страховка обязательна!",
        ins_desc: "Все студенты обязаны иметь национальную страховку. Без нее лечение очень дорогое.",
        warn_title: "⚠️ НИКОГДА не делайте это!",
        warn_bank: "Не давайте свой банковский счет (Мошенничество).",
        warn_drug: "Наркотики - тяжкое преступление в Корее.",

        // PM Safety
        pm_title: "Правила для электросамокатов",
        pm_helmet: "Без шлема",
        pm_license: "Без прав",
        pm_ride: "Вдвоем",
        pm_path: "Езда по тротуару",

        // Validation
        msg_req_gpa: "Введите GPA за прошлый семестр.",

        // 1345 Help
        help_title: "Контакт-центр (1345)",
        help_desc_1: "Поддержка по правам и невыплате зарплаты",

        // Footer
        disclaimer: "Результаты только для справки. Окончательное решение за Иммиграционной службой. Мы не несем ответственности.",

        // Job Hunting & Housing
        tab_job: "Работа",
        tab_living: "Жизнь",
        job_sites_title: "Поиск работы",
        job_sites_desc: "Популярные приложения в Корее",
        job_tip_title: "Советы",
        job_tip_1: "Ищите 'Иностранцы' (외국인가능)",
        job_tip_2: "Ищите 'Без опыта' (초보가능)",

        housing_title: "Поиск жилья",
        housing_desc: "Приложения и Недвижимость",
        house_app_title: "1. Приложения (Проверка цен)",

        // Dorm
        dorm_title: "Общежитие",
        dorm_subtitle: "Общежитие Pai Chai Univ",
        dorm_contact_label: "Контакты",
        dorm_price_label: "Прим. цена",
        dorm_price: "~650-700 тыс. вон/семестр (зависит от комнаты)",

        // Apps
        apps_title: "Важные приложения",
        apps_desc: "Жизнь в Корее",
        app_messenger_title: "Мессенджер",
        app_delivery_title: "Доставка еды",
        app_transport_title: "Транспорт и карты",
        app_payment_title: "Оплата и Банки",
        app_shopping_title: "Шоппинг",
        app_market_title: "Б/у товары",
        house_app_desc: "Хорошо для проверки средних цен.",
        house_agent_title: "2. Агентство (Budongsan)",
        house_agent_desc: "Безопаснее всего посетить агентство рядом с университетом (Западные/Главные ворота).",
        house_check_title: "Проверьте:",
        house_check_1: "Залог (Deposit)",
        house_check_2: "Аренда (Wol-se)",
        house_check_3: "Комуналка (Вкл. газ/интернет?)",

        resume_title: "Резюме за 1 минуту",
        resume_desc: "Создайте вежливое сообщение для заявки на работу.",
        name_ph: "Имя (напр. Михаил)",
        age_ph: "Возраст",
        topik_ph: "Уровень TOPIK (напр. 4)",
        btn_gen_resume: "Создать и копировать",
        resume_template: "Здравствуйте! Пишу по поводу вакансии.\nИмя: {name}\nВозраст: {age}\nВиза: {visa} (Студент)\nКорейский: {topik}\n\nБуду усердно работать. Буду благодарен за собеседование!",

        // D-10 & Tax
        d10_title: "После выпуска?",
        d10_subtitle: "Виза D-10 (Поиск работы)",
        d10_desc: "Смените на D-10 для поиска работы. Для стажировки нужен отчет!",
        d10_allowed: "Отчет обязателен",
        tax_title: "Налоги и Страховка",

        // Tax & Insurance
        insurance_mandatory: "Обязательно, если:",
        insurance_cond_1: "Работа > 60 часов/мес",
        insurance_cond_2: "Работа > 15 часов/нед",
        insurance_cond_3: "Контракт > 1 месяца",
        ins_health: "① Мед. страховка (건강보험)",
        ins_health_desc: "Покрывает лечение",
        ins_health_auto: "Авто-подключение после получения ARC",
        ins_employment: "② Страхование занятости (고용보험)",
        ins_employment_desc: "Пособие по безработице",
        ins_accident: "③ Страхование от несчастных случаев",
        ins_accident_desc: "Травмы на работе",
        ins_pension: "④ Пенсионное страхование",
        ins_pension_desc: "Возврат при выезде из Кореи",
        tax_refund_title: "3. Возврат налогов (Май)",
        tax_refund_when: "Когда подавать:",
        tax_refund_period: "Каждый май (Global Income Tax)",
        tax_refund_tip: "* Если платили 3.3%, можно вернуть часть! Посетите Hometax или спросите в школе.",
        tab_tax: "Налог",

        // Permit Guide
        permit_title: "Разрешение на работу",
        permit_subtitle: "Как получить",
        permit_step1_title: "Проверка требований",
        permit_step1_a: "• D-2: GPA ≥ 2.0 + TOPIK",
        permit_step1_b: "• D-4: Пребывание ≥ 6 мес + Посещаемость ≥ 90%",
        permit_step2_title: "Подтверждение школы",
        permit_step2_desc: "Получите 'Part-time Work Confirmation' в международном отделе",
        permit_step3_title: "Визит в иммиграцию",
        permit_step3_desc: "Паспорт, ARC, Форма подтверждения, Лицензия бизнеса, Контракт",

        // Visa Travel
        travel_title: "Виза и Путешествия",
        travel_subtitle: "Можно ли домой?",
        travel_expiry_title: "⛔ Срок действия визы",
        travel_expiry_desc: "Вы ОБЯЗАНЫ выехать до даты истечения на ARC.",
        travel_reentry_title: "Повторный въезд",
        travel_reentry_1: "• Виза валидна + Выехали = Можно вернуться",
        travel_reentry_2: "• Виза истекла = Нельзя вернуться (Нужна новая)",

        // Trash
        trash_title: "Мусор",
        trash_subtitle: "Не получите штраф!",
        trash_general_title: "Обычный мусор",
        trash_general_desc: "Белый пакет (Купить в магазине)",
        trash_food_title: "Пищевые отходы",
        trash_food_desc: "Желтый пакет (Без костей!)",
        trash_recycle_title: "Переработка",
        trash_recycle_desc: "Прозрачный пакет (Банки, Пластик)",

        // Medicine
        med_title: "Лекарства",
        med_subtitle: "Где купить?",
        med_conv_title: "24ч Магазин",
        med_conv_desc: "Базовые лекарства",
        med_pharm_title: "Аптека (Yak-guk)",
        med_pharm_desc: "Профессиональная помощь",
        permit_step4_title: "Ожидание",
        permit_step4_desc: "Обработка: ~1-2 недели. Вам поставят штамп на ARC!",

        // Phrases
        phrases_title: "Полезные фразы",
        phrases_desc: "Для работы",
        phrases_interview: "💼 Собеседование",
        phrases_work: "🏪 На работе",
        phrases_problem: "⚠️ Проблемы",
        phrase_when_start: "Когда можно начать?",
        phrase_schedule: "Какой график?",
        phrase_understand: "Я понял(а)",
        phrase_help: "Можете помочь?",
        phrase_payday: "Когда зарплата?",
        phrase_not_paid: "Мне не заплатили",
        phrase_too_many_hours: "Слишком много часов",

        // Holiday Pay
        holiday_pay_label: "Прим. отпускные (в неделю):",
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
        app_messenger_title: "聊天软件",
        app_delivery_title: "外卖APP",
        app_transport_title: "交通 & 地图",
        app_payment_title: "支付 & 银行",
        app_shopping_title: "购物",
        app_market_title: "二手交易",
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
        app_messenger_title: "Nhắn tin",
        app_delivery_title: "Giao đồ ăn",
        app_transport_title: "Giao thông & Bản đồ",
        app_payment_title: "Thanh toán & Ngân hàng",
        app_shopping_title: "Mua sắm",
        app_market_title: "Chợ đồ cũ",
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
