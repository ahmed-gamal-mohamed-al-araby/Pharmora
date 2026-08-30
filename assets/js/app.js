/* ── Pharmora marketing site — i18n + interactions ─────────────────── */

const CONTACT = {
  wa: '201023196425',
  tel: '+201023196425',
  email: 'hello@pharmora.com',
  support: 'support@pharmora.com'
};

const I18N = {
  ar: {
    dir: 'rtl',
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الشركة',
    'nav.contact': 'تواصل',
    'nav.outcomes': 'الحلول',
    'nav.why': 'ليه Pharmora؟',
    'nav.product': 'المنتج',
    'nav.security': 'الثقة',
    'nav.securityPage': 'الأمان والثقة',
    'nav.demo': 'الديمو',
    'nav.privacy': 'الخصوصية',
    'nav.terms': 'الشروط',
    'nav.pricing': 'الأسعار',
    'nav.cta': 'احجز ديمو مجاني',
    'nav.lang': 'EN',

    'hero.eyebrow': 'نظام إدارة الصيدليات',
    'hero.title': 'شغّل صيدليتك: البيع، المخزون، التأمين، والربح الحقيقي — في نظام واحد',
    'hero.sub': 'Pharmora نظام سحابي لأصحاب الصيدليات: نقطة بيع سريعة، مطالبات تأمين تتحاسب بدقة، مخزون FEFO يقلل الهدر، وصافي ربح بعد التكلفة والمصروفات — مع صلاحيات وسجل تدقيق يحمي شغلك.',
    'hero.cta': 'احجز ديمو مجاني',
    'hero.screens': 'شاهد النظام',
    'hero.wa': 'واتساب',
    'hero.t1': 'سحابي — من أي جهاز',
    'hero.t2': 'صلاحيات + سجل تدقيق',
    'hero.t3': 'بياناتك قابلة للتصدير',
    'hero.t4': 'إعداد وتدريب ضمن الاشتراك',
    'hero.caption': 'لقطات حقيقية من النظام — مش تصميمات تسويقية',

    'strip.s1': 'عزل بيانات كل صيدلية',
    'strip.s2': 'أدوار وصلاحيات',
    'strip.s3': 'سجل تدقيق للحركات الحساسة',
    'strip.s4': 'نسخ احتياطي سحابي',
    'strip.s5': 'تصدير وملكية البيانات',

    'out.eyebrow': 'نتائج العمل',
    'out.title': 'من مشكلة يومية… لحل واضح… لأثر على الفلوس',
    'out.sub': 'مش قائمة ميزات. كل قسم تحت يجاوب: إيه المشكلة، إزاي Pharmora بيحلها، وإيه اللي يتحسن في شغلك.',

    'out.ins.label': '١ — مطالبات التأمين',
    'out.ins.problem': 'المشكلة: آخر الشهر بتضيع أيام في فصل حصة التأمين ومراجعة المطالبات يدوي.',
    'out.ins.solution': 'الحل: فصل تلقائي لحصة المريض وشركة التأمين على مستوى كل دواء',
    'out.ins.desc': 'تغطية لكل شركة، متابعة المطالبة لحد التحصيل، وأرقام واضحة لمستحقاتك — من غير إكسيل.',
    'out.ins.result': 'الأثر: اعرف مستحقاتك بدقة ووفّر أيام المراجعة اليدوية.',

    'out.fefo.label': '٢ — المخزون والصلاحية (FEFO)',
    'out.fefo.problem': 'المشكلة: أدوية بتقرب من الانتهاء وبتنتهي في الدرج — خسارة صامتة كل شهر.',
    'out.fefo.solution': 'الحل: مخزون بالتشغيلة مع FEFO — الأقرب صلاحية بيتصرف أولاً',
    'out.fefo.desc': 'كل تشغيلة بتاريخها، تنبيهات قبل الانتهاء، وصرف تلقائي يمنع بيع الأبعد صلاحية بالغلط.',
    'out.fefo.result': 'الأثر: هدر أقل، مخزون أوضح، وصلاحية تحت السيطرة.',

    'out.pnl.label': '٣ — الربح الحقيقي',
    'out.pnl.problem': 'المشكلة: إجمالي المبيعات بيضحك عليك — مش بيقولك صيدليتك كسبانة فعلاً ولا لأ.',
    'out.pnl.solution': 'الحل: صافي ربح بعد التكلفة والمرتجعات والمصروفات والتأمين',
    'out.pnl.desc': 'حساب على مستوى التشغيلة. تشوف الربح بعد تكلفة البضاعة والمصروفات المعتمدة — مش أرقام تجميلية.',
    'out.pnl.result': 'الأثر: قرار مبني على ربح حقيقي — مش على «إجمالي مبيعات».',

    'out.cash.label': '٤ — تحكم الكاشير والورديات',
    'out.cash.problem': 'المشكلة: مش عارف النقدية المتوقعة آخر الوردية، ولا مين عدّل فاتورة أو سعر.',
    'out.cash.solution': 'الحل: ورديات بعُهدة درج + صلاحيات + سجل تدقيق للحركات الحساسة',
    'out.cash.desc': 'كل كاشير بوردية لها بداية ونهاية. النظام بيحسب النقدية المتوقعة ويكشف العجز أو الزيادة، والصاحب يراجع الحركات الحساسة.',
    'out.cash.result': 'الأثر: فلوس الدرج أوضح، والمسؤولية واضحة على كل مستخدم.',

    'out.branch.label': '٥ — إدارة الفروع',
    'out.branch.problem': 'المشكلة: كل فرع بأرقام منفصلة، وصعب تشوف الصورة الكاملة للمبيعات والمخزون والربح.',
    'out.branch.solution': 'الحل: أكتر من فرع تحت حساب واحد — بنفس الضوابط والتقارير',
    'out.branch.desc': 'خطة الفروع مصممة لسلاسل الصيدليات: إعداد مخصص، تدريب للفريق، ودعم بأولوية — مع نفس دقة التأمين والمخزون والربح.',
    'out.branch.result': 'الأثر: رؤية موحّدة للشغل عبر الفروع من غير ما تفقد التحكم.',

    'why.eyebrow': 'ليه Pharmora؟',
    'why.title': 'قارن بوضوح: برنامج قديم · إكسيل · Pharmora',
    'why.sub': 'الفرق مش في «شاشة حلوة» — الفرق في التأمين، الصلاحية، التحكم، والتقارير المالية.',
    'why.col0': 'القدرة',
    'why.col1': 'برنامج قديم / محلي',
    'why.col2': 'إكسيل / دفاتر',
    'why.col3': 'Pharmora',
    'why.r1': 'وصول سحابي من أي جهاز',
    'why.r1a': 'محدود / جهاز واحد', 'why.r1b': 'ملفات مشتتة', 'why.r1c': 'نعم — متصفح',
    'why.r2': 'سير عمل التأمين والمطالبات',
    'why.r2a': 'غالباً يدوي أو ناقص', 'why.r2b': 'يدوي بالكامل', 'why.r2c': 'فصل تلقائي + متابعة',
    'why.r3': 'مخزون FEFO / تشغيلات',
    'why.r3a': 'متفاوت', 'why.r3b': 'صعب الحفاظ عليه', 'why.r3c': 'مدمج في الصرف',
    'why.r4': 'صلاحيات المستخدمين',
    'why.r4a': 'أساسية غالباً', 'why.r4b': 'لا', 'why.r4c': 'أدوار مفصّلة',
    'why.r5': 'سجل تدقيق',
    'why.r5a': 'نادر أو ضعيف', 'why.r5b': 'لا', 'why.r5c': 'حركات حساسة مسجّلة',
    'why.r6': 'تقارير ربح حقيقية',
    'why.r6a': 'مبيعات أكثر من ربح', 'why.r6b': 'تقريبي', 'why.r6c': 'صافي بعد التكلفة والمصروفات',
    'why.r7': 'متعدد الفروع',
    'why.r7a': 'مكلف / معقد', 'why.r7b': 'فوضى', 'why.r7c': 'خطة فروع مخصصة',
    'why.r8': 'أمان البيانات والنسخ',
    'why.r8a': 'يعتمد على الجهاز', 'why.r8b': 'خطر فقدان الملفات', 'why.r8c': 'سحابي + نسخ + تصدير',

    'scr.eyebrow': 'تجربة المنتج',
    'scr.title': 'شوف Pharmora من جوّه — لقطات حقيقية',
    'scr.sub': 'اختَر شاشة: إيه اللي بتشوفه، وليه مهم لشغل الصيدلية، وإيه النتيجة على الشغل.',
    'scr.light': 'الوضع الفاتح',
    'scr.dark': 'الوضع الغامق',
    'scr.tab.pos': 'نقطة البيع',
    'scr.tab.pos_d': 'باركود، وحدات، وتأمين في نفس الشاشة',
    'scr.tab.claims': 'مطالبات التأمين',
    'scr.tab.claims_d': 'متابعة المستحقات والتحصيل',
    'scr.tab.med': 'المخزون والتشغيلات',
    'scr.tab.med_d': 'صلاحية وتشغيلات واضحة',
    'scr.tab.dashboard': 'لوحة التحكم',
    'scr.tab.dashboard_d': 'مبيعات، نواقص، وصلاحيات قريبة',
    'scr.tab.pnl': 'صافي الربح',
    'scr.tab.pnl_d': 'بعد التكلفة والمصروفات',
    'scr.tab.purchases': 'المشتريات',
    'scr.tab.purchases_d': 'فواتير تشغيلات وموردين',
    'scr.cap.pos': 'تشوف: كاشير بالباركود مع فصل التأمين. يهمك: سرعة البيع ودقة الحصة. النتيجة: فاتورة صح من أول مرة.',
    'scr.cap.claims': 'تشوف: مطالبات ومتابعة تحصيل. يهمك: فلوس التأمين المعلقة. النتيجة: مستحقات أوضح وأسرع في المتابعة.',
    'scr.cap.med': 'تشوف: أصناف وتشغيلات وصلاحيات. يهمك: الهدر. النتيجة: FEFO يقلل انتهاء الصلاحية في الدرج.',
    'scr.cap.dash': 'تشوف: مؤشرات اليوم والنواقص والصلاحية. يهمك: قرار سريع. النتيجة: نظرة واحدة على صحة الشغل.',
    'scr.cap.pnl': 'تشوف: صافي الربح بعد التكلفة والمصروفات. يهمك: الحقيقة المالية. النتيجة: قرار مبني على ربح مش على مبيعات.',
    'scr.cap.purchases': 'تشوف: فواتير شراء بالتشغيلات. يهمك: تكلفة البضاعة والموردين. النتيجة: مخزون وتكلفة مربوطين صح.',

    'vid.title': 'جولة منتج ١٥ دقيقة',
    'vid.sub': 'احجز ديمو مباشر — بيعة بتأمين، FEFO، وردية، وصافي ربح',
    'vid.cta': 'احجز الموعد ←',

    'sec.eyebrow': 'بنية الثقة',
    'sec.title': 'بيانات صيدليتك وفلوسك — تحت سيطرتك',
    'sec.sub': 'ثلاثة أعمدة لازم أي صاحب صيدلية يطمن عليها قبل ما ينقل شغله لنظام سحابي.',
    'sec.p1t': 'الأمان',
    'sec.p1a': 'عزل بيانات كل صيدلية (Tenant isolation)',
    'sec.p1b': 'نسخ احتياطي سحابي دوري',
    'sec.p1c': 'ملكية البيانات لك',
    'sec.p1d': 'إمكانية التصدير عند الحاجة',
    'sec.p2t': 'التحكم',
    'sec.p2a': 'أدوار مستخدمين (صاحب / صيدلي / كاشير / محاسب)',
    'sec.p2b': 'صلاحيات دقيقة على الشاشات والعمليات',
    'sec.p2c': 'سجل تدقيق للحركات الحساسة',
    'sec.p2d': 'تتبع مين غيّر إيه ومتى',
    'sec.p3t': 'الموثوقية المالية',
    'sec.p3a': 'حساب ربح بعد التكلفة الفعلية',
    'sec.p3b': 'سجل معاملات واضح',
    'sec.p3c': 'اعتماد/رفض للمصروفات',
    'sec.p3d': 'ورديات وعُهدة درج قابلة للمراجعة',

    'steps.eyebrow': 'مسار التحويل',
    'steps.title': 'ثلاث خطوات واضحة — من الديمو للشغل',
    'steps.lead': 'مفيش اشتراك ذاتي مضلل. بنبدأ بديمو، بعدين إعداد، بعدين شغل فعلي مع دعم.',
    'steps.s1t': '١) احجز ديمو ١٥ دقيقة',
    'steps.s1d': 'نوريك بيعة بتأمين، صرف FEFO، وقفل وردية على سيناريو يشبه صيدليتك.',
    'steps.s2t': '٢) نجهّز صيدليتك ونساعد في النقل',
    'steps.s2d': 'حساب باسمك، مستخدمين بصلاحيات، ومساعدة في إدخال الأصناف والأرصدة وتدريب الفريق.',
    'steps.s3t': '٣) افتح وردية وابدأ الإدارة',
    'steps.s3d': 'من أول فاتورة: المخزون، التأمين، والأرباح تحت عينك — مع دعم مستمر.',

    'trust.eyebrow': 'مصمم للسوق المصري',
    'trust.title': 'اتبنى على شغل الصيدلية المصرية — مش ترجمة لنظام أجنبي',
    'trust.sub': 'التأمين المحلي، الوحدات (قرص/شريط/علبة)، الورديات وعُهدة الدرج، وأعمار الديون — جزء من التصميم من اليوم الأول. مفيش أرقام عملاء وهمية هنا: بنبني الثقة بالوضوح والدقة.',
    'trust.li1': 'عربي أولاً — والإنجليزي بضغطة',
    'trust.li2': 'من المتصفح — من غير أجهزة خاصة',
    'trust.li3': 'إعداد + تدريب + دعم ضمن الاشتراك',
    'trust.quote': '«بنبني النظام حوالين المشاكل اللي الصيدلي بيعيشها يومياً: التأمين المعلّق، الصلاحية، والفرق بين المبيعات والربح.»',
    'trust.cite': '— فريق منتج Pharmora · AG Technologies',

    'pr.eyebrow': 'الأسعار',
    'pr.title': 'تسعير واضح — وسعر التأسيس مقفول ١٢ شهراً',
    'pr.sub': 'سعر التأسيس مقفول ١٢ شهراً لعملاء التأسيس. من غير أجهزة خاصة ولا رسوم مخفية. اختَر الخطة حسب حجم شغلك، واحجز ديمو للتأكيد.',
    'pr.p1': 'الأساسية',
    'pr.p2': 'الاحترافية',
    'pr.p3': 'الفروع',
    'pr.p1for': 'لصيدلية واحدة بدون تأمين معقّد',
    'pr.p2for': 'لصيدليات التأمين والورديات والتقارير المالية',
    'pr.p3for': 'لسلاسل وفروع متعددة',
    'pr.mo': 'ج.م / شهرياً',
    'pr.contact': 'عرض مخصص',
    'pr.hot': 'الأنسب لمعظم الصيدليات',
    'pr.p1f1': 'نقطة بيع + مخزون بالتشغيلات والصلاحية',
    'pr.p1f2': 'مستخدمين اتنين + صلاحيات',
    'pr.p1f3': 'تقارير المبيعات اليومية',
    'pr.p1f4': 'إعداد أساسي وتدريب مختصر',
    'pr.p1f5': 'بدون وحدة التأمين الكاملة',
    'pr.p2f1': 'كل مميزات الأساسية',
    'pr.p2f2': 'التأمين والمطالبات كاملة',
    'pr.p2f3': 'شيفتات وعُهدة درج',
    'pr.p2f4': 'أرباح + أعمار ديون + سجل تدقيق',
    'pr.p2f5': 'مستخدمين غير محدودين',
    'pr.p3f1': 'كل مميزات الاحترافية',
    'pr.p3f2': 'أكتر من فرع بحساب واحد',
    'pr.p3f3': 'إعداد وتدريب خاص',
    'pr.p3f4': 'دعم بأولوية',
    'pr.c1': 'احجز ديمو — الأساسية',
    'pr.c2': 'احجز ديمو — الاحترافية',
    'pr.c3': 'احجز ديمو — الفروع',
    'pr.note': 'سعر التأسيس مقفول لمدة ١٢ شهراً لعملاء التأسيس — يُؤكَّد أثناء الديمو.',
    'pr.inc1': 'يشمل: إعداد الحساب · مساعدة النقل · تدريب الفريق · تحديثات الاشتراك',
    'pr.inc2': 'الدعم: واتساب + البريد الرسمي support@pharmora.com',

    'faq.eyebrow': 'أسئلة قبل الديمو',
    'faq.title': 'إجابات مباشرة — من غير مبالغة',
    'faq.q1': 'محتاج أجهزة معينة؟',
    'faq.a1': 'لأ — بيشتغل من المتصفح على أي كمبيوتر أو لابتوب أو تابلت. قارئ الباركود العادي بيشتغل مباشرة.',
    'faq.q2': 'بياناتي فين؟ آمنة؟ وإقدر أصدّرها؟',
    'faq.a2': 'على سيرفرات سحابية بنسخ دوري، وكل صيدلية معزولة. تتحكم في الصلاحيات، وتقدر تصدّر بياناتك — لأنها ملكك.',
    'faq.q3': 'النقل من دفاتر أو برنامج قديم صعب؟',
    'faq.a3': 'بنساعد في الإدخال الأولي للأصناف والأرصدة، وبندرّب الفريق. معظم الصيدليات بتبدأ بيع فعلي خلال أيام من الإعداد.',
    'faq.q4': 'في سجل يوضح مين عمل إيه؟',
    'faq.a4': 'أيوه — الحركات الحساسة (أسعار، حذف فواتير، مخزون، مستخدمين) بتتسجل في سجل تدقيق للصاحب.',
    'faq.q5': 'لو النت قطع وقت البيع؟',
    'faq.a5': 'النظام سحابي ويحتاج اتصال. ننصح بخط موبايل احتياطي. البيعة بتتسجل بسرعة لما الاتصال يستقر.',
    'faq.q6': 'في مساعدة إعداد وتدريب؟',
    'faq.a6': 'أيوه — إعداد الحساب، مساعدة النقل، وتدريب عملي للفريق ضمن الاشتراك. الدعم مستمر عبر واتساب والبريد الرسمي.',
    'faq.q7': 'ساعات الدعم إيه؟',
    'faq.a7': 'ندعم عبر واتساب والبريد الرسمي في ساعات العمل، ونرد بأسرع ما نقدر على أسئلة الشغل اليومي. تفاصيل الأولوية تختلف حسب الخطة.',
    'faq.q8': 'الإيصال الإلكتروني للضرائب؟',
    'faq.a8': 'جاري تجهيزه بمراجعة محاسبية، وهيوصل كتحديث ضمن الاشتراك عند التفعيل — مش كمنتج منفصل مدفوع.',

    'cta.kicker': 'الخطوة الجاية',
    'cta.title': 'احجز ديمو مجاني ١٥ دقيقة على سيناريو صيدليتك',
    'cta.sub': 'هنوريك: بيعة بتأمين · صرف FEFO · قفل وردية · تقرير أرباح. من غير التزام.',
    'cta.demo': 'احجز ديمو مجاني',
    'cta.wa': 'واتساب — رد سريع',
    'cta.s1': 'احجز الديمو',
    'cta.s2': 'نجهّز حسابك',
    'cta.s3': 'ابدأ إدارة المبيعات',
    'cta.contact': 'صفحة التواصل',

    'ft.brand': 'منتج من AG Technologies — برمجيات عملية لقطاع الصيدلة.',
    'ft.product': 'المنتج',
    'ft.company': 'الشركة',
    'ft.contact': 'تواصل رسمي',
    'ft.demo': 'احجز ديمو',
    'ft.rights': 'جميع الحقوق محفوظة',

    'ab.eyebrow': 'عن Pharmora',
    'ab.title': 'نبني مستقبل إدارة الصيدليات في مصر',
    'ab.sub': 'Pharmora نظام تشغيل للصيدلية يربط البيع، المخزون، التأمين، الرؤية المالية، وتشغيل اليومي — في منصة سحابية واحدة مصمَّمة للسوق المصري.',
    'ab.ctaSec': 'اقرأ عن الأمان والثقة',
    'ab.whyEy': 'ليه Pharmora موجود؟',
    'ab.whyT': 'مشاكل حقيقية في شغل الصيدلية — مش مجرد «أتمتة»',
    'ab.whyS': 'كثير من الصيدليات لسه بتدفع ثمن العمليات اليدوية، والأرقام الناقصة، وضعف التحكم. Pharmora اتبنى عشان يحل المشاكل دي من الجذر.',
    'ab.c1t': 'عمليات يدوية',
    'ab.c1d': 'دفاتر وإكسيل وبرامج قديمة بتستهلك وقت الفريق وما بتضمنش دقة يومية.',
    'ab.c2t': 'ضعف رؤية الربح الحقيقي',
    'ab.c2d': 'إجمالي المبيعات مش كفاية — صاحب الصيدلية محتاج صافي بعد التكلفة والمصروفات والتأمين.',
    'ab.c3t': 'خسائر الصلاحية',
    'ab.c3d': 'من غير FEFO وتشغيلات واضحة، الهدر بيحصل بهدوء كل شهر.',
    'ab.c4t': 'تعقيد مطابقة التأمين',
    'ab.c4d': 'فصل الحصص ومتابعة المطالبات يدوي بياخد أيام في آخر الشهر.',
    'ab.c5t': 'تحكم محدود على الفريق',
    'ab.c5d': 'من غير صلاحيات وسجل تدقيق، صعب تعرف مين غيّر إيه في الأسعار أو الفواتير.',
    'ab.c6t': 'حل Pharmora',
    'ab.c6d': 'نظام تشغيل واحد: بيع دقيق، مخزون FEFO، تأمين محسوب، أرباح حقيقية، وصلاحيات تحمي الشغل.',
    'ab.misEy': 'المهمة',
    'ab.misT': 'مهمتنا',
    'ab.misD': 'نساعد أصحاب الصيدليات يديروا أعمالهم بأمان أعلى، وذكاء تشغيلي أوضح، وربحية أدق — عبر نظام يفهم شغلهم اليومي.',
    'ab.visEy': 'الرؤية',
    'ab.visT': 'رؤيتنا',
    'ab.visD': 'نصبح المنصة التشغيلية الموثوقة للصيدليات في مصر والمنطقة — بالجودة والوضوح، مش بالمبالغات.',
    'ab.philEy': 'فلسفة المنتج',
    'ab.philT': 'إزاي بنبني Pharmora',
    'ab.philS': 'كل قرار في المنتج بيرجع لخمسة مبادئ — عشان النظام يفضل عملي ومسؤول.',
    'ab.p1t': 'الدقة',
    'ab.p1d': 'الحساب بالقرش، الوحدات الصح، والتكلفة على مستوى التشغيلة.',
    'ab.p2t': 'البساطة',
    'ab.p2d': 'شاشات يقدر الكاشير والصيدلي يشتغلوا عليها بسرعة من غير تدريب معقّد.',
    'ab.p3t': 'الأمان',
    'ab.p3d': 'عزل البيانات، صلاحيات، وسجل تدقيق — لأن بيانات الصيدلية حساسة.',
    'ab.p4t': 'التحكم المالي',
    'ab.p4d': 'ورديات، مصروفات باعتماد، وتقارير تربط البيع بالتكلفة.',
    'ab.p5t': 'رؤى عمل حقيقية',
    'ab.p5d': 'مؤشرات ونواقص وصلاحيات وأرباح تساعد على قرار مش على تجميل أرقام.',
    'ab.egEy': 'محلي من اليوم الأول',
    'ab.egT': 'اتبنى للصيدلية المصرية — مش ترجمة لنظام أجنبي',
    'ab.egS': 'التجربة عربي أولاً، مع سير عمل التأمين المحلي، الوحدات (قرص/شريط/علبة)، الورديات، وأعمار الديون — حسب احتياج الشغل هنا.',
    'ab.eg1': 'واجهة وتقارير عربية سليمة + إنجليزي بضغطة',
    'ab.eg2': 'سيناريوهات تأمين ومطالبات مناسبة للسوق',
    'ab.eg3': 'احتياجات تشغيل محلية: ورديات، عُهدة درج، موردين',
    'ab.coEy': 'ثقة الشركة',
    'ab.coT': 'تواصل واضح · دعم مستمر · منتج بيتطور بمسؤولية',
    'ab.coS': 'مفيش أرقام عملاء وهمية. بنبني الثقة بالصراحة: قنوات رسمية، التزام بالدعم، وخارطة طريق للمنتج من غير وعود فاضية.',
    'ab.co1t': 'تواصل رسمي',
    'ab.co1d': 'قنوات الشركة — مش إيميلات شخصية:',
    'ab.co2t': 'التزام الدعم',
    'ab.co2d': 'مساعدة في الإعداد والنقل والتدريب، ورد على أسئلة الشغل اليومي عبر واتساب والبريد الرسمي.',
    'ab.co3t': 'عقلية خارطة الطريق',
    'ab.co3d': 'نطوّر الميزات حسب احتياج الصيدلية الحقيقي — واللي لسه بيتجهز بنقوله بوضوح (زي الإيصال الإلكتروني).',
    'ab.ctaT': 'جاهز تشوف Pharmora على سيناريو صيدليتك؟',

    'st.eyebrow': 'الأمان والثقة',
    'st.title': 'بيانات صيدليتك تحت سيطرة كاملة',
    'st.sub': 'قبل ما تنقل مبيعاتك ومخزونك وتأمينك لنظام سحابي، لازم تطمن: مين بيشوف، مين بيعدّل، وإزاي بياناتك محمية وملكك. الصفحة دي بتشرح ضوابط Pharmora بوضوح — من غير شهادات أو ادعاءات مش مدعومة.',
    'st.ctaFaq': 'أسئلة الأمان',
    'st.dEy': 'أمن البيانات',
    'st.dT': 'بيانات كل صيدلية معزولة ومحمية بضوابط وصول',
    'st.dS': 'هدفنا إن معلومات شغلك تفضل خاصة بيك — ومش متاحة لأي حد من غير صلاحية.',
    'st.d1t': 'عزل بيانات المستأجر',
    'st.d1d': 'كل صيدلية لها مساحة بيانات منفصلة منطقياً (tenant isolation) — مش مشاركة سجلات مع صيدليات تانية.',
    'st.d2t': 'تحكم آمن في الدخول',
    'st.d2d': 'الوصول عبر حسابات مستخدمين — مش جهاز مشترك من غير هوية.',
    'st.d3t': 'صلاحيات حسب الدور',
    'st.d3d': 'صاحب، صيدلي، كاشير، محاسب — كل دور بيشوف ويعمل اللي يخصه بس.',
    'st.d4t': 'حماية معلومات العمل',
    'st.d4d': 'المبيعات، المخزون، التأمين، والتقارير المالية بتتعامل كبيانات حساسة داخل حدود حسابك.',
    'st.cEy': 'تحكم الصيدلية',
    'st.cT': 'الصاحب يفضل شايف التشغيل — مش أعمى عن التغييرات',
    'st.cS': 'التحكم مش بس «باسورد». التحكم إنك تعرف إيه اللي حصل في الشغل الحساس.',
    'st.c1t': 'سجل تدقيق',
    'st.c1d': 'الحركات الحساسة بتتسجل عشان تراجعها لما تحتاج.',
    'st.c2t': 'مين غيّر إيه',
    'st.c2d': 'تعديل أسعار، حذف/إلغاء فواتير، تغيير مخزون، وإدارة مستخدمين — مرتبطة بالمستخدم والتوقيت.',
    'st.c3t': 'تتبع نشاط المستخدم',
    'st.c3d': 'رؤية أوضح على مين اشتغل على العمليات الحساسة داخل النظام.',
    'st.c4t': 'اعتمادات مضبوطة',
    'st.c4d': 'دورات اعتماد/رفض للمصروفات — عشان الفلوس الخارجة متتبقاش من غير مراجعة.',
    'st.fEy': 'سلامة مالية',
    'st.fT': 'سجلات الفلوس لازم تبقى دقيقة وقابلة للمراجعة',
    'st.fS': 'ثقة صاحب الصيدلية بتتبني لما الأرقام تتحسب صح والتاريخ يبقى واضح.',
    'st.f1t': 'حسابات دقيقة',
    'st.f1d': 'تسعير بالوحدة، فصل تأمين، وتكلفة على مستوى التشغيلة.',
    'st.f2t': 'تاريخ المعاملات',
    'st.f2d': 'سجل واضح للبيع والشراء والحركات المرتبطة.',
    'st.f3t': 'سجلات مالية محمية',
    'st.f3d': 'التقارير والأرباح ضمن حدود صلاحيات الحساب.',
    'st.f4t': 'مسارات فلوس مضبوطة',
    'st.f4d': 'ورديات وعُهدة درج ومصروفات باعتماد تقلل الفوضى المالية.',
    'st.bEy': 'نسخ وملكية البيانات',
    'st.bT': 'بياناتك ملكك — والنسخ والتصدير جزء من الثقة',
    'st.b1': 'نسخ احتياطي سحابي دوري لتقليل خطر فقدان البيانات على جهاز واحد',
    'st.b2': 'إمكانية تصدير البيانات عند الحاجة — لأن ملكية البيانات للعميل',
    'st.b3': 'من غير ادعاءات شهادات غير معلنة — بنوصف اللي النظام بيعمله فعلاً',
    'st.rEy': 'الموثوقية',
    'st.rT': 'ممارسات تشغيل مسؤولة للمنتج',
    'st.rS': 'نظام الصيدلية لازم يفضل ثابت وهو بيتطور. بنشتغل بعقلية إنتاج مسؤولة.',
    'st.r1t': 'متابعة التشغيل',
    'st.r1d': 'متابعة لحالة الخدمة عشان نكتشف المشاكل مبكراً قدر الإمكان.',
    'st.r2t': 'معالجة أخطاء أوضح',
    'st.r2d': 'نتعامل مع الأخطاء بطريقة تقلل توقف الشغل وتسهل التشخيص.',
    'st.r3t': 'تحديثات آمنة',
    'st.r3d': 'التحديثات ضمن الاشتراك — مع الحرص على عدم كسر سير العمل اليومي.',
    'st.r4t': 'ممارسات إنتاج',
    'st.r4d': 'مراجعة قبل الإطلاق، وفصل واضح بين ما هو جاهز وما هو قيد التجهيز.',
    'st.faqEy': 'أسئلة الأمان',
    'st.faqT': 'إجابات مباشرة قبل ما تثق بالنظام',
    'st.q1': 'مين يقدر يشوف بيانات صيدليتي؟',
    'st.a1': 'المستخدمون اللي إنت بتديهم صلاحية داخل حساب صيدليتك فقط. بيانات كل صيدلية معزولة عن غيرها.',
    'st.q2': 'أقدر أصدّر بياناتي؟',
    'st.a2': 'أيوه — التصدير جزء من ملكية البيانات. بياناتك ملكك، وتقدر تطلب/تصدّر ما تحتاجه حسب أدوات النظام المتاحة.',
    'st.q3': 'الصلاحيات بتشتغل إزاي؟',
    'st.a3': 'أدوار (صاحب / صيدلي / كاشير / محاسب) بتحدد مين يشوف وإيه اللي يقدر يعمله — عشان الكاشير مثلاً مش بنفس صلاحيات الصاحب.',
    'st.q4': 'إزاي بتحموا السجلات المالية؟',
    'st.a4': 'بحسابات دقيقة، تاريخ معاملات، صلاحيات على التقارير، ومسارات مضبوطة للورديات والمصروفات المعتمدة.',
    'st.q5': 'في سجل يوضح التغييرات الحساسة؟',
    'st.a5': 'أيوه — سجل تدقيق للحركات الحساسة زي تغيير الأسعار أو حذف الفواتير أو تعديل المخزون، مربوط بالمستخدم والتوقيت.',
    'st.q6': 'عندكم شهادات أمان دولية؟',
    'st.a6': 'منغير ما ندّعي شهادات غير معلنة هنا. بنوصف الضوابط الفعلية (عزل، صلاحيات، تدقيق، نسخ، تصدير) ونفضّل الصراحة على المبالغة.',
    'st.ctaT': 'عايز تشوف الضوابط دي على سيناريو صيدليتك؟',
    'st.ctaS': 'في الديمو بنوريك الصلاحيات، مسار البيعة والتأمين، وكيف التقارير بتعكس الربح الحقيقي.',

    'pd.eyebrow': 'المنتج',
    'pd.title': 'كل ما تحتاجه لإدارة صيدليتك في نظام واحد',
    'pd.sub': 'نظام تشغيل يربط نقطة البيع، المخزون، التأمين، التقارير المالية، والصلاحيات — مع دعم متعدد الفروع.',
    'pd.pill1': 'نقطة بيع', 'pd.pill2': 'مخزون', 'pd.pill3': 'تأمين', 'pd.pill4': 'تقارير', 'pd.pill5': 'متعدد الفروع',
    'pd.cta': 'احجز Demo مجاني',
    'pd.ctaSec': 'الأمان والثقة',
    'pd.pos.label': 'نقطة البيع (POS)',
    'pd.pos.t': 'كاشير سريع ودقيق — بالباركود والوحدات والتأمين',
    'pd.pos.d': 'مصمم لسرعة الكاشير ودقة الفاتورة في نفس اللحظة.',
    'pd.pos.l1': 'بيع بالباركود والاسم عربي/إنجليزي',
    'pd.pos.l2': 'تحويل وحدات: قرص / شريط / علبة بأسعار مضبوطة',
    'pd.pos.l3': 'إتمام دفع سريع مع فصل حصة التأمين',
    'pd.pos.l4': 'طرق دفع واضحة ضمن فاتورة البيع',
    'pd.pos.result': 'الأثر: صف أسرع، أخطاء أقل، وفاتورة صح من أول مرة.',
    'pd.inv.label': 'إدارة المخزون',
    'pd.inv.t': 'تشغيلات · صلاحية · FEFO · حركة مخزون',
    'pd.inv.d': 'قلل هدر الصلاحية وأخطاء الرصيد بتتبع تشغيلة واضح.',
    'pd.inv.l1': 'تتبع التشغيلات والكميات',
    'pd.inv.l2': 'إدارة تواريخ الصلاحية والتنبيهات',
    'pd.inv.l3': 'صرف FEFO — الأقرب انتهاءً أولاً',
    'pd.inv.l4': 'حركات مخزون مرتبطة بالبيع والشراء',
    'pd.inv.result': 'الأثر: هدر أقل ومخزون أوضح تحت السيطرة.',
    'pd.ins.label': 'إدارة التأمين — ميزة فارقة',
    'pd.ins.t': 'مطالبات · تغطية · مطابقة · متابعة التحصيل',
    'pd.ins.d': 'الفرق الحقيقي عن إكسيل والبرامج البسيطة: التأمين بيتحسب ويتتابع داخل النظام.',
    'pd.ins.l1': 'مطالبات تأمين منظمة',
    'pd.ins.l2': 'حساب التغطية على مستوى الدواء',
    'pd.ins.l3': 'فصل حصة المريض وشركة التأمين',
    'pd.ins.l4': 'متابعة المطالبة حتى التحصيل',
    'pd.ins.result': 'الأثر: مستحقات أوضح وأيام مراجعة يدوية أقل.',
    'pd.fin.label': 'الذكاء المالي',
    'pd.fin.t': 'ربح حقيقي · مبيعات · مصروفات · نقدية · P&L',
    'pd.fin.d': 'شوف شغلك كعمل — مش كإجمالي مبيعات بس.',
    'pd.fin.l1': 'صافي ربح بعد التكلفة والمصروفات',
    'pd.fin.l2': 'تقارير مبيعات يومية وفترات',
    'pd.fin.l3': 'مصروفات بدورة اعتماد',
    'pd.fin.l4': 'تحكم نقدية الوردية (عُهدة الدرج)',
    'pd.fin.result': 'الأثر: قرارات مبنية على ربح حقيقي وفلوس واضحة.',
    'pd.br.label': 'تشغيل متعدد الفروع',
    'pd.br.t': 'أكتر من صيدلية · رؤية مركزية · أداء الفروع',
    'pd.br.d': 'خطة الفروع مصممة للسلاسل اللي محتاجة نفس الضوابط عبر المواقع.',
    'pd.br.l1': 'إدارة أكتر من صيدلية/فرع',
    'pd.br.l2': 'رؤية مركزية للمبيعات والمؤشرات',
    'pd.br.l3': 'متابعة أداء كل فرع',
    'pd.br.l4': 'حركة مخزون مرتبطة بعمليات الشراء والتشغيل',
    'pd.br.result': 'الأثر: صورة موحّدة للشغل من غير ما تفقد التحكم.',
    'pd.perm.label': 'صلاحيات وسجل تدقيق',
    'pd.perm.t': 'أدوار المستخدمين · نشاط · مين غيّر إيه',
    'pd.perm.d': 'حماية الشغل من داخل النظام — مش بس من بره.',
    'pd.perm.l1': 'أدوار: صاحب / صيدلي / كاشير / محاسب',
    'pd.perm.l2': 'صلاحيات على الشاشات والعمليات',
    'pd.perm.l3': 'سجل تدقيق للحركات الحساسة',
    'pd.perm.l4': 'تتبع مين غيّر سعر أو فاتورة أو مخزون',
    'pd.perm.result': 'الأثر: مسؤولية واضحة ورؤية لصاحب الصيدلية.',
    'pd.perm.link': 'تفاصيل الأمان والثقة ←',
    'pd.endT': 'شوف الوحدات دي على سيناريو صيدليتك',
    'pd.endS': 'احجز ديمو مجاني ١٥ دقيقة — بيعة، تأمين، FEFO، وربح حقيقي.',

    'dm.eyebrow': 'تجربة المنتج',
    'dm.title': 'شوف Pharmora وهو شغال',
    'dm.sub': 'جولة ٦٠–٩٠ ثانية على سيناريو صيدلية حقيقي — وبعدها احجز ديمو مباشر مع الفريق.',
    'dm.vidNote': 'مكان فيديو المنتج (٦٠–٩٠ ثانية) — سيُضاف عند التسجيل',
    'dm.vidHint': 'استبدل هذا الصندوق بـ iframe/فيديو عند الجاهزية',
    'dm.s1': 'مشكلة صاحب الصيدلية: تأمين معلّق وصلاحية وربح غير واضح',
    'dm.s2': 'فتح نقطة بيع Pharmora',
    'dm.s3': 'بيع دواء بالباركود',
    'dm.s4': 'حساب حصة التأمين تلقائياً',
    'dm.s5': 'اختيار تشغيلة FEFO',
    'dm.s6': 'عرض لوحة الأرباح / صافي الربح',
    'dm.formEy': 'احجز موعدك',
    'dm.formT': 'ديمو مجاني ١٥ دقيقة',
    'dm.formS': 'هنمشي على سيناريو يشبه صيدليتك: بيعة بتأمين، FEFO، وردية، وتقرير أرباح. من غير التزام.',
    'dm.b1': 'عربي أو إنجليزي حسب راحتك',
    'dm.b2': 'مناسب لصيدلية واحدة أو فروع',
    'dm.b3': 'بعد الديمو: إعداد وتدريب ضمن الاشتراك',
    'dm.formH': 'بيانات الحجز',
    'dm.fName': 'الاسم',
    'dm.fNameP': 'د/ أحمد',
    'dm.fPharm': 'اسم الصيدلية',
    'dm.fPharmP': 'صيدلية النور',
    'dm.fBranches': 'عدد الفروع',
    'dm.br1': 'فرع واحد',
    'dm.br2': '٢–٣ فروع',
    'dm.br3': '٤ فروع أو أكثر',
    'dm.fPhone': 'موبايل / واتساب',
    'dm.fTime': 'الوقت المفضّل',
    'dm.fTimeP': 'مثال: الخميس بعد الظهر',
    'dm.send': 'احجز ديمو مجاني',
    'dm.note': 'الطلب بيفتح واتساب برسالة جاهزة — الصفحة مش بتخزن بيانات على سيرفر.',

    'pv.eyebrow': 'قانوني',
    'pv.title': 'سياسة الخصوصية',
    'pv.sub': 'آخر تحديث توضيحي للإطلاق. بنوصف ممارساتنا بوضوح — من غير شهادات أو ادعاءات غير معلنة.',
    'pv.s1t': '١) جمع البيانات',
    'pv.s1d': 'نجمع البيانات اللازمة لتقديم الخدمة والتواصل معك: معلومات التواصل عند طلب الديمو أو الاشتراك، وبيانات تشغيل الصيدلية داخل حسابك عند استخدام النظام.',
    'pv.s2t': '٢) معلومات الحساب',
    'pv.s2d': 'تشمل اسم المستخدم، الدور، وبيانات الدخول المرتبطة بحساب الصيدلية. أنت مسؤول عن الحفاظ على سرية بيانات الدخول لمستخدميك.',
    'pv.s3t': '٣) بيانات الصيدلية',
    'pv.s3d': 'بيانات التشغيل (مبيعات، مخزون، تأمين، تقارير…) تُعالَج لتقديم خدمة Pharmora لحسابك. كل صيدلية تُعامل ضمن حدود حسابها المعزول منطقياً.',
    'pv.s4t': '٤) ممارسات الأمان',
    'pv.s4d': 'نستخدم ضوابط مثل عزل المستأجرين، صلاحيات حسب الدور، وسجل تدقيق للحركات الحساسة، مع نسخ احتياطي سحابي دوري. تفاصيل أوضح في صفحة الأمان والثقة.',
    'pv.s5t': '٥) تصدير البيانات',
    'pv.s5d': 'بيانات صيدليتك ملكك. نوفر إمكانية التصدير عبر أدوات النظام المتاحة أو بالتنسيق مع الدعم حسب الحالة.',
    'pv.s6t': '٦) طلب حذف البيانات',
    'pv.s6d': 'يمكنك طلب حذف أو إغلاق الحساب عبر التواصل الرسمي. قد نحتفظ بنسخ محدودة لفترة لازمة لأسباب تشغيلية أو قانونية مشروعة قبل الإزالة النهائية.',
    'pv.s7t': '٧) التواصل',
    'pv.s7d': 'لأسئلة الخصوصية: hello@pharmora.com · للدعم التشغيلي: support@pharmora.com',

    'tm.eyebrow': 'قانوني',
    'tm.title': 'شروط الاستخدام والاشتراك',
    'tm.sub': 'باستخدامك Pharmora فأنت توافق على الشروط التالية. التفاصيل التجارية النهائية تتأكد عند التعاقد/الديمو.',
    'tm.s1t': '١) شروط الاشتراك',
    'tm.s1d': 'Pharmora خدمة سحابية باشتراك شهري حسب الخطة المختارة. الأسعار المعروضة على الموقع تُؤكَّد عند التعاقد. عملاء التأسيس قد يحصلون على تثبيت سعر لمدة ١٢ شهراً كما يُعلن في صفحة الأسعار.',
    'tm.s2t': '٢) مسؤولية الحساب',
    'tm.s2d': 'صاحب الحساب مسؤول عن المستخدمين والصلاحيات ودقة البيانات المدخلة. أي نشاط يتم عبر حساباتكم يُعتبر صادراً عنكم.',
    'tm.s3t': '٣) الاستخدام المقبول',
    'tm.s3d': 'يُستخدم النظام لإدارة تشغيل صيدلية مشروعة فقط. يُحظر إساءة الاستخدام، محاولة اختراق الخدمة، أو إدخال بيانات ضارة أو مخالفة للقانون.',
    'tm.s4t': '٤) سياسة الدعم',
    'tm.s4d': 'نقدم دعماً عبر واتساب والبريد الرسمي support@pharmora.com خلال ساعات العمل. مستوى الأولوية قد يختلف حسب الخطة (مثل خطة الفروع).',
    'tm.s5t': '٥) الإلغاء',
    'tm.s5d': 'يمكنك طلب إلغاء الاشتراك عبر التواصل الرسمي. عند الإلغاء تتوقف الخدمة حسب دورة الفوترة المتفق عليها، ويمكنك طلب تصدير بياناتك وفق سياسة الخصوصية.',
    'tm.s6t': '٦) التحديثات',
    'tm.s6d': 'قد نحدّث الشروط مع تطور المنتج. النسخة المنشورة على الموقع هي المرجع. للاستفسار: hello@pharmora.com',

    'ft.legal': 'قانوني',
    'ct.eyebrow': 'تواصل',
    'ct.title': 'احجز ديمو — أو اسأل فريق Pharmora',
    'ct.sub': 'الخطوة الأوضح: ديمو ١٥ دقيقة. للرد السريع: واتساب أو الهاتف أو البريد الرسمي.',
    'ct.waT': 'واتساب — رد سريع',
    'ct.phT': 'اتصال مباشر',
    'ct.emT': 'البريد الرسمي',
    'ct.formT': 'احجز الديمو — سيب بياناتك',
    'ct.fName': 'اسمك',
    'ct.fNameP': 'د/ أحمد محمد',
    'ct.fPharm': 'اسم الصيدلية',
    'ct.fPharmP': 'صيدلية النور',
    'ct.fPhone': 'رقم الموبايل',
    'ct.fPlan': 'الخطة',
    'ct.plan0': 'لسه بقرر — عايز الديمو أولاً',
    'ct.planBasic': 'الأساسية — 499 ج.م / شهرياً',
    'ct.planPro': 'الاحترافية — 899 ج.م / شهرياً',
    'ct.planBranches': 'الفروع — سلسلة',
    'ct.fMsg': 'موعد أو ملاحظة',
    'ct.fMsgP': 'مثال: الخميس بعد الظهر',
    'ct.send': 'ابعت طلب الديمو على واتساب',
    'ct.note': 'الزر بيفتح واتساب برسالة جاهزة — الصفحة مش بتخزن بيانات على سيرفر.',
    'ct.waMsg': 'مرحباً، عايز أحجز ديمو مجاني لـ Pharmora',
  },
  en: {
    dir: 'ltr',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.outcomes': 'Solutions',
    'nav.why': 'Why Pharmora',
    'nav.product': 'Product',
    'nav.security': 'Trust',
    'nav.securityPage': 'Security & Trust',
    'nav.demo': 'Demo',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',
    'nav.pricing': 'Pricing',
    'nav.cta': 'Book a free demo',
    'nav.lang': 'ع',

    'hero.eyebrow': 'Pharmacy management system',
    'hero.title': 'Run your pharmacy: sales, inventory, insurance, and real profit — in one system',
    'hero.sub': 'Pharmora is cloud software for pharmacy owners: a fast POS, accurate insurance claims, FEFO inventory that cuts waste, and net profit after cost and expenses — with roles and an audit trail that protect your operation.',
    'hero.cta': 'Book a free demo',
    'hero.screens': 'See the product',
    'hero.wa': 'WhatsApp',
    'hero.t1': 'Cloud — any device',
    'hero.t2': 'Roles + audit log',
    'hero.t3': 'Exportable data',
    'hero.t4': 'Setup & training included',
    'hero.caption': 'Real product screenshots — not marketing mockups',

    'strip.s1': 'Per-pharmacy data isolation',
    'strip.s2': 'Roles & permissions',
    'strip.s3': 'Audit log for sensitive actions',
    'strip.s4': 'Cloud backups',
    'strip.s5': 'Data ownership & export',

    'out.eyebrow': 'Business outcomes',
    'out.title': 'From daily pain → clear solution → money impact',
    'out.sub': 'Not a feature list. Each block answers: what hurts, how Pharmora fixes it, and what improves.',

    'out.ins.label': '1 — Insurance claims',
    'out.ins.problem': 'Problem: End-of-month days lost splitting insurer shares and reviewing claims by hand.',
    'out.ins.solution': 'Solution: Automatic patient vs insurer split at the drug level',
    'out.ins.desc': 'Per-insurer coverage, claims tracked to settlement, clear receivables — without Excel.',
    'out.ins.result': 'Impact: Know what you are owed and reclaim days of manual review.',

    'out.fefo.label': '2 — Inventory & expiry (FEFO)',
    'out.fefo.problem': 'Problem: Near-expiry stock quietly becomes waste on the shelf.',
    'out.fefo.solution': 'Solution: Batch inventory with FEFO — nearest expiry dispenses first',
    'out.fefo.desc': 'Every batch has its date, alerts before expiry, and automatic dispense that prevents selling the wrong batch.',
    'out.fefo.result': 'Impact: Less waste, clearer stock, expiry under control.',

    'out.pnl.label': '3 — Real profit',
    'out.pnl.problem': 'Problem: Sales totals flatter you — they do not show true profitability.',
    'out.pnl.solution': 'Solution: Net profit after cost, returns, expenses, and insurance',
    'out.pnl.desc': 'Batch-level costing. See profit after COGS and approved expenses — not vanity metrics.',
    'out.pnl.result': 'Impact: Decide on real profit — not “total sales.”',

    'out.cash.label': '4 — Cashier & shift control',
    'out.cash.problem': 'Problem: You do not know expected drawer cash — or who changed an invoice or price.',
    'out.cash.solution': 'Solution: Shifts with drawer counts + roles + audit log for sensitive actions',
    'out.cash.desc': 'Every cashier works a shift. Expected cash is computed, variances flagged, and owners can review sensitive actions.',
    'out.cash.result': 'Impact: Clearer drawer accountability and clear responsibility per user.',

    'out.branch.label': '5 — Multi-branch management',
    'out.branch.problem': 'Problem: Each branch has separate numbers — hard to see sales, stock, and profit as one picture.',
    'out.branch.solution': 'Solution: Multiple branches under one account — same controls and reporting',
    'out.branch.desc': 'The Branches plan is built for chains: dedicated setup, team training, priority support — with the same insurance, inventory, and profit accuracy.',
    'out.branch.result': 'Impact: Unified visibility across branches without losing control.',

    'why.eyebrow': 'Why Pharmora',
    'why.title': 'Compare clearly: legacy software · Excel · Pharmora',
    'why.sub': 'The difference is not a pretty screen — it is insurance, expiry, control, and financial reporting.',
    'why.col0': 'Capability',
    'why.col1': 'Legacy / on-prem',
    'why.col2': 'Excel / notebooks',
    'why.col3': 'Pharmora',
    'why.r1': 'Cloud access on any device',
    'why.r1a': 'Limited / single machine', 'why.r1b': 'Scattered files', 'why.r1c': 'Yes — browser',
    'why.r2': 'Insurance claims workflow',
    'why.r2a': 'Often manual or incomplete', 'why.r2b': 'Fully manual', 'why.r2c': 'Auto split + tracking',
    'why.r3': 'FEFO / batch inventory',
    'why.r3a': 'Inconsistent', 'why.r3b': 'Hard to maintain', 'why.r3c': 'Built into dispense',
    'why.r4': 'User permissions',
    'why.r4a': 'Usually basic', 'why.r4b': 'No', 'why.r4c': 'Detailed roles',
    'why.r5': 'Audit log',
    'why.r5a': 'Rare or weak', 'why.r5b': 'No', 'why.r5c': 'Sensitive actions logged',
    'why.r6': 'Real profit reporting',
    'why.r6a': 'Sales more than profit', 'why.r6b': 'Approximate', 'why.r6c': 'Net after cost & expenses',
    'why.r7': 'Multi-branch',
    'why.r7a': 'Costly / complex', 'why.r7b': 'Chaos', 'why.r7c': 'Dedicated branches plan',
    'why.r8': 'Data safety & backups',
    'why.r8a': 'Depends on the machine', 'why.r8b': 'File-loss risk', 'why.r8c': 'Cloud + backups + export',

    'scr.eyebrow': 'Product experience',
    'scr.title': 'See Pharmora from the inside — real screenshots',
    'scr.sub': 'Pick a screen: what you see, why it matters, and the business outcome.',
    'scr.light': 'Light mode',
    'scr.dark': 'Dark mode',
    'scr.tab.pos': 'Point of sale',
    'scr.tab.pos_d': 'Barcode, units, and insurance on one screen',
    'scr.tab.claims': 'Insurance claims',
    'scr.tab.claims_d': 'Receivables and settlement tracking',
    'scr.tab.med': 'Inventory & batches',
    'scr.tab.med_d': 'Clear expiry and batches',
    'scr.tab.dashboard': 'Dashboard',
    'scr.tab.dashboard_d': 'Sales, shortages, near-expiry',
    'scr.tab.pnl': 'Net profit',
    'scr.tab.pnl_d': 'After cost and expenses',
    'scr.tab.purchases': 'Purchasing',
    'scr.tab.purchases_d': 'Batch invoices & suppliers',
    'scr.cap.pos': 'You see: barcode POS with insurance split. Why it matters: speed and share accuracy. Outcome: a correct invoice the first time.',
    'scr.cap.claims': 'You see: claims and settlement tracking. Why it matters: stuck insurer money. Outcome: clearer receivables, faster follow-up.',
    'scr.cap.med': 'You see: items, batches, expiry. Why it matters: waste. Outcome: FEFO reduces expired stock on the shelf.',
    'scr.cap.dash': 'You see: today’s KPIs, shortages, expiry. Why it matters: fast decisions. Outcome: one view of operational health.',
    'scr.cap.pnl': 'You see: net profit after cost and expenses. Why it matters: financial truth. Outcome: decisions based on profit, not sales.',
    'scr.cap.purchases': 'You see: purchase invoices by batch. Why it matters: COGS and suppliers. Outcome: stock and cost stay correctly linked.',

    'vid.title': '15-minute product walkthrough',
    'vid.sub': 'Book a live demo — insured sale, FEFO, shift close, and net profit',
    'vid.cta': 'Book a slot →',

    'sec.eyebrow': 'Trust architecture',
    'sec.title': 'Your pharmacy data and money — under your control',
    'sec.sub': 'Three pillars every pharmacy owner should trust before moving operations to the cloud.',
    'sec.p1t': 'Security',
    'sec.p1a': 'Per-pharmacy tenant isolation',
    'sec.p1b': 'Periodic cloud backups',
    'sec.p1c': 'You own your data',
    'sec.p1d': 'Export when you need it',
    'sec.p2t': 'Control',
    'sec.p2a': 'User roles (owner / pharmacist / cashier / accountant)',
    'sec.p2b': 'Fine-grained permissions on screens and actions',
    'sec.p2c': 'Audit log for sensitive actions',
    'sec.p2d': 'Track who changed what and when',
    'sec.p3t': 'Financial reliability',
    'sec.p3a': 'Profit after actual cost',
    'sec.p3b': 'Clear transaction history',
    'sec.p3c': 'Expense approve / reject',
    'sec.p3d': 'Reviewable shifts and drawer counts',

    'steps.eyebrow': 'Conversion path',
    'steps.title': 'Three clear steps — from demo to live work',
    'steps.lead': 'No misleading self-serve signup. We start with a demo, then setup, then live operations with support.',
    'steps.s1t': '1) Book a 15-minute demo',
    'steps.s1d': 'We show an insured sale, FEFO dispense, and a shift close on a workflow like yours.',
    'steps.s2t': '2) We set up your pharmacy and help migrate',
    'steps.s2d': 'Account in your name, users with roles, help entering items and balances, and team training.',
    'steps.s3t': '3) Open a shift and start managing',
    'steps.s3d': 'From the first invoice: stock, insurance, and profit under your eyes — with ongoing support.',

    'trust.eyebrow': 'Built for Egypt',
    'trust.title': 'Designed for Egyptian pharmacy work — not a translated foreign system',
    'trust.sub': 'Local insurance, unit selling (tablet/strip/box), shifts and drawer counts, and aging — part of the design from day one. No fake customer counts here: we build trust with clarity and accuracy.',
    'trust.li1': 'Arabic-first — English one click away',
    'trust.li2': 'Browser-based — no special hardware',
    'trust.li3': 'Setup + training + support included',
    'trust.quote': '“We build around the problems pharmacists live every day: stuck insurance money, expiry waste, and the gap between sales and profit.”',
    'trust.cite': '— Pharmora product team · AG Technologies',

    'pr.eyebrow': 'Pricing',
    'pr.title': 'Clear pricing — founding launch pricing locked for 12 months',
    'pr.sub': 'Founding customer pricing locked for 12 months. No special hardware, no hidden fees. Pick the plan for your size, then book a demo to confirm.',
    'pr.p1': 'Basic',
    'pr.p2': 'Professional',
    'pr.p3': 'Multi-branch',
    'pr.p1for': 'For a single pharmacy without complex insurance',
    'pr.p2for': 'For insurance, shifts, and financial reporting',
    'pr.p3for': 'For chains and multiple branches',
    'pr.mo': 'EGP / month',
    'pr.contact': 'Custom quote',
    'pr.hot': 'Best fit for most pharmacies',
    'pr.p1f1': 'POS + batch & expiry inventory',
    'pr.p1f2': 'Two users + permissions',
    'pr.p1f3': 'Daily sales reports',
    'pr.p1f4': 'Basic setup & short training',
    'pr.p1f5': 'No full insurance module',
    'pr.p2f1': 'Everything in Basic',
    'pr.p2f2': 'Full insurance & claims',
    'pr.p2f3': 'Shifts & drawer counts',
    'pr.p2f4': 'Profit + aging + audit log',
    'pr.p2f5': 'Unlimited users',
    'pr.p3f1': 'Everything in Professional',
    'pr.p3f2': 'Multiple branches, one account',
    'pr.p3f3': 'Dedicated setup & training',
    'pr.p3f4': 'Priority support',
    'pr.c1': 'Book demo — Basic',
    'pr.c2': 'Book demo — Professional',
    'pr.c3': 'Book demo — Branches',
    'pr.note': 'Founding customer pricing locked for 12 months — confirmed during the demo.',
    'pr.inc1': 'Includes: account setup · migration help · team training · subscription updates',
    'pr.inc2': 'Support: WhatsApp + official email support@pharmora.com',

    'faq.eyebrow': 'Questions before the demo',
    'faq.title': 'Straight answers — no hype',
    'faq.q1': 'Do I need special hardware?',
    'faq.a1': 'No — it runs in the browser on any computer, laptop, or tablet. A standard barcode scanner works out of the box.',
    'faq.q2': 'Where is my data? Safe? Exportable?',
    'faq.a2': 'On cloud servers with periodic backups, each pharmacy isolated. You control permissions and can export your data — because it is yours.',
    'faq.q3': 'Is migration from notebooks or old software hard?',
    'faq.a3': 'We help with initial items and balances and train the team. Most pharmacies start selling within days of setup.',
    'faq.q4': 'Is there an audit trail?',
    'faq.a4': 'Yes — sensitive actions (prices, voided invoices, stock, users) are logged for the owner.',
    'faq.q5': 'What if the internet drops while selling?',
    'faq.a5': 'Cloud selling needs a connection. We recommend a mobile backup line. Sales record quickly once the connection is stable.',
    'faq.q6': 'Do you help with setup and training?',
    'faq.a6': 'Yes — account setup, migration help, and hands-on team training are included. Ongoing support via WhatsApp and official email.',
    'faq.q7': 'What are support hours?',
    'faq.a7': 'We support via WhatsApp and official email during business hours and reply as fast as we can on daily operational questions. Priority differs by plan.',
    'faq.q8': 'Tax Authority e-receipts?',
    'faq.a8': 'Being finalized under accounting review; it will arrive as a subscription update when activated — not a separate paid product.',

    'cta.kicker': 'Next step',
    'cta.title': 'Book a free 15-minute demo on your pharmacy workflow',
    'cta.sub': 'We will show: insured sale · FEFO dispense · shift close · profit report. No commitment.',
    'cta.demo': 'Book a free demo',
    'cta.wa': 'WhatsApp — quick reply',
    'cta.s1': 'Book the demo',
    'cta.s2': 'We set up your account',
    'cta.s3': 'Start managing sales',
    'cta.contact': 'Contact page',

    'ft.brand': 'A product by AG Technologies — practical software for pharmacy.',
    'ft.product': 'Product',
    'ft.company': 'Company',
    'ft.contact': 'Official contact',
    'ft.demo': 'Book a demo',
    'ft.rights': 'All rights reserved',

    'ab.eyebrow': 'About Pharmora',
    'ab.title': 'Building the future of pharmacy operations in Egypt',
    'ab.sub': 'Pharmora is a pharmacy operating system that connects sales, inventory, insurance, financial insight, and daily operations — in one cloud platform designed for the Egyptian market.',
    'ab.ctaSec': 'Read Security & Trust',
    'ab.whyEy': 'Why Pharmora exists',
    'ab.whyT': 'Real pharmacy problems — not “automation for its own sake”',
    'ab.whyS': 'Many pharmacies still pay the cost of manual work, incomplete numbers, and weak control. Pharmora was built to solve those problems at the root.',
    'ab.c1t': 'Manual processes',
    'ab.c1d': 'Notebooks, Excel, and legacy tools burn team time and do not guarantee daily accuracy.',
    'ab.c2t': 'Poor real-profit visibility',
    'ab.c2d': 'Sales totals are not enough — owners need net profit after cost, expenses, and insurance.',
    'ab.c3t': 'Expiry losses',
    'ab.c3d': 'Without FEFO and clear batches, waste accumulates quietly every month.',
    'ab.c4t': 'Insurance reconciliation complexity',
    'ab.c4d': 'Manual share splits and claim follow-up can consume days at month-end.',
    'ab.c5t': 'Limited staff control',
    'ab.c5d': 'Without roles and an audit trail, it is hard to know who changed prices or invoices.',
    'ab.c6t': 'How Pharmora solves it',
    'ab.c6d': 'One operating system: accurate selling, FEFO inventory, calculated insurance, real profit, and permissions that protect the business.',
    'ab.misEy': 'Mission',
    'ab.misT': 'Our mission',
    'ab.misD': 'Help pharmacy owners run safer, smarter, and more profitable businesses — with software that understands daily pharmacy work.',
    'ab.visEy': 'Vision',
    'ab.visT': 'Our vision',
    'ab.visD': 'Become the trusted operating platform for pharmacies in Egypt and the region — through quality and clarity, not hype.',
    'ab.philEy': 'Product philosophy',
    'ab.philT': 'How we build Pharmora',
    'ab.philS': 'Every product decision maps back to five principles — so the system stays practical and responsible.',
    'ab.p1t': 'Accuracy',
    'ab.p1d': 'Piaster-level math, correct units, and batch-level costing.',
    'ab.p2t': 'Simplicity',
    'ab.p2d': 'Screens cashiers and pharmacists can use quickly without heavy training.',
    'ab.p3t': 'Security',
    'ab.p3d': 'Data isolation, permissions, and audit logs — because pharmacy data is sensitive.',
    'ab.p4t': 'Financial control',
    'ab.p4d': 'Shifts, approved expenses, and reports that connect sales to cost.',
    'ab.p5t': 'Real business insight',
    'ab.p5d': 'KPIs, shortages, expiry, and profit that support decisions — not vanity metrics.',
    'ab.egEy': 'Local from day one',
    'ab.egT': 'Built for Egyptian pharmacies — not a translated foreign system',
    'ab.egS': 'Arabic-first experience, local insurance workflows, unit selling (tablet/strip/box), shifts, and aging — designed for how work actually happens here.',
    'ab.eg1': 'Proper Arabic UI and reports + English one click away',
    'ab.eg2': 'Insurance and claims scenarios fit for the local market',
    'ab.eg3': 'Local ops needs: shifts, drawer counts, suppliers',
    'ab.coEy': 'Company trust',
    'ab.coT': 'Clear contact · ongoing support · responsible product evolution',
    'ab.coS': 'No fake customer counts. We build trust with honesty: official channels, a support commitment, and a product roadmap without empty promises.',
    'ab.co1t': 'Official contact',
    'ab.co1d': 'Company channels — not personal inboxes:',
    'ab.co2t': 'Support commitment',
    'ab.co2d': 'Help with setup, migration, and training, plus replies on daily operational questions via WhatsApp and official email.',
    'ab.co3t': 'Roadmap mindset',
    'ab.co3d': 'We ship features based on real pharmacy needs — and we clearly label what is still being prepared (such as e-receipt).',
    'ab.ctaT': 'Ready to see Pharmora on your pharmacy workflow?',

    'st.eyebrow': 'Security & Trust',
    'st.title': 'Your pharmacy data, protected and controlled',
    'st.sub': 'Before you move sales, inventory, and insurance to the cloud, you need clarity: who can see, who can edit, and how your data is protected and owned. This page explains Pharmora’s controls clearly — without certifications or unsupported claims.',
    'st.ctaFaq': 'Security FAQ',
    'st.dEy': 'Data security',
    'st.dT': 'Each pharmacy’s data is isolated and protected with access controls',
    'st.dS': 'Our goal is simple: your business information stays yours — and is not available without permission.',
    'st.d1t': 'Tenant data isolation',
    'st.d1d': 'Each pharmacy has logically separated data (tenant isolation) — not shared records with other pharmacies.',
    'st.d2t': 'Secure access control',
    'st.d2d': 'Access is through user accounts — not an anonymous shared machine.',
    'st.d3t': 'Role-based permissions',
    'st.d3d': 'Owner, pharmacist, cashier, accountant — each role sees and does only what it should.',
    'st.d4t': 'Protected business information',
    'st.d4d': 'Sales, inventory, insurance, and financial reports are treated as sensitive data inside your account boundary.',
    'st.cEy': 'Pharmacy control',
    'st.cT': 'Owners keep visibility over operations — not blind to changes',
    'st.cS': 'Control is not just a password. Control means knowing what happened on sensitive work.',
    'st.c1t': 'Audit logs',
    'st.c1d': 'Sensitive actions are recorded so you can review them when needed.',
    'st.c2t': 'Who changed what',
    'st.c2d': 'Price edits, voided invoices, stock changes, and user management are tied to the user and timestamp.',
    'st.c3t': 'User activity tracking',
    'st.c3d': 'Clearer visibility into who performed sensitive operations in the system.',
    'st.c4t': 'Controlled approvals',
    'st.c4d': 'Approve/reject flows for expenses — so money leaving the business is not unchecked.',
    'st.fEy': 'Financial integrity',
    'st.fT': 'Money records must be accurate and reviewable',
    'st.fS': 'Owner trust grows when numbers compute correctly and history stays clear.',
    'st.f1t': 'Accurate calculations',
    'st.f1d': 'Unit pricing, insurance splits, and batch-level costing.',
    'st.f2t': 'Transaction history',
    'st.f2d': 'A clear record of sales, purchases, and related movements.',
    'st.f3t': 'Protected financial records',
    'st.f3d': 'Reports and profit stay inside account permission boundaries.',
    'st.f4t': 'Controlled money workflows',
    'st.f4d': 'Shifts, drawer counts, and approved expenses reduce financial chaos.',
    'st.bEy': 'Backup & data ownership',
    'st.bT': 'Your data is yours — backups and export are part of trust',
    'st.b1': 'Periodic cloud backups to reduce single-machine data-loss risk',
    'st.b2': 'Export capability when needed — because customers own their data',
    'st.b3': 'No undeclared certification claims — we describe what the system actually does',
    'st.rEy': 'Reliability',
    'st.rT': 'Responsible production practices',
    'st.rS': 'Pharmacy software must stay stable as it evolves. We operate with a production mindset.',
    'st.r1t': 'Operational monitoring',
    'st.r1d': 'Service health monitoring to catch issues as early as possible.',
    'st.r2t': 'Clearer error handling',
    'st.r2d': 'We handle errors in ways that reduce downtime and speed diagnosis.',
    'st.r3t': 'Safe updates',
    'st.r3d': 'Updates are included in the subscription — with care not to break daily workflows.',
    'st.r4t': 'Production practices',
    'st.r4d': 'Review before release, and a clear line between what is ready and what is still in progress.',
    'st.faqEy': 'Security FAQ',
    'st.faqT': 'Straight answers before you trust the system',
    'st.q1': 'Who can access my pharmacy data?',
    'st.a1': 'Only users you grant permission to inside your pharmacy account. Each pharmacy’s data is isolated from others.',
    'st.q2': 'Can I export my data?',
    'st.a2': 'Yes — export is part of data ownership. Your data is yours, and you can export what you need through available system tools.',
    'st.q3': 'How do permissions work?',
    'st.a3': 'Roles (owner / pharmacist / cashier / accountant) define who can see and do what — so a cashier does not have owner-level power.',
    'st.q4': 'How do you protect financial records?',
    'st.a4': 'Through accurate calculations, transaction history, report permissions, and controlled shift/expense workflows.',
    'st.q5': 'Is there a log of sensitive changes?',
    'st.a5': 'Yes — an audit trail for sensitive actions like price changes, voided invoices, or stock edits, tied to user and time.',
    'st.q6': 'Do you have international security certifications?',
    'st.a6': 'We do not claim undeclared certifications here. We describe real controls (isolation, permissions, audit, backups, export) and prefer honesty over hype.',
    'st.ctaT': 'Want to see these controls on your pharmacy workflow?',
    'st.ctaS': 'In the demo we show permissions, the insured-sale path, and how reports reflect real profit.',

    'pd.eyebrow': 'Product',
    'pd.title': 'Everything your pharmacy needs, in one operating system',
    'pd.sub': 'An operating system that connects POS, inventory, insurance, financial reports, and permissions — with multi-branch support.',
    'pd.pill1': 'POS', 'pd.pill2': 'Inventory', 'pd.pill3': 'Insurance', 'pd.pill4': 'Reports', 'pd.pill5': 'Multi-branch',
    'pd.cta': 'Book a free demo',
    'pd.ctaSec': 'Security & Trust',
    'pd.pos.label': 'Point of sale (POS)',
    'pd.pos.t': 'Fast, accurate checkout — barcode, units, and insurance',
    'pd.pos.d': 'Built for cashier speed and invoice accuracy in the same moment.',
    'pd.pos.l1': 'Sell by barcode or name in Arabic/English',
    'pd.pos.l2': 'Unit conversion: tablet / strip / box with correct prices',
    'pd.pos.l3': 'Fast payment with insurer share split',
    'pd.pos.l4': 'Clear payment methods on the sale invoice',
    'pd.pos.result': 'Impact: faster queues, fewer mistakes, a correct invoice the first time.',
    'pd.inv.label': 'Inventory management',
    'pd.inv.t': 'Batches · expiry · FEFO · stock movements',
    'pd.inv.d': 'Cut expiry waste and stock mistakes with clear batch tracking.',
    'pd.inv.l1': 'Batch and quantity tracking',
    'pd.inv.l2': 'Expiry dates and alerts',
    'pd.inv.l3': 'FEFO dispense — nearest expiry first',
    'pd.inv.l4': 'Stock movements linked to sales and purchases',
    'pd.inv.result': 'Impact: less waste and clearer stock under control.',
    'pd.ins.label': 'Insurance management — key differentiator',
    'pd.ins.t': 'Claims · coverage · reconciliation · settlement tracking',
    'pd.ins.d': 'The real gap vs Excel and simple tools: insurance is calculated and tracked inside the system.',
    'pd.ins.l1': 'Organized insurance claims',
    'pd.ins.l2': 'Coverage calculated at the drug level',
    'pd.ins.l3': 'Patient vs insurer share split',
    'pd.ins.l4': 'Claims tracked through settlement',
    'pd.ins.result': 'Impact: clearer receivables and fewer manual review days.',
    'pd.fin.label': 'Financial intelligence',
    'pd.fin.t': 'Real profit · sales · expenses · cash · P&L',
    'pd.fin.d': 'See the pharmacy as a business — not just a sales total.',
    'pd.fin.l1': 'Net profit after cost and expenses',
    'pd.fin.l2': 'Daily and period sales reports',
    'pd.fin.l3': 'Expenses with approval flow',
    'pd.fin.l4': 'Shift cash control (drawer counts)',
    'pd.fin.result': 'Impact: decisions based on real profit and clear cash.',
    'pd.br.label': 'Multi-branch operations',
    'pd.br.t': 'Multiple pharmacies · central visibility · branch performance',
    'pd.br.d': 'The Branches plan is built for chains that need the same controls across locations.',
    'pd.br.l1': 'Manage multiple pharmacies/branches',
    'pd.br.l2': 'Central visibility into sales and KPIs',
    'pd.br.l3': 'Track each branch’s performance',
    'pd.br.l4': 'Stock movement tied to purchasing and operations',
    'pd.br.result': 'Impact: a unified picture without losing control.',
    'pd.perm.label': 'Permissions & audit',
    'pd.perm.t': 'User roles · activity · who changed what',
    'pd.perm.d': 'Protect the business from inside the system — not only from outside.',
    'pd.perm.l1': 'Roles: owner / pharmacist / cashier / accountant',
    'pd.perm.l2': 'Permissions on screens and actions',
    'pd.perm.l3': 'Audit log for sensitive actions',
    'pd.perm.l4': 'Track who changed a price, invoice, or stock',
    'pd.perm.result': 'Impact: clear responsibility and owner visibility.',
    'pd.perm.link': 'Security & Trust details →',
    'pd.endT': 'See these modules on your pharmacy workflow',
    'pd.endS': 'Book a free 15-minute demo — sale, insurance, FEFO, and real profit.',

    'dm.eyebrow': 'Product experience',
    'dm.title': 'See Pharmora in action',
    'dm.sub': 'A 60–90 second walkthrough of a real pharmacy scenario — then book a live demo with the team.',
    'dm.vidNote': 'Product video placeholder (60–90s) — added when recorded',
    'dm.vidHint': 'Replace this block with an iframe/video when ready',
    'dm.s1': 'Owner problem: stuck insurance, expiry, unclear profit',
    'dm.s2': 'Open Pharmora POS',
    'dm.s3': 'Sell a medicine by barcode',
    'dm.s4': 'Automatic insurance share calculation',
    'dm.s5': 'FEFO batch selection',
    'dm.s6': 'View profit dashboard / net profit',
    'dm.formEy': 'Book your slot',
    'dm.formT': 'Free 15-minute demo',
    'dm.formS': 'We walk a workflow like yours: insured sale, FEFO, shift close, and a profit report. No commitment.',
    'dm.b1': 'Arabic or English — your choice',
    'dm.b2': 'Fits a single pharmacy or multiple branches',
    'dm.b3': 'After the demo: setup and training included in subscription',
    'dm.formH': 'Booking details',
    'dm.fName': 'Name',
    'dm.fNameP': 'Dr. Ahmed',
    'dm.fPharm': 'Pharmacy name',
    'dm.fPharmP': 'Al-Nour Pharmacy',
    'dm.fBranches': 'Number of branches',
    'dm.br1': '1 branch',
    'dm.br2': '2–3 branches',
    'dm.br3': '4+ branches',
    'dm.fPhone': 'Mobile / WhatsApp',
    'dm.fTime': 'Preferred time',
    'dm.fTimeP': 'e.g. Thursday afternoon',
    'dm.send': 'Book free demo',
    'dm.note': 'Opens WhatsApp with a pre-filled message — nothing is stored on a server.',

    'pv.eyebrow': 'Legal',
    'pv.title': 'Privacy Policy',
    'pv.sub': 'Launch-ready explanatory update. We describe our practices clearly — without undeclared certifications or claims.',
    'pv.s1t': '1) Data collection',
    'pv.s1d': 'We collect data needed to deliver the service and contact you: contact details when you request a demo or subscribe, and pharmacy operational data inside your account when you use the system.',
    'pv.s2t': '2) Account information',
    'pv.s2d': 'Includes username, role, and login credentials tied to the pharmacy account. You are responsible for keeping your users’ credentials confidential.',
    'pv.s3t': '3) Pharmacy data handling',
    'pv.s3d': 'Operational data (sales, inventory, insurance, reports…) is processed to provide Pharmora for your account. Each pharmacy is handled within its logically isolated account boundary.',
    'pv.s4t': '4) Security practices',
    'pv.s4d': 'We use controls such as tenant isolation, role-based permissions, and an audit log for sensitive actions, with periodic cloud backups. More detail is on the Security & Trust page.',
    'pv.s5t': '5) Data export',
    'pv.s5d': 'Your pharmacy data is yours. Export is available through system tools or by coordinating with support as needed.',
    'pv.s6t': '6) Data deletion request',
    'pv.s6d': 'You may request account deletion or closure via official contact. We may retain limited copies for a necessary operational or lawful period before final removal.',
    'pv.s7t': '7) Contact',
    'pv.s7d': 'Privacy questions: hello@pharmora.com · operational support: support@pharmora.com',

    'tm.eyebrow': 'Legal',
    'tm.title': 'Terms of Use & Subscription',
    'tm.sub': 'By using Pharmora you agree to the following. Final commercial details are confirmed at contracting/demo.',
    'tm.s1t': '1) Subscription terms',
    'tm.s1d': 'Pharmora is a cloud service billed monthly by plan. Website prices are confirmed at contracting. Founding customers may receive a 12-month price lock as stated on the pricing page.',
    'tm.s2t': '2) Account responsibility',
    'tm.s2d': 'The account owner is responsible for users, permissions, and the accuracy of entered data. Activity through your accounts is considered yours.',
    'tm.s3t': '3) Acceptable usage',
    'tm.s3d': 'The system may only be used to run a lawful pharmacy operation. Abuse, attempts to compromise the service, or unlawful/harmful data are prohibited.',
    'tm.s4t': '4) Support policy',
    'tm.s4d': 'We provide support via WhatsApp and support@pharmora.com during business hours. Priority may differ by plan (e.g. Branches).',
    'tm.s5t': '5) Cancellation',
    'tm.s5d': 'You may request cancellation via official contact. Service ends according to the agreed billing cycle, and you may request a data export under the Privacy Policy.',
    'tm.s6t': '6) Updates',
    'tm.s6d': 'We may update these terms as the product evolves. The published site version is the reference. Questions: hello@pharmora.com',

    'ft.legal': 'Legal',
    'ct.eyebrow': 'Contact',
    'ct.title': 'Book a demo — or talk to the Pharmora team',
    'ct.sub': 'Clearest step: a 15-minute demo. For a quick reply: WhatsApp, phone, or official email.',
    'ct.waT': 'WhatsApp — quick reply',
    'ct.phT': 'Direct call',
    'ct.emT': 'Official email',
    'ct.formT': 'Book a demo — leave your details',
    'ct.fName': 'Your name',
    'ct.fNameP': 'Dr. Ahmed Mohamed',
    'ct.fPharm': 'Pharmacy name',
    'ct.fPharmP': 'Al-Nour Pharmacy',
    'ct.fPhone': 'Mobile number',
    'ct.fPlan': 'Plan',
    'ct.plan0': 'Still deciding — demo first',
    'ct.planBasic': 'Basic — EGP 499 / month',
    'ct.planPro': 'Professional — EGP 899 / month',
    'ct.planBranches': 'Branches — chain',
    'ct.fMsg': 'Preferred time or note',
    'ct.fMsgP': 'e.g. Thursday afternoon',
    'ct.send': 'Send demo request via WhatsApp',
    'ct.note': 'Opens WhatsApp with a pre-filled message — nothing is stored on a server.',
    'ct.waMsg': 'Hello, I\'d like to book a free Pharmora demo',
  }
};

