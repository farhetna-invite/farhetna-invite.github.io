# Builds the two baby-welcome (سبوع) designs from one template: python3 sebou/make.py
import os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = {
  "girl": dict(dir="sebou-girl", key="sbg", c="pink", title="Little Bloom", theme="#fbeef0",
      bg1="#fdf5f4", bg2="#f6dde2", ink="#5a3a45", sub="#8f6f78", name="#c4607a", head="#a24f66", card="#fffafa", cell="#fdeef1",
      line="#f2d2da", btn="#c4607a", inner1="#fbe6ea", inner2="#f2c9d2", ribbon="#efb2c1", ribbon2="#e294a8",
      kicker="أهلًا بأحلى ضيفة نوّرت دنيتنا", hello="أهلًا بيكي", welcome="WELCOME BABY GIRL", sorry="ربنا يخليها ليكم 🤍",
      demo_name="وتين", parents="بنت أحمد ومنى", photo="baby-girl.webp", icon="🎀",
      intro="جت الدنيا تنوّرها 🎀\nوعايزين نحتفل بيها مع أغلى الناس في سبوعها",
      cols='["#f6b8c6","#fcd5dd","#ffffff","#e98fa5","#f9e3b0","#d9ecdf"]'),
  "boy": dict(dir="sebou-boy", key="sbb", c="blue", title="Little Sky", theme="#eaf2fa",
      bg1="#f4f9fd", bg2="#dbe8f4", ink="#33465a", sub="#6b7f93", name="#4a7aab", head="#3d6893", card="#fbfdff", cell="#ebf3fb",
      line="#cfe0f0", btn="#4f82b6", inner1="#e7f0f9", inner2="#c6dbef", ribbon="#a8c8e8", ribbon2="#86b0da",
      kicker="أهلًا بأحلى ضيف نوّر دنيتنا", hello="أهلًا بيك", welcome="WELCOME BABY BOY", sorry="ربنا يخليه ليكم 🤍",
      demo_name="يوسف", parents="ابن كريم وسارة", photo="baby-boy.webp", icon="💙",
      intro="جه الدنيا ينوّرها 💙\nوعايزين نحتفل بيه مع أغلى الناس في سبوعه",
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
<link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../bday/core.css">
<style>
:root{{--bg:{bg1};--ink:{ink};--sub:{sub};--name:{name};--head:{head};--card:{card};--cell:{cell};--num:{name};--line:{line};--btn:{btn};--btnInk:#fff;--field:#fff;--chip:rgba(255,255,255,.88);--chipInk:{head}}}
body{{background:linear-gradient(180deg,{bg1},{bg2} 60%,{bg1}) fixed}}
body{{position:relative}}.fl-t,.fl-b{{position:absolute;left:0;right:0;pointer-events:none;z-index:0}}
.fl-t{{top:-2px;height:auto;width:100%}}.fl-b{{bottom:-2px;width:100%}}
main{{z-index:1}}
.card{{box-shadow:0 16px 34px -24px rgba(90,60,70,.5);border:1px solid {line}}}
.hero h1{{color:{name};text-shadow:0 2px 0 #fff,0 6px 18px rgba(0,0,0,.08)}}
.hero .k{{margin-top:70px}}
.photo{{width:210px;height:270px;border-radius:50%/42%;border:7px solid #fff;box-shadow:0 0 0 2px {ribbon},0 18px 34px -18px rgba(90,60,70,.5)}}
.welc{{font-family:"Cormorant Garamond",serif;letter-spacing:.32em;font-size:13px;color:{sub};margin-top:4px}}

/* gate */
#gate{{background:linear-gradient(180deg,{bg1},{bg2})}}
#gate .ft,#gate .fb{{position:absolute;left:0;width:100%;pointer-events:none}}
#gate .ft{{top:-2px}}#gate .fb{{bottom:-2px}}
.rib{{position:absolute;left:50%;top:0;width:22px;margin-left:-11px;background:linear-gradient(90deg,{ribbon2},{ribbon} 40%,#fff6 50%,{ribbon} 60%,{ribbon2});box-shadow:0 2px 6px rgba(0,0,0,.08)}}
.hang{{position:absolute;left:50%;top:0;transform-origin:50% 0;will-change:transform}}
.frame{{width:min(68vw,290px);margin-left:calc(min(68vw,290px)/-2)}}
.frame .rib{{height:21vh}}
.frame .body{{position:relative;margin-top:calc(21vh - 18px)}}
.frame svg{{width:100%;display:block;overflow:visible;filter:drop-shadow(0 16px 22px rgba(90,60,70,.25))}}
.frame .nm{{position:absolute;left:0;right:0;top:20%;bottom:8%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}}
.frame .nm b{{font-family:"Aref Ruqaa",serif;font-size:min(16vw,70px);line-height:1.1;color:{name};text-shadow:0 2px 0 rgba(255,255,255,.95),0 4px 10px rgba(90,60,70,.18)}}
.frame .nm small{{font-family:"Cormorant Garamond",serif;letter-spacing:.3em;font-size:11px;color:{head};opacity:.8;margin-top:6px}}
.swing,.hang2{{display:flow-root}}
.swing{{animation:swing 4s ease-in-out infinite}}
@keyframes swing{{0%,100%{{transform:rotate(-3deg)}}50%{{transform:rotate(3deg)}}}}
.card2{{width:min(86vw,370px);margin-left:calc(min(86vw,370px)/-2);transform:translateY(-120vh)}}
.card2 .rib{{height:25vh}}
.card2 .body{{position:relative;margin-top:calc(25vh - 22px)}}
.card2 svg.sh{{width:100%;display:block;filter:drop-shadow(0 18px 24px rgba(90,60,70,.25))}}
.card2 .seal{{position:absolute;left:50%;top:52%;width:34%;transform:translate(-50%,-50%);transition:transform .6s cubic-bezier(.3,1.5,.4,1),opacity .5s .2s;cursor:pointer}}
.card2 .seal img{{width:100%;display:block;filter:drop-shadow(0 6px 8px rgba(90,40,50,.3));animation:pulse 2.2s ease-in-out infinite}}
@keyframes pulse{{0%,100%{{transform:scale(1)}}50%{{transform:scale(1.06)}}}}
.card2 .txt{{position:absolute;inset:16% 10% 12%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;opacity:0;transition:opacity .9s .35s;color:{ink}}}
.card2 .txt i{{font-style:normal;font-size:13px;color:{sub}}}
.card2 .txt span{{font-family:"Cormorant Garamond",serif;letter-spacing:.28em;font-size:10.5px;color:{sub};margin-top:4px}}
.card2 .txt b{{font-family:"Aref Ruqaa",serif;font-size:min(13vw,52px);color:{name};line-height:1.2}}
.card2 .txt em{{font-style:normal;font-size:13px;color:{sub}}}
.body svg.bow{{position:absolute;left:50%;top:-30px;width:86px;margin-left:-43px;z-index:2;filter:drop-shadow(0 3px 4px rgba(90,60,70,.2))}}
#gate .gt{{position:absolute;left:0;right:0;bottom:calc(150px + env(safe-area-inset-bottom));margin:0 auto;width:max-content;background:#fffc;color:{head};box-shadow:0 8px 20px -12px rgba(0,0,0,.35);transition:opacity .3s}}
#gate.s1 .frame{{transition:transform 1s cubic-bezier(.6,0,.4,1);transform:translateY(-130vh) rotate(6deg)}}
#gate.s1 .card2{{transition:transform 1.3s cubic-bezier(.25,1.25,.4,1) .45s;transform:translateY(0)}}
#gate.s1 .card2 .hang2{{animation:swing2 3.4s ease-in-out 1.8s infinite}}
@keyframes swing2{{0%,100%{{transform:rotate(-1.6deg)}}50%{{transform:rotate(1.6deg)}}}}
#gate.s2 .card2 .seal{{transform:translate(-50%,-50%) scale(1.5);opacity:0}}
#gate.s2 .card2 .seal img{{animation:none}}
#gate.s2 .card2 .txt{{opacity:1}}
#gate.s2 .gt{{opacity:0}}
</style>
</head>
<body class="locked">
<img class="fl-t" src="../sebou/top-{c}.webp" alt=""><img class="fl-b" src="../sebou/bottom-{c}.webp" alt="">
<div class="flag" id="demoFlag">تجربة</div>
<button id="mu" class="off" type="button" aria-label="المزيكا"><svg class="pa" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg><svg class="pl" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></button>
<audio id="bgm" loop preload="none"></audio>

<div id="gate" role="button" tabindex="0" aria-label="افتح الدعوة">
  <img class="ft" src="../sebou/top-{c}.webp" alt=""><img class="fb" src="../sebou/bottom-{c}.webp" alt="">
  <div class="hang frame"><div class="swing" style="transform-origin:50% 0">
    <div class="rib"></div>
    <div class="body">
      <svg class="bow" viewBox="0 0 100 60" aria-hidden="true"><path d="M50 30 C 30 2, 4 8, 10 26 C 14 38, 34 36, 50 30 Z" fill="{ribbon}" stroke="{ribbon2}" stroke-width="2"/><path d="M50 30 C 70 2, 96 8, 90 26 C 86 38, 66 36, 50 30 Z" fill="{ribbon}" stroke="{ribbon2}" stroke-width="2"/><path d="M46 32 L36 58 L44 54 L48 60 L52 34 Z M54 32 L64 58 L56 54 L52 60 L48 34 Z" fill="{ribbon}" stroke="{ribbon2}" stroke-width="1.5"/><ellipse cx="50" cy="30" rx="8" ry="7" fill="{ribbon2}"/></svg>
      <svg viewBox="0 0 240 300" aria-hidden="true"><defs><radialGradient id="in" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="{inner1}"/><stop offset="1" stop-color="{inner2}"/></radialGradient><linearGradient id="fr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#f6f1ee"/><stop offset="1" stop-color="#e9e1dc"/></linearGradient></defs>
        <ellipse cx="120" cy="150" rx="116" ry="146" fill="url(#fr)"/><ellipse cx="120" cy="150" rx="104" ry="134" fill="none" stroke="#fff" stroke-width="3" opacity=".9"/><ellipse cx="120" cy="150" rx="98" ry="128" fill="url(#in)" stroke="#e6dcd6" stroke-width="2"/>
        <g fill="#fff" opacity=".85">{beads}</g></svg>
      <div class="nm"><b id="gName">{demo_name}</b><small>{welcome}</small></div>
    </div></div></div>
  <div class="hang card2"><div class="hang2" style="transform-origin:50% 0">
    <div class="rib"></div>
    <div class="body">
      <svg class="bow" viewBox="0 0 100 60" aria-hidden="true"><path d="M50 30 C 30 2, 4 8, 10 26 C 14 38, 34 36, 50 30 Z" fill="{ribbon}" stroke="{ribbon2}" stroke-width="2"/><path d="M50 30 C 70 2, 96 8, 90 26 C 86 38, 66 36, 50 30 Z" fill="{ribbon}" stroke="{ribbon2}" stroke-width="2"/><path d="M46 32 L36 58 L44 54 L48 60 L52 34 Z M54 32 L64 58 L56 54 L52 60 L48 34 Z" fill="{ribbon}" stroke="{ribbon2}" stroke-width="1.5"/><ellipse cx="50" cy="30" rx="8" ry="7" fill="{ribbon2}"/></svg>
      <svg class="sh" viewBox="0 0 300 220" aria-hidden="true"><path d="M34 14 Q62 14 74 4 H226 Q238 14 266 14 Q280 36 292 46 V174 Q280 184 266 206 Q238 206 226 216 H74 Q62 206 34 206 Q20 184 8 174 V46 Q20 36 34 14 Z" fill="{inner1}" stroke="#fff" stroke-width="4"/><path d="M40 24 Q64 24 76 15 H224 Q236 24 260 24 Q272 42 282 51 V169 Q272 177 260 196 Q236 196 224 205 H76 Q64 196 40 196 Q28 177 18 169 V51 Q28 42 40 24 Z" fill="none" stroke="{ribbon}" stroke-width="1.2" stroke-dasharray="3 4"/></svg>
      <div class="txt"><i>{hello}</i><b id="gName2">{demo_name}</b><span>{welcome}</span><em id="gPar">{parents}</em></div>
      <div class="seal"><img src="../sebou/seal-{c}.webp" alt=""></div>
    </div></div></div>
  <div class="gt" id="gHint">المسوا البرواز {icon}</div>
</div>
<div class="fx" id="fx"></div>

<main id="main" aria-hidden="true"></main>

<script src="../inv-data.js"></script>
<script src="../bday/core.js"></script>
<script>
(function(){{
window.BDAY_ICONS=["🍼","🎀","🧸","✨"];
var g=document.getElementById("gate"),stage=0;
/* first tap: the frame swings away and the card with the seal comes down; the second tap (the seal) opens the invitation */
g.addEventListener("click",function(e){{if(stage===0){{stage=1;e.stopImmediatePropagation();g.classList.add("s1");document.getElementById("gHint").textContent="افتحوا الختم 👣";}}
  else if(stage===1&&!(e.target.closest&&e.target.closest(".card2"))){{e.stopImmediatePropagation()}}}},true);
var D=BDAY.start({{key:"{key}",colors:{cols},event:"سبوع",icon:"{icon}",kicker:"{kicker}",cdKicker:"باقي على يوم السبوع",msgPh:"ربنا يخليه/يخليها ليكم 🤍",sorry:"{sorry}",
  music:"../music-box.mp3",back:"../sebou/",
  demo:{{name:"{demo_name}",parents:"{parents}",date:"2027-03-06",time:"18:00",venue:"بيت العيلة",addr:"المعادي، القاهرة",map:"",wa:"",
    intro:"{intro_js}",program:[["18:00","استقبال الضيوف"],["18:30","دق الهون والغربال"],["19:00","زفة الشموع"],["19:30","توزيع الحلويات"]],
    dress:"",gift:"",notes:"",photos:[],hero:"../sebou/{photo}",music:""}},
  open:function(g,confetti){{g.classList.add("s2");setTimeout(function(){{confetti(70,[innerWidth/2,innerHeight*.5])}},350);return 2100}}}});
if(D){{var n=D.name||"";["gName","gName2"].forEach(function(id){{var e=document.getElementById(id);if(e)e.textContent=n}});var p=document.getElementById("gPar");if(p)p.textContent=D.parents||"";}}
}})();
</script>
</body>
</html>
'''
import math
def beads():
    out = []
    for i in range(28):
        a = i / 28 * 2 * math.pi
        out.append('<circle cx="%.1f" cy="%.1f" r="2.6"/>' % (120 + 110 * math.cos(a), 150 + 140 * math.sin(a)))
    return "".join(out)
for k, v in T.items():
    d = dict(v); d["beads"] = beads(); d["intro_js"] = v["intro"].replace("\n", "\\n")
    os.makedirs(os.path.join(ROOT, v["dir"]), exist_ok=True)
    open(os.path.join(ROOT, v["dir"], "index.html"), "w", encoding="utf-8").write(HTML.format(**d))
    print("wrote", v["dir"])
