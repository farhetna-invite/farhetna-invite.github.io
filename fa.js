/* فرحتنا · marketing events (Meta Pixel ready — OFF until a real Pixel ID is set)
   - Put the real Pixel ID in FARHETNA_PIXEL_ID below. Leave it empty and nothing loads or is sent.
   - The pixel only loads after the visitor accepts the cookie notice.
   - Purchases are NOT sent from the browser: payments are confirmed manually (InstaPay review),
     so a Purchase must only be recorded after an admin verifies the payment. */
(function(){
"use strict";
var FARHETNA_PIXEL_ID="1645602507052286";          // ← e.g. "123456789012345" (from Meta Events Manager). Empty = disabled.
var KEY="farhetna_consent",consent=null;try{consent=localStorage.getItem(KEY)}catch(e){}
/* where did this visitor come from? remembered 30 days, an ad visit wins over a plain one */
var SKEY="farhetna_src",DAY=864e5;
function readSrc(){try{var o=JSON.parse(localStorage.getItem(SKEY)||"null");if(o&&Date.now()-o.at<30*DAY)return o}catch(e){}return null}
(function capture(){try{
  var q=new URLSearchParams(location.search),g=function(k){return (q.get(k)||"").slice(0,80)};
  var us=g("utm_source"),um=g("utm_medium"),fb=g("fbclid"),gc=g("gclid");
  if(us||fb||gc){
    var ad=!!(fb||gc||/paid|cpc|cpm|ad/i.test(um)||/^(fb|facebook|ig|instagram|meta|tiktok|google|snap)/i.test(us));
    localStorage.setItem(SKEY,JSON.stringify({ad:ad,src:us||(fb?"facebook":"google"),camp:g("utm_campaign"),adn:g("utm_content")||g("utm_term"),at:Date.now()}));return;}
  if(readSrc())return;
  var r="";try{r=document.referrer?new URL(document.referrer).hostname:""}catch(e){}
  if(r===location.hostname)return;
  localStorage.setItem(SKEY,JSON.stringify({ad:false,src:r||"direct",at:Date.now()}));
}catch(e){}})();
window.farhetnaSource=readSrc;
var queue=[],loaded=false;
function load(){
  if(loaded||!FARHETNA_PIXEL_ID)return;loaded=true;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
  fbq("init",FARHETNA_PIXEL_ID);fbq("track","PageView");
  queue.forEach(function(a){fbq("track",a[0],a[1])});queue=[];
}
/* Allowed events only. Demo interactions are ViewContent, never sales. */
var ALLOWED={ViewContent:1,InitiateCheckout:1,Contact:1,Lead:1};
window.farhetnaTrack=function(ev,data){
  if(!ALLOWED[ev])return;                       // Purchase is intentionally blocked here
  if(!FARHETNA_PIXEL_ID)return;
  if(loaded&&window.fbq)fbq("track",ev,data||{});else queue.push([ev,data||{}]);
};
function banner(){
  if(!FARHETNA_PIXEL_ID||consent)return;
  var en=document.documentElement.lang==="en";
  var d=document.createElement("div");d.className="fa-consent";d.setAttribute("role","dialog");
  d.innerHTML='<p>'+(en?"We use cookies to measure our ads and improve your experience.":"بنستخدم ملفات تعريف الارتباط لقياس إعلاناتنا وتحسين تجربتك.")+'</p><div><button type="button" data-a="yes">'+(en?"Accept":"موافقة")+'</button><button type="button" data-a="no">'+(en?"No thanks":"لا شكرًا")+'</button></div>';
  d.addEventListener("click",function(e){var a=e.target.getAttribute("data-a");if(!a)return;consent=a;try{localStorage.setItem(KEY,a)}catch(_){}d.remove();load()});
  var st=document.createElement("style");st.textContent=".fa-consent{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:120;max-width:520px;margin:0 auto;background:#fbf5ee;border:1px solid rgba(85,104,74,.35);border-radius:18px;padding:12px 14px;box-shadow:0 10px 30px rgba(60,71,51,.18);font-size:14px;color:#4b4a3d;display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap}.fa-consent p{flex:1 1 220px;margin:0;line-height:1.6}.fa-consent button{font:inherit;border-radius:20px;padding:7px 14px;border:1px solid #55684a;background:#55684a;color:#fff;margin-inline-start:6px;cursor:pointer}.fa-consent button[data-a=no]{background:transparent;color:#55684a}";
  document.head.appendChild(st);document.body.appendChild(d);
}
/* auto events from links marked in the HTML */
document.addEventListener("click",function(e){
  var a=e.target.closest&&e.target.closest("[data-track]");if(!a)return;
  window.farhetnaTrack(a.getAttribute("data-track"),{content_name:a.getAttribute("data-design")||undefined,currency:"EGP",value:+(a.getAttribute("data-price")||0)||undefined});
},true);
function start(){load()}   /* no consent banner: pixel loads for every visitor */
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
