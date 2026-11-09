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
  return base;
};

/* RSVP from a real invitation goes to the couple's WhatsApp (same as the studio designs) */
window.farhetnaRsvp=function(r){
  if(mode!=="live"||!raw)return false;var wa=(raw.wa||"").replace(/\D/g,"");if(!wa)return false;
  if(/^0/.test(wa))wa="2"+wa;
  var B=raw.bride||raw.brideEn||"",G=raw.groom||raw.groomEn||"";
  var msg=r.yes?("السلام عليكم 🤍\nأنا "+r.name+"، وبأكد حضوري فرح "+B+" و"+G+" إن شاء الله"+(r.count?"\nعدد الضيوف: "+r.count:""))
               :("السلام عليكم 🤍\nأنا "+r.name+"، وللأسف مش هقدر أحضر فرح "+B+" و"+G+". ألف مبروك!");
  if(r.msg)msg+="\n"+r.msg;
  setTimeout(function(){location.href="https://wa.me/"+wa+"?text="+encodeURIComponent(msg)},600);return true;
};
/* the "demo" ribbon is only for the public demo */
if(mode){document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll("#demoFlag,.demo,.demo-flag").forEach(function(e){if(mode==="preview")e.textContent="معاينة";else e.remove()})});}
})();
