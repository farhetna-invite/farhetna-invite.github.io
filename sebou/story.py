# Builds the story-style Sebou designs (scene by scene, like an Instagram story): python3 sebou/story.py
import os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = {
  "girl": dict(dir="sebou-story-girl", key="ssg", c="girl", fl="pink", title="Sweet Story", icon="🦋", theme="#f6e3e1",
      bg1="#fdf5f4", bg2="#f6dde2", ink="#4a3038", sub="#8f6f78", name="#b8556f", head="#a24f66", card="#fffafa", cell="#fdeef1",
      line="#f2d2da", btn="#c4607a", wing1="#f7b6c8", wing2="#e98fa8", txt="#3b2328",
      demo_ar="مليكة", demo_en="Malika", par_ar="أحمد ومنى", par_en="Ahmed & Mona", photo="baby-girl.webp",
      s1_ar="أهلًا بأميرتنا الصغيرة", s1_en="Welcoming|Our Princess",
      s2_ar="جالنا|بنوتة", s2_en="It's a|girl",
      s4_ar="بندعوكم تشاركونا|فرحة سبوع أميرتنا", s4_en="We invite you to celebrate|the Sebou of our little princess",
      dua_ar="اللهم بارك لنا فيها، واجعلها قرة عين لنا،|وأنبتها نباتًا حسنًا،|واملأ حياتها بالبركة والحب والرحمة 🤍",
      dua_en="O Allah, bless our baby girl with health,|long life and happiness.|Make her the coolness of our eyes|and fill her life with barakah, love and mercy.",
      kicker_ar="أهلًا بأحلى ضيفة نوّرت دنيتنا", sorry_ar="ربنا يخليها ليكم 🤍", he="her",
      intro_ar="جت الدنيا تنوّرها 🦋\\nوعايزين نحتفل بيها مع أغلى الناس في سبوعها",
      intro_en="She came to light up the world 🦋\\nand we'd love to celebrate her Sebou with our dearest people",
      xcss="",
      cols='["#f6b8c6","#fcd5dd","#ffffff","#e98fa5","#f9e3b0","#d9ecdf"]'),
  "boy": dict(dir="sebou-story-boy", key="ssb", c="boy", fl="blue", title="Sky Story", icon="💙", theme="#e4eef8",
      bg1="#f4f9fd", bg2="#dbe8f4", ink="#2f4256", sub="#6b7f93", name="#3f6f9f", head="#3d6893", card="#fbfdff", cell="#ebf3fb",
      line="#cfe0f0", btn="#4f82b6", wing1="#b7d3ef", wing2="#7fa9d6", txt="#23364a",
      demo_ar="مالك", demo_en="Malek", par_ar="كريم وسارة", par_en="Karim & Sara", photo="baby-boy.webp",
      s1_ar="أهلًا بأميرنا الصغير", s1_en="Welcoming|Our Prince",
      s2_ar="جالنا|ولد", s2_en="It's a|boy",
      s4_ar="بندعوكم تشاركونا|فرحة سبوع أميرنا", s4_en="We invite you to celebrate|the Sebou of our little prince",
      dua_ar="اللهم بارك لنا فيه، واجعله قرة عين لنا،|وأنبته نباتًا حسنًا،|واملأ حياته بالبركة والحب والرحمة 🤍",
      dua_en="O Allah, bless our baby boy with health,|long life and happiness.|Make him the coolness of our eyes|and fill his life with barakah, love and mercy.",
      kicker_ar="أهلًا بأحلى ضيف نوّر دنيتنا", sorry_ar="ربنا يخليه ليكم 🤍", he="him",
      intro_ar="جه الدنيا ينوّرها 💙\\nوعايزين نحتفل بيه مع أغلى الناس في سبوعه",
      intro_en="He came to light up the world 💙\\nand we'd love to celebrate his Sebou with our dearest people",
      xcss=".s2 .tx{top:27%!important;left:10%!important;right:10%!important}.s5 .tx{top:32%!important;left:16%!important;right:15%!important}.s6 .tx{top:20%!important;left:12%!important;right:12%!important}",
      cols='["#a8c8e8","#d6e6f5","#ffffff","#7fa9d6","#f9e3b0","#d9ecdf"]'),
}
HTML = r'''<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{icon} {title} · فرحتنا</title>
<meta name="description" content="دعوة سبوع تفاعلية من فرحتنا">
<meta name="theme-color" content="{theme}">
<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Amiri:wght@400;700&family=Dancing+Script:wght@600;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet">
<link rel="preload" as="image" href="../sebou/story/feet-{c}.webp">
<link rel="stylesheet" href="../bday/core.css">
<style>
:root{{--bg:{bg1};--ink:{ink};--sub:{sub};--name:{name};--head:{head};--card:{card};--cell:{cell};--num:{name};--line:{line};--btn:{btn};--btnInk:#fff;--field:#fff;--chip:rgba(255,255,255,.88);--chipInk:{head}}}
body{{background:linear-gradient(180deg,{bg1},{bg2} 60%,{bg1}) fixed;position:relative}}
.fl-t,.fl-b{{position:absolute;left:0;right:0;pointer-events:none;z-index:0;width:100%}}.fl-t{{top:-2px}}.fl-b{{bottom:-2px}}
main{{z-index:1}}
.card{{box-shadow:0 16px 34px -24px rgba(90,60,70,.5);border:1px solid {line}}}
.hero h1{{color:{name};text-shadow:0 2px 0 #fff,0 6px 18px rgba(0,0,0,.08)}}
.hero .k{{margin-top:70px}}
.photo{{width:210px;height:270px;border-radius:50%/42%;border:7px solid #fff;box-shadow:0 0 0 2px {wing1},0 18px 34px -18px rgba(90,60,70,.5)}}

/* ---------- the story ---------- */
#gate{{background:{bg1};overflow:hidden}}
.sc{{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity .9s ease,visibility 0s .9s}}
.sc.on{{opacity:1;visibility:visible;transition:opacity .9s ease}}
.st{{position:absolute;left:50%;top:50%;width:max(100vw,calc(100vh * 941 / 1672));height:calc(max(100vw,calc(100vh * 941 / 1672)) * 1672 / 941);transform:translate(-50%,-50%)}}
.st>img{{position:absolute;inset:0;width:100%;height:100%;display:block;transform:scale(1.06);transition:transform 7s ease-out}}
.sc.on .st>img{{transform:scale(1)}}
.tx{{position:absolute;left:8%;right:8%;text-align:center;color:{txt}}}
.ln{{display:block;clip-path:inset(0 0 0 0);-webkit-clip-path:inset(0 0 0 0)}}
.sc .ln{{clip-path:inset(-20% 100% -20% 0);-webkit-clip-path:inset(-20% 100% -20% 0)}}
[dir=rtl] .sc .ln{{clip-path:inset(-20% 0 -20% 100%);-webkit-clip-path:inset(-20% 0 -20% 100%)}}
.sc.typed .ln{{transition:clip-path 1.1s ease,-webkit-clip-path 1.1s ease;clip-path:inset(-20% 0 -20% 0)!important;-webkit-clip-path:inset(-20% 0 -20% 0)!important}}
.sc.typed .ln:nth-child(2){{transition-delay:1s}}.sc.typed .ln:nth-child(3){{transition-delay:2s}}.sc.typed .ln:nth-child(4){{transition-delay:3s}}
[lang=en] .scr{{font-family:"Dancing Script",cursive;font-weight:700}}
[lang=ar] .scr{{font-family:"Aref Ruqaa",serif;font-weight:700}}
.s1 .tx{{top:69%}}.s1 .ln{{font-size:min(10vw,44px);line-height:1.25;text-shadow:0 1px 0 rgba(255,255,255,.7)}}
.s2 .tx{{top:31%;left:22%;right:16%}}.s2 .ln:first-child{{font-size:min(8vw,34px)}}.s2 .ln:nth-child(2){{font-size:min(24vw,104px);line-height:1}}
.s3 .tx{{top:8%}}.s3 .ln{{font-size:min(9vw,40px)}}
.s4 .tx{{top:10%}}.s4 .ln{{font-size:min(7.6vw,33px);line-height:1.35}}
.s5 .tx{{top:35%;left:20%;right:16%}}
.s5 .nm{{display:block;font-size:min(19vw,84px);line-height:1.15;color:{name};filter:blur(14px);opacity:0;transition:filter 1.6s ease .5s,opacity 1.2s ease .5s}}
.s5 .dt{{display:block;font:600 min(5.4vw,23px)/1.4 "Cormorant Garamond",serif;letter-spacing:.12em;color:{txt};margin-top:6px;filter:blur(8px);opacity:0;transition:filter 1.4s ease 1.3s,opacity 1s ease 1.3s}}
.s5 .sb{{display:block;font:600 min(4.6vw,19px)/1.4 "Cormorant Garamond","Amiri",serif;letter-spacing:.3em;color:{sub};opacity:0;transition:opacity 1s ease .2s}}[lang=ar] .s5 .sb{{font-family:"Amiri",serif;letter-spacing:.05em;font-size:min(5.4vw,23px)}}
[lang=ar] .s5 .dt{{font-family:"Amiri",serif;letter-spacing:0}}
.s5.typed .sb,.s5.typed .nm,.s5.typed .dt{{filter:none;opacity:1}}
.s6 .tx{{top:17%;left:14%;right:14%}}
.s6 .bp{{font-size:min(10vw,44px);line-height:1.2}}
.s6 .pn{{display:block;font-size:min(7vw,30px);line-height:1.4;color:{name};margin:2px 0 14px}}
[lang=ar] .s6 .pn{{font-family:"Aref Ruqaa",serif}}[lang=en] .s6 .pn{{font-family:"Dancing Script",cursive}}
.s6 .du .ln{{font:500 min(4.3vw,18px)/1.75 "Amiri",serif}}[lang=en] .s6 .du .ln{{font:italic 500 min(4.4vw,18.5px)/1.6 "Cormorant Garamond",serif;font-weight:600}}
.s6 .wt{{font-size:min(7.4vw,31px);color:{name};margin-top:10px}}.sc.typed .s6 .wt,.s6.typed .wt{{transition-delay:3.4s}}
.bf{{display:block;width:min(15vw,62px);margin:0 auto 6px;animation:hov 3s ease-in-out infinite}}
.bf .w{{transform-origin:50% 50%;animation:flap .5s ease-in-out infinite alternate}}
.bf .w2{{animation-delay:.08s}}
@keyframes flap{{from{{transform:scaleX(1)}}to{{transform:scaleX(.35)}}}}
@keyframes hov{{0%,100%{{transform:translateY(0)}}50%{{transform:translateY(-6px)}}}}
.s1 .bf{{margin-top:10px}}
/* progress bars like a story */
/* interactive calendar */
.cal{{text-align:center}}
.cal .mo{{font:700 26px/1.3 "Aref Ruqaa",serif;color:{name}}}[lang=en] .cal .mo{{font:700 30px/1.2 "Dancing Script",cursive}}
.cal .yr{{font:600 13px "Cormorant Garamond",serif;letter-spacing:.3em;color:{sub};margin-bottom:12px}}
.cal .gr{{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;max-width:330px;margin:0 auto}}
.cal .gr span{{font-size:12px;color:{sub};padding:4px 0}}
.cal .gr b{{position:relative;font-weight:500;font-size:15px;color:{ink};height:38px;display:flex;align-items:center;justify-content:center;border-radius:50%}}
.cal .gr b.o{{opacity:.28}}
.cal .gr b.ev{{color:#fff;font-weight:700;cursor:pointer;z-index:1}}
.cal .gr b.ev::before{{content:"";position:absolute;inset:-3px;z-index:-1;background:{btn};-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 5 6.5 5c2.1 0 3.6 1.2 4.5 2.6C11.9 6.2 13.4 5 15.5 5 19 5 21.1 8.4 19.6 11.8 17.5 16.4 12 21 12 21z'/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 5 6.5 5c2.1 0 3.6 1.2 4.5 2.6C11.9 6.2 13.4 5 15.5 5 19 5 21.1 8.4 19.6 11.8 17.5 16.4 12 21 12 21z'/%3E%3C/svg%3E") center/contain no-repeat;transform:scale(0);transition:transform .7s cubic-bezier(.3,1.6,.4,1) .3s}}
.cal.in .gr b.ev::before{{transform:scale(1.25);animation:beat 1.6s ease-in-out 1.2s infinite}}
@keyframes beat{{0%,100%{{transform:scale(1.25)}}15%{{transform:scale(1.42)}}30%{{transform:scale(1.25)}}45%{{transform:scale(1.36)}}}}
.cal .gr b.ev i{{position:absolute;top:-30px;left:50%;transform:translateX(-50%) scale(.6);opacity:0;font-style:normal;font-size:20px;transition:all .6s ease 1s}}
.cal.in .gr b.ev i{{opacity:1;transform:translateX(-50%) scale(1)}}
.cal .hint{{font-size:12.5px;color:{sub};margin-top:12px}}
/* mortar (هون) */
.hon{{text-align:center}}
.hon .mt{{position:relative;width:200px;height:190px;margin:6px auto 0;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}}
.hon .bowl{{position:absolute;left:30px;bottom:0;width:140px;transform-origin:50% 100%}}
.hon .pes{{position:absolute;left:96px;top:-6px;width:46px;transform-origin:20% 92%;transform:rotate(28deg);transition:transform .12s ease-out}}
.hon .mt.hit .pes{{transform:rotate(-6deg) translate(-10px,22px);transition:transform .09s ease-in}}
.hon .mt.hit .bowl{{animation:shk .35s ease}}
@keyframes shk{{0%,100%{{transform:none}}25%{{transform:rotate(-2.5deg)}}50%{{transform:rotate(2deg)}}75%{{transform:rotate(-1deg)}}}}
.hon .ring{{position:absolute;left:50%;top:70px;width:40px;height:40px;margin-left:-20px;border:2px solid {wing2};border-radius:50%;opacity:0;pointer-events:none}}
.hon .mt.hit .ring{{animation:rng .7s ease-out}}
@keyframes rng{{from{{transform:scale(.4);opacity:.9}}to{{transform:scale(3.4);opacity:0}}}}
.hon .say{{min-height:56px;margin-top:10px;font:700 21px/1.5 "Aref Ruqaa",serif;color:{name};transition:opacity .25s}}[lang=en] .hon .say{{font:700 24px/1.35 "Dancing Script",cursive}}
.hon .cnt2{{font-size:12.5px;color:{sub}}}
/* candles (زفة الشموع) */
.cnd{{text-align:center}}
.cnd .row{{display:flex;justify-content:center;align-items:flex-end;gap:9px;margin:26px auto 6px;direction:ltr}}
.cnd .c{{position:relative;width:26px;cursor:pointer;-webkit-tap-highlight-color:transparent}}
.cnd .c .wx{{display:block;width:26px;border-radius:6px 6px 4px 4px;background:linear-gradient(90deg,#fff,#fbf3ee 45%,#efe2da);box-shadow:inset 0 -6px 0 {wing1},0 6px 12px -8px rgba(0,0,0,.35)}}
.cnd .c .wk{{position:absolute;left:50%;top:-8px;width:2px;height:9px;margin-left:-1px;background:#5a4636;border-radius:1px}}
.cnd .c .fl{{position:absolute;left:50%;top:-34px;width:16px;height:28px;margin-left:-8px;border-radius:50% 50% 50% 50%/62% 62% 38% 38%;background:radial-gradient(ellipse at 50% 72%,#fff 0 18%,#ffe08a 34%,#ffb347 62%,rgba(255,140,60,0) 72%);opacity:0;transform:scale(.2);transform-origin:50% 100%;transition:opacity .3s,transform .45s cubic-bezier(.3,1.6,.4,1)}}
.cnd .c .gl{{position:absolute;left:50%;top:-44px;width:60px;height:60px;margin-left:-30px;border-radius:50%;background:radial-gradient(circle,rgba(255,214,140,.55),rgba(255,214,140,0) 70%);opacity:0;transition:opacity .5s;pointer-events:none}}
.cnd .c.on .fl{{opacity:1;transform:scale(1);animation:flk 1.6s ease-in-out .5s infinite}}
.cnd .c.on .gl{{opacity:1}}
@keyframes flk{{0%,100%{{transform:scale(1) rotate(-2deg)}}30%{{transform:scale(1.06,.94) rotate(2deg)}}60%{{transform:scale(.96,1.05) rotate(-1deg)}}}}
.cnd .msg2{{min-height:30px;font-size:14px;color:{sub};margin-top:8px}}
.cnd.all .msg2{{font:700 20px/1.5 "Aref Ruqaa",serif;color:{name}}}[lang=en] .cnd.all .msg2{{font:700 24px/1.3 "Dancing Script",cursive}}
#bars{{position:absolute;top:calc(8px + env(safe-area-inset-top));left:12px;right:12px;display:flex;gap:4px;z-index:5;direction:ltr;opacity:0;transition:opacity .4s}}
#bars i{{flex:1;height:2.5px;border-radius:2px;background:rgba(255,255,255,.55);overflow:hidden;box-shadow:0 0 2px rgba(0,0,0,.15)}}
#bars i b{{display:block;height:100%;width:0;background:#fff}}
#gate.play #bars{{opacity:1}}
#gate .gt{{position:absolute;left:0;right:0;bottom:calc(120px + env(safe-area-inset-bottom));margin:0 auto;width:max-content;background:#fffc;color:{head};box-shadow:0 8px 20px -12px rgba(0,0,0,.35);transition:opacity .4s;z-index:5}}
#gate.play:not(.end) .gt{{display:none!important}}
#gate.play.end .gt{{opacity:1}}
#gate.play .flag{{display:none}}
{xcss}
.tap{{position:absolute;bottom:calc(70px + env(safe-area-inset-bottom));left:0;right:0;text-align:center;font-size:12px;color:{sub};opacity:0;transition:opacity .4s;z-index:5}}
#gate.play:not(.end) .tap{{opacity:.8}}
</style>
</head>
<body class="locked">
<img class="fl-t" src="../sebou/top-{fl}.webp" alt=""><img class="fl-b" src="../sebou/bottom-{fl}.webp" alt="">
<div class="flag" id="demoFlag">تجربة</div>
<button id="mu" class="off" type="button" aria-label="المزيكا"><svg class="pa" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg><svg class="pl" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></button>
<audio id="bgm" loop preload="none"></audio>

<div id="gate" role="button" tabindex="0" aria-label="افتح الدعوة">
  <div id="bars"><i><b></b></i><i><b></b></i><i><b></b></i><i><b></b></i><i><b></b></i><i><b></b></i></div>
  <div id="scenes"></div>
  <div class="tap" id="tapT"></div>
  <div class="gt" id="gHint"></div>
</div>
<div class="fx" id="fx"></div>

<main id="main" aria-hidden="true"></main>

<script src="../inv-data.js"></script>
<script src="../bday/core.js"></script>
<script>
(function(){{
window.BDAY_ICONS=["🍼","{icon}","🧸","✨"];
var g=document.getElementById("gate"),stage=0;
/* the story plays first; only when it ends does a tap open the invitation */
g.addEventListener("click",function(e){{if(stage<2){{e.stopImmediatePropagation();tapStory()}}}},true);
var D=BDAY.start({{key:"{key}",colors:{cols},event:"سبوع",icon:"{icon}",kicker:"{kicker_ar}",cdKicker:"باقي على يوم السبوع",msgPh:"ربنا يخليه/يخليها ليكم 🤍",sorry:"{sorry_ar}",
  music:"../music-box.mp3",back:"../sebou/",
  en:{{event:"Sebou",kicker:"Welcome to the sweetest little guest who lit up our world",cdKicker:"Counting down to the Sebou",msgPh:"May God bless {he} for you 🤍",sorry:"May God bless {he} for you 🤍",
    demo:{{name:"{demo_en}",parents:"{par_en}",date:"2027-03-06",time:"18:00",venue:"The family home",addr:"Maadi, Cairo",map:"",wa:"",
    intro:"{intro_en}",program:[["18:00","Guests arrive"],["18:30","Mortar & sieve ritual"],["19:00","Candle procession"],["19:30","Sweets"]],
    dress:"",gift:"",notes:"",photos:[],hero:"../sebou/{photo}",music:""}}}},
  demo:{{name:"{demo_ar}",parents:"{par_ar}",date:"2027-03-06",time:"18:00",venue:"بيت العيلة",addr:"المعادي، القاهرة",map:"",wa:"",
    intro:"{intro_ar}",program:[["18:00","استقبال الضيوف"],["18:30","دق الهون والغربال"],["19:00","زفة الشموع"],["19:30","توزيع الحلويات"]],
    dress:"",gift:"",notes:"",photos:[],hero:"../sebou/{photo}",music:""}},
  open:function(g,confetti){{setTimeout(function(){{confetti(70,[innerWidth/2,innerHeight*.5])}},150);return 900}}}});
if(!D)return;
var EN=document.documentElement.lang==="en";
/* interactive calendar card, before the countdown */
(function(){{var en=document.documentElement.lang==="en",d=new Date((D.date||"2027-01-01")+"T12:00:00"),y=d.getFullYear(),m=d.getMonth(),day=d.getDate();
  var N=function(n){{return en?String(n):String(n).replace(/\d/g,function(x){{return"٠١٢٣٤٥٦٧٨٩"[x]}})}};
  var MO=en?["January","February","March","April","May","June","July","August","September","October","November","December"]:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
  var WD=en?["Su","Mo","Tu","We","Th","Fr","Sa"]:["ح","ن","ث","ر","خ","ج","س"];
  var first=new Date(y,m,1).getDay(),dim=new Date(y,m+1,0).getDate(),prev=new Date(y,m,0).getDate(),h="";
  WD.forEach(function(w){{h+="<span>"+w+"</span>"}});
  for(var i=first-1;i>=0;i--)h+='<b class="o">'+N(prev-i)+"</b>";
  for(var k=1;k<=dim;k++)h+=k===day?'<b class="ev" role="button" tabindex="0" aria-label="'+(en?"Add to calendar":"ضيفوها للتقويم")+'">'+N(k)+"<i>{icon}</i></b>":"<b>"+N(k)+"</b>";
  var tail=(7-(first+dim)%7)%7;for(var t=1;t<=tail;t++)h+='<b class="o">'+N(t)+"</b>";
  var sec=document.createElement("section");sec.className="card rv cal";
  sec.innerHTML='<div class="kk">'+(en?"Save the date":"احفظوا الميعاد")+'</div><div class="mo">'+MO[m]+'</div><div class="yr">'+N(y)+'</div><div class="gr">'+h+'</div><div class="hint">'+(en?"Tap the heart to add it to your calendar 🗓️":"المسوا القلب عشان تضيفوها للتقويم 🗓️")+'</div>';
  var cd=document.getElementById("cdCard");if(cd)cd.parentNode.insertBefore(sec,cd);
  var ev=sec.querySelector(".ev"),go=function(){{var b=document.getElementById("ics");if(b)b.click()}};ev.addEventListener("click",go);ev.addEventListener("keydown",function(e){{if(e.key==="Enter")go()}});
  if("IntersectionObserver"in window){{var io=new IntersectionObserver(function(es){{es.forEach(function(e){{if(e.isIntersecting){{sec.classList.add("in");io.disconnect()}}}})}},{{threshold:.4}});io.observe(sec)}}else sec.classList.add("in");
}})();
/* interactive: tap the mortar (دق الهون) and light the seven candles (زفة الشموع) */
(function(){{var en=document.documentElement.lang==="en",nm=D.name||"",rs=document.getElementById("rsvp");if(!rs)return;
  var N=function(n){{return en?String(n):String(n).replace(/\d/g,function(x){{return"٠١٢٣٤٥٦٧٨٩"[x]}})}};
  var AC=null;function dong(){{try{{var C=window.AudioContext||window.webkitAudioContext;if(!C)return;AC=AC||new C();if(AC.state==="suspended")AC.resume();var t=AC.currentTime;
    [[520,1,.9],[1430,.45,.6],[2810,.22,.35],[3900,.1,.2]].forEach(function(p){{var o=AC.createOscillator(),g=AC.createGain();o.type="sine";o.frequency.value=p[0];g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.32*p[1],t+.004);g.gain.exponentialRampToValueAtTime(.0008,t+p[2]*1.6);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+p[2]*1.7)}})}}catch(e){{}}}}
  var SAY=en?["Listen to your mum! 😄","Listen to your dad too! 😉","Grow up healthy and happy 🤍","Be kind to your siblings 💕","Don't stay up too late! 🌙","Make us proud, little one ✨"]
    :["اسمع كلام مامتك 😄","واسمع كلام باباك كمان 😉","تكبر وتبقى زي الفل 🤍","ما تزعّلش إخواتك 💕","ما تسهرش كتير 🌙","ربنا يحفظك ويخليك لينا ✨"];
  var hs=document.createElement("section");hs.className="card rv hon";
  hs.innerHTML='<div class="kk">'+(en?"A Sebou tradition":"من عادات السبوع")+'</div><h2>'+(en?"Ring the mortar":"دُقّوا الهون")+'</h2>'+
    '<div class="mt" role="button" tabindex="0" aria-label="'+(en?"Ring the mortar":"دقوا الهون")+'"><div class="ring"></div>'+
    '<svg class="pes" viewBox="0 0 40 150" aria-hidden="true"><defs><linearGradient id="pg" x1="0" x2="1"><stop offset="0" stop-color="#8a5d1f"/><stop offset=".35" stop-color="#f3d27a"/><stop offset=".6" stop-color="#c8963a"/><stop offset="1" stop-color="#7a5118"/></linearGradient></defs><rect x="13" y="0" width="14" height="118" rx="7" fill="url(#pg)"/><ellipse cx="20" cy="128" rx="17" ry="20" fill="url(#pg)"/></svg>'+
    '<svg class="bowl" viewBox="0 0 140 120" aria-hidden="true"><defs><linearGradient id="bg2" x1="0" x2="1"><stop offset="0" stop-color="#7a5118"/><stop offset=".3" stop-color="#e9c46a"/><stop offset=".5" stop-color="#fff0b8"/><stop offset=".7" stop-color="#c8963a"/><stop offset="1" stop-color="#6e4813"/></linearGradient></defs><path d="M8 18 H132 L118 82 Q114 96 98 98 H42 Q26 96 22 82 Z" fill="url(#bg2)"/><ellipse cx="70" cy="18" rx="62" ry="10" fill="#5e3d10"/><ellipse cx="70" cy="17" rx="56" ry="7" fill="#3b2608"/><rect x="40" y="98" width="60" height="10" rx="3" fill="url(#bg2)"/><rect x="30" y="106" width="80" height="12" rx="4" fill="url(#bg2)"/><path d="M28 40 H112" stroke="#fff3c4" stroke-opacity=".45" stroke-width="2"/><path d="M33 62 H107" stroke="#6e4813" stroke-opacity=".35" stroke-width="2"/></svg></div>'+
    '<div class="say" id="hSay">'+(en?"Tap the mortar 👆":"المسوا الهون 👆")+'</div><div class="cnt2" id="hCnt"></div>';
  rs.parentNode.insertBefore(hs,rs);
  var mt=hs.querySelector(".mt"),k=0,tm=null;function hit(){{dong();if(navigator.vibrate)navigator.vibrate(25);mt.classList.remove("hit");void mt.offsetWidth;mt.classList.add("hit");clearTimeout(tm);tm=setTimeout(function(){{mt.classList.remove("hit")}},400);
    var sy=document.getElementById("hSay");sy.style.opacity=0;setTimeout(function(){{sy.textContent=SAY[k%SAY.length];sy.style.opacity=1}},120);k++;
    document.getElementById("hCnt").textContent=en?("Rang "+k+(k===1?" time":" times")):("دقيتوا "+N(k)+" "+(k===1?"مرة":k===2?"مرتين":(k<=10?"مرات":"مرة")))}}
  mt.addEventListener("click",hit);mt.addEventListener("keydown",function(e){{if(e.key==="Enter"||e.key===" "){{e.preventDefault();hit()}}}});
  var cs=document.createElement("section");cs.className="card rv cnd";var h="";for(var i=0;i<7;i++)h+='<div class="c" role="button" tabindex="0" aria-label="'+(en?"Light candle ":"نوّروا شمعة ")+N(i+1)+'"><i class="gl"></i><i class="fl"></i><i class="wk"></i><b class="wx" style="height:'+[54,62,70,78,70,62,54][i]+'px"></b></div>';
  cs.innerHTML='<div class="kk">'+(en?"The candle procession":"زفة الشموع")+'</div><h2>'+(en?"Light the 7 candles":"نوّروا السبع شمعات")+'</h2><div class="row">'+h+'</div><div class="msg2" id="cMsg">'+(en?"Tap each candle to light it 🕯️":"المسوا كل شمعة عشان تنوّروها 🕯️")+'</div>';
  rs.parentNode.insertBefore(cs,rs);
  var lit=0;cs.querySelectorAll(".c").forEach(function(c){{var f=function(){{if(c.classList.contains("on"))return;c.classList.add("on");lit++;if(navigator.vibrate)navigator.vibrate(10);
      var m=document.getElementById("cMsg");if(lit<7)m.textContent=en?(lit+" of 7 candles lit ✨"):(N(lit)+" من ٧ شمعات نوّرت ✨");
      else{{cs.classList.add("all");m.textContent=en?("You lit up "+nm+"'s Sebou 🕯️🤍"):("نوّرتوا سبوع "+nm+" 🕯️🤍");var r=cs.getBoundingClientRect();if(window.BDAY&&BDAY.confetti)BDAY.confetti(70,[innerWidth/2,r.top+r.height*.4])}}}};
    c.addEventListener("click",f);c.addEventListener("keydown",function(e){{if(e.key==="Enter"||e.key===" "){{e.preventDefault();f()}}}})}});
}})();
var esc=function(s){{return String(s==null?"":s).replace(/[&<>"]/g,function(c){{return{{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}}[c]}})}};
var L=function(s,cls){{return String(s).split("|").map(function(x){{return'<span class="ln'+(cls?" "+cls:"")+'">'+esc(x)+'</span>'}}).join("")}};
var BF='<svg class="bf" viewBox="0 0 64 48" aria-hidden="true"><g class="w"><path d="M32 24 C 22 2, 2 2, 6 16 C 8 24, 20 26, 32 24 Z" fill="{wing1}" stroke="{wing2}" stroke-width="1.6"/><path d="M32 24 C 20 26, 8 32, 14 42 C 20 48, 30 36, 32 24 Z" fill="{wing1}" stroke="{wing2}" stroke-width="1.6"/></g><g class="w w2"><path d="M32 24 C 42 2, 62 2, 58 16 C 56 24, 44 26, 32 24 Z" fill="{wing1}" stroke="{wing2}" stroke-width="1.6"/><path d="M32 24 C 44 26, 56 32, 50 42 C 44 48, 34 36, 32 24 Z" fill="{wing1}" stroke="{wing2}" stroke-width="1.6"/></g><path d="M32 14 V36" stroke="#8a5560" stroke-width="2.2" stroke-linecap="round"/></svg>';
var dt=new Date((D.date||"2027-01-01")+"T12:00:00"),two=function(n){{return(n<10?"0":"")+n}};
var dt2=new Date((D.date||"2027-01-01")+"T"+(D.time||"18:00")+":00"),hh=dt2.getHours(),mm=dt2.getMinutes();
var tstr=EN?((hh%12||12)+(mm?":"+two(mm):"")+(hh<12?" AM":" PM")):((hh%12||12)+(mm?":"+two(mm):"")+(hh<12?" صباحًا":" مساءً")).replace(/\d/g,function(d){{return"٠١٢٣٤٥٦٧٨٩"[d]}});
var dstr=dt.toLocaleDateString(EN?"en-GB":"ar-EG",{{weekday:"long",day:"numeric",month:"long"}}).replace(/[،,]/g,"")+(EN?" · ":"، الساعة ")+tstr;
var par=String(D.parents||"").replace(/^(بنت|ابن|daughter of|son of)\s+/i,"");
var S=[
  ["feet",'<div class="tx scr">'+(EN?L("{s1_en}"):L("{s1_ar}"))+BF+'</div>'],
  ["book",'<div class="tx scr">'+(EN?L("{s2_en}"):L("{s2_ar}"))+'</div>'],
  ["bear",'<div class="tx scr">'+L(EN?"With hearts full of love":"بقلوب مليانة حب")+'</div>'],
  ["curtain",'<div class="tx scr">'+(EN?L("{s4_en}"):L("{s4_ar}"))+BF+'</div>'],
  ["card",'<div class="tx">'+BF+'<span class="sb">'+(EN?"Sebou":"سبوع")+'</span><span class="nm scr">'+esc(D.name)+'</span><span class="dt">'+esc(dstr)+'</span></div>'],
  ["paper",'<div class="tx">'+'<span class="ln scr bp">'+(EN?"Blessed Parents":"بفرحة بابا وماما")+'</span>'+(par?'<span class="pn">'+esc(par)+'</span>':'')+'<div class="du">'+(EN?L("{dua_en}"):L("{dua_ar}"))+'</div><span class="ln scr wt">'+(EN?"We can't wait to see you 🤍":"مستنيينكم 🤍")+'</span>'+BF+'</div>']];
document.getElementById("scenes").innerHTML=S.map(function(s,i){{return'<section class="sc s'+(i+1)+'"><div class="st"><img src="../sebou/story/'+s[0]+'-{c}.webp" alt=""'+(i?' loading="eager"':'')+'>'+s[1]+'</div></section>'}}).join("");
var sc=[].slice.call(document.querySelectorAll(".sc")),bars=[].slice.call(document.querySelectorAll("#bars b"));
var hint=document.getElementById("gHint"),tapT=document.getElementById("tapT");
hint.textContent=EN?"Tap to begin {icon}":"المسوا الشاشة {icon}";tapT.textContent=EN?"Tap to continue":"المسوا عشان تكمّلوا";
sc[0].classList.add("on");
var cur=-1,timer=null,DUR=[4600,4200,4000,4800,5600,7600];
function show(i){{clearTimeout(timer);sc.forEach(function(s,k){{s.classList.toggle("on",k===i);if(k!==i)s.classList.remove("typed")}});
  bars.forEach(function(b,k){{b.getAnimations&&b.getAnimations().forEach(function(a){{a.cancel()}});b.style.width=k<i?"100%":"0"}});
  cur=i;void sc[i].offsetWidth;setTimeout(function(){{sc[i].classList.add("typed")}},350);
  if(bars[i].animate)bars[i].animate([{{width:"0"}},{{width:"100%"}}],{{duration:DUR[i],fill:"forwards"}});
  timer=setTimeout(next,DUR[i])}}
function next(){{if(cur<sc.length-1)show(cur+1);else finish()}}
function finish(){{clearTimeout(timer);stage=1.5;g.classList.add("end");hint.textContent=EN?"Open the invitation ✨":"افتحوا الدعوة ✨";stage=2}}
function tapStory(){{
  if(stage===0){{stage=1;g.classList.add("play");var mu=document.getElementById("mu");if(mu&&mu.classList.contains("off"))mu.click();show(0);return}}
  if(stage===1)next()}}
}})();
</script>
</body>
</html>
'''
for k, v in T.items():
    d = dict(v)
    os.makedirs(os.path.join(ROOT, v["dir"]), exist_ok=True)
    open(os.path.join(ROOT, v["dir"], "index.html"), "w", encoding="utf-8").write(HTML.format(**d))
    print("wrote", v["dir"])
