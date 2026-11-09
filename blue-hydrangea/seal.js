/* Farhetna wax-seal renderer: one function draws a realistic embossed wax seal
   (any motif, any colour) onto a canvas, using a height-map + lighting.  */
(function(){
const TAU=Math.PI*2;
function rnd(seed){let s=seed>>>0;return()=>((s=Math.imul(s^s>>>15,1|s)+0x6D2B79F5|0,((s^s>>>14)>>>0)/4294967296))}
function boxBlur(src,w,h,r,passes){let a=src,b=new Float32Array(w*h);
  for(let p=0;p<passes;p++){
    for(let y=0;y<h;y++){let acc=0,o=y*w;for(let x=-r;x<=r;x++)acc+=a[o+Math.min(w-1,Math.max(0,x))];
      for(let x=0;x<w;x++){b[o+x]=acc/(2*r+1);acc+=a[o+Math.min(w-1,x+r+1)]-a[o+Math.max(0,x-r)]}}
    for(let x=0;x<w;x++){let acc=0;for(let y=-r;y<=r;y++)acc+=b[Math.min(h-1,Math.max(0,y))*w+x];
      for(let y=0;y<h;y++){a===src&&(a=new Float32Array(w*h));a[y*w+x]=acc/(2*r+1);acc+=b[Math.min(h-1,y+r+1)*w+x]-b[Math.max(0,y-r)*w+x]}}
  }return a}
function maskOf(S,draw){const c=document.createElement("canvas");c.width=c.height=S;const g=c.getContext("2d");
  g.fillStyle="#000";g.fillRect(0,0,S,S);g.fillStyle=g.strokeStyle="#fff";g.lineCap=g.lineJoin="round";draw(g,S);
  const d=g.getImageData(0,0,S,S).data,m=new Float32Array(S*S);for(let i=0;i<S*S;i++)m[i]=d[i*4]/255;return m}

/* ---------- motifs: white = raised, black lines = grooves ---------- */
function leaf(g,x,y,len,wid,ang,vein){g.save();g.translate(x,y);g.rotate(ang);g.beginPath();g.moveTo(0,0);
  g.quadraticCurveTo(len*.45,-wid,len,0);g.quadraticCurveTo(len*.45,wid,0,0);g.fillStyle="#fff";g.fill();
  if(vein){g.strokeStyle="#000";g.lineWidth=vein;g.beginPath();g.moveTo(len*.08,0);g.lineTo(len*.86,0);g.stroke();
    for(let i=1;i<4;i++){const t=len*(.18+i*.17);g.beginPath();g.moveTo(t,0);g.lineTo(t+len*.1,-wid*.42);g.moveTo(t,0);g.lineTo(t+len*.1,wid*.42);g.lineWidth=vein*.6;g.stroke()}}
  g.restore()}
const MOTIF={
  rose(g,S,R){const c=S/2,lw=R*.045;
    leaf(g,c-R*.2,c+R*.42,R*.62,R*.2,Math.PI*.82,lw*.8);leaf(g,c+R*.2,c+R*.42,R*.62,R*.2,Math.PI*.18,lw*.8);
    const ring=(n,rr,pr,off)=>{g.fillStyle="#fff";for(let i=0;i<n;i++){const a=off+i*TAU/n;g.beginPath();g.arc(c+Math.cos(a)*rr,c-R*.06+Math.sin(a)*rr,pr,0,TAU);g.fill()}
      g.strokeStyle="#000";g.lineWidth=lw;for(let i=0;i<n;i++){const a=off+i*TAU/n;g.beginPath();g.arc(c+Math.cos(a)*rr,c-R*.06+Math.sin(a)*rr,pr,a-1.25,a+1.25);g.stroke()}};
    ring(5,R*.34,R*.25,-Math.PI/2);ring(5,R*.19,R*.18,-Math.PI/2+.63);
    g.fillStyle="#fff";g.beginPath();g.arc(c,c-R*.06,R*.17,0,TAU);g.fill();
    g.strokeStyle="#000";g.lineWidth=lw;g.beginPath();for(let t=0;t<16;t+=.1){const r=R*.012*t;g.lineTo(c+Math.cos(t)*r,c-R*.06+Math.sin(t)*r*.92)}g.stroke()},
  jasmine(g,S,R){const c=S/2,lw=R*.04;
    leaf(g,c+R*.05,c+R*.2,R*.6,R*.17,Math.PI*.3,lw*.8);leaf(g,c-R*.02,c+R*.25,R*.55,R*.16,Math.PI*.72,lw*.8);
    const fl=(x,y,s,rot)=>{for(let i=0;i<5;i++){g.save();g.translate(x,y);g.rotate(rot+i*TAU/5);g.beginPath();g.moveTo(0,0);
      g.bezierCurveTo(s*.32,-s*.34,s*.82,-s*.22,s,0);g.bezierCurveTo(s*.82,s*.22,s*.32,s*.34,0,0);g.fillStyle="#fff";g.fill();
      g.strokeStyle="#000";g.lineWidth=lw*.55;g.beginPath();g.moveTo(s*.22,0);g.lineTo(s*.7,0);g.stroke();g.restore()}
      g.strokeStyle="#000";g.lineWidth=lw;g.beginPath();g.arc(x,y,s*.13,0,TAU);g.stroke()};
    fl(c-R*.06,c-R*.12,R*.5,-.3);
    g.save();g.translate(c+R*.5,c-R*.38);g.rotate(.7);g.beginPath();g.ellipse(0,0,R*.07,R*.17,0,0,TAU);g.fillStyle="#fff";g.fill();g.restore();
    g.lineWidth=lw*1.3;g.strokeStyle="#fff";g.beginPath();g.moveTo(c+R*.4,c-R*.26);g.quadraticCurveTo(c+R*.3,c-R*.05,c+R*.12,c+R*.02);g.stroke()},
  olive(g,S,R){const c=S/2,lw=R*.04;g.strokeStyle="#fff";g.lineWidth=R*.05;
    const P=t=>[c-R*.5+R*1.0*t,c+R*.48-R*1.02*t+R*.32*Math.sin(t*Math.PI)];
    g.beginPath();for(let t=0;t<=1;t+=.02){const[p,q]=P(t);t?g.lineTo(p,q):g.moveTo(p,q)}g.stroke();
    for(let i=0;i<7;i++){const t=.1+i*.125,[x,y]=P(t),[x2,y2]=P(t+.01),a=Math.atan2(y2-y,x2-x),s=i%2?1:-1;
      leaf(g,x,y,R*(.42-i*.015),R*.12,a+s*.8,lw*.7)}
    const[tx,ty]=P(1);leaf(g,tx,ty,R*.3,R*.1,-1.0,lw*.7);
    [[.3,1],[.56,-1]].forEach(([t,s])=>{const[x,y]=P(t);g.save();g.translate(x+s*R*.13,y+s*R*.1);g.rotate(.5);g.beginPath();g.ellipse(0,0,R*.09,R*.12,0,0,TAU);
      g.fillStyle="#fff";g.fill();g.strokeStyle="#000";g.lineWidth=lw*.5;g.beginPath();g.arc(-R*.02,-R*.03,R*.03,3.4,4.6);g.stroke();g.restore()})},
  initials(g,S,R,txt){const c=S/2;const t=(txt||"S&A").trim();g.textAlign="center";g.textBaseline="middle";g.fillStyle="#fff";
    const ar=/[؀-ۿ]/.test(t);g.direction=ar?"rtl":"ltr";let fs=R*(t.length<=3?.78:.6);
    const fam=ar?'"Aref Ruqaa",serif':'"Cormorant Garamond",serif';
    g.font=`${ar?'':'italic '}${ar?700:600} ${fs}px ${fam}`;while(g.measureText(t).width>R*1.25&&fs>R*.3){fs-=2;g.font=`${ar?'':'italic '}${ar?700:600} ${fs}px ${fam}`}
    g.fillText(t,c,c+(ar?R*.08:R*.02));
    g.strokeStyle="#fff";g.lineWidth=R*.022;[-1,1].forEach(s=>{g.beginPath();g.moveTo(c-R*.32,c+s*R*.5);g.quadraticCurveTo(c,c+s*R*.6,c+R*.32,c+s*R*.5);g.stroke()})}
};

/* ---------- renderer ---------- */
function hex(h){h=h.replace("#","");return[0,2,4].map(i=>parseInt(h.substr(i,2),16)/255)}
function render(canvas,opt){
  const S=canvas.width=canvas.height=opt.size||420,R=S*.31,c=S/2,rand=rnd(opt.seed||7);
  // 1) wax blob outline (irregular, with a few pooled lobes)
  const harm=[];for(let i=0;i<7;i++)harm.push([2+i*1+Math.floor(rand()*3),rand()*TAU,(rand()*.022+.01)/(1+i*.35)]);
  const lobes=[];for(let i=0;i<5;i++)lobes.push([rand()*TAU,.05+rand()*.06,.35+rand()*.3]);
  const blob=maskOf(S,g=>{g.beginPath();for(let k=0;k<=360;k++){const a=k/360*TAU;let r=1.27;harm.forEach(([n,p,amp])=>r+=amp*Math.sin(n*a+p));
      lobes.forEach(([la,amp,w])=>{let d=Math.atan2(Math.sin(a-la),Math.cos(a-la));r+=amp*Math.exp(-(d*d)/(w*w*.18))});
      g.lineTo(c+Math.cos(a)*R*r,c+Math.sin(a)*R*r)}g.closePath();g.fill()});
  const stamp=maskOf(S,g=>{g.beginPath();g.arc(c,c,R*1.0,0,TAU);g.fill()});
  const rim=maskOf(S,g=>{g.lineWidth=R*.05;g.beginPath();g.arc(c,c,R*.9,0,TAU);g.stroke()});
  const mot=maskOf(S,(g)=>{g.save();g.beginPath();g.arc(c,c,R*.84,0,TAU);g.clip();(MOTIF[opt.motif]||MOTIF.rose)(g,S,R*.88,opt.text);g.restore()});
  // 2) height field
  const N=S*S,H=new Float32Array(N);
  const bS=boxBlur(blob,S,S,Math.round(S*.035),3),sS=boxBlur(stamp,S,S,Math.round(S*.012),2),
        rS=boxBlur(rim,S,S,Math.max(1,Math.round(S*.004)),2),mS=boxBlur(mot,S,S,Math.max(1,Math.round(S*.006)),2),
        mW=boxBlur(mot,S,S,Math.round(S*.02),2);
  const nz=new Float32Array(N);for(let i=0;i<N;i++)nz[i]=rand();const nS=boxBlur(nz,S,S,2,2),nL=boxBlur(nz,S,S,Math.round(S*.03),2);
  for(let i=0;i<N;i++){const x=i%S-c,y=(i/S|0)-c,r=Math.hypot(x,y)/R;
    let h=Math.pow(bS[i],.55)*1.0;                         // rounded wax body
    const squeeze=Math.exp(-Math.pow((r-1.06)/.09,2))*.28;  // wax pushed up around the stamp
    h+=squeeze*bS[i];
    h-=sS[i]*.34;                                          // pressed-in stamp face
    h+=sS[i]*(1-r*r)*.06;                                  // stamp face slightly domed
    h+=rS[i]*.13+mS[i]*.26+mW[i]*.06;                      // border ring + motif relief
    h+=(nS[i]-.5)*.012*bS[i]+(nL[i]-.5)*.22*bS[i]*(1-sS[i])+(nL[i]-.5)*.05*sS[i]; // wax texture / uneven pour
    H[i]=h}
  const Hb=boxBlur(H,S,S,Math.round(S*.025),2);
  // 3) lighting
  const col=hex(opt.color||"#efe8dc"),out=canvas.getContext("2d").createImageData(S,S),o=out.data;
  let L=[-.5,-.62,.6];const ln=Math.hypot(...L);L=L.map(v=>v/ln);const Hh=[L[0],L[1],L[2]+1],hn=Math.hypot(...Hh);const HV=Hh.map(v=>v/hn);
  const k=S*.42;
  for(let y=1;y<S-1;y++)for(let x=1;x<S-1;x++){const i=y*S+x;const a=bS[i];if(a<.02){o[i*4+3]=0;continue}
    const dx=(H[i+1]-H[i-1])*k*.5,dy=(H[i+S]-H[i-S])*k*.5,nl=Math.hypot(dx,dy,1),nx=-dx/nl,ny=-dy/nl,nzz=1/nl;
    const dif=Math.max(0,nx*L[0]+ny*L[1]+nzz*L[2]);const nh=Math.max(0,nx*HV[0]+ny*HV[1]+nzz*HV[2]);
    const spec=Math.pow(nh,60)*.55+Math.pow(nh,12)*.12;
    const ao=Math.min(1,Math.max(.7,1-(Hb[i]-H[i])*1.1));
    const sss=.18*(1-nzz);                                  // translucent wax edge glow
    for(let ch=0;ch<3;ch++){const base=col[ch];let v=base*(.62+.5*dif)*ao+sss*base*base+spec*.95;
      v=v*(1-.1*(1-dif))+(1-dif)*.04*(base-.5);o[i*4+ch]=Math.max(0,Math.min(255,v*255))}
    const ed=Math.min(1,Math.min(x,y,S-1-x,S-1-y)/(S*.03));o[i*4+3]=Math.min(255,Math.pow(Math.min(1,a*1.9),1.5)*255*ed)}
  canvas.getContext("2d").putImageData(out,0,0);return canvas}

/* Photo-real mode: press a motif into a real (blank) wax-seal photo. */
function stamp(canvas,img,opt){
  const W=canvas.width=img.naturalWidth,Hh=canvas.height=img.naturalHeight,ctx=canvas.getContext("2d");
  ctx.drawImage(img,0,0);const cx=opt.cx||205,cy=opt.cy||192,FR=opt.r||104;
  const S=W;const mot=(()=>{const c=document.createElement("canvas");c.width=W;c.height=Hh;const g=c.getContext("2d");
    g.fillStyle="#000";g.fillRect(0,0,W,Hh);g.fillStyle=g.strokeStyle="#fff";g.lineCap=g.lineJoin="round";
    g.save();g.beginPath();g.arc(cx,cy,FR,0,TAU);g.clip();g.translate(cx-S/2,cy-S/2);(MOTIF[opt.motif]||MOTIF.rose)(g,S,FR*1.32,opt.text);g.restore();
    const d=g.getImageData(0,0,W,Hh).data,m=new Float32Array(W*Hh);for(let i=0;i<W*Hh;i++)m[i]=d[i*4]/255;return m})();
  const m1=boxBlur(mot,W,Hh,1,2),m2=boxBlur(mot,W,Hh,3,2),m3=boxBlur(mot,W,Hh,7,2);
  const H=new Float32Array(W*Hh);for(let i=0;i<W*Hh;i++)H[i]=m1[i]*.4+m2[i]*.55+m3[i]*.18;
  const im=ctx.getImageData(0,0,W,Hh),o=im.data;
  let L=[-.5,-.62,.6];const ln=Math.hypot(...L);L=L.map(v=>v/ln);const hv=[L[0],L[1],L[2]+1],hn=Math.hypot(...hv),HV=hv.map(v=>v/hn);
  const k=opt.depth||5.5;
  for(let y=1;y<Hh-1;y++)for(let x=1;x<W-1;x++){const i=y*W+x,r=Math.hypot(x-cx,y-cy);if(r>FR+4)continue;
    const dx=(H[i+1]-H[i-1])*k,dy=(H[i+W]-H[i-W])*k,nl=Math.hypot(dx,dy,1),nx=-dx/nl,ny=-dy/nl,nz=1/nl;
    const dif=nx*L[0]+ny*L[1]+nz*L[2],nh=Math.max(0,nx*HV[0]+ny*HV[1]+nz*HV[2]);
    const shade=1+(dif-L[2])*.95-Math.max(0,m3[i]-m1[i])*.08;
    const spec=Math.max(0,Math.pow(nh,40)-Math.pow(HV[2],40))*.5;
    for(let c=0;c<3;c++)o[i*4+c]=Math.max(0,Math.min(255,o[i*4+c]*shade+spec*255))}
  ctx.putImageData(im,0,0);return canvas}
window.FarhetnaSeal={render,stamp,motifs:Object.keys(MOTIF)};
})();
