/* FARHETNA Memories — printable QR card drawn on a canvas (5x7 inch at 300dpi) */
(function(){
const STY={
  ivory:{bg1:"#fffdf8",bg2:"#fbf4e8",ink:"#3c4733",gold:"#b8945a",sub:"#4a4638",mute:"#8a8574",qr:"#3c4733",box:"#fbf5ea",leaf:true},
  dark:{bg1:"#46533d",bg2:"#36412f",ink:"#f6ecd8",gold:"#dcc08a",sub:"#ece4cf",mute:"#cfc6ad",qr:"#2f3a29",box:"#485640",leaf:false},
  blush:{bg1:"#fdf6f2",bg2:"#f4e0d8",ink:"#3c4733",gold:"#b8945a",sub:"#4a4638",mute:"#8a7d74",qr:"#3c4733",box:"#fbefe9",leaf:true}
};
const ar=s=>String(s).replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]);
function fmtDate(d){if(!d)return"";try{const x=new Date(d+"T12:00:00");return isNaN(x)?d:x.toLocaleDateString("ar-EG",{day:"numeric",month:"long",year:"numeric"})}catch(e){return d}}
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function leaf(c,x,y,s,rot){c.save();c.translate(x,y);c.rotate(rot);c.scale(s,s);
  c.strokeStyle="#a9b59c";c.lineWidth=2;c.lineCap="round";
  c.beginPath();c.moveTo(200,20);c.bezierCurveTo(150,30,110,60,90,110);c.stroke();
  [[160,32,"#cdd5c2"],[128,52,"#d9dfcf"],[106,82,"#cdd5c2"]].forEach(([a,b,f],i)=>{c.save();c.translate(a,b);c.rotate([-.9,-1.5,-2.2][i]);
    c.beginPath();c.ellipse(0,-12,7,15,0,0,Math.PI*2);c.fillStyle=f;c.fill();c.stroke();c.restore()});
  [[176,58,13,"#efd2c8"],[176,58,6,"#e3b6a8"],[142,88,9,"#f1ddd3"],[142,88,4,"#ddb8a8"],[190,94,6,"#ead9b8"]].forEach(([a,b,r,f])=>{c.beginPath();c.arc(a,b,r,0,Math.PI*2);c.fillStyle=f;c.fill()});
  c.restore()}
function qrModules(url){const Q=window.FarhetnaQR,q=new Q(-1,1);q.addData(url);q.make();return q}
const IMG={};function loadImg(src){return IMG[src]||(IMG[src]=new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src}))}
async function drawThemed(canvas,o,t){
  const W=1500,H=2100,L=t.cardLayout;const bg=await loadImg((o.base||"")+t.card);canvas.width=W;canvas.height=H;const c=canvas.getContext("2d");
  try{await Promise.all(['700 120px "Aref Ruqaa"','italic 500 40px "Cormorant Garamond"','600 40px "Noto Naskh Arabic"'].map(f=>document.fonts.load(f)))}catch(e){}
  c.drawImage(bg,0,0,W,H);c.textAlign="center";c.textBaseline="alphabetic";
  const CX=W*(L.cx||.5),MW=W*(L.maxW||.66);if(L.kick){c.fillStyle=L.kickColor;c.font='italic 500 46px "Cormorant Garamond",serif';c.direction="ltr";c.fillText("S h a r e   t h e   l o v e",CX,H*L.kick);c.direction="rtl"}
  // names
  let fs=150;const parts=[o.groom||"","&",o.bride||""];const fnt=(i,f)=>i===1?`500 ${f}px "Cormorant Garamond",serif`:`700 ${f}px "Aref Ruqaa",serif`;
  let ws;do{ws=parts.map((p,i)=>{c.font=fnt(i,fs);return c.measureText(p).width});fs-=6}while(ws[0]+ws[1]+ws[2]+fs*.6>MW&&fs>60);
  const gap=fs*.3;let x=CX+(ws[0]+ws[1]+ws[2]+gap*2)/2;
  parts.forEach((p,i)=>{c.font=fnt(i,fs);c.fillStyle=i===1?t.c.gold:L.nameColor;c.textAlign="right";c.shadowColor="rgba(255,255,255,.85)";c.shadowBlur=14;c.fillText(p,x,H*L.names);c.shadowBlur=0;x-=ws[i]+gap});
  c.textAlign="center";
  // qr on a white rounded tile
  const q=qrModules(o.url),n=q.getModuleCount(),box=W*L.qr[2],bx=W*L.qr[0],by=H*L.qr[1];
  c.fillStyle="rgba(255,255,255,.96)";rr(c,bx,by,box,box,28);c.fill();
  const pad=box*.07,cell=Math.floor((box-pad*2)/n),off=bx+(box-cell*n)/2,offy=by+(box-cell*n)/2;c.fillStyle=t.c.name;
  for(let r=0;r<n;r++)for(let k=0;k<n;k++)if(q.isDark(r,k))c.fillRect(off+k*cell,offy+r*cell,cell,cell);
  c.fillStyle=L.subColor;c.font='600 58px "Noto Naskh Arabic",serif';c.shadowColor="rgba(255,255,255,.9)";c.shadowBlur=12;
  const CB=W*(L.cxB||L.cx||.5);c.fillText("صوّروا فرحتنا وشاركونا صوركم 📸",CB,H*L.sub);
  c.font='500 44px "Noto Naskh Arabic",serif';c.fillText("امسحوا الكود بكاميرا الموبايل",CB,H*L.scan);
  if(L.foot){c.font='500 40px "Noto Naskh Arabic",serif';const d=fmtDate(o.date);c.fillText((d?d+"  ·  ":"")+"ألبوم ذكريات فرحتنا",CX,H*L.foot)}
  c.shadowBlur=0;return canvas}
