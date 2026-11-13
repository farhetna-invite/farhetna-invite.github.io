/* FARHETNA birthday invitations — shared engine.
   A design page calls BDAY.start({key, demo, colors, open}) after its markup:
   - key: the data key passed to farhetnaData (studio details), demo: sample details for the public page
   - colors: confetti colours, open(gate): the design's own opening animation (returns ms until the page shows) */
(function(){
"use strict";
var AD="٠١٢٣٤٥٦٧٨٩",ar=function(s){return String(s).replace(/\d/g,function(d){return AD[d]})};
var $=function(id){return document.getElementById(id)};
var esc=function(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
var LANG="ar";
var EN={"سنة":"","سنتين":"","سنين":"","صباحًا":"AM","مساءً":"PM","عيد ميلاد":"Birthday","سبوع":"Sebou","دعوة":"Invitation",
"يسعدنا تشاركونا فرحة عيد ميلاد":"Join us to celebrate the birthday of","باقي على اليوم الحلو":"Counting down to the big day","العدّ التنازلي":"Countdown",
"يوم":"Days","ساعة":"Hours","دقيقة":"Minutes","ثانية":"Seconds","النهارده اليوم الحلو 🎉":"Today is the big day 🎉",
"الميعاد والمكان":"Date & venue","مستنيينكم":"We're waiting for you","ميعاد الحفلة":"Party time","افتحوا الخريطة 🗺️":"Open the map 🗺️","ضيفوها للتقويم 🗓️":"Add to calendar 🗓️",
"برنامج الحفلة":"The program","هنعمل إيه؟":"What's planned?","لحظات حلوة":"Sweet moments","ذكريات":"Memories","ملاحظات":"Notes","قبل ما تيجوا":"Before you come",
"👗 اللبس:":"👗 Dress code:","🎁 الهدايا:":"🎁 Gifts:","تأكيد الحضور":"RSVP","هتيجوا؟":"Will you come?","الاسم":"Name","اكتب اسمك":"Your name",
"أكيد جاي 🎉":"I'll be there 🎉","مش هقدر 😔":"Can't make it 😔","عدد الحضور (معاك)":"Number of guests (with you)","رسالة لـ":"A message for ","(اختياري)":"(optional)",
"كل سنة وانت طيب 🎂":"Happy birthday! 🎂","ابعت الرد":"Send reply","ابعته كمان على واتساب":"Also send it on WhatsApp","تعديل الرد":"Edit reply",
"دعوة من":"An invitation by","فرحتنا":"Farhetna","مستنيينك 🎉":"See you there 🎉","هتوحشنا 🤍":"We'll miss you 🤍",
"شكرًا إنك عرّفتنا. تقدر تعدّل ردك في أي وقت.":"Thanks for letting us know. You can edit your reply any time.",
"ردك وصل قبل كده. تقدر تعدّله في أي وقت.":"Your reply was already received. You can edit it any time.","اكتب اسمك من فضلك":"Please enter your name",
"ده عرض معاينة، فالرد مش بيتسجل.":"This is a preview, so replies aren't saved.","دي دعوة تجريبية، فالرد مش بيتسجل. في الدعوة الحقيقية بيوصل لأصحاب الحفلة.":"This is a demo invitation, so replies aren't saved. On a real invitation they reach the hosts.",
"بنبعت ردك…":"Sending your reply…","هنحوّلك لواتساب تبعت ردك…":"Taking you to WhatsApp to send your reply…","معرفناش نسجّل الرد. اتأكد من النت وجرب تاني.":"We couldn't save your reply. Check your connection and try again.",
"أهلًا 🎈\nأنا ":"Hi 🎈\nThis is ","، وبأكد حضوري ":", confirming I'll attend the ","، وللأسف مش هقدر أحضر ":", sorry I can't make it to the "," إن شاء الله\nعدد الحضور: ":"\nGuests: ",
"كل سنة وهو/هي طيب 🎂":"Wishing them a happy birthday 🎂","افتح الدعوة":"Open the invitation",
"يلا نحتفل! 🎈":"Let's celebrate! 🎈","حفلة عيد ميلاد مستنياكم":"A birthday party awaits you","المس الهدية وافتحها 👆":"Tap the gift to open it 👆",
"دعوة خاصة ✨":"A special invitation ✨","لليلة لا تُنسى":"For an unforgettable night","المس الشمعة ونوّرها 🕯️":"Tap the candle to light it 🕯️",
"أهلًا بيكي":"Welcome, little one","أهلًا بيك":"Welcome, little one","المسوا البرواز 🎀":"Tap the frame 🎀","المسوا البرواز 💙":"Tap the frame 💙","تجربة":"Demo","افتحوا الختم 👣":"Open the seal 👣"};
function T(a){return LANG==="en"&&Object.prototype.hasOwnProperty.call(EN,a)?EN[a]:a}
function N(s){return LANG==="en"?String(s):ar(s)}
var SB={url:"https://fjoyqftndulavcjcxaya.supabase.co",key:"sb_publishable_RaxsucJi-Mlswbr0ZCQSKw_GAq79mui"};

function ageWord(n){n=+n;if(!n)return"";if(LANG==="en")return n===1?"year old":"years old";if(n===1)return"سنة";if(n===2)return"سنتين";if(n>=3&&n<=10)return"سنين";return"سنة"}
function icon(txt,i){var R=[[/استقبال|وصول|welcome/i,"👋"],[/تورت|كيك|cake|شمع/i,"🎂"],[/هدايا|هدية|gift/i,"🎁"],[/عشا|غدا|أكل|بوفيه|dinner|food/i,"🍽️"],[/لعب|ألعاب|games/i,"🎠"],[/رقص|دي جي|dj|party|حفلة/i,"🪩"],[/صور|تصوير|photo/i,"📸"],[/ساحر|عروض|show/i,"🎩"],[/هون|غربال|دق/i,"🥁"],[/شمع|شموع|صينية/i,"🕯️"],[/حلويات|ملبس|بونبون|شنط/i,"🍬"]];
  for(var k=0;k<R.length;k++)if(R[k][0].test(txt))return R[k][1];return(window.BDAY_ICONS||["🎈","🎉","🎊","✨"])[i%4]}
function t12(hm){if(!hm)return"";var p=String(hm).split(":"),h=+p[0],m=p[1]||"00";return N((h%12||12)+(m!=="00"?":"+m:""))+" "+T(h<12?"صباحًا":"مساءً")}

/* ---------- music: the design's file, the bride's choice, or a soft music-box "Happy Birthday" (public-domain tune) ---------- */
var Box={ctx:null,gain:null,on:false,timer:null,
  start:function(){try{var C=window.AudioContext||window.webkitAudioContext;if(!C)return false;if(!this.ctx){this.ctx=new C();this.gain=this.ctx.createGain();this.gain.gain.value=0;this.gain.connect(this.ctx.destination)}
    if(this.ctx.state==="suspended")this.ctx.resume();this.on=true;this.gain.gain.setTargetAtTime(.32,this.ctx.currentTime,.4);if(!this.timer)this.loop();return true}catch(e){return false}},
  stop:function(){this.on=false;if(this.gain)this.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.2);clearTimeout(this.timer);this.timer=null},
  note:function(f,t,d){var c=this.ctx,o=c.createOscillator(),o2=c.createOscillator(),g=c.createGain();o.type="sine";o2.type="sine";o.frequency.value=f;o2.frequency.value=f*2.01;
    var g2=c.createGain();g2.gain.value=.18;o2.connect(g2);g2.connect(g);o.connect(g);g.connect(this.gain);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.5,t+.012);g.gain.exponentialRampToValueAtTime(.001,t+Math.max(.9,d*1.6));
    o.start(t);o2.start(t);o.stop(t+Math.max(1,d*1.7));o2.stop(t+Math.max(1,d*1.7))},
  loop:function(){if(!this.on)return;var b=.5,G4=392,A4=440,B4=493.88,C5=523.25,D5=587.33,E5=659.25,F5=698.46,G5=783.99;
    var S=[[G4,.75],[G4,.25],[A4,1],[G4,1],[C5,1],[B4,2],[G4,.75],[G4,.25],[A4,1],[G4,1],[D5,1],[C5,2],[G4,.75],[G4,.25],[G5,1],[E5,1],[C5,1],[B4,1],[A4,2],[F5,.75],[F5,.25],[E5,1],[C5,1],[D5,1],[C5,3]];
    var t=this.ctx.currentTime+.08,self=this;S.forEach(function(n){self.note(n[0],t,n[1]*b);t+=n[1]*b});
    this.timer=setTimeout(function(){self.loop()},(t-this.ctx.currentTime+1.6)*1000)}};

window.BDAY={start:function(cfg){
  var L=window.farhetnaData&&farhetnaData(cfg.key);
  var QL=(location.search.match(/[?&]lang=(ar|en)/)||[])[1];
  LANG=QL||(L?(L.lang==="en"?"en":"ar"):"ar");
  if(LANG==="en"&&cfg.en)Object.keys(cfg.en).forEach(function(k){if(k!=="demo")cfg[k]=cfg.en[k]});
  var demo=(LANG==="en"&&cfg.en&&cfg.en.demo)?cfg.en.demo:cfg.demo;
  var D=L?Object.assign({},demo,L,{demo:false}):Object.assign({demo:true},demo);
  var H=document.documentElement;H.lang=LANG;H.dir=LANG==="en"?"ltr":"rtl";
  /* static text on the opening screen */
  var gt=$("gate");if(gt){gt.setAttribute("aria-label",T("افتح الدعوة"));var w=document.createTreeWalker(gt,4),n;while(n=w.nextNode()){var k=n.data.trim();if(k&&EN[k]&&LANG==="en")n.data=n.data.replace(k,EN[k])}}
  var fl=$("demoFlag");if(fl)fl.textContent=T("تجربة");
  var MODE=window.farhetnaMode||null;
  var age=String(D.age||"").replace(/[٠-٩]/g,function(d){return AD.indexOf(d)}).replace(/\D/g,"");
  var dt=new Date((D.date||"2027-01-01")+"T"+(D.time||"17:00")+":00");
  var EV=cfg.event||T("عيد ميلاد");document.title=(cfg.icon||"🎂")+" "+(D.name||EV)+" · "+(LANG==="en"?EV+" "+T("دعوة"):"دعوة "+EV);

  /* ---------- page ---------- */
  var h="";
  h+='<section class="hero rv"><div class="k">'+esc(cfg.kicker||T("يسعدنا تشاركونا فرحة عيد ميلاد"))+'</div><h1>'+esc(D.name)+'</h1>';
  if(D.parents)h+='<div class="par">'+esc(D.parents)+'</div>';
  if(age)h+='<div class="age"><b>'+N(age)+'</b><small>'+(cfg.ageLabel?cfg.ageLabel(+age):ageWord(age))+'</small></div>';
  if(D.hero)h+='<div class="photo"><img src="'+esc(D.hero)+'" alt=""></div>';
  if(D.intro)h+='<p class="intro">'+esc(D.intro)+'</p>';
  h+='</section>';
  h+='<section class="card rv" id="cdCard"><div class="kk">'+esc(cfg.cdKicker||T("باقي على اليوم الحلو"))+'</div><h2>'+T("العدّ التنازلي")+'</h2><div class="cd" id="cd"><div><b id="cdD">'+N(0)+'</b><span>'+T("يوم")+'</span></div><div><b id="cdH">'+N(0)+'</b><span>'+T("ساعة")+'</span></div><div><b id="cdM">'+N(0)+'</b><span>'+T("دقيقة")+'</span></div><div><b id="cdS">'+N(0)+'</b><span>'+T("ثانية")+'</span></div></div><div class="today hide" id="today">'+T("النهارده اليوم الحلو 🎉")+'</div></section>';
  var LOC=LANG==="en"?"en-GB":"ar-EG",day=dt.toLocaleDateString(LOC,{weekday:"long"}),dm=dt.toLocaleDateString(LOC,{day:"numeric",month:"long",year:"numeric"});
  h+='<section class="card rv"><div class="kk">'+T("الميعاد والمكان")+'</div><h2>'+T("مستنيينكم")+'</h2><div class="when"><div><i>📅</i><b>'+esc(day)+'</b><span>'+esc(dm)+'</span></div><div><i>⏰</i><b>'+t12(D.time||"17:00")+'</b><span>'+T("ميعاد الحفلة")+'</span></div></div>';
  if(D.venue||D.addr)h+='<div class="venue"><b>📍 '+esc(D.venue)+'</b><span>'+esc(D.addr)+'</span></div>';
  h+='<div class="btns">'+(D.map?'<a class="bt" href="'+esc(D.map)+'" target="_blank" rel="noopener">'+T("افتحوا الخريطة 🗺️")+'</a>':(D.venue||D.addr?'<a class="bt" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent([D.venue,D.addr].filter(Boolean).join(" "))+'">'+T("افتحوا الخريطة 🗺️")+'</a>':''))+'<button class="bt gh" id="ics" type="button">'+T("ضيفوها للتقويم 🗓️")+'</button></div></section>';
  var prog=(D.program||[]).filter(function(p){return p&&(p[1]||p[0])});
  if(prog.length){h+='<section class="card rv"><div class="kk">'+T("برنامج الحفلة")+'</div><h2>'+T("هنعمل إيه؟")+'</h2><ul class="prog">';
    prog.forEach(function(p,i){h+='<li><i>'+icon(p[1]||"",i)+'</i><div><b>'+esc(p[1]||"")+'</b><span>'+t12(p[0])+'</span></div></li>'});h+='</ul></section>'}
  var ph=(D.photos||[]).filter(Boolean).slice(0,6);
  if(ph.length){h+='<section class="card rv"><div class="kk">'+T("لحظات حلوة")+'</div><h2>'+T("ذكريات")+'</h2><div class="gal">';ph.forEach(function(u){h+='<img src="'+esc(u)+'" alt="" loading="lazy">'});h+='</div></section>'}
  if(D.dress||D.gift||D.notes){h+='<section class="card rv notes"><div class="kk">'+T("ملاحظات")+'</div><h2>'+T("قبل ما تيجوا")+'</h2>';
    if(D.dress)h+='<p><b>'+T("👗 اللبس:")+'</b> '+esc(D.dress)+'</p>';if(D.gift)h+='<p><b>'+T("🎁 الهدايا:")+'</b> '+esc(D.gift)+'</p>';if(D.notes)h+='<p>'+esc(D.notes)+'</p>';h+='</section>'}
  h+='<section class="card rv" id="rsvp"><div class="kk">'+T("تأكيد الحضور")+'</div><h2>'+T("هتيجوا؟")+'</h2>'+
    '<form id="rf" novalidate><label for="rn">'+T("الاسم")+'</label><input id="rn" autocomplete="name" placeholder="'+T("اكتب اسمك")+'">'+
    '<div class="two"><button type="button" data-a="1" aria-pressed="true">'+T("أكيد جاي 🎉")+'</button><button type="button" data-a="0" aria-pressed="false">'+T("مش هقدر 😔")+'</button></div>'+
    '<div id="cntBox"><label>'+T("عدد الحضور (معاك)")+'</label><div class="cnt"><button type="button" id="minus">−</button><b id="cnt">'+N(1)+'</b><button type="button" id="plus">+</button></div></div>'+
    '<label for="rm">'+T("رسالة لـ")+esc(D.name)+' '+T("(اختياري)")+'</label><textarea id="rm" placeholder="'+esc(cfg.msgPh||T("كل سنة وانت طيب 🎂"))+'"></textarea>'+
    '<button class="send" id="send" type="submit"><span>'+T("ابعت الرد")+'</span></button><div class="err" id="err"></div></form>'+
    '<div class="done hide" id="done"><b id="dBig"></b><p id="dSub"></p><div class="btns"><a class="bt hide" id="dWa" target="_blank" rel="noopener">'+T("ابعته كمان على واتساب")+'</a><button class="bt gh" id="dEdit" type="button">'+T("تعديل الرد")+'</button></div></div></section>';
  h+='<footer>'+T("دعوة من")+' <a href="https://farhetnainvite.com/" target="_blank" rel="noopener">'+T("فرحتنا")+'</a> 🤍</footer>';
  $("main").innerHTML=h;

  /* countdown */
  function tick(){var s=Math.max(0,Math.floor((dt-new Date())/1000));if(!s){$("cd").classList.add("hide");$("today").classList.remove("hide");return}
    $("cdD").textContent=N(Math.floor(s/86400));$("cdH").textContent=N(Math.floor(s%86400/3600));$("cdM").textContent=N(Math.floor(s%3600/60));$("cdS").textContent=N(s%60)}
  tick();setInterval(tick,1000);

  /* calendar */
  $("ics").onclick=function(){var z=function(d){return d.toISOString().replace(/[-:]/g,"").replace(/\.\d+/,"")},e=new Date(+dt+4*3600e3),q=function(x){return String(x||"").replace(/([,;\\])/g,"\\$1")},title=EV+" "+(D.name||"");
    var c=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Farhetna//Birthday//AR","BEGIN:VEVENT","UID:"+z(dt)+"-"+Math.random().toString(36).slice(2)+"@farhetna","DTSTAMP:"+z(new Date()),"DTSTART:"+z(dt),"DTEND:"+z(e),
      "SUMMARY:"+q(title),"LOCATION:"+q([D.venue,D.addr].filter(Boolean).join(" - ")),"BEGIN:VALARM","TRIGGER:-P1D","ACTION:DISPLAY","DESCRIPTION:"+q(title),"END:VALARM","END:VEVENT","END:VCALENDAR"].join("\r\n");
    var u=URL.createObjectURL(new Blob([c],{type:"text/calendar;charset=utf-8"})),a=document.createElement("a");a.href=u;a.download="invitation.ics";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000)};

  /* reveal on scroll */
  var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12}):null;
  function watch(){document.querySelectorAll("main .rv:not(.in)").forEach(function(e){if(io)io.observe(e);else e.classList.add("in")})}

  /* music */
  if(!D.music&&cfg.music)D.music=cfg.music;var au=$("bgm"),useFile=D.music&&D.music!=="none",playing=false;
  if(useFile)au.src=D.music;if(D.music==="none")$("mu").hidden=true;
  function setMu(on){playing=on;$("mu").classList.toggle("off",!on);
    if(useFile){if(on){var p=au.play();if(p&&p.catch)p.catch(function(){playing=false;$("mu").classList.add("off")})}else au.pause()}
    else if(on){if(!Box.start()){playing=false;$("mu").classList.add("off")}}else Box.stop()}
  $("mu").onclick=function(){setMu(!playing)};

  /* confetti */
  function confetti(n,from){var fx=$("fx"),W=innerWidth,H=innerHeight,cols=cfg.colors||["#f6a5b8","#ffc89a","#a8dcc8","#c8b6f0","#9fd0f2","#f3d36b"];
    for(var i=0;i<n;i++){var c=document.createElement("i");c.className="cf";c.style.background=cols[i%cols.length];if(i%3===0)c.style.borderRadius="50%";
      var x0=from?from[0]:W/2,y0=from?from[1]:H*.55,a=-Math.PI/2+(Math.random()-.5)*Math.PI*1.1,v=H*(.45+Math.random()*.55),dx=Math.cos(a)*v*.75,dy=Math.sin(a)*v;
      c.style.left=x0+"px";c.style.top=y0+"px";fx.appendChild(c);
      c.animate([{transform:"translate(-50%,-50%) rotate(0)",opacity:1},{transform:"translate("+(dx*.8)+"px,"+dy+"px) rotate("+(Math.random()*540)+"deg)",opacity:1,offset:.45},{transform:"translate("+dx+"px,"+(dy+H*.9)+"px) rotate("+(Math.random()*900)+"deg)",opacity:0}],
        {duration:2600+Math.random()*1400,easing:"cubic-bezier(.15,.6,.35,1)",fill:"forwards"}).onfinish=function(){this.effect.target.remove()}}}
  window.BDAY.confetti=confetti;

  /* open */
  var opened=false;function open(){if(opened)return;opened=true;var g=$("gate");if(D.music!=="none")setMu(true);if(navigator.vibrate)navigator.vibrate(15);
    var wait=cfg.open?cfg.open(g,confetti):0;
    setTimeout(function(){g.classList.add("open");document.body.classList.remove("locked");document.body.classList.add("open");$("main").removeAttribute("aria-hidden");watch()},wait)}
  $("gate").addEventListener("click",open);$("gate").addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});

  /* RSVP */
  var att=true,cnt=1,DEV=(function(){try{var k="farhetna_dev",v=localStorage.getItem(k);if(!v){v=Math.random().toString(36).slice(2)+Date.now().toString(36);localStorage.setItem(k,v)}return v}catch(e){return""}})();
  var RK="farhetna_rsvp_"+cfg.key+"_"+(D.slug||D.name+D.date);
  document.querySelectorAll(".two button").forEach(function(b){b.onclick=function(){att=b.getAttribute("data-a")==="1";document.querySelectorAll(".two button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b))});$("cntBox").classList.toggle("hide",!att)}});
  function showCnt(){$("cnt").textContent=N(cnt)}
  $("minus").onclick=function(){if(cnt>1){cnt--;showCnt()}};$("plus").onclick=function(){if(cnt<15){cnt++;showCnt()}};
  function waLink(r){var wa=String(D.wa||"").replace(/\D/g,"");if(!wa)return"";if(/^0/.test(wa))wa="2"+wa;
    var m=LANG==="en"?(r.yes?("Hi 🎈\nThis is "+r.name+", confirming I'll attend "+D.name+"'s "+EV.toLowerCase()+"\nGuests: "+r.count):("Hi 🎈\nThis is "+r.name+", sorry I can't make it to "+D.name+"'s "+EV.toLowerCase()+". "+(cfg.sorry||T("كل سنة وهو/هي طيب 🎂")))):r.yes?("أهلًا 🎈\nأنا "+r.name+"، وبأكد حضوري "+EV+" "+D.name+" إن شاء الله\nعدد الحضور: "+r.count):("أهلًا 🎈\nأنا "+r.name+"، وللأسف مش هقدر أحضر "+EV+" "+D.name+". "+(cfg.sorry||"كل سنة وهو/هي طيب 🎂"));
    if(r.msg)m+="\n\n"+r.msg;return"https://wa.me/"+wa+"?text="+encodeURIComponent(m)}
  function done(r,sub){$("rf").classList.add("hide");$("done").classList.remove("hide");$("dBig").textContent=T(r.yes?"مستنيينك 🎉":"هتوحشنا 🤍");$("dSub").textContent=sub||T("شكرًا إنك عرّفتنا. تقدر تعدّل ردك في أي وقت.");
    var w=waLink(r);$("dWa").classList.toggle("hide",!w||MODE!=="live");if(w)$("dWa").href=w;if(r.yes)confetti(60,[innerWidth/2,innerHeight*.6])}
  $("dEdit").onclick=function(){$("done").classList.add("hide");$("rf").classList.remove("hide")};
  try{var prev=JSON.parse(localStorage.getItem(RK)||"null");if(prev&&MODE==="live"){$("rn").value=prev.name;cnt=prev.count||1;showCnt();$("rm").value=prev.msg||"";document.querySelector('.two button[data-a="'+(prev.yes?1:0)+'"]').click();$("rf").classList.add("hide");$("done").classList.remove("hide");$("dBig").textContent=T(prev.yes?"مستنيينك 🎉":"هتوحشنا 🤍");$("dSub").textContent=T("ردك وصل قبل كده. تقدر تعدّله في أي وقت.")}}catch(e){}
  $("rf").onsubmit=function(e){e.preventDefault();var r={name:$("rn").value.trim(),yes:att,count:att?cnt:0,msg:$("rm").value.trim()};$("err").textContent="";
    if(r.name.length<2){$("err").textContent=T("اكتب اسمك من فضلك");$("rn").focus();return}
    if(MODE!=="live"){done(r,T(MODE==="preview"?"ده عرض معاينة، فالرد مش بيتسجل.":"دي دعوة تجريبية، فالرد مش بيتسجل. في الدعوة الحقيقية بيوصل لأصحاب الحفلة."));return}
    var btn=$("send"),lbl=btn.querySelector("span");btn.disabled=true;lbl.textContent=T("بنبعت ردك…");var fin=function(){btn.disabled=false;lbl.textContent=T("ابعت الرد")};
    var toWa=function(){var w=waLink(r);if(w){$("err").textContent=T("هنحوّلك لواتساب تبعت ردك…");setTimeout(function(){location.href=w},800)}else $("err").textContent=T("معرفناش نسجّل الرد. اتأكد من النت وجرب تاني.");fin()};
    if(!D.slug){toWa();return}
    fetch(SB.url+"/rest/v1/rpc/add_rsvp",{method:"POST",headers:{"Content-Type":"application/json",apikey:SB.key,Authorization:"Bearer "+SB.key},body:JSON.stringify({p_slug:D.slug,p_name:r.name,p_attending:r.yes,p_guests:r.count,p_note:r.msg,p_device:DEV})})
    .then(function(res){if(!res.ok)throw new Error(res.status);try{localStorage.setItem(RK,JSON.stringify(r))}catch(e){}fin();done(r)}).catch(toWa)};

  /* public demo: a small switch between the Arabic and English versions */
  if(D.demo&&!MODE){var lb=document.createElement("a");lb.id="bdLang";lb.textContent=LANG==="en"?"ع":"EN";lb.href="?lang="+(LANG==="en"?"ar":"en");
    var ls=document.createElement("style");ls.textContent="#bdLang{position:fixed;z-index:60;top:12px;right:72px;height:26px;min-width:34px;padding:0 9px;display:flex;align-items:center;justify-content:center;border-radius:99px;background:var(--chip);color:var(--chipInk);font:600 12px/1 system-ui,sans-serif;text-decoration:none}[dir=ltr] #bdLang{right:auto;left:66px}[dir=ltr] .flag{right:auto;left:auto;right:12px}";
    document.head.appendChild(ls);document.body.appendChild(lb)}
  /* the back button on public demos goes to the birthday page */
  setTimeout(function(){var b=$("fhBack");if(b)b.href=(cfg.back||"../birthday/")},1600);
  return D;
}};
})();
