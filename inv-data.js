/* فرحتنا · bridge between the studio and the Signature designs.
   A design page calls farhetnaData("<key>") right after its demo data; it returns the couple's
   real details (from the studio) mapped to that design's fields, or null for the public demo. */
(function(){
"use strict";
var raw=null,mode=null;
try{
  var h=location.hash||"",m=h.match(/[#&]d=([^&]+)/);
  if(m){var b=m[1].replace(/-/g,"+").replace(/_/g,"/");while(b.length%4)b+="=";
    raw=JSON.parse(decodeURIComponent(escape(atob(b))));mode="live";}
  else if(/[#&]k=preview/.test(h)){raw=JSON.parse(sessionStorage.getItem("farhetna_preview")||"null");mode=raw?"preview":null;}
}catch(e){raw=null;mode=null}
window.farhetnaMode=mode;            // "live" (guest link) · "preview" (studio) · null (public demo)

var AD="٠١٢٣٤٥٦٧٨٩";
function toEn(s){return String(s||"").replace(/[٠-٩]/g,function(d){return AD.indexOf(d)})}
function pad(n){return(n<10?"0":"")+n}
/* "7:00 م - استقبال الضيوف" → ["19:00","استقبال الضيوف"] */
function parseProgram(txt){
  return String(txt||"").split(/\n+/).map(function(l){l=toEn(l).trim();if(!l)return null;
    var m=l.match(/^(\d{1,2})(?:[:.](\d{2}))?\s*(صباحًا|صباحا|مساءً|مساء|ص|م|am|pm|AM|PM)?\s*[-–—:|]?\s*(.*)$/);
    if(!m||!m[4])return["",l];
    var h=+m[1],mi=m[2]||"00",ap=(m[3]||"").toLowerCase();
    if(/^(م|مساء|مساءً|pm)$/.test(ap)&&h<12)h+=12;else if(/^(ص|صباحا|صباحًا|am)$/.test(ap)&&h===12)h=0;else if(!ap&&h>=1&&h<=11)h+=12;
    return[pad(h)+":"+mi,m[4].trim()];}).filter(Boolean);
}
function lastPart(a){a=String(a||"").split(/[،,]/);return a.length>1?a[a.length-1].trim():""}
function music(o){if(!o.music||o.music==="design")return null;if(o.music==="none")return"none";
  if(o.music==="custom")return o.songUrl||null;return"../music-"+o.music+".mp3"}
var ENV={ilr:["ivory","sage","powder","blush"],bhy:["powder","sage","blush","ivory"]};

window.farhetnaData=function(key){
  if(!raw)return null;var o=raw;
  var hasEn=!!(o.groomEn&&o.brideEn),prog=parseProgram(o.program);
  var album=(o.photos&&o.photos.album||[]).filter(function(u){return u&&/^(https?:|data:|blob:)/.test(u)});
  var base={groom:o.groom||"",bride:o.bride||"",date:o.date||"",time:o.time||"19:00",venue:o.venue||"",addr:o.addr||"",
    city:lastPart(o.addr),map:o.map||"",wa:(o.wa||"").replace(/\D/g,""),album:album,program:prog};
  var mu=music(o);if(mu)base.music=mu;
  if(key==="olg"){
    var oh=(o.photos&&/^(https?:|data:|blob:)/.test(o.photos.hero||""))?o.photos.hero:"";
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",date:o.date||"",time:base.time,venue:o.venue||"",addr:o.addr||"",map:o.map||"",wa:base.wa,
      intro:o.intro||"",story:o.story||"",pGroom:o.pGroom||"",pBride:o.pBride||"",hide:o.hide||[],witnesses:o.witnesses||"",band:o.band||"",program:prog,notes:o.notes||"",attire:o.dressNote||"",
      hero:oh||"img/hero.webp",photos:album,music:mu||"",slug:String(o._slug||"").toLowerCase()};}
  if(key==="rbw"||key==="rbm"){ /* milestone birthday: groom = name, bride = age, story = love note, pBride = signature */
    return{name:o.groom||"",age:o.bride||"",story:o.story||"",intro:o.intro||"",from:o.pBride||"",date:o.date||"",time:o.time||"20:00",venue:o.venue||"",addr:o.addr||"",map:o.map||"",wa:base.wa,
      program:prog,dress:o.dressNote||"",notes:o.notes||"",photos:album,surprise:!!o.surprise,music:mu||"",slug:String(o._slug||"").toLowerCase(),lang:o.invLang==="en"?"en":"ar"};}
  if(key==="bdy"||key==="bdn"||key==="sbg"||key==="sbb"||key==="ssg"||key==="ssb"){ /* birthday: groom = name, bride = age · baby welcome (sbg/sbb): groom = baby name, bride = parents line */
    var bh=(o.photos&&/^(https?:|data:|blob:)/.test(o.photos.hero||""))?o.photos.hero:"";
    var sb=key==="sbg"||key==="sbb"||key==="ssg"||key==="ssb";
    return{name:o.groom||"",age:sb?"":(o.bride||""),parents:sb?(o.bride||""):"",intro:o.intro||"",date:o.date||"",time:o.time||"17:00",venue:o.venue||"",addr:o.addr||"",map:o.map||"",wa:base.wa,
      program:prog,dress:o.dressNote||"",gift:o.gift||"",notes:o.notes||"",hero:bh,photos:album,music:mu||"",slug:String(o._slug||"").toLowerCase(),lang:o.invLang==="en"?"en":"ar"};}
  if(key==="bbl"||key==="bgd"){
    base.lang=hasEn?"en":"ar";if(hasEn){base.groom=o.groomEn;base.bride=o.brideEn;if(o.venueEn)base.venue=o.venueEn;}
    if(key==="bbl")base.look={env:"burgundy",seal:"orig"};
    if(!hasEn){base.welcome="يسعدنا ويشرّفنا وجودكم معانا في أجمل أيامنا";base.thanks="شكرًا لأنكم جزء من حكايتنا، ووجودكم معانا هو أجمل هدية. مستنيينكم تنوّروا فرحتنا."}
    if(key==="bgd")base.program=prog.map(function(p,i){return[p[0],p[1],["arrive","rings","couple","dinner","music"][i%5]]});
    if(o.dressEn||o.dressNote)base.attire=hasEn?(o.dressEn||o.dressNote):(o.dressNote||o.dressEn);
    return base;}
  if(key==="ilr"||key==="bhy"){
    base.program=prog.map(function(p){var t=p[0]?(function(){var h=+p[0].split(":")[0];return(h%12||12)+":"+p[0].split(":")[1]})():"";return[t,p[1]]});
    base.look={env:(ENV[key][o.pal||0]||ENV[key][0])};if(key==="bhy"){base.look.seal="orig";base.look.sc="offwhite";base.look.ini=o.mono||""}
    return base;}
  if(key==="pls"){
    var d=new Date((o.date||"2027-01-01")+"T12:00:00"),h=+String(base.time).split(":")[0];
    var ar=function(n){return String(n).replace(/\d/g,function(x){return AD[x]})};
    return{groomAr:o.groom||"",brideAr:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",date:base.date,time:base.time,
      dayAr:d.toLocaleDateString("ar-EG",{weekday:"long"}),dayNum:String(d.getDate()),monthAr:d.toLocaleDateString("ar-EG",{month:"long"})+" "+ar(d.getFullYear()),
      timeAr:ar(h%12||12)+(String(base.time).split(":")[1]!=="00"?":"+ar(String(base.time).split(":")[1]):"")+(h<12?" صباحًا":" مساءً"),
      venueName:base.venue,venueAddr:base.addr,mapUrl:base.map,wa:base.wa,
      program:prog.map(function(p){var hh=p[0]?+p[0].split(":")[0]:0;return{t:p[0]?((hh%12||12)+":"+p[0].split(":")[1]+(hh<12?" AM":" PM")):"",ar:p[1],en:""}}),
      rsvpBy:"",inviteId:(o.groom||"")+"-"+(o.date||""),music:mu||null};}
  if(key==="uws"){
    var d2=new Date((o.date||"2027-01-01")+"T12:00:00");
    return{bride:hasEn?o.brideEn:o.bride,groom:hasEn?o.groomEn:o.groom,
      date:{weekday:d2.toLocaleDateString("ar-EG",{weekday:"long"}),day:String(d2.getDate()),month:d2.toLocaleDateString("ar-EG",{month:"long"}),year:String(d2.getFullYear())},
      venueName:o.venue||"",venueAddress:o.addr||"",mapsUrl:o.map||"",rsvpWhatsApp:base.wa,
      schedule:prog.map(function(p,i){var hh=p[0]?+p[0].split(":")[0]:0;return{time:p[0]?((hh%12||12)+":"+p[0].split(":")[1]):"",period:hh<12?"صباحًا":"مساءً",label:p[1],icon:["cloche","rings","dinner","fireworks"][Math.min(i,3)]}}),
      music:mu||null};}
  if(key==="gdc"){
    var hp=(o.photos&&/^(https?:|data:|blob:)/.test(o.photos.hero||""))?o.photos.hero:"",ps=(hp?[hp]:[]).concat(album);
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",date:o.date||"",time:base.time,
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",map:o.map||"",wa:base.wa,pGroom:o.pGroom||"",pBride:o.pBride||"",program:prog,
      hero:ps[0]||"img/p1.webp",photos:ps.length?ps.slice(0,8):["img/p1.webp","img/p2.webp","img/p3.webp"],music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  if(key==="azl"){
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",date:o.date||"",time:base.time,
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",map:o.map||"",wa:base.wa,intro:o.intro||"",program:prog,
      dress:(o.dress||[]).filter(function(c){return/^#[0-9a-f]{3,8}$/i.test(c)}),dressNote:o.dressNote||"",dressEn:o.dressEn||"",
      couple:album[0]||"img/couple.webp",dressLadies:o.dressLadies||"",dressGents:o.dressGents||"",music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  if(key==="tsn"){
    var h2=(o.photos&&/^(https?:|data:|blob:)/.test(o.photos.hero||""))?o.photos.hero:"",pics=(h2?[h2]:[]).concat(album);
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",date:o.date||"",time:base.time,quote:o.poem||"",
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",map:o.map||"",dressNote:o.dressNote||"",dressEn:o.dressEn||"",
      gift:o.gift||"",ipay:o.ipay||"",ipayName:o.ipayName||"",ipayLink:/^https?:\/\//.test(o.ipayLink||"")?o.ipayLink:"",wa:base.wa,
      hero:pics[0]||"",p1:pics[1]||"",p2:pics[2]||"",music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  if(key==="ilt"){
    var hero=(o.photos&&/^(https?:|data:|blob:)/.test(o.photos.hero||""))?o.photos.hero:(album[0]||"");
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",date:o.date||"",time:base.time,
      story:o.story||"",pBride:o.pBride||"",pGroom:o.pGroom||"",witnesses:o.witnesses||"",band:o.band||"",
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",map:o.map||"",wa:base.wa,program:prog,
      hero:hero,storyPhoto:album[1]||"",album:album.slice(0,6),music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  if(key==="sgm"){
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",mono:o.mono||"",date:o.date||"",time:base.time,
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",map:o.map||"",wa:base.wa,program:prog,
      dress:(o.dress||[]).filter(function(c){return/^#[0-9a-f]{3,8}$/i.test(c)}),dressNote:o.dressNote||"",dressEn:o.dressEn||"",
      album:album.slice(0,3),story:album[3]||album[0]||"",music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  if(key==="sga"||key==="bsw"){
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",mono:o.mono||"",date:o.date||"",time:base.time,
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",map:o.map||"",wa:base.wa,intro:o.intro||"",program:prog,
      dress:(o.dress||[]).filter(function(c){return/^#[0-9a-f]{3,8}$/i.test(c)}),dressNote:o.dressNote||"",dressEn:o.dressEn||"",
      closing:o.closing||"",notes:o.notes||"",album:album.slice(0,8),bism:o.bism!=="off",music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  if(key==="pgt"){
    var vp=(o.photos&&(o.photos.venue||o.photos.hero))||"";
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",mono:o.mono||"",date:o.date||"",time:base.time,
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",addrEn:o.addrEn||"",map:o.map||"",intro:o.intro||"",kind:o.kind||"",
      closing:o.closing||"",thanks:o.notes||"",wa:base.wa,program:prog,rsvpBy:o.rsvpBy||"",venuePhoto:/^(https?:|data:|blob:)/.test(vp)?vp:"",
      dress:(o.dress||[]).filter(function(c){return/^#[0-9a-f]{3,8}$/i.test(c)}),dressNote:o.dressNote||"",dressEn:o.dressEn||"",
      music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  if(key==="snd"){
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",mono:o.mono||"",date:o.date||"",time:base.time,
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",addrEn:o.addrEn||"",map:o.map||"",intro:o.intro||"",kind:o.kind||"",
      closing:o.closing||"",notes:o.notes||"",wa:base.wa,dress:(o.dress||[]).filter(function(c){return/^#[0-9a-f]{3,8}$/i.test(c)}),
      dressNote:o.dressNote||"",dressEn:o.dressEn||"",music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  if(key==="swp"){
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",mono:o.mono||"",date:o.date||"",time:base.time,
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",addrEn:o.addrEn||"",map:o.map||"",intro:o.intro||"",kind:o.kind||"",
      bism:o.bism!=="off",music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  if(key==="sgp"||key==="rvl"){
    return{groom:o.groom||"",bride:o.bride||"",groomEn:o.groomEn||"",brideEn:o.brideEn||"",mono:o.mono||"",date:o.date||"",time:base.time,
      venue:o.venue||"",venueEn:o.venueEn||"",addr:o.addr||"",map:o.map||"",wa:base.wa,intro:o.intro||"",program:prog,
      dress:(o.dress||[]).filter(function(c){return/^#[0-9a-f]{3,8}$/i.test(c)}),dressNote:o.dressNote||"",dressEn:o.dressEn||"",
      closing:o.closing||"",notes:o.notes||"",music:mu||null,slug:String(o._slug||"").toLowerCase()};}
  return base;
};

/* RSVP from a real invitation goes to the couple's WhatsApp (same as the studio designs) */
window.farhetnaRsvp=function(r){
  if(mode!=="live"||!raw)return false;var wa=(raw.wa||"").replace(/\D/g,"");if(!wa)return false;
  if(/^0/.test(wa))wa="2"+wa;
  var B=raw.bride||raw.brideEn||"",G=raw.groom||raw.groomEn||"";
  var EV=/خطوب/.test(raw.kind||"")?"خطوبة":/كتب|قران/.test(raw.kind||"")?"كتب كتاب":/حن/.test(raw.kind||"")?"حنة":"فرح";
  var msg=r.yes?("السلام عليكم 🤍\nأنا "+r.name+"، وبأكد حضوري "+EV+" "+B+" و"+G+" إن شاء الله"+(r.count?"\nعدد الضيوف: "+r.count:""))
               :("السلام عليكم 🤍\nأنا "+r.name+"، وللأسف مش هقدر أحضر "+EV+" "+B+" و"+G+". ألف مبروك!");
  if(r.msg)msg+="\n"+r.msg;
  setTimeout(function(){location.href="https://wa.me/"+wa+"?text="+encodeURIComponent(msg)},600);return true;
};
/* the "demo" ribbon is only for the public demo */
if(mode){document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll("#demoFlag,.demo,.demo-flag").forEach(function(e){if(mode==="preview")e.textContent="معاينة";else e.remove()})});}
/* credit for guests: every real invitation ends with a small link back to Farhetna (tracked as "from an invitation") */
(function(){
  if(mode!=="live"&&mode!=="preview")return;   /* the bride sees it in her preview too, exactly as guests will */
  var U="https://farhetnainvite.com/?utm_source=invite&utm_medium=guest";
  function put(){
    var ex=document.querySelectorAll('a[href^="https://farhetna-invite.github.io"],a[href^="https://farhetnainvite.com"]'),n=0;
    for(var i=0;i<ex.length;i++){var h=ex[i].getAttribute("href");if(/^https:\/\/(farhetna-invite\.github\.io|farhetnainvite\.com)\/?$/.test(h)){ex[i].href=U;ex[i].target="_blank";ex[i].rel="noopener";n++;}}
    if(n||document.getElementById("fhCredit"))return;
    var d=document.createElement("div");d.id="fhCredit";
    d.innerHTML='<a href="'+U+'" target="_blank" rel="noopener">💌 صمّمي دعوتك مع فرحتنا</a>';
    /* designs that move screen by screen: the credit sits at the bottom of their last screen */
    var LAST={"blushing-garden":'section.page[data-k="thanks"]',"burgundy-bloom":"#s-thanks","pearl-silk":"#s-thanks","unwritten-story":"#s8"};
    var dir=(location.pathname.match(/\/([a-z-]+)\/(?:index\.html)?$/)||[])[1],sel=LAST[dir],host=sel&&document.querySelector(sel);
    var st=document.createElement("style");st.textContent="#fhCredit{position:relative;z-index:5;text-align:center;padding:18px 12px calc(26px + env(safe-area-inset-bottom));font:600 13px/1.6 system-ui,-apple-system,'Segoe UI',Tahoma,sans-serif;opacity:.8}#fhCredit a{color:inherit;text-decoration:underline;text-underline-offset:3px}#fhCredit.fh-abs{position:absolute;left:0;right:0;bottom:calc(6px + env(safe-area-inset-bottom));padding:8px 12px}";
    document.head.appendChild(st);
    if(host){d.className="fh-abs";if(getComputedStyle(host).position==="static")host.style.position="relative";host.appendChild(d);}
    else if(LAST[dir])return;
    else (document.querySelector("main")||document.body).appendChild(d);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",put);else put();
})();
/* back-to-designs button: only on the public demo (not on a guest's real invitation, not inside the studio preview) */
(function(){
  if(mode!==null)return;
  try{if(window.top!==window)return}catch(e){return}
  /* public demo only: load the site's pixel + ad-source script (never on a guest's real invitation) */
  if(!document.querySelector('script[src$="fa.js"]')){var fs=document.createElement("script");fs.src="../fa.js";fs.defer=true;document.head.appendChild(fs);}
  function add(){
    if(document.getElementById("fhBack"))return;
    var a=document.createElement("a");a.id="fhBack";a.href="../index.html#designs";a.setAttribute("aria-label","رجوع للتصاميم");
    a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg><span>التصاميم</span>';
    var s=document.createElement("style");
    s.textContent='#fhBack{position:fixed;z-index:2147483000;left:14px;bottom:calc(16px + env(safe-area-inset-bottom));display:flex;align-items:center;gap:4px;height:38px;padding:0 14px 0 10px;border-radius:999px;background:rgba(251,246,240,.92);color:#3c4733;font:500 14px "Noto Naskh Arabic",system-ui,sans-serif;text-decoration:none;direction:rtl;box-shadow:0 6px 16px -6px rgba(0,0,0,.35),inset 0 0 0 1px rgba(85,104,74,.25);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);animation:fhIn .6s ease 1s both}'+
      '#fhBack svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'+
      '#fhBack:active{transform:scale(.95)}@keyframes fhIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}'+
      '@media (prefers-reduced-motion:reduce){#fhBack{animation:none}}';
    var f=(location.pathname.match(/\/([a-z-]+)\/(?:index\.html)?$/)||[])[1]||"";
    var T="top:max(14px,env(safe-area-inset-top));bottom:auto;";
    var P={"azure-lake":"left:66px;","swan-palace":"left:66px;","sunset-doors":"left:66px;","palace-gate":"left:66px;","unwritten-story":"left:auto;right:14px;","burgundy-bloom":T,"ivory-lace-royal":T,"blue-hydrangea":T,"blushing-garden":T,
      "pearl-silk":"top:calc(max(14px,env(safe-area-inset-top)) + 46px);bottom:auto;"};
    if(P[f])s.textContent+="#fhBack{"+P[f]+"}";
    document.head.appendChild(s);document.body.appendChild(a);
    a.addEventListener("click",function(e){
      try{var r=document.referrer?new URL(document.referrer):null;
        if(r&&r.origin===location.origin&&/\/(index\.html)?$/.test(r.pathname)&&history.length>1){e.preventDefault();history.back()}}catch(x){}
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",add);else add();
})();
})();
/* Farhetna chrome (demo badge, back button, credit) follows the invitation's own language */
(function(){
  var T={"تجربة":"Demo","معاينة":"Preview","التصاميم":"Designs","💌 صمّمي دعوتك مع فرحتنا":"💌 Design yours with Farhetna"},R={};
  for(var k in T)R[T[k]]=k;
  function run(){
    var en=document.documentElement.lang==="en",M=en?T:R;
    var els=document.querySelectorAll("#demoFlag,.flag,#fhBack span,#fhCredit a,footer a[href*='farhetnainvite']");
    for(var i=0;i<els.length;i++){var e=els[i];if(e.children.length)continue;var t=e.textContent.trim();if(M[t])e.textContent=M[t]}
    var b=document.getElementById("fhBack");if(b)b.setAttribute("aria-label",en?"Back to designs":"رجوع للتصاميم");
  }
  function go(){run();try{new MutationObserver(run).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]})}catch(e){}setTimeout(run,600);setTimeout(run,2000)}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",go);else go();
})();

/* «اعمل دعوتك مع فرحتنا» — a small, quiet line at the very end of real guest links only
   (not in the studio preview, not in the public demos). It sits on its own little card so it reads on light and dark designs. */
(function(){
  if(window.farhetnaMode!=="live")return;
  try{if(window.top!==window.self)return}catch(e){return}
  var key=(location.pathname.split("/").filter(Boolean)[0]||"invite");
  function el(){
    var en=(document.documentElement.lang||"").slice(0,2)==="en";
    var wa="https://wa.me/201280067110?text="+encodeURIComponent(en?"Hello Farhetna 🤍 I saw one of your invitations and I'd like one like it":"أهلًا فرحتنا 🤍 شفت دعوة من تصميمكم وعايز أعمل دعوة زيها");
    var f=document.createElement("div");f.id="farhetnaMw";f.setAttribute("dir",en?"ltr":"rtl");
    f.innerHTML='<style>#farhetnaMw{position:relative;z-index:1;clear:both;padding:26px 16px calc(34px + env(safe-area-inset-bottom));text-align:center;font-family:inherit}'+
      '#farhetnaMw .c{display:inline-block;padding:14px 18px 12px;border-radius:22px;background:rgba(255,251,245,.9);color:#4a1f29;box-shadow:0 10px 26px -14px rgba(40,10,15,.55),inset 0 0 0 1px rgba(199,154,75,.45);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}'+
      '#farhetnaMw p{margin:0 0 8px;font-size:13.5px;opacity:.75}'+
      '#farhetnaMw a{text-decoration:none;color:inherit}'+
      '#farhetnaMw .b{display:inline-block;padding:9px 18px;border-radius:999px;background:linear-gradient(180deg,#7a2a36,#5a1420);color:#fbeedd;font-size:15px}'+
      '#farhetnaMw .b b{font-weight:700}'+
      '#farhetnaMw .w{display:flex;align-items:center;justify-content:center;gap:5px;margin-top:8px;font-size:12.5px;opacity:.8}'+
      '#farhetnaMw svg{width:15px;height:15px}</style>'+
      '<div class="c"><p>'+(en?"Loved this invitation?":"عجبتك الدعوة؟")+'</p>'+
      '<a class="b" href="https://farhetnainvite.com/?utm_source=invite&amp;utm_medium=footer&amp;utm_campaign='+encodeURIComponent(key)+'" target="_blank" rel="noopener">'+(en?"Make yours with <b>Farhetna</b> ✨":"اعمل دعوتك مع <b>فرحتنا</b> ✨")+'</a>'+
      '<a class="w" href="'+wa+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#25a35a" d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.3 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2zm5.6 13.9c-.2.7-1.4 1.3-2 1.3-.5.1-1.2.1-1.9-.1a14 14 0 0 1-1.7-.6 13.5 13.5 0 0 1-5.2-4.6c-.4-.5-1.1-1.6-1.1-3s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.1.1.7-.1 1.4z"/></svg>'+(en?"Chat with us on WhatsApp":"كلّمنا واتساب")+'</a></div>';
    return f}
  /* put it at the end of whatever actually scrolls (some designs scroll inside a box, not the page) */
  function host(){
    var best=null,bestA=0,vh=innerHeight;
    document.querySelectorAll("body *").forEach(function(n){
      if(n.id==="farhetnaMw")return;var cs=getComputedStyle(n);
      if(!/(auto|scroll)/.test(cs.overflowY))return;if(n.scrollHeight<=n.clientHeight+40||n.clientHeight<vh*.5)return;
      var a=n.clientWidth*n.clientHeight;if(a>bestA){bestA=a;best=n}});
    return best||document.body}
  /* designs that already end with «صمّمي دعوتك مع فرحتنا» keep their own line; we only add the WhatsApp link under it */
  function waOnly(link){var en=(document.documentElement.lang||"").slice(0,2)==="en";
    var w=document.createElement("a");w.id="farhetnaMw";w.target="_blank";w.rel="noopener";
    w.href="https://wa.me/201280067110?text="+encodeURIComponent(en?"Hello Farhetna 🤍 I saw one of your invitations and I'd like one like it":"أهلًا فرحتنا 🤍 شفت دعوة من تصميمكم وعايز أعمل دعوة زيها");
    w.style.cssText="display:block;width:max-content;margin:8px auto 0;font-size:.85em;opacity:.8;color:inherit;text-decoration:none";
    w.textContent=en?"💬 Chat with us on WhatsApp":"💬 كلّمنا واتساب";
    try{var u=new URL(link.href);u.searchParams.set("utm_source","invite");u.searchParams.set("utm_medium","footer");u.searchParams.set("utm_campaign",key);link.href=u.toString()}catch(e){}
    link.parentNode.insertBefore(w,link.nextSibling)}
  function place(){if(document.getElementById("farhetnaMw"))return;
    try{var own=null;document.querySelectorAll('a[href^="https://farhetnainvite.com"]').forEach(function(a){if(!own&&!a.closest(".fhBar,#fhBack"))own=a});
      if(own){waOnly(own);return}
      host().appendChild(el())}catch(e){}}
  function go(){setTimeout(place,1200)}
  if(document.readyState==="complete")go();else addEventListener("load",go);
})();
