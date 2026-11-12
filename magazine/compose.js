/* FARHETNA My Magazine — turns what the customer typed and uploaded into magazine pages.
   Up to 12 pages, filled automatically; pages with no content are skipped.
   Every text a customer writes is escaped here, before any template sees it. */
(function(){
const esc=t=>String(t==null?"":t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const nl=t=>esc(t).replace(/\n/g,"<br>");
const OCC={
  birthday:{ar:{ed:"The Birthday Issue",kick:"Happy Birthday",head:n=>`كل سنة وإنتي <em class='foil'>${n}</em>`,headM:n=>`كل سنة وإنت <em class='foil'>${n}</em>`,end:"HAPPY BIRTHDAY"},
            en:{ed:"The Birthday Issue",kick:"Happy Birthday",head:n=>`Happy birthday,<br><em class='foil'>${n}</em>`,end:"HAPPY BIRTHDAY"}},
  love:{ar:{ed:"The Love Issue",kick:"Our story",head:n=>`حكايتنا <em class='foil'>سوا</em>`,end:"WITH ALL MY LOVE"},en:{ed:"The Love Issue",kick:"Our story",head:n=>`Our story,<br><em class='foil'>together</em>`,end:"WITH ALL MY LOVE"}},
  anniversary:{ar:{ed:"The Anniversary Issue",kick:"Another year",head:n=>`سنة كمان <em class='foil'>معاك</em>`,end:"WITH ALL MY LOVE"},en:{ed:"The Anniversary Issue",kick:"Another year",head:n=>`Another year<br><em class='foil'>with you</em>`,end:"WITH ALL MY LOVE"}},
  friendship:{ar:{ed:"The Friendship Issue",kick:"Best friends",head:n=>`صاحبة <em class='foil'>العمر</em>`,headM:n=>`صاحب <em class='foil'>العمر</em>`,end:"FRIENDS FOREVER"},en:{ed:"The Friendship Issue",kick:"Best friends",head:n=>`A friend<br><em class='foil'>for life</em>`,end:"FRIENDS FOREVER"}},
  mother:{ar:{ed:"The Mother Issue",kick:"For you, Mama",head:n=>`ست <em class='foil'>الحبايب</em>`,end:"WITH ALL OUR LOVE"},en:{ed:"The Mother Issue",kick:"For you, Mum",head:n=>`For the best<br><em class='foil'>mum</em>`,end:"WITH ALL OUR LOVE"}},
  father:{ar:{ed:"The Father Issue",kick:"For you, Baba",head:n=>`سندنا <em class='foil'>وضهرنا</em>`,end:"WITH ALL OUR LOVE"},en:{ed:"The Father Issue",kick:"For you, Dad",head:n=>`For the best<br><em class='foil'>dad</em>`,end:"WITH ALL OUR LOVE"}},
  graduation:{ar:{ed:"The Graduation Issue",kick:"Class of",head:n=>`أخيرًا <em class='foil'>اتخرجت!</em>`,end:"CONGRATULATIONS"},en:{ed:"The Graduation Issue",kick:"Class of",head:n=>`Finally<br><em class='foil'>graduated!</em>`,end:"CONGRATULATIONS"}},
  other:{ar:{ed:"A Special Issue",kick:"Made for you",head:n=>`عدد خاص <em class='foil'>عشانك</em>`,end:"WITH LOVE"},en:{ed:"A Special Issue",kick:"Made for you",head:n=>`A special issue<br><em class='foil'>for you</em>`,end:"WITH LOVE"}}
};
const UI={
  ar:{open:"افتح مجلتك",hint:"اسحب الصفحة أو دوس على الأسهم",toc:"الفهرس",tocT:"صفحات العدد",lang:"",again:"اقراها من الأول",sample:"",
      cover:"الغلاف",ded:"الإهداء",mem:"ذكريات",grid:"لقطات",diary:"يوميات",pols:"مغامرات",tl:"عبر السنين",quote:"كلمة",list:"حاجات بنحبها",letters:"الرسائل",voices:"رسائل صوتية",fin:"الختام",
      memT:"ذكريات بنحكيها",gridT:"لقطات من غير ميعاد",gridL:"صور محدش كان مستعد ليها، وهي أحلى صور عندنا.",diaryT:"تفاصيل صغيرة",polsT:"مغامراتنا",polsL:"كل حكاية ليها صورة.",tlT:"عبر السنين",listT:"حاجات بنحبها فيك",lettersT:"رسائل من القلب",lettersS:n=>`${n} رسائل من ناس بتحبك`,voicesT:"اسمع بصوتهم",voicesS:"دوس على أي رسالة عشان تسمعها.",forW:"عدد خاص معمول لـ"},
  en:{open:"Open your magazine",hint:"Swipe the page or use the arrows",toc:"Contents",tocT:"In this issue",lang:"",again:"Read it again",sample:"",
      cover:"Cover",ded:"Dedication",mem:"Memories",grid:"Candids",diary:"Little things",pols:"Adventures",tl:"Through the years",quote:"A word",list:"Things we love",letters:"Letters",voices:"Voice notes",fin:"The End",
      memT:"Memories we keep",gridT:"Unplanned moments",gridL:"Photos nobody was ready for — our favourite ones.",diaryT:"The little things",polsT:"Our adventures",polsL:"Every story has a photo.",tlT:"Through the years",listT:"Things we love about you",lettersT:"Letters from the heart",lettersS:n=>`${n} letters from people who love you`,voicesT:"Hear them say it",voicesS:"Tap any message to listen.",forW:"A special issue made for"}
};
const MON=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const latin=s=>String(s||"").normalize("NFKD").replace(/[^A-Za-z ]/g,"").trim().toUpperCase();

function compose(d){
  d=d||{};const lang=d.lang==="en"?"en":"ar",U=UI[lang],O=(OCC[d.occasion]||OCC.other)[lang];
  const name=esc(d.recipient||""),photos=(d.photos||[]).filter(p=>p&&p.url);
  const dt=d.date?new Date(d.date+"-15"):null,dateEn=dt&&!isNaN(dt)?MON[dt.getMonth()]+" "+dt.getFullYear():"";
  /* hand out photos so each page gets different ones while there are enough */
  let k=0;const used=new Set();
  const take=n=>{const out=[];for(let i=0;i<n&&photos.length;i++){let tries=0;while(used.has(k%photos.length)&&tries<photos.length){k++;tries++}
      const p=photos[k%photos.length];used.add(k%photos.length);out.push(p);k++}return out};
  const cover=photos.find(p=>p.cover)||photos[0];if(cover)used.add(photos.indexOf(cover));
  const head=(d.male&&O.headM?O.headM:O.head)(name);
  const mag={mast:latin(d.mast||d.recipientEn||"")||"MY MAGAZINE",edition:O.ed,issue:String(d.issue||"01").slice(0,3),dateEn:esc(dateEn),coverImg:cover?cover.url:"",
    kicker:esc(d.kicker||O.kick),headline:d.headline?esc(d.headline):head,sub:esc(d.sub||""),
    coverLines:[letters(d).length&&{n:String(letters(d).length).padStart(2,"0"),t:lang==="ar"?"رسائل من ناس بتحبك":"letters from people who love you"},
      photos.length&&{n:String(photos.length).padStart(2,"0"),t:lang==="ar"?"صورة وذكرى":"photos and memories"},
      (d.voices||[]).length&&{n:String(d.voices.length).padStart(2,"0"),t:lang==="ar"?"رسائل صوتية مستنياك":"voice notes waiting for you"}].filter(Boolean)};
  const pages=[];
  if(d.dedication)pages.push({type:"ded",msg:nl(d.dedication),sig:d.from?"— "+esc(d.from):"",toc:U.ded});
  const m=take(3);if(m.length>=3)pages.push({type:"mem",kick:"OUR MEMORIES",title:U.memT,toc:U.mem,items:m.map(p=>({img:p.url,d:esc(p.year||""),c:esc(p.cap||"")}))});
  const g=take(4);if(g.length>=4)pages.push({type:"grid4",kick:"CANDIDS",title:U.gridT,lede:U.gridL,photos:g.map(p=>p.url),note:esc(d.note||""),toc:U.grid});
  const capd=photos.filter(p=>p.cap&&!used.has(photos.indexOf(p)));
  const di=(capd.length>=2?capd:take(3)).slice(0,3);di.forEach(p=>used.add(photos.indexOf(p)));
  if(di.length>=2&&di.some(p=>p.cap))pages.push({type:"diary",kick:"LITTLE THINGS",title:U.diaryT,toc:U.diary,items:di.map(p=>({img:p.url,t:esc(p.year||""),h:esc(p.cap||""),p:""}))});
  const po=take(3);if(po.length>=3){const pos=[{x:2,y:2,w:56,h:52,r:-4},{x:42,y:30,w:54,h:44,r:5},{x:6,y:60,w:50,h:38,r:-2}];
    pages.push({type:"pols",kick:"ADVENTURES",title:U.polsT,lede:U.polsL,toc:U.pols,items:po.map((p,i)=>Object.assign({img:p.url,c:esc(p.cap||p.year||"")},pos[i]))})}
  const yr=photos.filter(p=>/^\d{4}$/.test(String(p.year||""))).sort((a,b)=>a.year-b.year);
  if(yr.length>=2){const pick=yr.length<=4?yr:[yr[0],yr[Math.floor(yr.length/3)],yr[Math.floor(2*yr.length/3)],yr[yr.length-1]];
    pages.push({type:"timeline",kick:"THROUGH THE YEARS",title:U.tlT,toc:U.tl,items:pick.map((p,i)=>({y:p.year,h:esc(p.cap||""),p:"",img:p.url,old:i===0&&+p.year<2008}))})}
  if(d.quote){const q=take(1)[0];if(q)pages.push({type:"quote",img:q.url,text:esc(d.quote),by:d.from?esc(d.from):"",toc:U.quote})}
  const loves=(d.loves||[]).map(s=>String(s).trim()).filter(Boolean);if(loves.length)pages.push({type:"list",kick:"THINGS WE LOVE",title:U.listT,toc:U.list,items:loves.slice(0,10).map(esc)});
  const L=letters(d);if(L.length)pages.push({type:"letters",kick:"LETTERS",title:U.lettersT,sub:U.lettersS(lang==="ar"?String(L.length).replace(/\d/g,x=>"٠١٢٣٤٥٦٧٨٩"[x]):L.length),toc:U.letters,
    items:L.map(t=>({m:nl(t.msg),n:esc(t.name),r:esc(t.rel||"")}))});
  const V=(d.voices||[]).filter(v=>v&&v.url);if(V.length)pages.push({type:"voices",kick:"VOICE NOTES",title:U.voicesT,sub:U.voicesS,toc:U.voices,
    items:V.map(v=>({n:esc(v.name||""),src:v.url,t:v.dur?Math.floor(v.dur/60)+":"+String(Math.round(v.dur%60)).padStart(2,"0"):""}))});
  const fp=photos.find(p=>p.end)||take(1)[0]||cover;
  pages.push({type:"fin",img:fp?fp.url:"",msg:nl(d.finalMsg||(lang==="ar"?"كل سنة وإنت أحلى حكاية.":"Here's to many more chapters.")),end:O.end,toc:U.fin});
  const ML=window.MAG_MUSIC||[],EM=(window.MAG_EDITION_MUSIC||{})[d.edition||"emerald"];
  const own=d.music==="custom"&&d.song&&d.song.url?{src:d.song.url,name:d.song.name||(lang==="en"?"Our song":"أغنيتنا"),own:1}:null;
  const mu=own||(d.music==="none"?null:(ML.find(t=>t.id===d.music)||(EM&&ML.find(t=>t.id===EM.id))||null));
  return {lang,ui:U,intro:{for:U.forW,t:name},mag,pages:pages.slice(0,11),music:mu&&mu.own?{src:mu.src,name:mu.name}:mu?{src:mu.src,name:lang==="en"?(EM&&EM.id===mu.id?EM.en:mu.en):(EM&&EM.id===mu.id?EM.name:mu.name)}:null};
}
function letters(d){return (d.letters||[]).filter(t=>t&&t.msg&&t.name)}
window.MAG_COMPOSE=compose;window.MAG_ESC=esc;
})();
