/* FARHETNA My Magazine — reader (intro, page turning, contents, voice notes) */
window.MAG_MOUNT=function(C,edition,rawName,opts){opts=opts||{};
const EDITIONS=window.MAG_EDITIONS,LANG=C.lang,ED=EDITIONS[edition]||EDITIONS.emerald;
document.body.className="ed-"+(EDITIONS[edition]?edition:"emerald");
document.documentElement.lang=LANG;document.documentElement.dir=LANG==="ar"?"rtl":"ltr";
const $=id=>document.getElementById(id),L=C.ui;
$("iFor").textContent=C.intro.for;$("iT").textContent=rawName||"";if(LANG==="en")$("iT").classList.add("en");
$("iO").textContent=L.open;$("iH").textContent=L.hint;$("toc").textContent=L.toc;$("tocT").textContent=L.tocT;
if(opts.tag){$("demoTag").textContent=opts.tag;$("demoTag").hidden=false}
const num=n=>LANG==="ar"?String(n).replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]):String(n);
/* pages: cover first, then content pages in the order the customer set */
const IMGOF=k=>k||"";
const list=[{type:"cover",toc:LANG==="ar"?"الغلاف":"Cover",img:C.mag.coverImg},...C.pages];
const html=(p,i)=>p.type==="cover"?ED.cover(C.mag,L):(ED.pages[p.type]||(()=>""))(p,i,L);
$("mini").innerHTML=ED.cover(C.mag,L);
const book=$("book");const P=list.map((p,i)=>{const d=document.createElement("div");d.className="page";d.innerHTML=html(p,i)+'<div class="shade"></div><div class="curl"></div>';d.hidden=i!==0;book.appendChild(d);return d});
let cur=0,busy=false;
function cnt(){$("cnt").textContent=num(cur+1)+" / "+num(P.length);$("prev").style.opacity=cur?1:.35;$("next").style.opacity=cur<P.length-1?1:.35;
  [...$("tocL").children].forEach((li,k)=>li.classList.toggle("on",k===cur))}
function go(to){if(busy||to<0||to>=P.length||to===cur)return;busy=true;stopAudio();const a=P[cur],b=P[to];
  if(to>cur){b.hidden=false;b.style.zIndex=1;a.style.zIndex=2;a.classList.add("out");setTimeout(()=>{a.classList.remove("out");a.hidden=true;a.style.zIndex="";b.style.zIndex="";cur=to;busy=false;cnt()},900)}
  else{b.hidden=false;b.style.zIndex=2;a.style.zIndex=1;b.classList.add("in");setTimeout(()=>{b.classList.remove("in");a.hidden=true;a.style.zIndex="";b.style.zIndex="";cur=to;busy=false;cnt()},900)}}
$("next").onclick=()=>go(cur+1);$("prev").onclick=()=>go(cur-1);
let sx=0,sy=0;book.addEventListener("touchstart",e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
book.addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)<45||Math.abs(dx)<Math.abs(dy)*1.2)return;go(cur+((LANG==="ar"?dx>0:dx<0)?1:-1))});
addEventListener("keydown",e=>{if(e.key==="ArrowLeft")go(cur+(LANG==="ar"?1:-1));if(e.key==="ArrowRight")go(cur+(LANG==="ar"?-1:1))});
book.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g){go(+g.dataset.go);return}});
/* contents */
list.forEach((p,i)=>{const li=document.createElement("li");const img=IMGOF(p.img||(p.photos&&p.photos[0])||(p.items&&p.items[0]&&p.items[0].img)||"");
  li.innerHTML=`<button><i style="${img?`background-image:url(${img})`:""}">${img?"":num(i+1)}</i>${p.toc}</button>`;li.querySelector("button").onclick=()=>{closeT();setTimeout(()=>go(i),260)};$("tocL").appendChild(li)});
const closeT=()=>{$("sheet").classList.remove("on");$("scrim").classList.remove("on")};
$("toc").onclick=()=>{$("sheet").classList.add("on");$("scrim").classList.add("on")};$("scrim").onclick=closeT;
/* voice notes */
/* background music: optional, off until the reader taps it, never comes back by itself */
const MU=C.music&&C.music.src?C.music:null;let mus=null,musBtn=null;
const musicOff=()=>{if(mus&&!mus.paused)mus.pause();if(musBtn){musBtn.classList.remove("on");musBtn.setAttribute("aria-pressed","false")}};
if(MU){musBtn=document.getElementById("musBtn")||document.createElement("button");musBtn.id="musBtn";musBtn.type="button";musBtn.className="musb";
  musBtn.setAttribute("aria-pressed","false");musBtn.setAttribute("aria-label",(C.lang==="en"?"Background music: ":"مزيكا الخلفية: ")+MU.name);
  musBtn.innerHTML='<svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg><span>'+(C.lang==="en"?"Music":"مزيكا")+'</span>';
  (document.querySelector(".nav")||document.body).appendChild(musBtn);
  musBtn.onclick=()=>{if(!mus){mus=new Audio(MU.src);mus.loop=true;mus.preload="auto";mus.volume=.55;mus.addEventListener("pause",()=>{musBtn.classList.remove("on");musBtn.setAttribute("aria-pressed","false")})}
    if(mus.paused){if(typeof stopAudio==="function")stopAudio();mus.play().then(()=>{musBtn.classList.remove("hint");musBtn.classList.add("on");musBtn.setAttribute("aria-pressed","true")}).catch(()=>{musBtn.classList.add("hint")})}else musicOff()}}
const aud=$("aud");let playing=null,raf=0;
function stopAudio(){if(!aud.paused)aud.pause();cancelAnimationFrame(raf);if(playing){playing.querySelectorAll(".wave i").forEach(i=>i.classList.remove("on"));playing.querySelector("svg").innerHTML='<path d="M7 4l13 8-13 8z"/>';playing=null}}
book.addEventListener("click",e=>{const v=e.target.closest(".vn");if(!v)return;if(playing===v){stopAudio();return}stopAudio();musicOff();playing=v;aud.src=v.dataset.src||"";if(!aud.src){playing=null;return}aud.currentTime=0;aud.play().catch(()=>{});
  v.querySelector("svg").innerHTML='<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>';const bars=[...v.querySelectorAll(".wave i")];
  const tm=v.querySelector('.tm'),f=x=>Math.floor(x/60)+':'+String(Math.floor(x%60)).padStart(2,'0');
  const tick=()=>{const p=aud.duration?aud.currentTime/aud.duration:0;bars.forEach((b,j)=>b.classList.toggle("on",j/bars.length<=p));if(tm&&aud.duration)tm.textContent=f(aud.currentTime)+' / '+f(aud.duration);if(!aud.paused)raf=requestAnimationFrame(tick)};tick()});
aud.addEventListener("ended",stopAudio);
$("open").onclick=()=>{$("intro").classList.add("gone");
  /* sample issue: the tap on "open" starts the music (a user gesture, so phones allow it); if blocked, the button stays ready */
  if(opts.autoMusic&&musBtn&&(!mus||mus.paused))musBtn.click()};
/* leaving the page or switching apps stops the music; it only comes back when the reader taps it */
addEventListener("pagehide",()=>{musicOff();stopAudio()});
document.addEventListener("visibilitychange",()=>{if(document.hidden){musicOff();stopAudio()}});
if(opts.open)$("intro").classList.add("gone");
cnt();
};
