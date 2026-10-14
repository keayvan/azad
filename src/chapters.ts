// Short notes in my own words, one per chapter. They point to the idea; they do not replace the book.
export interface Chapter {
  n: number;
  en: [title: string, gist: string];
  fa: [title: string, gist: string];
}

export const CHAPTERS: Chapter[] = [
  {
    n: 1,
    en: ["The author's story", 'He smoked up to a hundred a day and failed many times, then found stopping easy once he saw why. Why his words can work for you too.'],
    fa: ['داستان نویسنده', 'او تا صد نخ در روز می‌کشید و بارها شکست خورد؛ بعد فهمید چرا و ترک آسان شد. دلیل اینکه حرفش برای تو هم کار می‌کند.'],
  },
  {
    n: 2,
    en: ['The easy method', 'Keep smoking until you finish. The aim is to start free and glad. Put the reasons aside and ask what smoking really does for you.'],
    fa: ['روش آسان', 'تا آخر کتاب بکش. هدف این است که از همان اول آزاد و خوشحال شروع کنی. دلیل‌ها را کنار بگذار و بپرس سیگار واقعاً چه کاری برایت می‌کند.'],
  },
  {
    n: 3,
    en: ['Why it feels hard', "It isn't willpower or habit. You believe you give up a pleasure or a crutch, and that fear is what makes it hard."],
    fa: ['چرا سخت به نظر می‌رسد', 'مسئله اراده یا عادت نیست. فکر می‌کنی لذت یا تکیه‌گاهی را از دست می‌دهی و همین ترس سختش می‌کند.'],
  },
  {
    n: 4,
    en: ['The trap', 'A trap with no bait: the first one tastes awful, so you think you can stop whenever. You only try when stressed, then call it the wrong time.'],
    fa: ['تله', 'تله‌ای بی‌طعمه: اولین سیگار بدمزه است، پس فکر می‌کنی هر وقت بخواهی ترک می‌کنی. فقط وقت استرس تلاش می‌کنی و بعد می‌گویی وقتش نبود.'],
  },
  {
    n: 5,
    en: ['Why we carry on', 'We start for foolish reasons. We go on because of two things, explained next: addiction and brainwashing.'],
    fa: ['چرا ادامه می‌دهیم', 'به دلیل‌های احمقانه شروع می‌کنیم. ادامه‌اش دو علت دارد که بعد می‌آید: اعتیاد و شست‌وشوی مغزی.'],
  },
  {
    n: 6,
    en: ['Nicotine addiction', "A fast-acting drug. The 'withdrawal' is a faint empty feeling like hunger. Each cigarette creates the need it then relieves."],
    fa: ['اعتیاد به نیکوتین', 'مادهٔ سریع‌اثر. «ترک» فقط یک حس خالی و ضعیف مثل گرسنگی است. هر سیگار نیازی را می‌سازد که بعد برطرفش می‌کند.'],
  },
  {
    n: 7,
    en: ['Brainwashing', "Society, ads and other smokers taught us cigarettes help. Stop saying 'give up': there is nothing to give up."],
    fa: ['شست‌وشوی مغزی', 'جامعه، تبلیغات و سیگاری‌های دیگر به ما یاد داده‌اند سیگار کمک می‌کند. دیگر نگو «دست کشیدن از سیگار»: چیزی برای از دست دادن نیست.'],
  },
  {
    n: 8,
    en: ['Easing the empty feeling', 'Smokers light up when stressed, bored, focusing or relaxing. Really they are easing the empty feeling.'],
    fa: ['فرو نشاندن حس خالی', 'سیگاری‌ها هنگام استرس، کسالت، تمرکز یا آرامش می‌کشند. در واقع دارند حس خالی را آرام می‌کنند.'],
  },
  {
    n: 9,
    en: ['Stress', 'The cigarette eases the discomfort it caused, so it seems to calm you. Over the years it wears your nerves down.'],
    fa: ['استرس', 'سیگار ناراحتی‌ای را که خودش ساخته آرام می‌کند و به نظر می‌رسد آرامت می‌کند. در طول سال‌ها اعصابت را فرسوده می‌کند.'],
  },
  {
    n: 10,
    en: ['Boredom', "Boredom is a state of mind. Smoking doesn't change it and adds sluggishness."],
    fa: ['کسالت', 'کسالت یک حالت ذهنی است. سیگار آن را عوض نمی‌کند و بی‌حالی هم اضافه می‌کند.'],
  },
  {
    n: 11,
    en: ['Concentration', "Cigarettes don't help focus. After quitting, doubt, not nicotine, is what spoils concentration."],
    fa: ['تمرکز', 'سیگار به تمرکز کمک نمی‌کند. بعد از ترک، شک است که تمرکز را خراب می‌کند، نه نیکوتین.'],
  },
  {
    n: 12,
    en: ['Relaxation', 'Nicotine is a stimulant. Smokers never fully relax; non-smokers relax without effort.'],
    fa: ['آرامش', 'نیکوتین محرک است. سیگاری‌ها هرگز کاملاً آرام نمی‌شوند؛ غیرسیگاری‌ها بی‌زحمت آرام‌اند.'],
  },
  {
    n: 13,
    en: ['Combination cigarettes', 'Parties, driving or cards mix several occasions. The occasion feels special, not the cigarette.'],
    fa: ['سیگارهای ترکیبی', 'مهمانی، رانندگی یا ورق‌بازی چند موقعیت را با هم دارند. آن موقعیت خاص است، نه سیگار.'],
  },
  {
    n: 14,
    en: ['What am I giving up?', 'Nothing. Cigarettes create the void rather than fill it. The big gains are confidence, freedom and no black shadows.'],
    fa: ['چه چیزی را از دست می‌دهم؟', 'هیچ‌چیز. سیگار خلأ را می‌سازد، پرش نمی‌کند. دستاوردهای بزرگ اعتماد به نفس، آزادی و رها شدن از سایه‌های سیاه است.'],
  },
  {
    n: 15,
    en: ['Self-imposed slavery', "Smokers spend life craving or wishing they weren't smoking. Non-smokers need no 'reward'."],
    fa: ['بردگی خودخواسته', 'سیگاری‌ها عمرشان را یا در ولع می‌گذرانند یا در آرزوی نکشیدن. غیرسیگاری «پاداش» نمی‌خواهد.'],
  },
  {
    n: 16,
    en: ['The money', 'Picture the lifetime cost. One cigarette restarts the chain, so remind yourself what it would cost.'],
    fa: ['پول', 'هزینهٔ تمام عمر را تصور کن. یک سیگار زنجیره را از نو شروع می‌کند، پس به خودت یادآوری کن چقدر تمام می‌شود.'],
  },
  {
    n: 17,
    en: ['Health', 'Smokers shut the risks out of their minds. The damage builds slowly, and many benefits show only after you stop.'],
    fa: ['سلامتی', 'سیگاری‌ها خطرها را از ذهن بیرون می‌کنند. آسیب کم‌کم جمع می‌شود و بسیاری از فایده‌ها بعد از ترک معلوم می‌شود.'],
  },
  {
    n: 18,
    en: ['Energy', 'The decline is so slow it feels normal. Energy comes back once you stop.'],
    fa: ['انرژی', 'افت آن‌قدر کند است که عادی به نظر می‌رسد. بعد از ترک انرژی برمی‌گردد.'],
  },
  {
    n: 19,
    en: ['Calm and confidence', 'The insecure feeling is caused by the drug. Confidence and calm return without it.'],
    fa: ['آرامش و اعتماد به نفس', 'حس ناامنی را خود ماده می‌سازد. بدون آن اعتماد به نفس و آرامش برمی‌گردد.'],
  },
  {
    n: 20,
    en: ['The black shadows', 'The hidden shame and fear smokers carry. Getting free brings self-respect.'],
    fa: ['سایه‌های سیاه', 'شرم و ترس پنهانی که سیگاری‌ها با خود دارند. آزاد شدن احترام به خود را برمی‌گرداند.'],
  },
  {
    n: 21,
    en: ['Advantages of smoking', 'A page left blank on purpose: there are none.'],
    fa: ['مزیت‌های سیگار', 'یک صفحهٔ عمداً خالی: هیچ مزیتی وجود ندارد.'],
  },
  {
    n: 22,
    en: ['The willpower method', 'Why quitting by willpower is miserable: you feel you sacrifice, wait for the urge to fade, and keep doubting.'],
    fa: ['روش اراده', 'چرا ترک با اراده عذاب‌آور است: حس فداکاری، منتظر محو شدن میل، و شک دائمی.'],
  },
  {
    n: 23,
    en: ['Beware of cutting down', "Cutting down makes every cigarette more precious and keeps the addiction going. It doesn't work."],
    fa: ['مراقب کم کردن باش', 'کم کردن هر سیگار را باارزش‌تر می‌کند و اعتیاد را زنده نگه می‌دارد. جواب نمی‌دهد.'],
  },
  {
    n: 24,
    en: ['Just one cigarette', "No such thing; it is a chain. Three basics: nothing to give up, never see the odd cigarette, nothing is different about you."],
    fa: ['فقط یک سیگار', 'چنین چیزی وجود ندارد؛ زنجیره است. سه اصل: چیزی را از دست نمی‌دهی، سیگار تک‌وتوک وجود ندارد، تو با بقیه فرقی نداری.'],
  },
  {
    n: 25,
    en: ['Casual smokers and others', "Don't envy casual smokers: they are hooked too, often harder."],
    fa: ['سیگاری‌های گاه‌به‌گاه و بقیه', 'به سیگاری‌های گاه‌به‌گاه حسرت نخور: آن‌ها هم گرفتارند، گاهی بیشتر.'],
  },
  {
    n: 26,
    en: ['The secret smoker', 'Smoking in secret costs self-respect and relationships, and feeds the feeling of deprivation.'],
    fa: ['سیگاری پنهانی', 'پنهانی کشیدن به احترام به خود و رابطه‌ها لطمه می‌زند و حس محرومیت را تقویت می‌کند.'],
  },
  {
    n: 27,
    en: ['A social habit?', "Smoking has flipped from cool to antisocial. Most smokers are heading out; don't be the last."],
    fa: ['عادت اجتماعی؟', 'سیگار از چیز باحال به چیز ضداجتماعی تبدیل شده. بیشترشان دارند می‌روند؛ آخری نباش.'],
  },
  {
    n: 28,
    en: ['Timing', "Don't wait for the right moment. Look ahead about three weeks, decide your time now, and keep smoking until you finish the book."],
    fa: ['زمان‌بندی', 'منتظر لحظهٔ مناسب نمان. حدود سه هفتهٔ آینده را نگاه کن، زمانت را همین الان مشخص کن و تا آخر کتاب بکش.'],
  },
  {
    n: 29,
    en: ['Will I miss it?', "No. The only danger is envying smokers. Remember there is no 'one cigarette', and they are the ones missing out."],
    fa: ['دلم برایش تنگ می‌شود؟', 'نه. تنها خطر حسادت به سیگاری‌هاست. یادت باشد «یک سیگار» وجود ندارد و محروم آن‌ها هستند.'],
  },
  {
    n: 30,
    en: ['Will I put on weight?', "Weight gain comes from swapping in snacks. Don't pick between meals."],
    fa: ['چاق می‌شوم؟', 'چاقی از جایگزین کردن خوراکی می‌آید. بین وعده‌ها نخور.'],
  },
  {
    n: 31,
    en: ['False incentives', 'Bets, bribes, pacts and saving for a treat all increase the feeling of sacrifice.'],
    fa: ['انگیزه‌های کاذب', 'شرط‌بندی، رشوه، قرارهای دسته‌جمعی و پس‌انداز برای هدیه، حس فداکاری را بیشتر می‌کنند.'],
  },
  {
    n: 32,
    en: ['The easy way to stop', "Two things: decide you will never smoke again, and don't mope; rejoice. Finish the book first. The three weeks are not a sentence to suffer."],
    fa: ['راه آسان ترک', 'دو کار: تصمیم بگیر دیگر هرگز نکشی، و غصه نخور؛ شاد باش. اول کتاب را تمام کن. سه هفته دورهٔ عذاب نیست.'],
  },
  {
    n: 33,
    en: ['The withdrawal period', "A faint empty feeling plus automatic triggers. Welcome the pangs as the monster dying, don't try to forget, never doubt."],
    fa: ['دورهٔ ترک', 'یک حس خالی ضعیف به‌علاوهٔ محرک‌های خودکار. حس را مرگ هیولا بدان، سعی نکن فراموش کنی، هرگز شک نکن.'],
  },
  {
    n: 34,
    en: ['Just one puff', 'One puff keeps both the little and the big monster alive.'],
    fa: ['فقط یک پک', 'یک پک هم هیولای کوچک و هم هیولای بزرگ را زنده نگه می‌دارد.'],
  },
  {
    n: 35,
    en: ['Will it be harder for me?', "Some jobs and moods feel harder, but with the right mindset they aren't."],
    fa: ['برای من سخت‌تر است؟', 'بعضی شغل‌ها و حال‌ها سخت‌تر به نظر می‌رسند، ولی با نگاه درست سخت نیستند.'],
  },
  {
    n: 36,
    en: ['Main reasons for failure', 'Failure comes from other smokers and bad days. Meet both with the same mindset.'],
    fa: ['دلایل اصلی شکست', 'شکست از دیگر سیگاری‌ها و روز بد می‌آید. هر دو را با همان نگاه جواب بده.'],
  },
  {
    n: 37,
    en: ['Substitutes', 'Use none, including nicotine products. They keep the real problem alive.'],
    fa: ['جایگزین‌ها', 'هیچ جایگزینی نه، از جمله محصولات نیکوتین. مشکل اصلی را زنده نگه می‌دارند.'],
  },
  {
    n: 38,
    en: ['Avoid temptation?', "Fear comes in two phases. Don't keep cigarettes. Avoid needless stress, but do go to social events."],
    fa: ['از وسوسه دوری کنم؟', 'ترس دو مرحله دارد. سیگار نگه نداری. از فشار بی‌دلیل دوری کن ولی به مناسبت‌های اجتماعی برو.'],
  },
  {
    n: 39,
    en: ['The moment of revelation', "A sudden clarity that usually comes within days to three weeks. Don't wait for it."],
    fa: ['لحظهٔ مکاشفه', 'یک روشنی ناگهانی که معمولاً چند روز تا سه هفته بعد می‌آید. منتظرش نمان.'],
  },
  {
    n: 40,
    en: ['The final cigarette', 'Check certainty and excitement, make the vow, smoke it consciously, put it out with joy. Seven points to stay free.'],
    fa: ['آخرین سیگار', 'اطمینان و هیجان را بسنج، قسم بخور، با حواس کامل بکش و با شادی خاموشش کن. هفت نکته برای آزاد ماندن.'],
  },
  {
    n: 41,
    en: ['A final warning', "People who find quitting easy may find starting again easy. Make 'never' a rule for life."],
    fa: ['هشدار پایانی', 'کسانی که ترک را آسان می‌یابند ممکن است شروع دوباره را هم آسان بیابند. «هرگز» را قاعدهٔ عمرت کن.'],
  },
  {
    n: 42,
    en: ['Feedback and checklist', 'Why people fail: fear, ignoring instructions, misunderstanding. A short checklist to hold on to.'],
    fa: ['بازخورد و چک‌لیست', 'چرا آدم‌ها شکست می‌خورند: ترس، نادیده گرفتن دستورها، سوءتفاهم. یک چک‌لیست کوتاه برای نگه داشتن.'],
  },
  {
    n: 43,
    en: ['Help the smoker left behind', "Don't belittle smokers. Show them how good freedom is."],
    fa: ['کمک به سیگاری‌ای که مانده', 'سیگاری را کوچک نکن. نشانش بده آزادی چه خوب است.'],
  },
  {
    n: 44,
    en: ['Advice to non-smokers', "How to help a smoker: don't force them, give praise, and support them through the first weeks."],
    fa: ['توصیه به غیرسیگاری‌ها', 'چطور به یک سیگاری کمک کنی: مجبورش نکن، تشویقش کن و هفته‌های اول کنارش باش.'],
  },
  {
    n: 45,
    en: ['Finale', "The author's call to end the tobacco scandal, and the final instructions."],
    fa: ['پایان‌بندی', 'دعوت نویسنده برای پایان دادن به ماجرای تنباکو، و دستورهای پایانی.'],
  },
];
