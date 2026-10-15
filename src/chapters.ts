// One paragraph per chapter, in my own words. They carry the main points; they do not replace the book.
export interface Chapter {
  n: number;
  en: [title: string, gist: string];
  fa: [title: string, gist: string];
}

export const CHAPTERS: Chapter[] = [
  {
    n: 1,
    en: [
      "The author's story",
      "The author smoked for thirty-three years, up to a hundred a day, and failed to quit many times; once he stayed off for six months and was still climbing the walls. His wife sent him to a hypnotherapist, and nothing seemed to happen, yet he stopped and even enjoyed the withdrawal. He says plainly that this happened in spite of the therapist, not because of him, and that it was no magic or trance. What mattered is that he then spent years working out why it had been so easy, and that understanding is the method. His conclusion: there is no such thing as a confirmed smoker, and only fear keeps people smoking. He names two ways it fails: not following the instructions (no cutting down, no substitutes) and not understanding, so question what society taught you, such as that smoking is a habit or that you enjoy it.",
    ],
    fa: [
      'داستان نویسنده',
      "نویسنده سی‌وسه سال سیگار کشید، تا صد نخ در روز، و بارها در ترک شکست خورد؛ یک بار شش ماه نکشید و باز هم بی‌قرار و بدبخت بود. همسرش او را پیش یک هیپنوتراپیست فرستاد و انگار هیچ اتفاقی نیفتاد، ولی ترک کرد و حتی از دورهٔ ترک لذت برد. صریح می‌گوید این با وجود درمانگر بود نه به‌خاطر او، و جادو یا خلسه‌ای در کار نبود. آنچه اهمیت داشت این بود که بعد سال‌ها وقت گذاشت بفهمد چرا این‌قدر آسان بود، و همان فهمیدن خودِ روش است. نتیجه‌اش: «سیگاریِ همیشگی» وجود ندارد و فقط ترس آدم‌ها را نگه می‌دارد. می‌گوید روش به دو دلیل شکست می‌خورد: دستورها اجرا نشوند (کم کردن و جایگزین ممنوع است) یا فهمیده نشوند؛ پس آنچه جامعه یادت داده، مثل «عادت است» یا «لذت می‌برم»، زیر سؤال ببر.",
    ],
  },
  {
    n: 2,
    en: [
      'The easy method',
      "The goal is to start the very first day feeling free and glad, not as if you were climbing a mountain. Keep smoking until you finish the book; you have nothing to lose by reading, and if you have already stopped a while, don't smoke as you read. The usual method, listing the downsides and gritting your teeth, fails because quitting is not the hard part; the weak moment on day two, ten or ten thousand is. Health scares make smokers light up, and every reason to quit adds a feeling of sacrifice. So the easy method first sets the reasons aside, asks what smoking really does for you and whether you enjoy it, and clears the illusions. Only then do health and money come back as extra help.",
    ],
    fa: [
      'روش آسان',
      'هدف این است که از روز اول احساس آزادی و شادی کنی، نه مثل کسی که دارد از کوه بالا می‌رود. تا آخر کتاب بکش؛ با خواندن چیزی از دست نمی‌دهی، و اگر چند وقت است نکشیده‌ای حین خواندن هم نکش. روش معمول، یعنی فهرست کردن ضررها و دندان روی جگر گذاشتن، شکست می‌خورد چون سخت‌ترین بخش ترک کردن نیست؛ لحظهٔ ضعف در روز دوم، دهم یا ده‌هزارم است. ترساندن از بیماری سیگاری را به سیگار می‌اندازد و هر دلیلِ ترک حس فداکاری می‌سازد. پس روش آسان اول دلیل‌ها را کنار می‌گذارد، می‌پرسد سیگار واقعاً چه کاری برایت می‌کند و آیا لذت می‌بری، و توهم‌ها را برمی‌دارد. بعد سلامتی و پول به‌عنوان کمک اضافه برمی‌گردند.',
    ],
  },
  {
    n: 3,
    en: [
      'Why it feels hard',
      "Every smoker would love to stop, and none would start again knowing what they know now. It isn't the physical withdrawal, which is very mild, and it isn't enjoyment, since smokers would smoke anything rather than nothing. Explanations like needing something for the hands or the mouth fall apart with one question: so why light it? It isn't habit either, because people drop habits easily, such as driving on the other side of the road abroad. It is nicotine addiction plus the belief that you are giving up a real pleasure or crutch. Add the huge lifetime cost and the self-contempt, and once you see all this you stop, and within three weeks you wonder why you ever did it.",
    ],
    fa: [
      'چرا سخت به نظر می‌رسد',
      'هر سیگاری دلش می‌خواهد ترک کند و هیچ‌کس با آنچه الان می‌داند دوباره شروع نمی‌کرد. علتش ترک جسمی نیست که خیلی ملایم است، و لذت هم نیست چون سیگاری حاضر است هر چیزی بکشد ولی نکشیدن را تحمل نمی‌کند. توضیح‌هایی مثل «دستم کار می‌خواهد» یا «دهانم» با یک سؤال می‌ریزد: پس چرا روشنش می‌کنی؟ عادت هم نیست، چون آدم‌ها عادت‌ها را راحت عوض می‌کنند، مثل رانندگی در سمت دیگر جاده در سفر. علت اعتیاد به نیکوتین است به‌علاوهٔ باور به اینکه لذتی یا تکیه‌گاهی واقعی را از دست می‌دهی. هزینهٔ سنگین تمام عمر و تحقیر خود را هم اضافه کن؛ وقتی این‌ها را ببینی ترک می‌کنی و ظرف سه هفته تعجب می‌کنی چرا سیگار می‌کشیدی.',
    ],
  },
  {
    n: 4,
    en: [
      'The trap',
      "Smoking is a trap with no bait. The adults around us warn us it is filthy and ruinous, yet we can't believe they aren't enjoying it, and the first cigarette tastes so bad that it reassures us we won't get hooked and can stop whenever we like. We even work hard to learn to inhale, for the sake of looking tough or sophisticated, and by the time the image is learned we wish we had never started. It is the one drug that works against what you took it for, and we spend the rest of our lives trying to explain to ourselves why we do it, telling our children not to, and trying to escape.\n\nThe trap is built so that we try to stop only when life is stressful, when health, money or social pressure weighs on us. The withdrawal adds more stress and our usual prop is gone, so after a few days we decide it was the wrong time and wait for a calm period that never arrives. We believe life gets more stressful with age, but that mixes up responsibility with stress: the most stressful years are childhood and adolescence, and it is smoking itself that makes us tenser. Even people who do quit, and most do at least once, can fall in again later, like wandering back into a maze. The author spent thirty-three years in it and compares it to a puzzle that is easy once you know the solution. He promises to lead you out if you follow the instructions in order, because one wrong turn makes the rest pointless, and he leaves out the scare facts you already know: the real question is why it is so hard to stop.",
    ],
    fa: [
      'تله',
      "سیگار تله‌ای بی‌طعمه است. بزرگ‌ترها به ما هشدار می‌دهند که کثیف و ویرانگر است، ولی باور نمی‌کنیم که لذت نمی‌برند، و اولین سیگار آن‌قدر بدمزه است که خیالمان را راحت می‌کند معتاد نمی‌شویم و هر وقت بخواهیم ترک می‌کنیم. حتی برای مرد سرسخت یا زن باوقار به نظر رسیدن سخت تلاش می‌کنیم پک عمیق یاد بگیریم، و تا تصویر را یاد بگیریم آرزو می‌کنیم کاش هرگز شروع نکرده بودیم. این تنها مادّه‌ای است که برخلاف چیزی عمل می‌کند که برایش مصرفش کرده‌ای؛ بقیهٔ عمر هم تلاش می‌کنیم برای خودمان توضیح بدهیم چرا می‌کشیم، به بچه‌هایمان می‌گوییم نکشند و دنبال راه فرار می‌گردیم.\n\nتله طوری ساخته شده که فقط در دورهٔ پراسترس ترک می‌کنیم، وقتی سلامتی، پول یا فشار اجتماعی رویمان سنگینی می‌کند. حس ترک استرس بیشتری اضافه می‌کند و تکیه‌گاه همیشگی هم نیست، پس بعد از چند روز می‌گوییم وقتش نبود و منتظر دورهٔ آرامی می‌مانیم که هرگز نمی‌رسد. فکر می‌کنیم زندگی با سن پراسترس‌تر می‌شود، ولی این مسئولیت را با استرس اشتباه می‌گیرد: پراسترس‌ترین سال‌ها کودکی و نوجوانی است و خود سیگار است که ما را کشیده‌تر می‌کند. حتی کسانی که ترک می‌کنند، و بیشتر آدم‌ها دست‌کم یک بار ترک می‌کنند، بعدها می‌توانند دوباره بیفتند، مثل برگشتن به یک پیچ‌درپیچ. نویسنده سی‌وسه سال در آن بود و آن را مثل معمایی می‌داند که وقتی راه‌حلش را بدانی آسان است. قول می‌دهد اگر دستورها را به ترتیب اجرا کنی از آن بیرونت ببرد، چون یک پیچ اشتباه بقیه را بی‌فایده می‌کند، و حقایق ترسناکی را که از قبل می‌دانی کنار می‌گذارد: سؤال واقعی این است که چرا ترک کردن این‌قدر سخت به نظر می‌رسد.",
    ],
  },
  {
    n: 5,
    en: [
      'Why we carry on',
      "We all start for silly reasons, usually pressure from other people, but why do we keep going once hooked? No smoker really knows, and if they did they would stop. Deep down smokers know they have been fooled, and since they are intelligent people they need a rational-sounding excuse. The real reason is the same for everyone and has two parts, nicotine addiction and brainwashing, which the next two chapters explain.",
    ],
    fa: [
      'چرا ادامه می‌دهیم',
      'همه با دلیل‌های احمقانه شروع می‌کنیم، معمولاً فشار دیگران، ولی چرا بعد از گیر افتادن ادامه می‌دهیم؟ هیچ سیگاری واقعاً نمی‌داند، و اگر می‌دانست ترک می‌کرد. ته دلشان می‌دانند فریب خورده‌اند، و چون آدم‌های باهوشی هستند به بهانه‌ای منطقی نیاز دارند. دلیل واقعی برای همه یکی است و دو بخش دارد، اعتیاد به نیکوتین و شست‌وشوی مغزی، که دو فصل بعد توضیح می‌دهند.',
    ],
  },
  {
    n: 6,
    en: [
      'Nicotine addiction',
      "Nicotine is the fastest-acting addictive drug known. Each puff delivers a dose, and the level in your blood halves within thirty minutes, which is why smokers average about twenty a day. The withdrawal is not pain but a faint, empty, restless feeling, like hunger for a poison, and lighting up ends it within seconds, which feels like relaxation. The real pleasure is only getting back to the calm you had before you were hooked, like the silence when a nagging noise stops. Eating and smoking look alike but are opposites: food relieves hunger and tastes good, while each cigarette causes the craving for the next. Smoking is drug addiction, not habit, and the body builds tolerance so the intake rises. The chemical hold is weak: most smokers sleep all night without it, and about 99 percent of the nicotine is gone in three weeks. What makes quitting hard is the brainwashing. It is never too late; the body recovers within weeks.",
    ],
    fa: [
      'اعتیاد به نیکوتین',
      'نیکوتین سریع‌اثرترین ماده‌ٔ اعتیادآور شناخته‌شده است. هر پک یک دوز می‌رساند و سطح خون ظرف سی دقیقه نصف می‌شود، برای همین سیگاری‌ها به‌طور متوسط حدود بیست نخ در روز می‌کشند. ترک درد نیست؛ یک حس خالی، ضعیف و بی‌قرار است مثل گرسنگی برای یک سم، و روشن کردن سیگار ظرف چند ثانیه آن را تمام می‌کند که شبیه آرامش حس می‌شود. لذت واقعی فقط برگشتن به همان آرامشی است که پیش از اعتیاد داشتی، مثل سکوتی که بعد از قطع شدن یک صدای آزاردهنده می‌آید. غذا خوردن و سیگار کشیدن شبیه‌اند ولی عکس هم‌اند: غذا گرسنگی را برطرف می‌کند و خوشمزه است، هر سیگار ولع سیگار بعدی را می‌سازد. سیگار اعتیاد است نه عادت، و بدن تحمل می‌سازد و مصرف بالا می‌رود. چنگ شیمیایی ضعیف است: بیشتر سیگاری‌ها شب‌ها بی‌سیگار می‌خوابند و حدود ۹۹٪ نیکوتین ظرف سه هفته می‌رود. سختی ترک از شست‌وشوی مغزی است. هیچ‌وقت دیر نیست؛ بدن ظرف چند هفته بهبود می‌یابد.',
    ],
  },
  {
    n: 7,
    en: [
      'Brainwashing',
      "From childhood our unconscious absorbs the message that cigarettes relax us and give courage: the condemned man's last request, the wounded soldier given one, film and ad imagery that still gets through despite the bans. Health campaigns don't undo this. The strongest force is the smoker himself, who needs to believe the habit is worth it, which is why everyone has an uncle who smoked forty a day and lived to eighty. Most smokers are strong-willed people under stress, not weak ones, and governments profit hugely. Build resistance by treating the claims like a used-car salesman's patter. Drop the phrase 'giving up', because it implies a sacrifice; say stopping, or escaping. It is the smoker who is being deprived, of health, energy, wealth, peace of mind, confidence, courage, self-respect and freedom.",
    ],
    fa: [
      'شست‌وشوی مغزی',
      'از کودکی ناخودآگاه ما این پیام را می‌گیرد که سیگار آرام می‌کند و شجاعت می‌دهد: آخرین خواستهٔ محکوم، سیگاری که به سرباز زخمی می‌دهند، و تصویرهای فیلم و تبلیغ که با وجود ممنوعیت‌ها هنوز می‌رسند. کمپین‌های سلامت این را خنثی نمی‌کنند. قوی‌ترین نیرو خود سیگاری است که باید باور کند این کار می‌ارزد، برای همین هر کسی عمویی دارد که روزی چهل نخ می‌کشید و هشتاد سال عمر کرد. بیشتر سیگاری‌ها آدم‌های سرسخت و پراسترس‌اند نه ضعیف، و دولت‌ها سود کلان می‌برند. مقاومت بساز؛ ادعاها را مثل چرب‌زبانی یک فروشندهٔ ماشین دست‌دوم بشنو. عبارت «ترک کردن به‌معنی دست کشیدن» را کنار بگذار چون فداکاری را القا می‌کند؛ بگو متوقف می‌شوم یا فرار می‌کنم. این سیگاری است که محروم می‌شود: از سلامتی، انرژی، ثروت، آرامش ذهن، اعتماد به نفس، شجاعت، احترام به خود و آزادی.',
    ],
  },
  {
    n: 8,
    en: [
      'Easing the empty feeling',
      "Smokers think they smoke for pleasure or a boost, but the real reason is easing the withdrawal feeling. In the early days a cigarette is a social prop you can take or leave, but the chain has already started, and the deeper you go the more it drags you down while seeming to help. You rarely notice, since it happens slowly, and many only discover they are hooked when they try to stop; some never admit it. The four occasions smokers reach for one are stress, boredom, concentration and relaxation, or a mix, covered in the next chapters.",
    ],
    fa: [
      'فرو نشاندن حس خالی',
      'سیگاری‌ها فکر می‌کنند برای لذت یا نیرو می‌کشند، ولی دلیل واقعی آرام کردن حس ترک است. در روزهای اول سیگار یک تکیه‌گاه اجتماعی است که می‌توانی داشته باشی یا نه، اما زنجیره شروع شده، و هرچه جلوتر می‌روی بیشتر پایین می‌کشدت در حالی که کمک به نظر می‌رسد. چون کند اتفاق می‌افتد کمتر متوجه می‌شوی، و بسیاری فقط هنگام تلاش برای ترک می‌فهمند معتادند؛ بعضی هم هرگز اعتراف نمی‌کنند. چهار موقعیتی که دست به سیگار می‌برند استرس، کسالت، تمرکز و آرامش‌اند، یا ترکیبی، که فصل‌های بعد می‌آید.',
    ],
  },
  {
    n: 9,
    en: [
      'Stress',
      "Take a stressful phone call: the smoker lights up and does feel better. What has happened is that the cigarette partly eases the withdrawal discomfort that was already there on top of the normal stress, so the total drops. The boost is real, but even while smoking you are more tense than a non-smoker would be, and the further you go the less it restores. Cigarettes wear down your nerves and courage over the years; the panic at running out late at night is caused by the drug, and non-smokers don't have it. One of the great gains of getting free is your confidence coming back.",
    ],
    fa: [
      'استرس',
      'یک تماس تلفنی پراسترس را در نظر بگیر: سیگاری سیگار روشن می‌کند و واقعاً بهتر می‌شود. در واقع سیگار ناراحتی ترکی را که از قبل روی استرس عادی بود تا حدی کم کرده و مجموع پایین آمده است. نیرو گرفتن واقعی است، ولی حتی حین کشیدن از غیرسیگاری پرتنش‌تری و هرچه جلوتر بروی کمتر جبران می‌کند. سیگار در طول سال‌ها اعصاب و شجاعتت را فرسوده می‌کند؛ هول کردن از تمام شدن سیگار آخر شب را خود ماده می‌سازد و غیرسیگاری‌ها ندارند. یکی از دستاوردهای بزرگ آزادی برگشتن اعتماد به نفس است.',
    ],
  },
  {
    n: 10,
    en: [
      'Boredom',
      "Boredom is a state of mind, and there is nothing interesting about a cigarette. When you are not smoking something is missing, and with nothing to occupy your mind you feed the craving; even lighting up becomes automatic, and you can only recall a few of the day's cigarettes. If anything, smoking adds boredom, because it makes you lethargic and keeps you lounging around. We're so used to being told it relieves boredom that nobody questions it; the same goes for the idea that chewing gum helps you relax, when it mostly gives you a reason to grind your teeth. Watch bored smokers: they still look bored.",
    ],
    fa: [
      'کسالت',
      'کسالت یک حالت ذهنی است و در سیگار هیچ چیز جالبی نیست. وقتی نمی‌کشی چیزی کم است، و اگر ذهنت مشغول نباشد ولع را تغذیه می‌کنی؛ حتی روشن کردن هم خودکار می‌شود و فقط چند سیگار روز یادت می‌ماند. اگر چیزی باشد سیگار کسالت را زیاد می‌کند چون بی‌حالت می‌کند و ولو شدن را ادامه می‌دهد. آن‌قدر شنیده‌ایم که کسالت را برطرف می‌کند که کسی سؤال نمی‌کند؛ مثل این باور که آدامس آرام می‌کند، در حالی که بیشتر بهانه‌ای برای ساییدن دندان است. سیگاری‌های کسل را نگاه کن: باز هم کسل به نظر می‌رسند.',
    ],
  },
  {
    n: 11,
    en: [
      'Concentration',
      "Cigarettes don't help concentration. The smoker already has the craving nagging at him, so when he needs to focus he lights up without thinking, eases it a little and gets on with the job, forgetting he smoked. Over time they harm focus: the craving is never fully satisfied, intake climbs, and clogged vessels starve the brain of oxygen. The concentration loss people feel after stopping comes from doubt, not nicotine; a mental block happens to everyone, and a smoker just gets on with it, but a new ex-smoker blames quitting and starts wondering whether to light up. The author passed accountancy exams not allowed to smoke and never even thought about it.",
    ],
    fa: [
      'تمرکز',
      'سیگار به تمرکز کمک نمی‌کند. سیگاری از قبل ولع آزارش می‌دهد، پس وقتی باید تمرکز کند بی‌فکر روشن می‌کند، کمی آرامش می‌گیرد، سراغ کار می‌رود و یادش می‌رود که کشید. در درازمدت تمرکز را خراب می‌کند: ولع هیچ‌وقت کامل برطرف نمی‌شود، مصرف بالا می‌رود و رگ‌های گرفته به مغز اکسیژن کم می‌رسانند. افت تمرکزی که بعد از ترک حس می‌شود از شک است نه نیکوتین؛ گیر کردن ذهن برای همه پیش می‌آید و سیگاری فقط ادامه می‌دهد، ولی تازه‌ترک‌کرده ترک را مقصر می‌داند و می‌پرسد روشن کنم یا نه. نویسنده در امتحان حسابداری که اجازهٔ سیگار نداشت قبول شد و حتی به آن فکر هم نکرد.',
    ],
  },
  {
    n: 12,
    en: [
      'Relaxation',
      "Most smokers think a cigarette relaxes them, but nicotine is a stimulant; take your pulse before and after two cigarettes and you'll see. After a meal a non-smoker is completely at ease, while the smoker still has another hunger to satisfy and thinks of the cigarette as the finishing touch. The nicotine addict can never be fully relaxed, and it gets worse with the years; the most tense people are chain-smoking executives with high blood pressure. The author thinks his irritability and temper with his children came from the little monster, not his character. Watch smokers when they can't smoke: they fidget with their hands, tap, clench their jaw. They have forgotten what real relaxation feels like.",
    ],
    fa: [
      'آرامش',
      'بیشتر سیگاری‌ها فکر می‌کنند سیگار آرامشان می‌کند، ولی نیکوتین محرک است؛ نبضت را قبل و بعد از دو سیگار بگیر. بعد از غذا غیرسیگاری کاملاً راحت است، ولی سیگاری هنوز گرسنگی دیگری دارد که باید سیرش کند و سیگار را حرف آخر می‌داند. معتاد نیکوتین هیچ‌وقت کاملاً آرام نمی‌شود و با سال‌ها بدتر می‌شود؛ پرتنش‌ترین آدم‌ها مدیران زنجیره‌کش با فشار خون بالا هستند. نویسنده فکر می‌کند بدخلقی‌اش با بچه‌ها از هیولای کوچک بود نه از شخصیتش. سیگاری‌ها را وقتی نمی‌توانند بکشند ببین: با دستشان ور می‌روند، پا می‌زنند، فک را سفت می‌کنند. یادشان رفته آرامش واقعی چه حسی دارد.',
    ],
  },
  {
    n: 13,
    en: [
      'Combination cigarettes',
      "A combination cigarette is one tied to two or more of the usual reasons, like a party or wedding that is both stressful and meant to be relaxing. Driving can bring in all four: relief after a tense appointment, stress and concentration at the wheel, and boredom in a jam. A card game does too, and everyone chain-smokes while nobody is enjoying it, and people often decide to quit the morning after. These are often the cigarettes we think we'll miss most, but the principle is the same: the cigarette just relieves the empty feeling. It is not the cigarette that is special but the occasion, and once the need is gone those occasions become more enjoyable and the stressful ones less stressful.",
    ],
    fa: [
      'سیگارهای ترکیبی',
      'سیگار ترکیبی سیگاری است که به دو یا چند دلیل معمول گره خورده، مثل مهمانی یا عروسی که هم پراسترس است و هم قرار است آرام‌بخش باشد. رانندگی می‌تواند هر چهار تا را داشته باشد: راحت شدن بعد از یک قرار پراسترس، استرس و تمرکز پشت فرمان و کسالت در ترافیک. بازی ورق هم همین‌طور است؛ همه زنجیره‌ای می‌کشند و هیچ‌کس لذت نمی‌برد و آدم‌ها اغلب صبح بعد تصمیم به ترک می‌گیرند. این‌ها معمولاً همان سیگارهایی‌اند که فکر می‌کنیم دلتنگشان می‌شویم، ولی اصل یکی است: سیگار فقط حس خالی را برطرف می‌کند. خاص بودن مال سیگار نیست، مال موقعیت است، و وقتی نیاز برود آن موقعیت‌ها لذت‌بخش‌تر و موقعیت‌های پراسترس کم‌استرس‌تر می‌شوند.',
    ],
  },
  {
    n: 14,
    en: [
      'What am I giving up?',
      "Absolutely nothing. What keeps people smoking is fear: of losing a pleasure or a prop, of enjoyable situations being spoiled, of not coping with stress. But cigarettes don't fill a void; they create it. They don't improve meals and social occasions, they spoil them, dulling taste and smell and sending smokers out between courses; nor do they give confidence, they take it away. The real gains go beyond health and money to the return of confidence and courage, freedom from slavery, and no longer living under the dark shadows of being looked down on and looking down on yourself. The cold-sore ointment analogy shows it: the ointment seems to cure but actually feeds the sore, so you only have to stop using it.",
    ],
    fa: [
      'چه چیزی را از دست می‌دهم؟',
      'مطلقاً هیچ‌چیز. آنچه سیگاری را نگه می‌دارد ترس است: از دست دادن لذت یا تکیه‌گاه، خراب شدن موقعیت‌های خوشایند، نتوانستن با استرس کنار آمدن. ولی سیگار خلأ را پر نمی‌کند؛ می‌سازد. غذا و مهمانی را بهتر نمی‌کند، خرابشان می‌کند: مزه و بو را کند می‌کند و سیگاری را بین دو غذا بیرون می‌فرستد؛ اعتماد به نفس هم نمی‌دهد، می‌گیرد. دستاوردهای واقعی فراتر از سلامتی و پول است: برگشتن اعتماد به نفس و شجاعت، رها شدن از بردگی، و دیگر زیر سایه‌های تاریک تحقیر دیگران و تحقیر خود زندگی نکردن. تمثیل مرهم زخم این را نشان می‌دهد: مرهم درمان به نظر می‌رسد ولی زخم را تغذیه می‌کند، پس فقط باید مصرفش را کنار بگذاری.',
    ],
  },
  {
    n: 15,
    en: [
      'Self-imposed slavery',
      "People try to quit mainly for health, money and social stigma, but part of the brainwashing is the sheer slavery. We fought to abolish slavery yet smokers choose it: when allowed to smoke they wish they weren't, and when they can't they are miserable. Most cigarettes are neither enjoyed nor even noticed, and one only feels precious after a gap, such as the first of the morning, or when bans or cutting down force a pause. Smokers huddle at events offering each other cigarettes as a little reward, but the non-smoker needs no reward and has the calm the smoker is chasing. The tremendous joy of being free is not spending half your life craving and the other half wishing you didn't. When you're with non-smokers it isn't they who deprive you but the little monster.",
    ],
    fa: [
      'بردگی خودخواسته',
      'آدم‌ها بیشتر برای سلامتی، پول و انگ اجتماعی ترک می‌کنند، ولی بخشی از شست‌وشوی مغزی همین بردگی خالص است. با بردگی جنگیدیم و حالا سیگاری آن را برمی‌گزیند: وقتی اجازه دارد آرزو می‌کند نمی‌کشید و وقتی نمی‌تواند بدبخت است. بیشتر سیگارها نه لذت‌بخش‌اند نه حتی متوجه‌شان می‌شویم، و فقط بعد از یک فاصله، مثل اولین سیگار صبح، یا وقتی ممنوعیت یا کم کردن مجبور به مکث می‌کند ارزشمند به نظر می‌رسد. سیگاری‌ها در مناسبت‌ها دور هم جمع می‌شوند و سیگار تعارف می‌کنند به‌عنوان پاداش کوچک، ولی غیرسیگاری پاداش نمی‌خواهد و همان آرامشی را دارد که سیگاری دنبالش است. شادی بزرگ آزادی این است که نیمی از عمرت را در ولع و نیم دیگر را در آرزوی نکشیدن نگذرانی. وقتی کنار غیرسیگاری‌ها هستی آن‌ها محرومت نمی‌کنند؛ هیولای کوچک می‌کند.',
    ],
  },
  {
    n: 16,
    en: [
      'The money',
      "Brainwashing makes smokers brush off the cost with 'it's only so much a week'. Over a lifetime a twenty-a-day smoker spends a fortune on something that wrecks their health, nerves and confidence. The author's challenge: pay me a small sum now and I'll supply free cigarettes for life. If it were a mortgage on those terms people would sign instantly, yet no smoker has ever accepted. Do the exercise yourself: estimate what you'd spend over the rest of your life. If you smoke that first cigarette after stopping, it costs you that whole amount, because it restarts the chain. Treat the saving like a prize cheque, and use the figure to resist a tempting cigarette in the first weeks.",
    ],
    fa: [
      'پول',
      'شست‌وشوی مغزی باعث می‌شود سیگاری هزینه را با «هفته‌ای فلان‌قدر است» کنار بزند. در تمام عمر یک سیگاریِ بیست‌نخی ثروتی خرج چیزی می‌کند که سلامت، اعصاب و اعتماد به نفسش را خراب می‌کند. چالش نویسنده: الان مبلغ کوچکی بده تا تا آخر عمر سیگار مجانی بدهم. اگر وام مسکن با این شرایط بود همه فوراً امضا می‌کردند، ولی هیچ سیگاری قبول نکرده. خودت این تمرین را انجام بده: برآورد کن تا آخر عمر چقدر خرج می‌کنی. اگر بعد از ترک اولین سیگار را بکشی همان مبلغ را برایت تمام می‌کند چون زنجیره از نو شروع می‌شود. صرفه‌جویی را مثل چک جایزه ببین و در هفته‌های اول از همین عدد برای مقاومت در برابر وسوسه استفاده کن.',
    ],
  },
  {
    n: 17,
    en: [
      'Health',
      "This is where brainwashing is strongest: smokers believe they know the risks but they don't, and shut them out because thinking about them kills even the illusion of enjoyment. A smoker's cough is the lungs trying to clear tar, so a smoker who doesn't cough isn't safer. Think of it as already happening rather than a mine you may or may not step on, with arteries clogging, oxygen being starved and the immune system worn down. The author found many benefits only after quitting: varicose veins, chest pains, bad nights, grey skin and more disappeared. He also points out that the risk is a fuse of unknown length, and every cigarette shortens it. This isn't shock treatment: if you're still in doubt, skip it and return later.",
    ],
    fa: [
      'سلامتی',
      'اینجا شست‌وشوی مغزی قوی‌ترین است: سیگاری‌ها فکر می‌کنند خطرها را می‌دانند ولی نمی‌دانند، و از ذهن بیرونشان می‌کنند چون فکر کردن به آن‌ها حتی توهم لذت را هم می‌کشد. سرفهٔ سیگاری تلاش ریه برای پاک کردن قطران است، پس سیگاری‌ای که سرفه نمی‌کند امن‌تر نیست. آن را اتفاقی در حال وقوع ببین، نه مینی که شاید رویش بروی یا نه: رگ‌ها دارند گرفته می‌شوند، اکسیژن کم می‌رسد و ایمنی فرسوده می‌شود. نویسنده خیلی از فایده‌ها را بعد از ترک فهمید: رگ‌های واریسی، درد قفسهٔ سینه، شب‌های بد، رنگ خاکستری پوست و چیزهای دیگر از بین رفتند. می‌گوید خطر فتیله‌ای با طول نامعلوم است و هر سیگار آن را کوتاه‌تر می‌کند. این درمان شوک نیست: اگر هنوز شک داری رد شو و بعداً برگرد.',
    ],
  },
  {
    n: 18,
    en: [
      'Energy',
      "The slow clogging of lungs and starving of organs of oxygen is gradual enough that we take the result for normal, much like the slow spread of a pot belly that would horrify us if it appeared overnight. Imagine waking up three weeks into stopping: you would feel healthier, more confident, more relaxed and able to concentrate, and you'd ask whether you had really sunk that low. The author was permanently tired for thirty years, then after stopping woke early full of energy and took up jogging and swimming. Recovery is also gradual, so you can't swap into your future self; use your imagination, because you already sense that it is true.",
    ],
    fa: [
      'انرژی',
      'گرفته شدن آهستهٔ ریه‌ها و گرسنگی اکسیژن اعضا آن‌قدر تدریجی است که نتیجه‌اش را عادی می‌گیریم، مثل شکمی که کم‌کم بزرگ می‌شود و اگر یک شبه پیدا می‌شد وحشت می‌کردیم. تصور کن سه هفته بعد از ترک از خواب بیدار می‌شوی: سالم‌تر، با اعتماد به نفس بیشتر، آرام‌تر و با تمرکز بهتر، و می‌پرسی واقعاً آن‌قدر پایین بوده‌ام؟ نویسنده سی سال دائم خسته بود و بعد از ترک زود بیدار می‌شد، پر از انرژی، و دویدن و شنا را شروع کرد. بهبودی هم تدریجی است و نمی‌توانی با خودِ آینده‌ات عوض شوی؛ از تخیلت کمک بگیر، چون از قبل حس می‌کنی درست است.',
    ],
  },
  {
    n: 19,
    en: [
      'Calm and confidence',
      "This is the worst fallacy of all, and for the author ranks with freedom as the greatest benefit of quitting. The insecure feeling smokers get when cigarettes run low is caused by the cigarette itself; non-smokers don't have it. Many gains only show months later: he had avoided medicals and hospitals for twenty-five years, feared getting old, and none of it did he connect to smoking. After quitting it was like waking from a bad dream. Bad things still happen, but he has the confidence to cope with them, and the good times feel better too.",
    ],
    fa: [
      'آرامش و اعتماد به نفس',
      'این بدترین توهم از همه است و برای نویسنده کنار آزادی بزرگ‌ترین دستاورد ترک. حس ناامنی‌ای که سیگاری وقتی سیگارش کم می‌شود دارد را خود سیگار می‌سازد؛ غیرسیگاری‌ها ندارند. بسیاری از دستاوردها ماه‌ها بعد معلوم می‌شود: او بیست‌وپنج سال از معاینه و بیمارستان فرار می‌کرد و از پیر شدن می‌ترسید و هیچ‌کدام را به سیگار ربط نمی‌داد. بعد از ترک مثل بیدار شدن از یک کابوس بود. چیزهای بد هنوز پیش می‌آید ولی اعتماد به نفس مقابله با آن‌ها را دارد و روزهای خوب هم بهتر می‌شوند.',
    ],
  },
  {
    n: 20,
    en: [
      'The black shadows',
      "Another great joy of quitting is being free of the sinister black shadows at the back of the mind. All smokers know deep down they have been fooled and shut their minds to the damage, spending ingenuity on finding any excuse to carry on. For the author, the biggest gain wasn't health, money or energy but the removal of those shadows, of feeling looked down on and apologetic to non-smokers, and above all being able to respect yourself again. Most smokers aren't the weak, spineless people society and they themselves assume; in every other part of life they are in control.",
    ],
    fa: [
      'سایه‌های سیاه',
      'یک شادی بزرگ دیگر ترک، رها شدن از سایه‌های شوم سیاه در پشت ذهن است. همهٔ سیگاری‌ها ته دل می‌دانند فریب خورده‌اند و ذهنشان را به آسیب می‌بندند و نبوغشان را صرف پیدا کردن هر بهانه‌ای برای ادامه می‌کنند. بزرگ‌ترین دستاورد برای نویسنده سلامتی، پول یا انرژی نبود، برداشته شدن همین سایه‌ها بود، حس تحقیر شدن و شرمندگی جلوی غیرسیگاری‌ها، و بالاتر از همه توانستن دوباره به خود احترام گذاشتن. بیشتر سیگاری‌ها آن آدم‌های ضعیف و بی‌اراده‌ای که جامعه و خودشان فکر می‌کنند نیستند؛ در بقیهٔ زندگی کنترل دارند.',
    ],
  },
  {
    n: 21,
    en: ['Advantages of smoking', 'A page left blank on purpose: there are none.'],
    fa: ['مزیت‌های سیگار', 'یک صفحهٔ عمداً خالی: هیچ مزیتی وجود ندارد.'],
  },
  {
    n: 22,
    en: [
      'The willpower method',
      "Stopping is easy; the willpower method makes it hard by forcing you to feel you are making a sacrifice. We start by experimenting, get hooked without deciding to, and believe we can stop whenever. Attempts begin at stressful moments over money or health, and then comes a triple blow: the pangs, no prop, and the stress. The result is a compromise like cutting down or waiting for a better time. Reasons for stopping fade after a few days as the lungs clear, while the little monster, unfed, sets the big monster off, and soon the smoker lists excuses to start again. The misery isn't withdrawal but doubt, waiting for something to happen that never does. About three weeks of abstinence removes the physical craving, but ex-smokers often light one to test it, and the nicotine starts the voice again. Those who succeed this way stay vulnerable and often drift back.",
    ],
    fa: [
      'روش اراده',
      'ترک کردن آسان است؛ روش اراده با واداشتن تو به حس فداکاری آن را سخت می‌کند. با آزمایش شروع می‌کنیم، بی‌آنکه تصمیم بگیریم معتاد می‌شویم و فکر می‌کنیم هر وقت بخواهیم ترک می‌کنیم. تلاش‌ها در لحظه‌های پراسترس بر سر پول یا سلامتی شروع می‌شود و بعد ضربهٔ سه‌گانه می‌آید: ترک، نبود تکیه‌گاه و استرس. نتیجه سازشی مثل کم کردن یا منتظر زمان بهتر ماندن است. دلیل‌های ترک بعد از چند روز که ریه‌ها پاک می‌شوند محو می‌شوند، در حالی که هیولای کوچکِ گرسنه هیولای بزرگ را راه می‌اندازد و سیگاری زود فهرست بهانه برای شروع دوباره می‌سازد. بدبختی از ترک نیست، از شک است و منتظر ماندن برای اتفاقی که هرگز نمی‌افتد. حدود سه هفته نکشیدن ولع جسمی را برمی‌دارد، ولی ترک‌کننده‌ها اغلب برای آزمایش یکی روشن می‌کنند و نیکوتین دوباره صدا را راه می‌اندازد. کسانی که این‌طور موفق می‌شوند آسیب‌پذیر می‌مانند و اغلب برمی‌گردند.',
    ],
  },
  {
    n: 23,
    en: [
      'Beware of cutting down',
      "Cutting down, even if doctors recommend it, is fatal as a stepping stone. You get the worst of all worlds: still addicted, wishing your life away waiting for the next one, and suffering withdrawal most of the time. Each cigarette becomes more precious because it's the ending of the craving, and the longer you wait, the more enjoyable it seems. The chemical hold is not the problem; smokers go all night without one. The real issue is the belief that the cigarette is a prop or reward, which cutting down only reinforces. The nature of addiction is to want more, so holding your intake takes willpower for life. The choice is cut down for life, choke yourself more, or stop. It also proves there is no odd cigarette: it is a chain.",
    ],
    fa: [
      'مراقب کم کردن باش',
      'کم کردن، حتی اگر پزشکان توصیه کنند، به‌عنوان پله‌ای برای ترک کشنده است. بدترین حالت را می‌گیری: هنوز معتادی، عمرت را در انتظار سیگار بعدی تلف می‌کنی و بیشتر وقت‌ها در ترک رنج می‌بری. هر سیگار باارزش‌تر می‌شود چون پایان ولع است، و هرچه بیشتر صبر کنی لذت‌بخش‌تر به نظر می‌رسد. چنگ شیمیایی مشکل نیست؛ سیگاری‌ها تمام شب بی‌سیگارند. مشکل واقعی باور به تکیه‌گاه یا پاداش بودن سیگار است که کم کردن فقط تقویتش می‌کند. ماهیت اعتیاد خواستن بیشتر است، پس نگه داشتن مصرف تا آخر عمر اراده می‌خواهد. انتخاب این است: تا آخر عمر کم کردن، بیشتر خفه کردن خود، یا ترک. همین نشان می‌دهد سیگارِ تک‌وتوک وجود ندارد: زنجیره است.',
    ],
  },
  {
    n: 24,
    en: [
      'Just one cigarette',
      "'Just one' is a myth to get out of your mind. It starts us off, it defeats most attempts to stop, and it is what sends successful ex-smokers back into the trap, sometimes to prove they no longer need one; it tastes horrible and convinces them they won't be hooked again, but they already are. Treat it as a chain reaction for life, and get into the habit of never imagining the odd cigarette; you wouldn't take cyanide because you liked the taste of almonds. Ask a smoker whether they would start again if they could go back and the answer is no, and yet they have that choice daily; fear stops them. Three fundamentals so far: there is nothing to give up, there is no odd cigarette, and there is nothing different about you. There are no confirmed smokers or addictive personalities, only the drug.",
    ],
    fa: [
      'فقط یک سیگار',
      '«فقط یکی» افسانه‌ای است که باید از ذهنت بیرونش کنی. ما را شروع می‌کند، بیشتر تلاش‌ها را می‌شکند و ترک‌کننده‌های موفق را به تله برمی‌گرداند، گاهی برای ثابت کردن اینکه دیگر نیازی ندارند؛ بدمزه است و قانعشان می‌کند دوباره معتاد نمی‌شوند، ولی از قبل شده‌اند. آن را زنجیره‌ای برای تمام عمر ببین و عادت کن هرگز سیگارِ تک‌وتوک تصور نکنی؛ سیانور را هم به این دلیل که طعم بادام دارد نمی‌خوری. از سیگاری بپرس اگر می‌توانست به قبل از اعتیاد برگردد دوباره شروع می‌کرد؟ می‌گوید نه، در حالی که هر روز همین انتخاب را دارد؛ ترس نگهش می‌دارد. تا اینجا سه اصل: چیزی را از دست نمی‌دهی، سیگار تک‌وتوک وجود ندارد و تو با بقیه فرقی نداری. سیگاریِ همیشگی یا شخصیت معتاد وجود ندارد، فقط ماده هست.',
    ],
  },
  {
    n: 25,
    en: [
      'Casual smokers and others',
      "Heavy smokers envy casual ones, but no smoker chose to become a smoker, all feel foolish, and all lie to themselves and others. Boasting how little you smoke makes no sense; if you enjoy something you don't brag about doing it less, and 'I can go all week without' really means 'I just survived a week', which makes the next one precious. Casual smokers are in effect more hooked than heavy ones, with less reason to quit. Heavy smokers are held back from chain-smoking only by money, health and discipline. The five-a-day, morning-only, six-months-on-six-off, special-occasion and occasional-cigar smokers are all still feeding the monster, and cutting down proves the worst torture. Even a rare person holding steady at two a day is miserable in the hours between. Teenagers are hard to reach since they don't think they're hooked, and parents shouldn't count on dislike of the smell or scare campaigns.",
    ],
    fa: [
      'سیگاری‌های گاه‌به‌گاه و بقیه',
      'سیگاری‌های سنگین به گاه‌به‌گاه‌ها حسرت می‌خورند، ولی هیچ سیگاری انتخاب نکرده سیگاری شود، همه احساس حماقت می‌کنند و همه به خود و دیگران دروغ می‌گویند. لاف زدن که کم می‌کشی معنا ندارد؛ از چیزی که لذت می‌بری لاف نمی‌زنی که کمتر انجامش می‌دهی، و «می‌توانم یک هفته نکشم» یعنی «یک هفته را به‌زور تاب آوردم» که سیگار بعدی را گران‌بها می‌کند. سیگاری‌های گاه‌به‌گاه عملاً بیشتر از سنگین‌ها گرفتارند، با انگیزهٔ کمتر برای ترک. سیگاری‌های سنگین را فقط پول، سلامتی و انضباط از زنجیره‌ای کشیدن باز می‌دارد. پنج‌نخی‌ها، فقط‌صبح‌ها، شش‌ماه‌ترک‌شش‌ماه‌سیگار، مناسبتی‌ها و سیگار-تک‌وتوک‌ها همه هنوز هیولا را تغذیه می‌کنند و کم کردن بدترین شکنجه است. حتی آدم نادری که روی دو نخ در روز می‌ماند ساعت‌های بین آن‌ها بدبخت است. نوجوان‌ها سخت پیش می‌روند چون فکر نمی‌کنند معتادند، و والدین نباید روی بیزاری از بو یا کمپین‌های ترساندن حساب کنند.',
    ],
  },
  {
    n: 26,
    en: [
      'The secret smoker',
      "Secret smoking is grouped with casual smoking, but its effects are so damaging it needs its own chapter: it can end personal relationships, and it nearly cost the author his marriage. He had quit for three weeks, got into an argument that he later saw he had provoked as an excuse, started again, and hid it from his wife, with escapes to the garage, fear of being found out and the final shame. The worst part is it reinforces the belief that you're deprived and costs self-respect, since an honest person is forced to deceive family and friends. It probably has happened to you in some form.",
    ],
    fa: [
      'سیگاری پنهانی',
      'سیگار پنهانی را کنار گاه‌به‌گاه‌ها می‌آورند، ولی آسیبش آن‌قدر زیاد است که فصل جدا می‌خواهد: می‌تواند رابطه‌ها را از هم بپاشد و نزدیک بود زندگی مشترک نویسنده را بگیرد. او سه هفته ترک کرده بود، دعوایی کرد که بعدها فهمید برای بهانه خودش راه انداخته، دوباره شروع کرد و از همسرش پنهان کرد، با فرار به گاراژ، ترس از لو رفتن و شرمندگی آخر. بدترین قسمتش این است که باور محرومیت را تقویت می‌کند و به احترام به خود لطمه می‌زند، چون آدم صادقی را وامی‌دارد به خانواده و دوستان دروغ بگوید. احتمالاً به شکلی برای تو هم پیش آمده.',
    ],
  },
  {
    n: 27,
    en: [
      'A social habit?',
      "Over fifteen million British ex-smokers exist mainly because of a social revolution. Health and money were always reasons to stop; the only valid plus smoking ever had was social acceptance, and that has turned to its opposite: today smoking is seen even by smokers as antisocial. Once the tough man smoked; now the strong person doesn't depend on a drug. Smokers apologise, hide ash, avoid lighting up between courses and look around for disapproval, and as more leave the sinking ship, those left fear being the last. The author's advice is not to be that last one.",
    ],
    fa: [
      'عادت اجتماعی؟',
      'بیش از پانزده میلیون ترک‌کردهٔ بریتانیایی عمدتاً به‌خاطر یک انقلاب اجتماعی وجود دارند. سلامتی و پول همیشه دلیل ترک بودند؛ تنها مزیت واقعی سیگار پذیرفته بودنش در جمع بود و حالا برعکس شده: امروز خود سیگاری‌ها هم آن را ضداجتماعی می‌دانند. قبلاً مرد سرسخت می‌کشید؛ حالا آدم قوی به ماده‌ای وابسته نیست. سیگاری‌ها عذرخواهی می‌کنند، خاکستر را پنهان می‌کنند، بین دو غذا روشن نمی‌کنند و دنبال نگاه ناخشنود دور و برشان می‌گردند، و هرچه بیشتر کشتی در حال غرق را ترک می‌کنند، آن‌هایی که مانده‌اند می‌ترسند آخری باشند. توصیهٔ نویسنده این است که آن آخری نباشی.',
    ],
  },
  {
    n: 28,
    en: [
      'Timing',
      "Besides the obvious fact that now is the right time, timing matters. Identify when smoking seems important to you, look ahead roughly three weeks for events that could derail you, like a wedding or Christmas, and anticipate them without feeling deprived. Don't cut down meanwhile, and don't say 'not now, later'; work out your timetable now and look forward to it. The author admits the instruction to keep smoking while reading frustrates him, but also says it is the real beauty of the method, because you clear your fears first and are a non-smoker the moment you stop. He then revises his own old advice about waiting for a slack period: the easiest way is to pick the hardest time and dive in, but a rule like that would make people never start. The trap is believing it will be easier tomorrow; with an addiction it only gets worse, and our lives are less stressful than we think.",
    ],
    fa: [
      'زمان‌بندی',
      'جدا از اینکه واضح است همین الان زمان مناسب است، زمان‌بندی اهمیت دارد. موقعی را که سیگار برایت مهم به نظر می‌رسد مشخص کن، حدود سه هفتهٔ آینده را برای رویدادهایی که می‌توانند به‌هم‌ات بریزند، مثل عروسی یا عید، نگاه کن و بدون حس محرومیت پیش‌بینی‌شان کن. در این فاصله کم نکن و نگو «نه حالا، بعداً»؛ جدولت را همین الان بنویس و منتظرش باش. نویسنده اعتراف می‌کند دستور «حین خواندن بکش» آزارش می‌دهد، ولی می‌گوید زیبایی واقعی روش همین است، چون اول ترس‌ها را برمی‌داری و لحظه‌ای که خاموش کنی غیرسیگاری هستی. بعد توصیهٔ قدیمی‌اش دربارهٔ انتظار برای دوران کم‌کار را اصلاح می‌کند: راحت‌ترین راه انتخاب سخت‌ترین زمان و پریدن وسط آب است، ولی اگر این را دستور می‌کرد آدم‌ها اصلاً شروع نمی‌کردند. تله باور به این است که فردا آسان‌تر است؛ در اعتیاد فقط بدتر می‌شود و زندگی ما کم‌استرس‌تر از چیزی است که فکر می‌کنیم.',
    ],
  },
  {
    n: 29,
    en: [
      'Will I miss it?',
      "No. Once the little monster is dead and the brainwashing gone, you will cope with stress and enjoy the good times fully. The only danger is the influence of smokers still around: the grass looks greener, especially after a meal when someone lights up and the ex-smoker feels a pang. Two reasons explain it. One is the 'just one' myth, so look at the smoker's side: he has to carry on the chain next morning and every day, paying through the nose and living with black shadows, and he envies you. The second is that someone is doing something and you are not, so you feel deprived. Get it clear that the smoker is the one deprived, of health, energy, money, confidence, peace of mind, courage, tranquillity, freedom and self-respect. Pity them, don't envy.",
    ],
    fa: [
      'دلم برایش تنگ می‌شود؟',
      'نه. وقتی هیولای کوچک بمیرد و شست‌وشوی مغزی برود، با استرس کنار می‌آیی و از روزهای خوب کامل لذت می‌بری. تنها خطر تأثیر سیگاری‌هایی است که هنوز دور و برت‌اند: علف همسایه سبزتر به نظر می‌رسد، مخصوصاً بعد از غذا وقتی کسی روشن می‌کند و ترک‌کننده دلش ضعف می‌رود. دو علت دارد. یکی افسانهٔ «فقط یکی» است؛ پس از سمت سیگاری ببین: فردا صبح و هر روز باید زنجیره را ادامه دهد، پول بدهد و با سایه‌های سیاه زندگی کند، و به تو حسرت می‌خورد. دومی اینکه کسی کاری می‌کند و تو نه، پس حس محرومیت می‌کنی. روشن کن که محروم سیگاری است، از سلامتی، انرژی، پول، اعتماد به نفس، آرامش ذهن، شجاعت، آسودگی، آزادی و احترام به خود. دلسوزی کن، حسادت نه.',
    ],
  },
  {
    n: 30,
    en: [
      'Will I put on weight?',
      "That is another myth, spread by smokers who tried the willpower method and swapped in sweets. The withdrawal feeling is easily confused with hunger, but food can't satisfy it, whereas nicotine never fully does either. Smokers are left with a permanent hunger, which is why many turn to overeating, drinking or harder drugs. The author cut out breakfast and lunch and chain-smoked in the day, picking at food in the evening, and was two stone heavier than he is now. Once the monster leaves, confidence comes back and with it control over eating. Weight gain comes from substitutes, which make quitting harder; if you follow the instructions it shouldn't be a problem.",
    ],
    fa: [
      'چاق می‌شوم؟',
      'این هم افسانهٔ دیگری است که سیگاری‌های روش اراده با جایگزین کردن شیرینی پخش کرده‌اند. حس ترک را به راحتی با گرسنگی اشتباه می‌گیرند، ولی غذا آن را سیر نمی‌کند، همان‌طور که نیکوتین هم کاملاً سیرش نمی‌کند. سیگاری‌ها با گرسنگی دائمی می‌مانند، برای همین خیلی‌ها سراغ پرخوری، نوشیدن یا مواد سنگین‌تر می‌روند. نویسنده صبحانه و ناهار را کنار گذاشته بود، روز زنجیره‌ای می‌کشید و شب‌ها دانه‌دانه غذا می‌خورد و دو استون (حدود ۱۳ کیلو) سنگین‌تر از الان بود. وقتی هیولا برود اعتماد به نفس برمی‌گردد و با آن کنترل بر خوردن. چاقی از جایگزین‌ها می‌آید که ترک را سخت‌تر می‌کنند؛ اگر دستورها را اجرا کنی نباید مشکل شود.',
    ],
  },
  {
    n: 31,
    en: [
      'False incentives',
      "Smokers on the willpower method try to build motivation with false incentives, like 'we'll have a lovely holiday on what I save' or 'I'll afford a better car'. They make the sacrifice feel bigger, make the cigarette seem even more precious, and the novelty wears off. Office and family pacts have flaws too: they create extra pressure, a 'rotten apple' where one failure gives everyone an excuse, and 'sharing the credit' removes the boost you'd get doing it alone. Bribes and bets, like a note burned in a cigarette packet, don't help either. If the lifetime cost and the risk of serious disease can't stop you, a few phony incentives won't. Keep looking at the other side of the tug of war: what is smoking doing for me? Nothing. Why do I need it? I don't.",
    ],
    fa: [
      'انگیزه‌های کاذب',
      'سیگاری‌های روش اراده می‌کوشند با انگیزه‌های کاذب انگیزه بسازند، مثل «با پول پس‌انداز یک تعطیلات عالی می‌رویم» یا «ماشین بهتر می‌خرم». این‌ها فداکاری را بزرگ‌تر حس می‌کنند، سیگار را باارزش‌تر نشان می‌دهند و تازگی‌شان کم‌کم می‌رود. قرارهای اداره و خانواده هم عیب دارند: فشار اضافه می‌سازند، «سیب گندیده» که شکست یک نفر برای همه بهانه می‌شود، و «سهیم شدن در افتخار» انگیزهٔ تنها انجام دادن را می‌گیرد. رشوه و شرط، مثل اسکناسی که در پاکت سیگار می‌گذارند، هم جواب نمی‌دهد. اگر هزینهٔ تمام عمر و خطر بیماری‌های جدی تو را متوقف نمی‌کنند، چند انگیزهٔ ساختگی هم نمی‌کنند. به طرف دیگر طناب‌کشی نگاه کن: سیگار برایم چه می‌کند؟ هیچ. چرا لازمش دارم؟ لازمش ندارم.',
    ],
  },
  {
    n: 32,
    en: [
      'The easy way to stop',
      "It is ridiculously easy to stop if you do two things: decide you are never going to smoke again, and don't mope; rejoice. The rest of the book exists because without understanding the trap you'd have changed your mind sooner or later. The author's own final attempt differed because he was certain; he analysed his feelings while smoking, looked at non-smokers and ex-smokers, and told himself that whether he liked it or not he had smoked his last. Five key points: you can do it, there's nothing to give up, there's no such thing as one cigarette, smoking is a disease that only gets worse, and you separate the drug from the frame of mind of being a smoker. If you feel doom and gloom, something hasn't clicked, you fear failing, or you agree but are still miserable. Two warnings: finish the book before you stop, and don't read 'three weeks' as a sentence to suffer or as a point at which something suddenly happens.",
    ],
    fa: [
      'راه آسان ترک',
      'اگر دو کار بکنی ترک به‌طرز مضحکی آسان است: تصمیم بگیر دیگر هرگز نکشی، و غصه نخور؛ شاد باش. بقیهٔ کتاب برای این است که بدون فهمیدن تله، دیر یا زود نظرت را عوض می‌کردی. تلاش آخر خود نویسنده فرق داشت چون مطمئن بود؛ حس‌هایش را حین کشیدن تحلیل کرد، به غیرسیگاری‌ها و ترک‌کرده‌ها نگاه کرد و به خودش گفت خوشت بیاید یا نه آخرین سیگارت را کشیده‌ای. پنج نکتهٔ کلیدی: می‌توانی، چیزی از دست نمی‌دهی، «یک سیگار» وجود ندارد، سیگار بیماری‌ای است که فقط بدتر می‌شود، و ماده را از قالب ذهنی سیگاری بودن جدا می‌کنی. اگر حس غم و ترس داری، چیزی جا نیفتاده، از شکست می‌ترسی، یا با همه‌چیز موافقی ولی هنوز بدبختی. دو هشدار: پیش از ترک کتاب را تمام کن، و «سه هفته» را نه حکم رنج بدان نه نقطه‌ای که ناگهان اتفاقی می‌افتد.',
    ],
  },
  {
    n: 33,
    en: [
      'The withdrawal period',
      "For up to three weeks you may feel two separate things: the nicotine withdrawal, an empty, insecure feeling like hunger, and the psychological triggers, like a phone call or a meal with friends, like putting your hand on the old indicator lever after changing cars. The failure to tell these apart makes the willpower method so hard. No physical pain, so don't underestimate it but treat it with the right mindset. Meals and social occasions are common triggers, and the cigarette is not a sugar pill: it creates the symptoms it relieves. When the pang comes, accept it and say: I know what it is, it's what smokers suffer all their lives, and I'm purging this evil from my body. Make a game of starving the monster, don't try to forget about smoking, which would make you obsess, and don't doubt your decision. Remind yourself of your reasons, and know that every moment is a moment nearer to your goal.",
    ],
    fa: [
      'دورهٔ ترک',
      'تا سه هفته ممکن است دو چیز جدا حس کنی: ترک نیکوتین، یک حس خالی و ناامن مثل گرسنگی، و محرک‌های روانی مثل تلفن یا غذا با دوستان، مثل وقتی بعد از عوض کردن ماشین دست به اهرم راهنمای قدیمی می‌بری. نشناختن این دو از هم است که روش اراده را آن‌قدر سخت می‌کند. درد جسمی نیست، پس دست‌کمش نگیر ولی با نگاه درست برخورد کن. غذا و مناسبت‌های اجتماعی محرک‌های رایج‌اند، و سیگار قرص قند نیست: علائمی را که برطرف می‌کند خودش می‌سازد. وقتی حس آمد بپذیرش و بگو: می‌دانم چیست، همان است که سیگاری‌ها تمام عمر می‌کشند، و دارم این شر را از بدنم بیرون می‌ریزم. گرسنه نگه داشتن هیولا را مثل یک بازی ببین، سعی نکن سیگار را فراموش کنی چون وسواس می‌شود، و در تصمیمت شک نکن. دلیل‌هایت را یادآوری کن و بدان هر لحظه یک لحظه به هدفت نزدیک‌تری.',
    ],
  },
  {
    n: 34,
    en: [
      'Just one puff',
      "This undoes many who try the willpower method: three or four days in, they have a puff or one cigarette to tide them over, not realising what it does to their morale. It usually tastes bad and gives conscious minds a boost, thinking 'good, I'm losing the urge', but the reverse is true: cigarettes were never enjoyable, and you smoked only to feed the monster. After days starved, that fix registers in the subconscious and undermines your preparation. A puff has two damaging effects: it keeps the little monster alive in the body and, worse, the big monster alive in the mind, and if you had the last puff, it's easier to have the next. Remember that one cigarette is how people get into smoking.",
    ],
    fa: [
      'فقط یک پک',
      'این چیزی است که بسیاری از ترک‌کننده‌های روش اراده را از پا درمی‌آورد: سه چهار روز می‌گذرد و برای سر کردن یک پک یا یک سیگار می‌کشند و نمی‌دانند چه ضربه‌ای به روحیه‌شان می‌زند. معمولاً بدمزه است و ذهن خودآگاه را تقویت می‌کند که «خوب شد، دارم میلم را از دست می‌دهم»، ولی برعکس است: سیگار هیچ‌وقت لذت‌بخش نبود و فقط برای تغذیهٔ هیولا می‌کشیدی. بعد از روزها گرسنگی، آن دوز در ناخودآگاه ثبت می‌شود و آمادگی‌ات را سست می‌کند. یک پک دو اثر مخرب دارد: هیولای کوچک را در بدن زنده نگه می‌دارد و بدتر، هیولای بزرگ را در ذهن، و اگر پک آخر را کشیده باشی، پک بعدی راحت‌تر است. یادت باشد یک سیگار همان چیزی است که آدم‌ها را به سیگار می‌کشاند.',
    ],
  },
  {
    n: 35,
    en: [
      'Will it be harder for me?',
      "Countless factors decide how easily each smoker quits: character, type of work, circumstances, timing. Certain professions may seem harder, but with the brainwashing removed they needn't be. Doctors find it especially hard: fear of health risks is itself a trigger, work is very stressful, guilt about setting an example adds pressure, and their cigarette at a hard-earned break becomes precious. Boredom combined with stress, such as drivers or parents with small children, can also seem hard, and during the willpower method there are long stretches to mope over the loss. Both are overcome by the right frame of mind: rejoice at ridding yourself of the monster. Any smoker, whatever age, sex, intelligence or profession, can find it easy and enjoyable provided they follow all the instructions.",
    ],
    fa: [
      'برای من سخت‌تر است؟',
      'عوامل بی‌شماری تعیین می‌کنند هر سیگاری چقدر راحت ترک کند: شخصیت، نوع کار، شرایط، زمان‌بندی. بعضی شغل‌ها سخت‌تر به نظر می‌رسند، ولی با برداشته شدن شست‌وشوی مغزی لازم نیست این‌طور باشد. ترک برای پزشکان به‌ویژه سخت است: ترس دائمی از خطرهای سلامتی خود محرک است، کارشان بسیار پراسترس است، گناه الگو نبودن فشار می‌آورد و سیگار وقفهٔ به‌سختی به‌دست‌آمده‌شان گران‌بها می‌شود. کسالت به‌همراه استرس، مثل رانندگان یا والدین کودکان کوچک، هم سخت به نظر می‌رسد، و در روش اراده وقت زیادی برای غصهٔ از دست دادن دارند. هر دو با نگاه درست رفع می‌شوند: از رها شدن از هیولا شاد باش. هر سیگاری، با هر سن، جنس، هوش یا شغل، می‌تواند آسان و لذت‌بخش ترک کند به شرطی که همهٔ دستورها را اجرا کند.',
    ],
  },
  {
    n: 36,
    en: [
      'Main reasons for failure',
      "There are two main reasons for failure. The first is the influence of other smokers: at a weak moment or a social occasion someone lights up, so use that moment to remember there is no such thing as one cigarette, rejoice at breaking the chain, and feel sorry for the smoker, who envies you. The second is having a bad day; there are good and bad days for everyone, and under the willpower method the smoker longs for a cigarette on a bad day and only makes it worse. If a bad day comes, take it on the chin, remember you had bad days as a smoker, and tell yourself that smoking won't cure it, tomorrow will be better and you have the bonus of freedom. After stopping, people blame everything on quitting, but the cigarette never solved the problem and you'd be more miserable if you smoked. A positive mental approach is essential, always.",
    ],
    fa: [
      'دلایل اصلی شکست',
      'دو دلیل اصلی برای شکست هست. اول تأثیر سیگاری‌های دیگر: در لحظهٔ ضعف یا مناسبت اجتماعی کسی روشن می‌کند، پس از آن لحظه استفاده کن تا یادت بیاید «یک سیگار» وجود ندارد، از شکستن زنجیره شاد باش و برای سیگاری که به تو حسرت می‌خورد متأسف شو. دوم یک روز بد؛ برای همه روز خوب و بد هست، و در روش اراده سیگاری روز بد دلش سیگار می‌خواهد و فقط بدترش می‌کند. اگر روز بد آمد با خونسردی بپذیرش، یادت بیاید که سیگاری هم روز بد داشتی، و به خودت بگو سیگار درمانش نمی‌کند، فردا بهتر است و جایزهٔ آزادی را داری. بعد از ترک آدم‌ها همه‌چیز را گردن ترک می‌اندازند، ولی سیگار هیچ‌وقت مشکل را حل نکرد و اگر می‌کشیدی بدبخت‌تر می‌شدی. نگاه مثبت همیشه ضروری است.',
    ],
  },
  {
    n: 37,
    en: [
      'Substitutes',
      "Substitutes such as chewing gum, sweets, peppermints, herbal cigarettes, potions and pills are all a no. They make it harder because what you're really saying is that you need to smoke or fill the void, so the pangs keep coming. Your craving is for nicotine, not food, and the substitutes keep you thinking about smoking. There is no substitute for nicotine, you don't need nicotine, and cigarettes create the void rather than filling it. Avoid every product containing nicotine too, since NRT only prolongs the life of the little monster and so the big one; those who succeed with it do so in spite of it, not because of it. Needing a substitute means feeling a sacrifice. If you want a reward, the author jokes about wearing shoes a size too small. If you eat more at main meals that is fine, but don't pick between meals.",
    ],
    fa: [
      'جایگزین‌ها',
      'جایگزین‌هایی مثل آدامس، شیرینی، نعناع، سیگار گیاهی، معجون و قرص همه ممنوع‌اند. ترک را سخت‌تر می‌کنند چون در واقع می‌گویی باید بکشم یا خلأ را پر کنم، پس حس‌ها ادامه می‌یابند. ولع تو برای نیکوتین است نه غذا، و جایگزین‌ها فکرت را روی سیگار نگه می‌دارند. جایگزینی برای نیکوتین وجود ندارد، نیکوتین لازم نداری و سیگار خلأ را می‌سازد نه پر می‌کند. از هر محصولی که نیکوتین دارد هم دوری کن، چون درمان جایگزین نیکوتین فقط عمر هیولای کوچک و به‌تبع هیولای بزرگ را طولانی می‌کند؛ کسانی که با آن موفق می‌شوند با وجود آن موفق می‌شوند، نه به‌خاطر آن. نیاز به جایگزین یعنی حس فداکاری. اگر پاداش می‌خواهی، نویسنده با شوخی می‌گوید کفشی یک سایز تنگ بپوش. اگر وعده‌های اصلی را بیشتر خوردی اشکالی ندارد، ولی بین وعده‌ها ناخنک نزن.',
    ],
  },
  {
    n: 38,
    en: [
      'Avoid temptation?',
      "The author asks you to treat his advice as instruction rather than suggestion, but on avoiding temptation he can't be categorical. Fear comes in two phases: how can I survive without a cigarette, the panic like the diving-board that looks six feet high, which peaks while smoking the last one and is the hardest part to launch yourself through; and the longer-term fear that certain situations won't be enjoyable or that you won't cope with a trauma. On keeping cigarettes in case, failure rates are far higher among those who do, mainly because they aren't fully committed, so if you feel you need them, re-read the book. On stressful or social occasions his advice differs: yes, try to avoid stress, but go out and enjoy social events straight away and rejoice that you don't have to smoke.",
    ],
    fa: [
      'از وسوسه دوری کنم؟',
      'نویسنده می‌خواهد توصیه‌هایش را دستور بدانی نه پیشنهاد، ولی دربارهٔ دوری از وسوسه نمی‌تواند قاطع باشد. ترس دو مرحله دارد: چطور بدون سیگار دوام بیاورم، همان هول مثل تخته‌شیرجه‌ای که شش پا ارتفاع دارد و حین کشیدن آخرین سیگار به اوج می‌رسد و پرش از آن سخت‌ترین بخش است؛ و ترس درازمدت از اینکه بعضی موقعیت‌ها بدون سیگار لذت‌بخش نباشد یا نتوانی با یک ضربه کنار بیایی. دربارهٔ نگه داشتن سیگار برای احتیاط، شکست در کسانی که این کار را می‌کنند خیلی بیشتر است، عمدتاً چون کاملاً متعهد نیستند؛ پس اگر حس می‌کنی لازمشان داری کتاب را دوباره بخوان. دربارهٔ موقعیت‌های پراسترس یا اجتماعی توصیه فرق دارد: بله، تا جای ممکن از استرس دوری کن، ولی همان اول به مناسبت‌های اجتماعی برو، لذت ببر و شاد باش که لازم نیست بکشی.',
    ],
  },
  {
    n: 39,
    en: [
      'The moment of revelation',
      "It's a moment when the sky seems brighter and the brainwashing ends, when instead of telling yourself you don't need to smoke you suddenly realise the last thread has broken and you can enjoy life without ever needing to. The more you smoked, the more marvellous it is. It used to be about three weeks, but feedback shows it mostly happens within days, sometimes before the last cigarette is out, or even while reading. Clinics now say about five days for physical withdrawal to fade and three weeks to be completely free, but he dislikes giving such guidelines, since you may start to expect suffering for that long or a boost at the end. About five days is when smoking stops being the main occupation of your mind, often noticed in a situation that you once couldn't handle without a cigarette. The key is not to wait for it: once the last one is out it is finished, so go and enjoy life, and the moment will come.",
    ],
    fa: [
      'لحظهٔ مکاشفه',
      'لحظه‌ای است که آسمان روشن‌تر به نظر می‌رسد و شست‌وشوی مغزی تمام می‌شود، وقتی به‌جای اینکه به خودت بگویی نیازی به سیگار نداری ناگهان می‌فهمی آخرین رشته پاره شده و می‌توانی بدون نیاز به سیگار از زندگی لذت ببری. هرچه بیشتر کشیده باشی شگفت‌انگیزتر است. قبلاً حدود سه هفته می‌گفت، ولی بازخورد نشان می‌دهد بیشتر ظرف چند روز اتفاق می‌افتد، گاهی پیش از خاموش شدن آخرین سیگار، یا حین خواندن کتاب. کلینیک‌ها حالا می‌گویند حدود پنج روز برای محو شدن ترک جسمی و سه هفته برای آزادی کامل، ولی او از دادن چنین رهنمودهایی خوشش نمی‌آید، چون ممکن است انتظار رنج به همین مدت یا شادی در پایانش را در ذهن بسازد. حدود پنج روز زمانی است که سیگار دیگر مشغولیت اصلی ذهن نیست و معمولاً در موقعیتی که قبلاً بدون سیگار تحمل‌ناپذیر بود متوجه می‌شوی. کلید این است که منتظرش نمانی: وقتی آخرین سیگار خاموش شد تمام است، پس برو و از زندگی لذت ببر، آن لحظه خودش می‌آید.',
    ],
  },
  {
    n: 40,
    en: [
      'The final cigarette',
      "Before you smoke it, check the two essentials: do you feel certain of success, and do you feel excitement rather than doom and gloom? If you have doubts, re-read the book. Then make a solemn vow that when you put it out you will never smoke again, whether it proves easy or hard; the worst that can happen is that you fail, and then you are no worse off. Smoke it consciously, inhale deeply and ask where the pleasure is, and put it out with the feeling of being free, not of being forbidden. Know that for a few days a little saboteur will say 'I want a cigarette', and treat it as 'Yippee, I'm a non-smoker'. Never doubt, because doubt puts you in a no-win spot; you are already a happy non-smoker. You will stay one if you never doubt, don't wait to feel like one, don't try not to think about smoking, use no substitutes, pity other smokers, don't change your life because you quit, and answer every thought of smoking with the same joy.",
    ],
    fa: [
      'آخرین سیگار',
      'پیش از کشیدنش دو چیز ضروری را بسنج: آیا مطمئنی موفق می‌شوی، و آیا هیجان داری نه غم و ترس؟ اگر شک داری کتاب را دوباره بخوان. بعد قسم جدی بخور که وقتی خاموشش کردی دیگر هرگز نکشی، چه آسان باشد چه سخت؛ بدترین اتفاق شکست است و آن‌وقت هم بدتر از الان نیستی. آن را با حواس کامل بکش، عمیق پک بزن و بپرس لذتش کجاست، و با حس آزاد بودن خاموشش کن، نه حس ممنوع بودن. بدان چند روز یک خرابکار کوچک می‌گوید «سیگار می‌خواهم»، و آن را «هورا، من غیرسیگاری‌ام» بدان. هرگز شک نکن، چون شک تو را در وضعیت بازنده می‌گذارد؛ از قبل غیرسیگاری شادی هستی. اگر شک نکنی، منتظر حس غیرسیگاری بودن نمانی، سعی نکنی به سیگار فکر نکنی، جایگزین نخواهی، به سیگاری‌ها دلسوزی کنی نه حسادت، زندگی‌ات را به‌خاطر ترک عوض نکنی و به هر فکر سیگار با همان شادی جواب بدهی، همین‌طور می‌مانی.',
    ],
  },
  {
    n: 41,
    en: [
      'A final warning',
      "No smoker, given the chance to go back to the time before he became hooked, would start again. Many of those who consult him are sure that if only they could stop they'd never dream of smoking again, and yet thousands who quit successfully for years get trapped again. His warning is that smokers who find it easy to stop find it easy to start again. No matter how long you've stopped or how confident you are, make it a rule never to smoke for any reason, and resist the tobacco companies' promotion. That first cigarette will do nothing for you: you won't have withdrawal to relieve and it will taste awful, but it will put nicotine in your body and a little voice will say you want another, and then you can be miserable for a while or start the whole chain again.",
    ],
    fa: [
      'هشدار پایانی',
      'هیچ سیگاری، اگر شانس برگشتن به پیش از اعتیاد را با دانسته‌های امروز داشته باشد، دوباره شروع نمی‌کند. بسیاری از مراجعان او مطمئن‌اند اگر فقط می‌توانستند ترک کنند هرگز به سیگار فکر نمی‌کردند، و با این حال هزاران نفر که سال‌ها موفق ترک کرده بودند دوباره در تله افتاده‌اند. هشدارش این است: سیگاری‌هایی که ترک را آسان می‌یابند، شروع دوباره را هم آسان می‌یابند. مهم نیست چقدر از ترکت گذشته یا چقدر مطمئنی؛ قاعده کن که به هیچ دلیلی نکشی و در برابر تبلیغ شرکت‌های تنباکو مقاومت کنی. آن اولین سیگار برایت هیچ کاری نمی‌کند: ترکی برای برطرف کردن نداری و بدمزه است، ولی نیکوتین وارد بدنت می‌کند و صدای کوچکی می‌گوید یکی دیگر می‌خواهی، و آن‌وقت یا مدتی بدبخت می‌مانی یا کل زنجیره از نو شروع می‌شود.',
    ],
  },
  {
    n: 42,
    en: [
      'Feedback and checklist',
      "After twenty years of feedback, he is most frustrated by two kinds of smoker. The first find it easy to stop but get hooked again and can't do it a second time, since they lose their fear and think they can have an odd one and stop again; it doesn't work, and the only thing essential to being a non-smoker is not to smoke. The second are too frightened to try or find it a struggle. The main difficulties are fear of failure (no disgrace in failing, but not trying guarantees it), fear of panic and misery (breathe deeply, walk away, cry or shout if you must), not following the instructions, and misunderstanding them, such as trying not to think about smoking or waiting for the moment of revelation. The checklist: vow never to smoke or take nicotine in any form; there is nothing to give up; there are no confirmed smokers; weighing pros and cons always says stop; don't try not to think about smoking, just say 'Yippee'; no substitutes, no keeping cigarettes, no avoiding smokers, no changing your lifestyle; and don't wait for the moment of revelation.",
    ],
    fa: [
      'بازخورد و چک‌لیست',
      'بعد از بیست سال بازخورد، از دو نوع سیگاری بیشتر ناراحت است. اولی‌ها راحت ترک می‌کنند ولی دوباره گیر می‌افتند و بار دوم نمی‌توانند، چون ترسشان را از دست داده‌اند و فکر می‌کنند می‌توانند یکی بکشند و دوباره ترک کنند؛ جواب نمی‌دهد و تنها چیز لازم برای غیرسیگاری بودن نکشیدن است. دومی‌ها آن‌قدر می‌ترسند که تلاش نمی‌کنند یا سخت ترک می‌کنند. دشواری‌های اصلی: ترس از شکست (شکست ننگ نیست ولی تلاش نکردن آن را تضمین می‌کند)، ترس از هول و بدبختی (نفس عمیق بکش، دور شو، اگر لازم است گریه یا داد بزن)، اجرا نکردن دستورها، و بد فهمیدنشان، مثل تلاش برای فکر نکردن به سیگار یا انتظار لحظهٔ مکاشفه. چک‌لیست: قسم بخور که هرگز سیگار یا نیکوتین به هیچ شکل نکشی؛ چیزی از دست نمی‌دهی؛ سیگاریِ همیشگی وجود ندارد؛ سبک‌سنگین کردن همیشه می‌گوید ترک کن؛ سعی نکن به سیگار فکر نکنی، فقط بگو «هورا»؛ جایگزین نه، سیگار نگه نداشتن، دوری نکردن از سیگاری‌ها، عوض نکردن سبک زندگی؛ و منتظر لحظهٔ مکاشفه نمان.',
    ],
  },
  {
    n: 43,
    en: [
      'Help the smoker left behind',
      "Smokers are panicking because they sense society has turned and the end is coming; each time one leaves, those left feel more wretched. Every smoker instinctively knows it is ridiculous to pay to burn dried leaves and breathe tar, and blatantly lies about it because they need to keep self-respect. A willpower ex-smoker who still feels deprived turns into a moaner, which only confirms to smokers how right they are to keep smoking; one who gets free has no need to justify himself. Help the smoker by removing their fears, telling them how wonderful it is to wake up fit and free, or get them to read the book, and don't belittle them as unclean or polluting, which only makes them need a cigarette more. Bans and enforced abstinence don't reduce smoking, they make cigarettes feel more precious, and the author is especially troubled by pregnant women pressed to stop. Treat the smoker as you would a heroin addict: not with blame but with pity.",
    ],
    fa: [
      'کمک به سیگاری‌ای که مانده',
      'سیگاری‌ها دچار هول شده‌اند چون حس می‌کنند جامعه برگشته و پایان نزدیک است؛ هر بار کسی می‌رود آن‌هایی که مانده‌اند بدبخت‌تر می‌شوند. هر سیگاری غریزی می‌داند مضحک است برای سوزاندن برگ خشک و تنفس قطران پول بدهد و آشکارا دروغ می‌گوید چون باید احترام خود را نگه دارد. ترک‌کنندهٔ روش اراده که هنوز حس محرومیت دارد غرغرو می‌شود، که فقط به سیگاری‌ها ثابت می‌کند ادامه دادنشان درست است؛ کسی که آزاد شده نیازی به توجیه ندارد. به سیگاری کمک کن با برداشتن ترس‌هایش، گفتن اینکه بیدار شدن سالم و آزاد چه شگفت‌انگیز است، یا واداشتنش به خواندن کتاب، و او را کثیف و آلوده‌کننده خطاب نکن که فقط سیگار را بیشتر لازم می‌کند. ممنوعیت‌ها و پرهیز اجباری مصرف را کم نمی‌کنند، سیگار را گران‌بهاتر می‌کنند، و نویسنده به‌ویژه از زنان باردار تحت فشار برای ترک ناراحت است. با سیگاری مثل معتاد هروئین رفتار کن: نه با سرزنش، با دلسوزی.',
    ],
  },
  {
    n: 44,
    en: [
      'Advice to non-smokers',
      "To help a smoker friend or relative read the book, first put yourself in their place. Don't force them or lecture them about health and money; they know it better than you, and pressure only makes them a secret smoker and the cigarette more precious. Instead, introduce them to ex-smokers who tell how they too thought they were hooked for life, and once they believe they can stop, explain the delusion created by withdrawal. Reassure them the book won't be a catalogue of diseases. During the withdrawal period, assume they are suffering even if they say not, and keep praising how proud you are, how much better they look and smell. Don't be afraid to mention smoking, and take pressure off them. Expect irritability, don't retaliate, and if they ask for a cigarette in a tantrum, don't encourage it: tell them how wonderful it is that they gave up.",
    ],
    fa: [
      'توصیه به غیرسیگاری‌ها',
      'برای کمک به دوست یا آشنای سیگاری در خواندن کتاب، اول خودت را جای او بگذار. مجبورش نکن و دربارهٔ سلامتی و پول موعظه نکن؛ او بهتر از تو می‌داند و فشار فقط او را سیگاری پنهانی و سیگار را گران‌بهاتر می‌کند. به‌جایش او را با ترک‌کرده‌ها آشنا کن که می‌گویند آن‌ها هم فکر می‌کردند تا آخر عمر گرفتارند، و وقتی باور کرد می‌تواند ترک کند توهمی را که ترک می‌سازد توضیح بده. اطمینانش بده کتاب فهرست بیماری‌ها نیست. در دورهٔ ترک فرض کن رنج می‌کشد حتی اگر بگوید نه، و مدام تشویق کن که چقدر به او افتخار می‌کنی، چقدر بهتر به نظر می‌رسد و بویش بهتر شده. از اشاره به سیگار نترس و فشار را از رویش بردار. انتظار بدخلقی داشته باش، تلافی نکن، و اگر در یک عصبانیت سیگار خواست تشویقش نکن: بگو چه عالی است که کنارش گذاشته‌ای.',
    ],
  },
  {
    n: 45,
    en: [
      'Finale',
      "The author calls cigarette smoking the biggest scandal in society, pointing to the hypocrisy of treating cocaine and heroin as terrible while smoking kills far more, to governments that tax it heavily, and to scare campaigns that don't help. He argues that smokers don't get a real choice, that the medical establishment still recommends nicotine replacement, and that he hopes this book turns a snowball into an avalanche. His final instructions: keep this book where you can find it and don't lend or lose it; if you envy another smoker, remember they envy you; remember you didn't enjoy being a smoker and do enjoy being a non-smoker; there is no such thing as just one cigarette; never doubt your decision; and if you have difficulties, contact an Easyway clinic.",
    ],
    fa: [
      'پایان‌بندی',
      'نویسنده سیگار را بزرگ‌ترین رسوایی جامعه می‌نامد و به ریاکاری اشاره می‌کند: کوکائین و هروئین را وحشتناک می‌دانیم در حالی که سیگار خیلی بیشتر می‌کشد، دولت‌ها مالیات سنگین می‌گیرند و کمپین‌های ترساندن جواب نمی‌دهد. استدلال می‌کند سیگاری‌ها انتخاب واقعی ندارند، نهاد پزشکی هنوز درمان جایگزین نیکوتین را توصیه می‌کند، و امیدوار است این کتاب گلولهٔ برف را به بهمن تبدیل کند. دستورهای پایانی‌اش: این کتاب را جایی نگه دار که پیدایش کنی و قرض نده یا گم نکن؛ اگر به سیگاری‌ای حسرت خوردی یادت باشد او به تو حسرت می‌خورد؛ یادت باشد از سیگاری بودن لذت نمی‌بردی و از غیرسیگاری بودن لذت می‌بری؛ «فقط یک سیگار» وجود ندارد؛ هرگز در تصمیمت شک نکن؛ و اگر مشکلی داشتی با یک کلینیک ایزی‌وی تماس بگیر.',
    ],
  },
];