function currentLang() { return localStorage.getItem('pharmora-lang') || 'ar'; }

function applyLang(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  localStorage.setItem('pharmora-lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  });
  const waText = encodeURIComponent(dict['ct.waMsg']);
  document.querySelectorAll('a[data-wa]').forEach(a => {
    a.href = 'https://wa.me/' + CONTACT.wa + '?text=' + waText;
  });
  const cap = document.getElementById('scrCap');
  const active = document.querySelector('.thumb-btn.active');
  if (cap && active?.dataset.cap && dict[active.dataset.cap] !== undefined) {
    cap.textContent = dict[active.dataset.cap];
  }
}

function toggleLang() {
  applyLang(currentLang() === 'ar' ? 'en' : 'ar');
}

function currentTheme() {
  const saved = localStorage.getItem('pharmora-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('pharmora-theme', theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0B1414' : '#0F766E');
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

function toggleTheme() {
  applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
}

function mountSiteFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">
          <img src="assets/img/logo_light.png" alt="Pharmora" class="logo-img logo-light">
          <img src="assets/img/logo_dark.png" alt="Pharmora" class="logo-img logo-dark">
        </a>
        <p class="ft-brand-line" data-i18n="ft.brand"></p>
      </div>
      <div class="footer-col">
        <b data-i18n="ft.product">Product</b>
        <a href="product.html" data-i18n="nav.product">Product</a>
        <a href="index.html#pricing" data-i18n="nav.pricing">Pricing</a>
        <a href="demo.html" data-i18n="nav.demo">Demo</a>
        <a href="security.html" data-i18n="nav.securityPage">Security</a>
      </div>
      <div class="footer-col">
        <b data-i18n="ft.company">Company</b>
        <a href="about.html" data-i18n="nav.about">About</a>
        <a href="contact.html" data-i18n="nav.contact">Contact</a>
        <a href="demo.html" data-i18n="ft.demo">Book demo</a>
      </div>
      <div class="footer-col">
        <b data-i18n="ft.legal">Legal</b>
        <a href="privacy.html" data-i18n="nav.privacy">Privacy</a>
        <a href="terms.html" data-i18n="nav.terms">Terms</a>
        <a data-mail-hello href="mailto:hello@pharmora.com">hello@pharmora.com</a>
        <a data-mail-support href="mailto:support@pharmora.com">support@pharmora.com</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="yr"></span> AG Technologies — <span data-i18n="ft.rights"></span></span>
    </div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  mountSiteFooter();

  document.querySelectorAll('a[data-tel]').forEach(a => a.href = 'tel:' + CONTACT.tel);
  document.querySelectorAll('a[data-mail]').forEach(a => a.href = 'mailto:' + CONTACT.email);
  document.querySelectorAll('a[data-mail-hello]').forEach(a => {
    a.href = 'mailto:' + CONTACT.email;
    a.textContent = CONTACT.email;
  });
  document.querySelectorAll('a[data-mail-support]').forEach(a => {
    a.href = 'mailto:' + CONTACT.support;
    a.textContent = CONTACT.support;
  });
  document.querySelectorAll('[data-tel-label]').forEach(el => el.textContent = '+20 102 319 6425');
  document.querySelectorAll('[data-mail-label]').forEach(el => el.textContent = CONTACT.email);

  applyTheme(currentTheme());
  applyLang(currentLang());

  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', toggleLang));
  document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', toggleTheme));
  document.querySelectorAll('#yr').forEach(el => el.textContent = new Date().getFullYear());

  const burger = document.querySelector('.nav-burger');
  const mnav = document.getElementById('mnav');
  if (burger && mnav) {
    burger.addEventListener('click', () => mnav.classList.toggle('open'));
    mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mnav.classList.remove('open')));
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const lb = document.getElementById('lightbox');
  if (lb) {
    const lbImg = lb.querySelector('img');
    document.querySelectorAll('.browser img, .shot img').forEach(img => {
      img.addEventListener('click', () => {
        lbImg.src = img.src;
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', () => lb.classList.remove('open'));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
  }

  const flip = document.querySelector('.flip-toggle');
  if (flip) {
    flip.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        flip.querySelectorAll('button').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        const mode = btn.dataset.mode;
        document.querySelectorAll('img[data-light]').forEach(img => {
          if (!img.dataset.dark) return;
          img.src = mode === 'light' ? img.dataset.light : img.dataset.dark;
        });
      });
    });
  }

  document.querySelectorAll('.band-feature').forEach(band => {
    const mainImg = band.querySelector('.band-main-img');
    const btns = band.querySelectorAll('.thumb-btn');
    const cap = document.getElementById('scrCap');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (btn.dataset.light) {
          mainImg.dataset.light = btn.dataset.light;
          mainImg.dataset.dark = btn.dataset.dark || btn.dataset.light;
        }
        const mode = document.querySelector('.flip-toggle button.on')?.dataset?.mode || 'light';
        const newSrc = mode === 'dark'
          ? (btn.dataset.dark || btn.dataset.light || btn.dataset.img)
          : (btn.dataset.light || btn.dataset.dark || btn.dataset.img);
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        }, 150);
        if (cap && btn.dataset.cap) {
          const dict = I18N[currentLang()];
          if (dict[btn.dataset.cap] !== undefined) cap.textContent = dict[btn.dataset.cap];
        }
      });
    });
  });

  const form = document.getElementById('leadForm');
  if (form) {
    const planSel = document.getElementById('f-plan');
    const urlPlan = new URLSearchParams(location.search).get('plan');
    if (planSel && urlPlan && [...planSel.options].some(o => o.value === urlPlan)) {
      planSel.value = urlPlan;
    }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const lang = currentLang();
      const name = document.getElementById('f-name').value.trim();
      const pharmacy = document.getElementById('f-pharmacy').value.trim();
      const phone = document.getElementById('f-phone').value.trim();
      const extra = (document.getElementById('f-msg')?.value || '').trim();
      const lines = lang === 'ar'
        ? ['مرحباً، عايز أحجز ديمو مجاني لـ Pharmora:', '', 'الاسم: ' + name, 'الصيدلية: ' + pharmacy, 'رقم التواصل: ' + phone]
        : ['Hello, I\'d like to book a free Pharmora demo:', '', 'Name: ' + name, 'Pharmacy: ' + pharmacy, 'Phone: ' + phone];
      if (planSel && planSel.value) {
        lines.push((lang === 'ar' ? 'الخطة: ' : 'Plan: ') + planSel.selectedOptions[0].textContent.trim());
      }
      if (extra) lines.push((lang === 'ar' ? 'ملاحظة: ' : 'Note: ') + extra);
      window.open('https://wa.me/' + CONTACT.wa + '?text=' + encodeURIComponent(lines.join('\n')), '_blank');
    });
  }

  const demoForm = document.getElementById('demoForm');
  if (demoForm) {
    demoForm.addEventListener('submit', e => {
      e.preventDefault();
      const lang = currentLang();
      const name = document.getElementById('d-name').value.trim();
      const pharmacy = document.getElementById('d-pharmacy').value.trim();
      const branches = document.getElementById('d-branches');
      const phone = document.getElementById('d-phone').value.trim();
      const time = (document.getElementById('d-time')?.value || '').trim();
      const lines = lang === 'ar'
        ? ['مرحباً، عايز أحجز ديمو مجاني لـ Pharmora:', '', 'الاسم: ' + name, 'الصيدلية: ' + pharmacy, 'عدد الفروع: ' + branches.selectedOptions[0].textContent.trim(), 'واتساب: ' + phone]
        : ['Hello, I\'d like to book a free Pharmora demo:', '', 'Name: ' + name, 'Pharmacy: ' + pharmacy, 'Branches: ' + branches.selectedOptions[0].textContent.trim(), 'WhatsApp: ' + phone];
      if (time) lines.push((lang === 'ar' ? 'الوقت المفضّل: ' : 'Preferred time: ') + time);
      window.open('https://wa.me/' + CONTACT.wa + '?text=' + encodeURIComponent(lines.join('\n')), '_blank');
    });
  }

  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const band = document.querySelector('.band-feature');
    if (!band) return;
    const btns = [...band.querySelectorAll('.thumb-btn')];
    if (btns.length < 2) return;
    let timer = null, userTookOver = false;
    const next = () => {
      const i = btns.findIndex(b => b.classList.contains('active'));
      btns[(i + 1) % btns.length].dispatchEvent(new Event('click', { bubbles: false }));
    };
    const start = () => { if (!userTookOver && !timer) timer = setInterval(next, 6000); };
    const stop = () => { clearInterval(timer); timer = null; };
    band.addEventListener('mouseenter', stop);
    band.addEventListener('mouseleave', start);
    band.addEventListener('focusin', stop);
    btns.forEach(b => b.addEventListener('click', e => { if (e.isTrusted) { userTookOver = true; stop(); } }));
    start();
  })();
});
