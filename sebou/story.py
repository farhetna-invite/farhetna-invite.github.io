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
      s4_ar="ونكشف لكم اسم|أميرتنا الحلوة", s4_en="We reveal the name of|our sweet little princess",
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
      s4_ar="ونكشف لكم اسم|أميرنا الحلو", s4_en="We reveal the name of|our sweet little prince",
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
.s5.typed .nm,.s5.typed .dt{{filter:none;opacity:1}}
.s6 .tx{{top:17%;left:14%;right:14%}}
.s6 .bp{{font-size:min(10vw,44px);line-height:1.2}}
.s6 .pn{{display:block;font-size:min(7vw,30px);line-height:1.4;color:{name};margin:2px 0 14px}}
[lang=ar] .s6 .pn{{font-family:"Aref Ruqaa",serif}}[lang=en] .s6 .pn{{font-family:"Dancing Script",cursive}}
.s6 .du .ln{{font:500 min(4.3vw,18px)/1.75 "Amiri",serif}}[lang=en] .s6 .du .ln{{font:italic 500 min(4.4vw,18.5px)/1.6 "Cormorant Garamond",serif;font-weight:600}}
.bf{{display:block;width:min(15vw,62px);margin:0 auto 6px;animation:hov 3s ease-in-out infinite}}
.bf .w{{transform-origin:50% 50%;animation:flap .5s ease-in-out infinite alternate}}
.bf .w2{{animation-delay:.08s}}
@keyframes flap{{from{{transform:scaleX(1)}}to{{transform:scaleX(.35)}}}}
@keyframes hov{{0%,100%{{transform:translateY(0)}}50%{{transform:translateY(-6px)}}}}
.s1 .bf{{margin-top:10px}}
/* progress bars like a story */
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
var esc=function(s){{return String(s==null?"":s).replace(/[&<>"]/g,function(c){{return{{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}}[c]}})}};
var L=function(s,cls){{return String(s).split("|").map(function(x){{return'<span class="ln'+(cls?" "+cls:"")+'">'+esc(x)+'</span>'}}).join("")}};
var BF='<svg class="bf" viewBox="0 0 64 48" aria-hidden="true"><g class="w"><path d="M32 24 C 22 2, 2 2, 6 16 C 8 24, 20 26, 32 24 Z" fill="{wing1}" stroke="{wing2}" stroke-width="1.6"/><path d="M32 24 C 20 26, 8 32, 14 42 C 20 48, 30 36, 32 24 Z" fill="{wing1}" stroke="{wing2}" stroke-width="1.6"/></g><g class="w w2"><path d="M32 24 C 42 2, 62 2, 58 16 C 56 24, 44 26, 32 24 Z" fill="{wing1}" stroke="{wing2}" stroke-width="1.6"/><path d="M32 24 C 44 26, 56 32, 50 42 C 44 48, 34 36, 32 24 Z" fill="{wing1}" stroke="{wing2}" stroke-width="1.6"/></g><path d="M32 14 V36" stroke="#8a5560" stroke-width="2.2" stroke-linecap="round"/></svg>';
var dt=new Date((D.date||"2027-01-01")+"T12:00:00"),two=function(n){{return(n<10?"0":"")+n}};
var dstr=two(dt.getDate())+"."+two(dt.getMonth()+1)+"."+dt.getFullYear();
var par=String(D.parents||"").replace(/^(بنت|ابن|daughter of|son of)\s+/i,"");
var S=[
  ["feet",'<div class="tx scr">'+(EN?L("{s1_en}"):L("{s1_ar}"))+BF+'</div>'],
  ["book",'<div class="tx scr">'+(EN?L("{s2_en}"):L("{s2_ar}"))+'</div>'],
  ["bear",'<div class="tx scr">'+L(EN?"With hearts full of love":"بقلوب مليانة حب")+'</div>'],
  ["curtain",'<div class="tx scr">'+(EN?L("{s4_en}"):L("{s4_ar}"))+BF+'</div>'],
  ["card",'<div class="tx">'+BF+'<span class="nm scr">'+esc(D.name)+'</span><span class="dt">'+dstr+'</span></div>'],
  ["paper",'<div class="tx">'+'<span class="ln scr bp">'+(EN?"Blessed Parents":"بفرحة بابا وماما")+'</span>'+(par?'<span class="pn">'+esc(par)+'</span>':'')+'<div class="du">'+(EN?L("{dua_en}"):L("{dua_ar}"))+'</div>'+BF+'</div>']];
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
