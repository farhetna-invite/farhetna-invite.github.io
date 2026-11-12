/* FARHETNA My Magazine — editions (templates). Add a new edition = one entry here + its CSS block in engine.css */
/* ======== Editions: each one = a CSS block (.ed-<id>) + templates here. Content is shared. ======== */
const IMG=k=>k||"";
const fit=(k,cls="")=>{const u=IMG(k);return u?`<div class="fit ${cls}" style="--src:url(${u})"><img src="${u}" alt="" loading="lazy" decoding="async"></div>`:`<div class="fit ph0 ${cls}"><span>📷</span></div>`};
const EDITIONS={
  emerald:{
    cover:(m,L)=>`<div class="pg cv" style="background-image:url(${m.coverImg})"><div class="shadeTop"></div><div class="frame"></div>
      <div class="strap"><span>N°${m.issue}</span><span>${m.dateEn}</span></div>
      <div class="mast"><b class="foil" style="--mfs:${Math.min(27,140/Math.max(4,m.mast.length))}cqw">${m.mast}</b><small>${m.edition}</small></div>
      <div class="side"></div><div class="lines">${m.coverLines.map(l=>`<div><b>${l.n}</b><span>${l.t}</span></div>`).join("")}</div>
      <div class="head"><div class="kk">${m.kicker}</div><h2>${m.headline}</h2><p>${m.sub}</p></div>
      <div class="foot"><span>FARHETNA EDITIONS</span><span class="bc"><i></i><s>2026 0001</s></span></div></div>`,
    pages:{
      mem:(p,i,L)=>`<div class="pg mem"><div class="sechd"><span>${p.kick}</span><b>${String(i+1).padStart(2,"0")}</b></div>
        <h3>${p.title}</h3>
        <figure class="heroW"><div class="hero" style="background-image:url(${p.items[0].img})"><span class="tag">${p.items[0].d}</span></div><figcaption>${p.items[0].c}</figcaption></figure>
        <div class="duo">${p.items.slice(1,3).map(t=>`<figure><div class="ph" style="background-image:url(${t.img})"></div><figcaption><b>${t.d}</b>${t.c}</figcaption></figure>`).join("")}</div>
        <div class="folio"><span>MY MAGAZINE</span><span>${String(i+1).padStart(2,"0")}</span></div></div>`,
      letters:(p,i,L)=>`<div class="pg lt"><div class="sechd"><span>${p.kick}</span><b>${String(i+1).padStart(2,"0")}</b></div>
        <h3>${p.title}</h3><div class="sub">${p.sub}</div>
        <div class="scroll">${p.items.map((t,k)=>`<article class="letter ${k===0?"feat":""}">${k===0?`<span class="seal">${t.n.trim()[0]}</span>`:""}<span class="q">“</span><p>${t.m}</p>
          <div class="who"><span class="av">${t.n.trim()[0]}</span><div><b>${t.n}</b><small>${t.r}</small></div></div></article>`).join("")}</div>
        <div class="folio"><span>MY MAGAZINE</span><span>${String(i+1).padStart(2,"0")}</span></div></div>`,
      grid4:(p,i)=>`<div class="pg g4"><div class="sechd"><span>${p.kick}</span><b>${String(i+1).padStart(2,"0")}</b></div><h3>${p.title}</h3><div class="lede">${p.lede}</div>
        <div class="gr">${p.photos.map(k=>fit(k,"fill")).join("")}</div><div class="note">${p.note}</div>
        <div class="folio"><span>MY MAGAZINE</span><span>${String(i+1).padStart(2,"0")}</span></div></div>`,
      diary:(p,i)=>`<div class="pg dia"><div class="sechd"><span>${p.kick}</span><b>${String(i+1).padStart(2,"0")}</b></div><h3>${p.title}</h3>
        <div class="scroll">${p.items.map(t=>`<div class="entry">${fit(t.img)}<div><div class="t">${t.t}</div><b>${t.h}</b><p>${t.p}</p></div></div>`).join("")}</div>
        <div class="folio"><span>MY MAGAZINE</span><span>${String(i+1).padStart(2,"0")}</span></div></div>`,
      pols:(p,i)=>`<div class="pg pols"><div class="sechd" style="border-color:rgba(232,207,148,.45);color:var(--gold2)"><span>${p.kick}</span><b style="color:var(--gold2)">${String(i+1).padStart(2,"0")}</b></div><h3>${p.title}</h3><div class="lede">${p.lede}</div>
        <div class="bd">${p.items.map(t=>`<div class="pol" style="inset-inline-start:${t.x}%;top:${t.y}%;width:${t.w}%;height:${t.h}%;transform:rotate(${t.r}deg)">${fit(t.img,"fill")}<i>${t.c}</i></div>`).join("")}</div></div>`,
      timeline:(p,i)=>`<div class="pg tl"><div class="sechd"><span>${p.kick}</span><b>${String(i+1).padStart(2,"0")}</b></div><h3>${p.title}</h3>
        <div class="scroll">${p.items.map(t=>`<div class="step ${t.old?"old":""}"><div><div class="y">${t.y}</div><b>${t.h}</b><p>${t.p}</p></div>${fit(t.img)}</div>`).join("")}</div>
        <div class="folio"><span>MY MAGAZINE</span><span>${String(i+1).padStart(2,"0")}</span></div></div>`,
      quote:(p,i)=>`<div class="pg qt">${fit(p.img,"fill")}<div class="in"><div class="bigq">“</div><p>${p.text}</p>${p.by?`<small>${p.by}</small>`:""}</div></div>`,
      list:(p,i)=>`<div class="pg ls"><div class="sechd"><span>${p.kick}</span><b>${String(i+1).padStart(2,"0")}</b></div><h3>${p.title}</h3><div class="scroll"><ol>${p.items.map(t=>`<li>${t}</li>`).join("")}</ol></div>
        <div class="folio"><span>MY MAGAZINE</span><span>${String(i+1).padStart(2,"0")}</span></div></div>`,
      ded:(p)=>`<div class="pg plain ded"><div class="bigq">“</div><p>${p.msg}</p><div class="sig">${p.sig}</div></div>`,
      voices:(p,i,L)=>`<div class="pg vnp"><div class="sechd" style="border-color:rgba(232,207,148,.45);color:var(--gold2)"><span>${p.kick}</span></div><h3>${p.title}</h3><p style="font-size:var(--fs-s);color:#cbbf9f">${p.sub}</p>
        ${p.items.map((t,k)=>`<div class="vn" data-src="${t.src||""}"><button aria-label="play"><svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg></button><div class="w"><b>${t.n}</b><div class="wave">${Array.from({length:30},(_,j)=>`<i style="height:${22+Math.abs(Math.sin(j*1.7+k))*78}%"></i>`).join("")}</div></div><span class="tm" style="font-family:var(--cor);min-width:9cqw;text-align:center">${t.t}</span></div>`).join("")}${p.sample?`<p class="smp">${L.sample}</p>`:""}</div>`,
      fin:(p,i,L)=>`<div class="pg fin"><div class="ph" style="background-image:url(${p.img})"></div><p>${p.msg}</p><div class="end">${p.end}</div><button class="again" data-go="0">${L.again}</button></div>`
    }
  }
  /* blush:{...}, vogue:{...}, birthday:{...} come next — same content, own cover + page templates + CSS */
};


window.MAG_EDITIONS=EDITIONS;window.MAG_FIT=fit;