async function draw(canvas,o){
  const TH=window.FMThemes;if(TH&&o.theme&&TH.all[o.theme]){const t=TH.get(o.theme);try{return await drawThemed(canvas,o,t)}catch(e){o=Object.assign({},o,{style:"ivory"})}}
  const W=1500,H=2100,s=STY[o.style]||STY.ivory;canvas.width=W;canvas.height=H;const c=canvas.getContext("2d");
  try{await Promise.all(['700 120px "Aref Ruqaa"','italic 500 40px "Cormorant Garamond"','600 40px "Noto Naskh Arabic"','500 40px "Noto Naskh Arabic"'].map(f=>document.fonts.load(f)))}catch(e){}
  const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,s.bg1);g.addColorStop(1,s.bg2);c.fillStyle=g;c.fillRect(0,0,W,H);
  c.strokeStyle=s.gold;c.globalAlpha=.85;c.lineWidth=4;rr(c,62,62,W-124,H-124,26);c.stroke();c.globalAlpha=.5;c.lineWidth=2;rr(c,88,88,W-176,H-176,18);c.stroke();c.globalAlpha=1;
  if(s.leaf){leaf(c,W-420,-10,2.2,0);leaf(c,420,H+10,2.2,Math.PI)}
  c.textAlign="center";c.direction="rtl";c.textBaseline="alphabetic";
  c.fillStyle=s.gold;c.font='italic 500 46px "Cormorant Garamond",serif';c.direction="ltr";c.fillText(o.top||"S h a r e   t h e   l o v e",W/2,250);
  c.direction="rtl";c.fillStyle=s.ink;
  // names: groom & bride, shrink to fit
  let fs=170;const nm=`${o.groom||""}  &  ${o.bride||""}`;
  do{c.font=`700 ${fs}px "Aref Ruqaa",serif`;fs-=6}while(c.measureText(nm).width>W-300&&fs>70);
  const parts=[o.groom||"","&",o.bride||""];const ws=parts.map((p,i)=>{c.font=i===1?`500 ${fs}px "Cormorant Garamond",serif`:`700 ${fs}px "Aref Ruqaa",serif`;return c.measureText(p).width});
  const gap=fs*.32,tot=ws[0]+ws[1]+ws[2]+gap*2;let x=W/2+tot/2;const y=480;
  parts.forEach((p,i)=>{c.font=i===1?`500 ${fs}px "Cormorant Garamond",serif`:`700 ${fs}px "Aref Ruqaa",serif`;c.fillStyle=i===1?s.gold:s.ink;c.textAlign="right";c.fillText(p,x,y);x-=ws[i]+gap});
  c.textAlign="center";c.fillStyle=s.sub;c.font='600 62px "Noto Naskh Arabic",serif';c.fillText(o.head||"صوّروا فرحتنا وشاركونا صوركم 📸",W/2,640);
  // qr
  const q=qrModules(o.url),n=q.getModuleCount(),box=860,bx=(W-box)/2,by=730;
  c.fillStyle=s.box;rr(c,bx-34,by-34,box+68,box+68,52);c.fill();c.strokeStyle=s.gold;c.globalAlpha=.55;c.lineWidth=3;rr(c,bx-34,by-34,box+68,box+68,52);c.stroke();c.globalAlpha=1;
  c.fillStyle="#fff";rr(c,bx,by,box,box,34);c.fill();c.strokeStyle=s.gold;c.globalAlpha=.6;c.lineWidth=2;c.stroke();c.globalAlpha=1;
  const pad=58,cell=Math.floor((box-pad*2)/n),off=bx+(box-cell*n)/2,offy=by+(box-cell*n)/2;c.fillStyle=s.qr;
  for(let r=0;r<n;r++)for(let k=0;k<n;k++)if(q.isDark(r,k))c.fillRect(off+k*cell,offy+r*cell,cell,cell);
  c.fillStyle=s.mute;c.font='500 50px "Noto Naskh Arabic",serif';c.fillText(o.line1||"امسحوا الكود بكاميرا الموبايل وارفعوا صوركم",W/2,by+box+130);
  c.font='500 44px "Noto Naskh Arabic",serif';c.fillText(o.line2||"🔒 الصور بتوصل للعروسين بس",W/2,by+box+205);
  // footer
  c.fillStyle=s.sub;c.font='500 46px "Noto Naskh Arabic",serif';const d=fmtDate(o.date);
  c.fillText((d?d+"  ·  ":"")+(o.foot||"ألبوم ذكريات فرحتنا"),W/2,H-170);
  c.fillStyle=s.mute;c.font='500 34px "Cormorant Garamond",serif';c.direction="ltr";c.fillText("farhetnainvite.com",W/2,H-118);c.direction="rtl";
  return canvas;
}
window.FMCard={draw,styles:Object.keys(STY)};
})();
