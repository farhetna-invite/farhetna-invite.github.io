/* فرحتنا · Farhetna — site-wide Arabic / English switch
   Arabic is the default. The choice is remembered on the device and applies on every page.
   Invitations themselves (#invite and the design demos) are never translated by this file. */
(function(){
"use strict";
var D={
/* ---------- shared / navigation ---------- */
"فرحتنا":"Farhetna","القائمة":"Menu","إغلاق":"Close","التصاميم":"Designs","التصميمات":"Designs","اطلبي دعوتك":"Order your invitation",
"جديد":"New","المميزات":"Features","الأسعار":"Pricing","الباقات":"Packages","الأسئلة الشائعة":"FAQ","واتساب":"WhatsApp",
"تواصلي معانا على واتساب":"Chat with us on WhatsApp","محتاجة مساعدة؟":"Need help?","محتاجة أي مساعدة؟":"Need any help?",
"اختاري التصميم اللي يعجبك من الاستوديو، واكتبي تفاصيل مناسبتك وشوفي المعاينة قدامك. بعد كده اكتبي اسمك ورقم موبايلك، وحوّلي قيمة الباقة على InstaPay، وارفعي صورة التحويل في الموقع. وكود التفعيل بيوصلك خلال ٢٤ ساعة بعد تأكيد الدفع.":"Choose the design you love in the studio, enter your event details and watch the live preview. Then enter your name and mobile number, transfer the package price via InstaPay and upload the transfer screenshot on the website. Your activation code reaches you within 24 hours of payment confirmation.","مساعدة على واتساب":"Help on WhatsApp",
"تغيير اللغة":"Change language","الرئيسية":"Home","مساعدة":"Help","جربي الدعوة":"Try the invitation","جربي دعوة تفاعلية":"Try an interactive invitation",
"اكتشفي التصميمات":"Explore the designs","اكتشفي التصاميم":"Explore the designs",
"٣٥٠ جنيه":"EGP 350","٢٥٠ جنيه":"EGP 250","٤٥٠ جنيه":"EGP 450","جنيه":"EGP","٢٥٠":"250","٣٥٠":"350","٤٥٠":"450",
"Signature · ٣٥٠ جنيه":"Signature · EGP 350","Classic · ٢٥٠ جنيه":"Classic · EGP 250",
/* ---------- homepage ---------- */
"فرحتنا | دعوات زفاف رقمية":"Farhetna | Digital Wedding Invitations",
"ظرف دعوة عاجي بنقوش بارزة وختم شمع أخضر بجانب ورد الليليوم":"Embossed ivory invitation envelope with a green wax seal beside white lilies",
"حكايتكم تستاهل":"Your Love Story Deserves","بداية جميلة":"a Beautiful Beginning.","صممي دعوة فرحك بنفسك في دقائق":"Create your dream wedding invitation in minutes.","صممي دعوتك":"Create Your Invitation","شوفي إزاي":"See How It Works","فيديو قصير: إزاي تصممي دعوتك على فرحتنا":"Short video: how to design your invitation on Farhetna","فرحتكم تبدأ":"Your celebration begins","بدعوة لا تُنسى":"with an invitation to remember",
"دعوات زفاف رقمية فاخرة وتفاعلية":"Luxury interactive wedding invitations","تحكي حكايتكم من أول لحظة":"that tell your story from the first moment",
"دعوات زفاف رقمية":"Digital wedding invitations","بلمسة استثنائية":"with an exceptional touch","تصاميم فاخرة وتفاعلية":"Luxurious, interactive designs","تروي قصة يومك المميز":"that tell the story of your special day",
"جودة عالية":"High quality","وتفاصيل فاخرة":"& luxurious details","تصاميم متنوعة":"Varied designs","وفريدة":"& unique","تفاعلية":"Interactive","وسهلة المشاركة":"& easy to share",
"انزلي للتصاميم":"Scroll to the designs","اكتشفي مجموعاتنا":"Explore our collections","المجموعة الكلاسيكية":"The Classic Collection","مجموعة فرحتنا":"The Farhetna Collection","تصاميمنا الأصلية اللي اختارتها عرايسنا":"Our original designs, chosen by our brides","الاتجاه للعربي":"Arabic",
"تصاميم متنوعة تناسب كل الأذواق":"Varied designs for every taste","التصميم السابق":"Previous design","التصميم التالي":"Next design","تصميمات الدعوات":"Invitation designs","اختاري تصميم":"Choose a design",
"عرض جميع التصاميم":"View all designs",
"تجارب فرحتنا المميزة":"Farhetna Signature Experiences","Signature Collection":"Signature Collection",
"دعوات تفاعلية جديدة، جرّبي كل واحدة بنفسك زي ما ضيوفك هيشوفوها":"Our newest interactive invitations — try each one exactly as your guests will see it",
"اسحبي لتشوفي باقي التصميمات":"Swipe to see more designs",
"إزاي تصممي دعوتك؟":"How do you design your invitation?","بخطوات بسيطة وسريعة،":"In a few simple, quick steps,","تصميمك الجاهز بين إيديكي":"your finished design is in your hands",
"اختاري التصميم اللي يعجبك":"Choose the design you love","من ١١ تصميم، وتقدري تجرّبي أي دعوة قبل ما تختاري.":"From 17 designs — try any invitation before you choose.",
"من ١٧ تصميم، وتقدري تجرّبي أي دعوة قبل ما تختاري.":"From 17 designs — try any invitation before you choose.",
"أضيفي تفاصيل مناسبتك":"Add your event details","الأسامي، والميعاد، والمكان، والمزيكا، وشوفي دعوتك بتتغير قدامك.":"Names, date, venue and music — and watch your invitation update in front of you.",
"استلمي دعوتك الجاهزة":"Receive your finished invitation","بعد التحويل على InstaPay بتتفعّل خلال ٢٤ ساعة، وتاخدي لينك باسمكم تبعتيه لكل ضيوفك.":"After your InstaPay transfer it is activated within 24 hours, and you get a link with your names to send to all your guests.",
"صممي دعوتك الآن":"Design your invitation now","آراء عرايسنا":"What our brides say","تجارب حقيقية من عرايس اختاروا فرحتنا":"Real experiences from brides who chose Farhetna",
"الرأي السابق":"Previous review","آراء العرايس":"Brides' reviews","الرأي التالي":"Next review",
"باقات التصميم":"Design packages","اختاري الباقة المناسبة لاحتياجك":"Choose the package that suits you","أساسي":"Basic","فاخر":"Premium","تصميم خاص":"Custom design",
"باقة أساسي":"Basic package","أساميكم وحروفكم على الختم":"Your names and initials on the seal","مزيكا وعدّ تنازلي وخريطة":"Music, countdown and map","برنامج الحفل وتأكيد الحضور":"Event schedule and RSVP",
"تعدّلي بنفسك لحد يوم الفرح":"Edit it yourself until the wedding day","التصميمات:‏":"Designs:","التصميمات:":"Designs:","اختاري الباقة":"Choose this package","باقة فاخر":"Premium package","الأكثر طلبًا":"Most popular",
"حركات سينمائية وظرف حقيقي بيتفتح":"Cinematic motion and a real opening envelope","أغنيتكم الخاصة":"Your own song","كل مميزات الباقة الأساسية":"Everything in the Basic package",
"باقة تصميم خاص":"Custom design package","تصميم معمول ليكم من الصفر":"A design made for you from scratch","ألوان وورد وستايل على ذوقك":"Colours, flowers and style to your taste",
"إحنا اللي بنجهّزها ونعدّل معاكي":"We prepare it and make the edits with you","اطلبي على واتساب":"Order on WhatsApp","السعر مرة واحدة، ولعدد ضيوف مفتوح.":"One-time price, for an open number of guests.",
"ضيوف بلا حدود":"Unlimited guests","لينك واحد لكل ضيوفك":"One link for all your guests","تعدّلي بنفسك":"Edit it yourself","لحد يوم الفرح، واللينك ما بيتغيرش":"until the wedding day — the link never changes",
"تتفعّل خلال ٢٤ ساعة":"Activated within 24 hours","بعد مراجعة تحويل InstaPay":"after we review your InstaPay transfer","لينك خاص باسمكم":"A link with your names","تبعتيه على واتساب أو انستجرام":"to share on WhatsApp or Instagram",
"إجابات لأكتر الأسئلة اللي بتهم عرايسنا":"Answers to our brides' most common questions","إزاي أطلب دعوتي من فرحتنا؟":"How do I order my invitation from Farhetna?",
"اختاري التصميم اللي يعجبك من الاستوديو، واكتبي تفاصيل مناسبتك وشوفي المعاينة قدامك. بعد كده اعملي حساب، وحوّلي قيمة الباقة على InstaPay، وارفعي صورة التحويل في الموقع، ودعوتك هتتفعّل خلال ساعة.":"Choose the design you love in the studio, enter your event details and watch the live preview. Then create an account, transfer the package price via InstaPay, upload the transfer screenshot on the website, and your invitation is activated within an hour.",
"أقدر أعدّل الدعوة بعد الطلب؟":"Can I edit the invitation after ordering?","أيوه. بكود التفعيل تقدري تعدّلي أي تفصيلة في أي وقت لحد يوم الفرح، واللينك اللي بعتيه لضيوفك بيفضل زي ما هو.":"Yes. With your activation code you can edit any detail at any time until the wedding day, and the link you sent to your guests stays the same.",
"طرق الدفع المتاحة إيه؟":"Which payment methods are available?","الدفع بتحويل InstaPay على الرقم":"Payment is by InstaPay transfer to","، وبعد التحويل ترفعي صورة التحويل في الموقع عشان نأكّده.":", then you upload the transfer screenshot on the website so we can confirm it.",
"ينفع الدعوة تبقى بأكتر من لغة؟":"Can the invitation be in more than one language?","أيوه، تقدري تكتبي الأسامي والمكان بالعربي والإنجليزي. وكل تصميم بيعرض اللغتين بالشكل اللي يناسبه.":"Yes, you can write the names and venue in Arabic and English, and each design shows both languages in the way that suits it.",
"أقدر أشوف الدعوة قبل ما أدفع؟":"Can I see the invitation before I pay?","أكيد. في الاستوديو بتشوفي المعاينة بتتغير قدامك مع كل تفصيلة بتكتبيها، وكمان تقدري تفتحي الدعوات التجريبية لكل تصميم وتجرّبيها بنفسك قبل ما تختاري.":"Of course. In the studio the preview updates with every detail you type, and you can open the demo invitation of every design and try it yourself before choosing.",
"أقدر أبعتها لكام ضيف؟":"How many guests can I send it to?","لعدد مفتوح. هو لينك واحد تبعتيه لكل ضيوفك على واتساب أو انستجرام، من غير أي تكلفة زيادة.":"An open number. It is one link you send to all your guests on WhatsApp or Instagram, at no extra cost.",
"ينفع أحط أغنية معينة؟":"Can I add a specific song?","أيوه، تقدري ترفعي أغنيتكم من الاستوديو، أو تختاري من المقطوعات الجاهزة.":"Yes, you can upload your own song in the studio or choose one of our ready-made tracks.",
"تنفع للخطوبة وكتب الكتاب؟":"Does it work for engagements and Katb El-Ketab?","أكيد، تنفع لأي مناسبة: فرح، أو خطوبة، أو كتب كتاب، أو حنة.":"Of course — any occasion: wedding, engagement, Katb El-Ketab or henna night.",
"ابدئي الآن":"Start now","صمّمي دعوتك الخاصة":"Design your own invitation","بخطوات سهلة، دعوة رقمية تشبهكم،":"In easy steps, a digital invitation that feels like you,","تعكس ذوقك وتفرّح ضيوفك":"reflects your taste and delights your guests",
"ابدئي التصميم الآن":"Start designing now","علبة دبل خضراء وشمعة وورد أبيض وكارت دعوة بشريطة ساتان":"A green ring box, a candle, white roses and an invitation card tied with satin ribbon",
"كل قصة حب تستحق دعوة مميزة،":"Every love story deserves a special invitation,","وفرحتنا معاكي في كل التفاصيل":"and Farhetna is with you in every detail","إحنا هنا علشان نساعدك ❤️":"We're here to help ❤️",
"دعوات رقمية بلمسة استثنائية":"Digital invitations with an exceptional touch","روابط الموقع":"Site links","إزاي تطلبي":"How to order","صمّمي دعوتك":"Design your invitation","تصاميم أنيقة":"Elegant designs",
"تعدّلي لحد يوم الفرح":"Edit until the wedding day","تابعينا":"Follow us","انستجرام فرحتنا":"Farhetna on Instagram","واتساب فرحتنا":"Farhetna on WhatsApp","© 2026 فرحتنا · جميع الحقوق محفوظة":"© 2026 Farhetna · All rights reserved",
"اسم العروسة":"Bride's name","رأي":"Review",
"الدعوة طلعت رقيقة وشيك جدًا، وأكتر حاجة عجبتني إن شكلها مختلف عن الدعوات التقليدية، والتفاصيل فيها جميلة أوي ❤️":"The invitation came out so delicate and chic. What I loved most is how different it looks from traditional invitations, and the details are beautiful ❤️",
"مكنتش متخيلة إن الدعوة الإلكترونية ممكن تبقى بالجمال ده! فكرة إن الضيوف يفتحوا الدعوة ويشوفوا تفاصيل الفرح كلها عجبتني جدًا.":"I never imagined a digital invitation could be this beautiful! I loved that guests open it and see every detail of the wedding.",
"حبيت إن الموضوع سهل، اخترت التصميم وضفت بيانات الفرح، والنتيجة طلعت حلوة جدًا. بجد تجربة لطيفة.":"I loved how easy it was — I chose the design, added the wedding details, and the result was lovely. A really pleasant experience.",
"أكتر حاجة عجبتني إن الدعوة شكلها فخم وفي نفس الوقت سعرها مناسب، وحسيت إنها إضافة حلوة لتفاصيل يومنا.":"What I liked most is that it looks luxurious yet is reasonably priced — a lovely addition to our day.",
"فكرة لينك الدعوة مريحة جدًا، بدل ما أفضل أبعت المكان والتفاصيل لكل واحد لوحده. كل حاجة موجودة في مكان واحد.":"The invitation link is so convenient — instead of sending the venue and details to everyone separately, everything is in one place.",
"التصميمات كلها جميلة جدًا ومختلفة، وقدرت أختار اللي يناسب ذوقنا بالظبط. الموقع سهل الاستخدام والخدمة كانت لطيفة جدًا.":"All the designs are beautiful and different, and I found exactly what suits our taste. The site is easy to use and the service was lovely.",
"سارة أحمد":"Sara Ahmed","نورهان محمود":"Nourhan Mahmoud","مريم علي":"Mariam Ali","دينا خالد":"Dina Khaled","هبة مصطفى":"Heba Mostafa","رانيا السيد":"Rania El-Sayed",
/* ---------- signature designs ---------- */
"ظرف عاجي بقفل Infinity دهب، الجناحين بيتفتحوا بصباعك، حرير بيكشف الأسامي، وحلقة دهب بتلف وتظهر التاريخ":"An ivory envelope with a gold Infinity clasp — the wings open under your finger, silk reveals the names, and a gold ring turns to reveal the date",
"ظرف أخضر بختم وردي بيتفتح نصين، Save the Date وتقويم بقلب، ومواعيد اليوم، وصورة بتتلوّن في الآخر":"A green envelope with a pink seal that opens in two, Save the Date with a heart calendar, the day's timeline, and a photo that blooms into colour",
"تجربة تفاعلية في ٨ مشاهد بالعنابي والورد، من الختم لحد تأكيد الحضور":"An interactive 8-scene experience in burgundy and roses, from the seal to the RSVP",
"حكاية سينمائية بالأسود والدهب: نور بيتجمع، والأسامي بتتكتب قدام الضيف":"A cinematic story in black and gold: light gathers and the names write themselves before the guest",
"ظرف بيبي بلو بورد الهيدرانجيا وختم شمع، وبيتعمل بكذا لون وشكل ختم":"A baby-blue envelope with hydrangeas and a wax seal, available in several colours and seal styles",
"باب دانتيل عاجي ملكي بختم، بيتفتح على دعوة كلاسيكية فخمة":"A royal ivory lace door with a seal that opens onto a luxurious classic invitation",
/* ---------- designs page ---------- */
"فرحتنا | دعوات أفراح ديجيتال":"Farhetna | Digital Wedding Invitations","دعوات أفراح ديجيتال تفاعلية":"Interactive digital wedding invitations","دعوة فرحك…":"Your wedding invitation…","في لينك واحد":"in one link",
"ظرف بيتفتح بلمسة، مزيكا، عدّ تنازلي، خريطة وتأكيد حضور على واتساب. تبعتيها لكل ضيوفك في ثانية، وتفضل معاكي لحد يوم الفرح.":"An envelope that opens with a touch, music, a countdown, a map and RSVP on WhatsApp. Send it to all your guests in a second — it stays with you until the wedding day.",
"شوفي التصميمات":"See the designs","اعملي دعوتك بنفسك ✏️":"Create your invitation yourself ✏️","١١":"11","١٧":"17","تصميم مختلف":"different designs","٢٤ ساعة":"24 hours","وتكون جاهزة":"and it's ready","ضيوف على نفس اللينك":"guests on the same link",
"نموذج دعوة حديقة الورد":"Rose Garden invitation sample","نموذج دعوة قصر الورد":"Rose Palace invitation sample","كل اللي محتاجاه في دعوة واحدة":"Everything you need in one invitation","دعوة… بس على شكل حكاية":"An invitation… told like a story",
"ظرف بيتفتح":"Opening envelope","ختم شمع بحروفكم وحركة فتح ناعمة":"A wax seal with your initials and a smooth opening","مزيكا":"Music","تشتغل أول ما الضيف يفتح الدعوة":"Plays as soon as the guest opens the invitation","عدّ تنازلي":"Countdown","لحظة بلحظة لحد يوم الفرح":"Moment by moment until the big day",
"خريطة المكان":"Venue map","زرار واحد يوصّل الضيف للقاعة":"One button takes the guest to the venue","برنامج الحفل":"Event schedule","مواعيد الفقرات بشكل أنيق":"The evening's timings, elegantly presented","تأكيد حضور":"RSVP","الرد يوصلك على واتساب مباشرة":"Replies reach you directly on WhatsApp",
"دريس كود":"Dress code","ألوان مقترحة وملاحظات للضيوف":"Suggested colours and notes for guests","تعديلات":"Edits","نعدّل لحد يوم الفرح من غير تكلفة":"Edits until the wedding day at no cost","اختاري الستايل اللي يشبهكم":"Choose the style that feels like you","تصميماتنا":"Our designs",
"افتحي أي دعوة وجربيها بنفسك زي ما ضيوفك هيشوفوها بالظبط 🤍":"Open any invitation and try it exactly as your guests will see it 🤍","فاخر ✦ ٣٥٠ جنيه":"Premium ✦ EGP 350","أساسي ✦ ٢٥٠ جنيه":"Basic ✦ EGP 250","شوفي الدعوة":"Try the invitation","اطلبي ده":"Order this",
"المجموعة الأساسية":"The Core Collection","التصميمات الأصلية اللي اختارتها عرايس فرحتنا":"The original designs chosen by Farhetna brides",
"نموذج دعوة Golden Scroll":"Golden Scroll invitation sample","مخطوطة دهبي بتتفرد، ورد ودهب بيطير، شرايط ألوان بين الأقسام، قوس منقوش وعمدان وقوس ورد":"A golden scroll unrolls, roses and gold drift, coloured ribbons between sections, a carved arch, columns and a rose arch",
"نموذج دعوة Lavender":"Lavender invitation sample","ظرف بختم لافندر، الدبل الدهب، وكارت أكريليك بزراير: المكان والحضور والبرنامج ودليل الضيف والهدية":"An envelope with a lavender seal, gold rings and an acrylic card with buttons: venue, RSVP, schedule, guest guide and gifts",
"نموذج دعوة Bordeaux":"Bordeaux invitation sample","ظرف مخمل نبيتي بختم دهبي، ورق مقطوع الحواف، أسامي بخط اليد، وإكليل دهبي بيترسم في النهاية":"A wine velvet envelope with a gold seal, deckle-edged paper, handwritten names and a gold wreath drawn at the end",
"نموذج دعوة Ivory Lily":"Ivory Lily invitation sample","ستايل إنجليزي فخم: ظرف بختم شمع، تاريخ بيتخربش بالصباع، جيب دانتيل فيه الآية، وصور العرسان، وفيها ألبوم الضيوف 📸 كل ضيف يرفع صوره من الفرح وتوصلكم إنتو بس":"A luxurious English style: a wax-sealed envelope, a scratch-to-reveal date, a lace pocket with the verse, the couple's photos and a guest album 📸 — every guest uploads their photos and only you receive them",
"نموذج دعوة Once Upon a Time":"Once Upon a Time invitation sample","كتاب حكاية بيتفتح على لوحة بحيرة وبجع، صفحات بتتقلب، وفي الآخر الكتاب بيتقفل":"A storybook opens onto a lake-and-swans painting, pages turn, and at the end the book closes",
"نموذج دعوة Olive Lace":"Olive Lace invitation sample","ظرف زيتوني بدانتيل وختم، ورق مقطوع، نتيجة الشهر، برنامج اليوم، صور العرسان، والدريس كود بالألوان":"An olive lace envelope with a seal, deckle paper, a monthly calendar, the day's schedule, the couple's photos and a colour dress code",
"نموذج دعوة Rose Gate":"Rose Gate invitation sample","باب بيتفتح على صوركم، حكايتكم، يافطة المواعيد وألبوم صور، ومزيكا زفة":"A gate opens onto your photos, your story, a timings sign, a photo album and Zaffa music",
"نموذج دعوة Satin Bow":"Satin Bow invitation sample","بينك هادي وورد وفيونكة، ظرف بيتفتح من الجنب، وبسملة وآيات ودعاء «بارك الله لكما»":"Soft pink, roses and a bow, a side-opening envelope, the Basmala, verses and the prayer “Barak Allah lakuma”",
"نموذج دعوة Rose Palace":"Rose Palace invitation sample","فاخر بالأحمر الملكي والدهبي، ختم شمع بحروفكم وبجعتين بيقربوا من بعض":"Luxurious royal red and gold, a wax seal with your initials and two swans drawing close",
"نموذج دعوة Rose Garden":"Rose Garden invitation sample","ورد باستيل وقوس رخامي، ورد بيقع ووردة بتمشي مع برنامج الحفل":"Pastel roses and a marble arch, falling petals and a rose that travels along the schedule",
"نموذج دعوة Royal Velvet":"Royal Velvet invitation sample","ظرف مخمل نبيتي مطرّز بالدهبي، يتفتح بلمسة على الختم":"A wine velvet envelope embroidered in gold that opens with a touch on the seal",
"سهلة جدًا":"Very easy","إزاي تطلبي دعوتك؟":"How to order your invitation","اعمليها بنفسك":"Make it yourself","ادخلي على «اعملي دعوتك بنفسك»، اختاري التصميم واكتبي بياناتك، وشوفي المعاينة ببلاش.":"Open “Create your invitation yourself”, pick a design, enter your details and see the preview for free.",
"حوّلي وارفعي صورة التحويل":"Transfer and upload the receipt","حوّلي على InstaPay وارفعي سكرين شوت التحويل في الموقع، ودعوتك تتفعّل خلال ٢٤ ساعة.":"Transfer via InstaPay and upload the screenshot on the website — your invitation is activated within 24 hours.",
"ابعتي اللينك لضيوفك":"Send the link to your guests","هتاخدي لينك قصير باسمكم، وكود خاص تعدّلي بيه في أي وقت. ولو احتجتي مساعدة إحنا معاكي على واتساب.":"You get a short link with your names and a private code to edit at any time. If you need help, we're with you on WhatsApp.",
"ابدئي دعوتك":"Start your invitation","أسئلة بتتسأل كتير":"Frequently asked questions","يعني إيه دعوة ديجيتال؟":"What is a digital invitation?",
"دعوة على شكل صفحة بتتفتح من لينك على الموبايل، فيها كل تفاصيل الفرح بحركة ومزيكا، وتتبعت على واتساب أو أي مكان.":"An invitation in the form of a page that opens from a link on the phone, with every wedding detail, motion and music — shared on WhatsApp or anywhere.",
"لعدد مفتوح. هو لينك واحد تبعتيه لكل الناس من غير أي تكلفة زيادة.":"An open number. It's one link you send to everyone at no extra cost.","أقدر أعدّل بعد ما أبعتها؟":"Can I edit after sending it?",
"أيوه، ادخلي بكود التفعيل وعدّلي في أي وقت، واللينك بيفضل زي ما هو. ولو حبيتي إحنا نعدّلها، كلمينا على واتساب.":"Yes — enter your activation code and edit at any time; the link stays the same. If you'd like us to edit it, message us on WhatsApp.",
"بتاخد وقت قد إيه؟":"How long does it take?","الدعوة بتتفعّل خلال ٢٤ ساعة من تأكيد الدفع.":"Your invitation is activated within 24 hours of payment confirmation.","تنفع لأي مناسبة: فرح، خطوبة، كتب كتاب، حنة.":"Any occasion: wedding, engagement, Katb El-Ketab, henna.",
"أكيد، تنفع لأي مناسبة: فرح، خطوبة، كتب كتاب، حنة.":"Of course — any occasion: wedding, engagement, Katb El-Ketab, henna.",
"الدفع بيبقى إزاي؟":"How do I pay?","تحويل على InstaPay للرقم 01280067110، وترفعي صورة التحويل في الموقع، ودعوتك تتفعّل خلال ٢٤ ساعة بعد مراجعة التحويل.":"An InstaPay transfer to 01280067110; upload the transfer screenshot on the website and your invitation is activated within 24 hours of review.",
"أيوه، ابعتيلنا الأغنية اللي تحبيها وهنحطها في دعوتك.":"Yes — send us the song you love and we'll add it to your invitation.","جاهزة نبدأ دعوتك؟":"Ready to start your invitation?","ابعتيلنا على واتساب بالتصميم اللي عجبك، ودعوتك تتفعّل خلال ٢٤ ساعة.":"Message us on WhatsApp with the design you love, and your invitation is activated within 24 hours.",
"اعملي دعوتك دلوقتي":"Create your invitation now","💌 فرحتنا · دعوات أفراح ديجيتال":"💌 Farhetna · Digital wedding invitations",
"دعوة فرحك في لينك واحد: ظرف بيتفتح، مزيكا، عدّ تنازلي، خريطة وتأكيد حضور. تصميمات فاخرة بالعربي.":"Your wedding invitation in one link: an opening envelope, music, countdown, map and RSVP. Luxury Arabic designs.",
"Rose Palace، Rose Garden، Royal Velvet، Rose Gate، Satin Bow":"Rose Palace, Rose Garden, Royal Velvet, Rose Gate, Satin Bow","Golden Scroll، Lavender، Bordeaux، Ivory Lily، Once Upon a Time، Olive Lace":"Golden Scroll, Lavender, Bordeaux, Ivory Lily, Once Upon a Time, Olive Lace","· دعوات أفراح ديجيتال":"· Digital wedding invitations",
"دعوة فرحك في لينك واحد يتبعت لكل الضيوف":"Your wedding invitation in one link for all your guests",
/* ---------- studio (builder & ordering UI only) ---------- */
"كارت فرح تفاعلي بلينك واحد، يتبعت لكل الضيوف":"An interactive wedding card in one link, sent to all your guests","تسجيل الدخول":"Sign in","عندك كود؟ عدّلي دعوتك ✏️":"Have a code? Edit your invitation ✏️",
"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","اختاري التصميم":"Choose the design","اللون":"Colour","العرسان":"The couple","اسم العريس":"Groom's name",
"حروف الختم بالإنجليزي (اختياري) – زي K&S":"Seal initials in English (optional) – e.g. K&S","لو فاضية هتتكتب أول حرف من الأسامي بالعربي":"If empty, the first Arabic letter of each name is used",
"المناسبة":"Occasion","كلمة الدعوة":"Invitation message","الميعاد والمكان":"Date & venue","التاريخ":"Date","الساعة":"Time","اسم القاعة / المكان":"Venue / hall name","العنوان":"Address",
"لينك جوجل ماب (اختياري)":"Google Maps link (optional)","رقم واتساب لتأكيد الحضور (اختياري)":"WhatsApp number for RSVPs (optional)","تفاصيل إضافية":"Extra details","(اختياري)":"(optional)",
"شعر الافتتاح (لتيمبلت «قصر الورد») – كل سطر لوحده":"Opening poem (for the “Rose Palace” template) – one line each","كلمة الختام (لتيمبلت «قصر الورد»)":"Closing words (for the “Rose Palace” template)",
"برنامج الحفل – كل فقرة في سطر":"Event schedule – one item per line","الدريس كود – اختاري الألوان المقترحة":"Dress code – choose suggested colours","ملاحظة للبس (اختياري)":"Dress note (optional)",
"ملاحظة عن الهدايا (اختياري)":"Gift note (optional)","ملاحظات للضيوف":"Notes for guests","الأسامي بالإنجليزي":"Names in English","(للتصميمات الإنجليزي)":"(for English designs)",
"صوركم وقصتكم":"Your photos & story","(للتصميمات الفاخرة الجديدة)":"(for the new premium designs)","الصورة الرئيسية (بتظهر أول ما الباب يتفتح)":"Main photo (shown as soon as the door opens)",
"📷 اختاري صورة لكم":"📷 Choose a photo of you","ألبوم صوركم (لحد ٤ صور)":"Your photo album (up to 4 photos)","🖼️ اختاري الصور":"🖼️ Choose photos","قصتكم (كلمتين عنكم)":"Your story (a few words about you)",
"أهل العروسة":"Bride's family","أهل العريس":"Groom's family","المزيكا":"Music","المزيكا بتشتغل أول ما الضيف يفتح الدعوة، وفيه زرار يقفلها.":"Music starts when the guest opens the invitation, and there's a button to turn it off.",
"معاينة الكارت ✉️":"Preview the card ✉️","احصلي على لينك دعوتك 💌":"Get your invitation link 💌","معاينة · نسخة تجريبية":"Preview · demo","لينك دعوتك 💌":"Your invitation link 💌",
"اختاري اسم اللينك اللي هيتبعت لضيوفك، واكتبي كود التفعيل":"Choose the link name your guests will receive, and enter your activation code","اسم اللينك (حروف إنجليزي وأرقام و - بس)":"Link name (English letters, numbers and - only)",
"حوّلي":"Transfer","على InstaPay للرقم:":"via InstaPay to:","نسخ":"Copy","ارفعي صورة التحويل (سكرين شوت)":"Upload the transfer screenshot","📎 اضغطي هنا واختاري صورة التحويل":"📎 Tap here to choose the transfer screenshot",
"رقم موبايلك (علشان لو احتجنا نكلمك)":"Your mobile number (in case we need to call you)","معاكي كود تفعيل من فرحتنا؟":"Have an activation code from Farhetna?","كود التفعيل":"Activation code","مش معايا كود، هحوّل وأرفع صورة التحويل":"I don't have a code — I'll transfer and upload the receipt",
"تأكيد ونشر الدعوة 💌":"Confirm & publish the invitation 💌","دعوتك جاهزة 🎉":"Your invitation is ready 🎉","ده اللينك اللي تبعتيه لكل ضيوفك:":"This is the link to send to all your guests:","انسخي اللينك":"Copy the link","ابعتيه واتساب":"Send on WhatsApp",
"شوفي دعوتك":"View your invitation","🔒 كود التعديل بتاعك":"🔒 Your edit code","بالكود ده تعدّلي دعوتك في أي وقت، واللينك مش هيتغير. احتفظي بيه ومتبعتيهوش لحد.":"Use this code to edit your invitation at any time — the link won't change. Keep it and don't share it with anyone.",
"ابعتيه لنفسك على واتساب":"Send it to yourself on WhatsApp","أهلاً بيكي في فرحتنا 🤍":"Welcome to Farhetna 🤍","سجّلي دخول عشان دعوتك تتحفظ في حسابك وتقدري ترجعيلها في أي وقت":"Sign in so your invitation is saved to your account and you can come back to it any time",
"حساب جديد":"New account","عندي حساب":"I have an account","اسمك":"Your name","رقم موبايلك 01xxxxxxxxx":"Your mobile 01xxxxxxxxx","الإيميل":"Email","الباسورد (٦ حروف أو أرقام على الأقل)":"Password (at least 6 characters)",
"ابعتولي العروض والتصميمات الجديدة على الإيميل والواتساب":"Send me offers and new designs by email and WhatsApp","اعملي حسابي":"Create my account","نسيتي الباسورد؟":"Forgot your password?","كلّمينا على واتساب":"Message us on WhatsApp",
"حسابي":"My account","اعملي دعوة جديدة ✨":"Create a new invitation ✨","تسجيل الخروج":"Sign out","عدّلي دعوتك ✏️":"Edit your invitation ✏️","اكتبي كود التفعيل اللي استلمتيه، وهتظهرلك بيانات دعوتك تعدّلي فيها":"Enter the activation code you received and your invitation details will appear for editing",
"افتحي دعوتي":"Open my invitation","كلاسيك فخم":"Luxury classic","ورود وأزهار":"Roses & flowers","مودرن بسيط":"Modern minimal","زخارف إسلامية":"Islamic motifs",
"من غير مزيكا":"No music","زفة مصري":"Egyptian Zaffa","طبلة ومزمار":"Drum & mizmar","زفة سريعة":"Fast Zaffa","إيقاع فرح":"Festive rhythm","عود شرقي":"Oriental oud","حجاز مع طبلة هادية":"Hijaz with soft drum",
"تقاسيم عود":"Oud improvisation","نهاوند هادي":"Gentle Nahawand","ناي وعود":"Ney & oud","روحاني وهادي":"Spiritual & calm","أوركسترا شرقي":"Oriental orchestra","كمنجات وطبلة":"Violins & drum","بيانو رومانسي":"Romantic piano",
"ناعم ودافي":"Soft & warm","بيانو هادي":"Calm piano","فالس رقيق":"Gentle waltz","الرقصة الأولى":"The first dance","بيانو وكمنجات":"Piano & violins","كانون":"Canon","المقطوعة الكلاسيك للأفراح":"The classic wedding piece",
"مارش الزفاف":"Wedding march","دخلة ملكية":"Royal entrance","كمنجات فخمة":"Grand violins","هارب حالم":"Dreamy harp","ناعمة وحالمة":"Soft & dreamy","صندوق موسيقى":"Music box","تهويدة رقيقة":"Gentle lullaby",
"ارفعي أغنيتك":"Upload your song","ملف من الموبايل":"A file from your phone","اسمعي":"Listen","فاخر ✦":"Premium ✦","لون":"Colour",
"✔ اضغطي لو عايزة تغيّريها":"✔ Tap to change it","امسحي":"Remove","بتتجهز…":"Preparing…","الصورة دي مش شغالة، جربي واحدة تانية":"This photo isn't working, try another one","الألبوم بياخد ٤ صور بس":"The album takes 4 photos only",
"اكتبي اسم العريس والعروسة الأول":"Enter the groom's and bride's names first","لسه ما اخترتيش ملف الأغنية":"You haven't chosen the song file yet","الكود ده مش صحيح، اتأكدي منه":"This code isn't valid, please check it",
"اسم اللينك لازم يكون ٣ حروف على الأقل، إنجليزي وأرقام و - بس":"The link name must be at least 3 characters: English letters, numbers and - only","اسم اللينك ده محجوز، جربي اسم تاني":"This link name is taken, try another one",
"البيانات كتير، قللي الكلام شوية":"That's a lot of text, please shorten it a little","في مشكلة في الاتصال، جربي تاني":"Connection problem, please try again","حفظ التعديلات 💾":"Save changes 💾","تفعيل ونشر الدعوة 💌":"Activate & publish the invitation 💌",
"سجّلي دخول الأول عشان دعوتك تتحفظ في حسابك، وتقدري تعدّليها في أي وقت":"Sign in first so your invitation is saved to your account and you can edit it any time",
"اختاري اسم اللينك اللي هيتبعت لضيوفك، وحوّلي وارفعي صورة التحويل، ودعوتك هتتفعّل خلال ٢٤ ساعة":"Choose the link name for your guests, transfer and upload the receipt, and your invitation will be activated within 24 hours",
"بيتجهز…":"Preparing…","✔ اترفعت صورة التحويل (اضغطي لو عايزة تغيّريها)":"✔ Receipt uploaded (tap to change it)","الصورة دي مش شغالة، جربي سكرين شوت تاني":"This image isn't working, try another screenshot",
"ارفعي صورة التحويل الأول":"Upload the transfer screenshot first","اكتبي رقم موبايلك":"Enter your mobile number","اكتبي كود التفعيل":"Enter the activation code","بيتحفظ…":"Saving…",
"الصور ماترفعتش، جربي تاني أو صور أقل":"The photos didn't upload, try again or use fewer photos","الأغنية ماترفعتش، جربي ملف أصغر أو اختاري مزيكا جاهزة":"The song didn't upload, try a smaller file or choose a ready-made track",
"صورة التحويل مش واضحة، جربي سكرين شوت تاني":"The receipt isn't clear, try another screenshot","اتنسخ ✅":"Copied ✅","اضغطي مطوّل على الرقم وانسخيه":"Press and hold the number to copy it","اتنسخ اللينك ✅":"Link copied ✅",
"اضغطي مطوّل على اللينك وانسخيه":"Press and hold the link to copy it","الكود ده لسه ما اتفعّلش. اعملي دعوتك واضغطي «احصلي على لينك دعوتك» واكتبيه هناك":"This code isn't activated yet. Create your invitation, tap “Get your invitation link” and enter it there.",
"✔ أغنيتك محفوظة":"✔ Your song is saved","اتفتحت دعوتك، عدّلي واضغطي «حفظ التعديلات» 💌":"Your invitation is open — edit it and tap “Save changes” 💌","دخول":"Sign in",
"الإيميل ده عليه حساب، اضغطي «عندي حساب»":"This email already has an account — tap “I have an account”","الإيميل أو الباسورد غلط":"Incorrect email or password","الباسورد لازم يكون ٦ حروف أو أرقام على الأقل":"The password must be at least 6 characters",
"اكتبي إيميل صحيح":"Enter a valid email","الإيميل محتاج تأكيد، شوفي رسالة في الإيميل بتاعك":"Your email needs confirming — check your inbox","اكتبي اسمك":"Enter your name",
"بعتنالك رسالة على الإيميل، افتحيها واضغطي على اللينك وبعدين ادخلي":"We've emailed you — open it, tap the link, then sign in","أهلاً بيكي 🤍":"Welcome 🤍","شغّالة ✅":"Live ✅","قيد المراجعة ⏳":"Under review ⏳","مقفولة":"Closed",
"بنجيب دعواتك…":"Loading your invitations…","لسه ما عملتيش دعوات، يلا نعمل أول واحدة 💌":"You haven't created any invitations yet — let's make your first 💌","عدّلي ✏️":"Edit ✏️","شاركي":"Share","صور الضيوف 📸":"Guest photos 📸",
"بنجيب الصور…":"Loading photos…","لسه محدش رفع صور":"No one has uploaded photos yet","دوسي على أي صورة عشان تفتحيها وتحفظيها":"Tap any photo to open and save it","اختاري التصميم وابدئي 💌":"Choose a design and begin 💌","خرجتي من حسابك":"You've signed out",
"⏳ بنراجع التحويل، ودعوتك هتتفعّل عند الضيوف خلال ساعة. تقدري تبعتي اللينك من دلوقتي، ولو حد فتحه قبل التفعيل هيلاقي رسالة إنها بتتجهز.":"⏳ We're reviewing your transfer, and your invitation will go live for guests within an hour. You can send the link now — anyone who opens it before activation will see that it's being prepared.",
"⏳ بنراجع التحويل، ودعوتك هتتفعّل عند الضيوف خلال ٢٤ ساعة. تقدري تبعتي اللينك من دلوقتي، ولو حد فتحه قبل التفعيل هيلاقي «الدعوة قيد التجهيز».":"⏳ We're reviewing your transfer, and your invitation will go live for guests within 24 hours. You can send the link now — anyone who opens it before activation will see “The invitation is being prepared”.",
"ألوان هادية وباستيل":"Soft, pastel colours","وجودكم هو أجمل هدية":"Your presence is the best gift","الأستاذ أحمد والسيدة منى":"Mr. Ahmed & Mrs. Mona","الأستاذ محمود والسيدة هالة":"Mr. Mahmoud & Mrs. Hala",
/* ---------- 404 ---------- */
"بنجهّز الدعوة…":"Preparing the invitation…"
};
var R=[
 [/^افتحي دعوة (.+)$/,"Open the $1 invitation"],
 [/^جربي دعوة (.+)$/,"Try the $1 invitation"],
 [/^رأي (\d+)$/,"Review $1"],
 [/^لون (\d+)$/,"Colour $1"],
 [/^(\d+) من 5$/,"$1 out of 5"],
 [/^رقم طلبك: (.+)$/,"Your order number: $1"],
 [/^حسابي · (.+)$/,"My account · $1"],
 [/^أهلاً (.+)$/,"Hello $1"],
 [/^هتتحفظ التعديلات على نفس اللينك: (.*)$/,"Changes will be saved to the same link: $1"],
 [/^صور الضيوف \((.+)\) 📸$/,"Guest photos ($1) 📸"],
 [/^✔ (.+) صور \(اضغطي لإضافة المزيد\)$/,"✔ $1 photos (tap to add more)"]
];
var DIG={'٠':'0','١':'1','٢':'2','٣':'3','٤':'4','٥':'5','٦':'6','٧':'7','٨':'8','٩':'9'};
var KEY="farhetna_lang",ATTRS=["placeholder","aria-label","title","alt"];
var SKIP="#invite,script,style,noscript,textarea,option,select,code,[data-no-i18n],.loading-inv,.demo-flag";
var lang="ar";try{var q=new URLSearchParams(location.search).get("lang");lang=(q==="en"||q==="ar")?q:(localStorage.getItem(KEY)||"ar")}catch(e){}
var origText=new WeakMap(),busy=false;
function norm(s){return s.replace(/\s+/g," ").trim()}
function find(core){
  if(Object.prototype.hasOwnProperty.call(D,core))return D[core];
  for(var i=0;i<R.length;i++){if(R[i][0].test(core))return core.replace(R[i][0],R[i][1]).replace(/[٠-٩]/g,function(d){return DIG[d]})}
  return null;
}
function trans(s){var core=norm(s);if(!core||!/[؀-ۿ]/.test(core))return null;var t=find(core);if(t==null)return null;
  var lead=s.match(/^\s*/)[0],tail=s.match(/\s*$/)[0];return lead+t+tail}
function skip(el){return !el||(el.closest&&el.closest(SKIP))}
function doText(n){
  if(skip(n.parentElement))return;
  if(lang==="en"){var src=/[\u0600-\u06FF]/.test(n.data)?n.data:origText.get(n);if(src==null)return;var t=trans(src);if(t!=null&&n.data!==t){origText.set(n,src);n.data=t}}
  else if(origText.has(n)){var o=origText.get(n);if(n.data!==o)n.data=o;origText.delete(n)}
}
function doAttrs(el){
  if(skip(el))return;
  for(var i=0;i<ATTRS.length;i++){var a=ATTRS[i];if(!el.hasAttribute(a))continue;var k="data-i18n-"+a;
    if(lang==="en"){var src=el.getAttribute(k)||el.getAttribute(a),t=trans(src);if(t!=null){if(!el.hasAttribute(k))el.setAttribute(k,el.getAttribute(a));el.setAttribute(a,t)}}
    else if(el.hasAttribute(k)){el.setAttribute(a,el.getAttribute(k));el.removeAttribute(k)}}
}
function walk(root){
  if(!root)return;
  if(root.nodeType===3){doText(root);return}
  if(root.nodeType!==1&&root.nodeType!==9&&root.nodeType!==11)return;
  if(root.nodeType===1){if(skip(root))return;doAttrs(root)}
  var w=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:function(n){
    if(n.nodeType===1)return (n.matches&&n.matches(SKIP))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;return NodeFilter.FILTER_ACCEPT}});
  var n;while((n=w.nextNode())){if(n.nodeType===3)doText(n);else doAttrs(n)}
}
var titleAr=null,descAr=null;
function head(){
  var m=document.querySelector('meta[name="description"]');
  if(titleAr===null)titleAr=document.title;if(m&&descAr===null)descAr=m.getAttribute("content");
  if(lang==="en"){var t=trans(titleAr);if(t)document.title=t;if(m){var d=trans(descAr);if(d)m.setAttribute("content",d)}}
  else{document.title=titleAr;if(m&&descAr!=null)m.setAttribute("content",descAr)}
}
function apply(){
  busy=true;
  var h=document.documentElement;h.lang=lang;h.dir=lang==="en"?"ltr":"rtl";h.classList.toggle("lang-en",lang==="en");
  head();walk(document.body);
  document.querySelectorAll("[data-lang-btn]").forEach(function(b){b.textContent=lang==="en"?"ع":"EN";b.setAttribute("aria-label",lang==="en"?"التبديل للعربية":"Switch to English");b.setAttribute("lang",lang==="en"?"ar":"en")});
  busy=false;
  try{document.dispatchEvent(new CustomEvent("farhetna:lang",{detail:lang}))}catch(e){}
}
function set(l){lang=l==="en"?"en":"ar";try{localStorage.setItem(KEY,lang)}catch(e){}apply()}
window.FarhetnaLang={get:function(){return lang},set:set,t:function(s){return lang==="en"?(trans(s)||s):s}};
document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("[data-lang-btn]");if(b){e.preventDefault();set(lang==="en"?"ar":"en")}});
var mo=new MutationObserver(function(ms){if(busy||lang!=="en")return;busy=true;
  for(var i=0;i<ms.length;i++){var m=ms[i];
    if(m.type==="characterData")doText(m.target);
    else if(m.type==="attributes"){if(ATTRS.indexOf(m.attributeName)>=0&&!m.target.hasAttribute("data-i18n-"+m.attributeName))doAttrs(m.target)}
    else m.addedNodes.forEach(function(n){walk(n)})}
  busy=false});
function start(){apply();mo.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTRS})}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
