/* FARHETNA prices by country.
   Egypt keeps its own prices in EGP. Everyone outside Egypt sees the price in their own currency
   (the "abroad" EGP price converted and rounded to a clean number) with a "Launch Price" tag.
   FG.price(k) stays in EGP (used for the admin/order records); FG.money/FG.label are what the visitor sees.
   The country comes from the phone's time zone (no network call); the visitor can change it from the small 🌍 switch.
   Rates are approximate (EGP per 1 unit) and only used for the "≈" label; update them from time to time. */
(function(){
  var PRICES={            // EGP: [Egypt, abroad]
    basic:[250,599], premium:[350,749], custom:[450,999],
    album:[399,799], albumAddon:[249,499], magazine:[299,599], birthday:[149,349]
  };
  var RATES_DATE="2026-11";
  var CUR={ // code: [EGP per unit, Arabic name, allows half units]
    USD:[55.3,"دولار",0], EUR:[61.9,"يورو",0], GBP:[74.2,"إسترليني",0], CAD:[39.5,"دولار كندي",0], AUD:[38.6,"دولار أسترالي",0],
    SAR:[14.75,"ريال",0], AED:[15.06,"درهم",0], KWD:[180,"دينار",1], QAR:[15.19,"ريال",0],
    BHD:[147,"دينار",1], OMR:[143.6,"ريال",1], JOD:[78,"دينار",1]
  };
  var COUNTRIES=[ // code, Arabic name, currency
    ["EG","مصر","EGP"],["SA","السعودية","SAR"],["AE","الإمارات","AED"],["KW","الكويت","KWD"],["QA","قطر","QAR"],
    ["BH","البحرين","BHD"],["OM","عُمان","OMR"],["JO","الأردن","JOD"],["GB","بريطانيا","GBP"],["EU","أوروبا","EUR"],
    ["US","أمريكا","USD"],["CA","كندا","CAD"],["AU","أستراليا","AUD"],["XX","دولة تانية","USD"]
  ];
  var TZ={"Africa/Cairo":"EG","Asia/Riyadh":"SA","Asia/Dubai":"AE","Asia/Kuwait":"KW","Asia/Qatar":"QA","Asia/Bahrain":"BH",
    "Asia/Muscat":"OM","Asia/Amman":"JO","Europe/London":"GB","Europe/Dublin":"EU"};
  function guess(){
    var tz="";try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(e){}
    if(TZ[tz])return TZ[tz];
    if(/^Europe\//.test(tz))return "EU";
    if(/^America\/(Toronto|Vancouver|Edmonton|Winnipeg|Halifax|Regina|St_Johns)/.test(tz))return "CA";
    if(/^America\//.test(tz)||/^US\//.test(tz))return "US";
    if(/^Australia\//.test(tz))return "AU";
    if(!tz)return "EG";
    return "XX";
  }
  var forced=null;try{forced=localStorage.getItem("fg_country")}catch(e){}
  var q=(location.search.match(/[?&]country=([A-Za-z]{2})/)||[])[1];if(q)forced=q.toUpperCase();
  var code=forced&&COUNTRIES.some(function(c){return c[0]===forced})?forced:guess();
  var row=COUNTRIES.filter(function(c){return c[0]===code})[0]||COUNTRIES[0];
  var abroad=code!=="EG";
  var ar=function(n){return String(n).replace(/\d/g,function(d){return "٠١٢٣٤٥٦٧٨٩"[d]})};
  var cur=abroad&&CUR[row[2]]?CUR[row[2]]:null;
  /* abroad EGP price -> clean local amount, always rounded UP: whole numbers under 20, then steps of 5 (no fractions) */
  function local(egp){var v=egp/cur[0],st=v<20?1:5;return Math.max(1,Math.ceil(v/st-1e-9)*st)}
  function num(n){return ar(String(n).replace(".","٫"))}
  var FG={
    country:code, countryName:row[1], currency:row[2], abroad:abroad, ratesDate:RATES_DATE, ar:ar,
    price:function(k){var p=PRICES[k];return p?p[abroad?1:0]:null},
    curName:cur?cur[1]:"جنيه",
    /* the number the visitor sees (Arabic digits) and the full "number + currency" label */
    money:function(k){var p=PRICES[k];if(!p)return "";return cur?num(local(p[1])):ar(p[0])},
    label:function(k){var m=FG.money(k);return m?m+" "+FG.curName:""},
    /* local amount as a number, and what that comes to in EGP (what the card gateway will charge) */
    local:function(k){var p=PRICES[k];return p&&cur?local(p[1]):null},
    chargeEGP:function(k){var p=PRICES[k];if(!p)return null;return cur?Math.round(local(p[1])*cur[0]):p[0]},
    /* swap the word "جنيه" for the visitor's currency inside an element */
    reword:function(root){if(!cur||!root)return;var w=document.createTreeWalker(root,4),n;
      while(n=w.nextNode())if(n.nodeValue.indexOf("جنيه")>-1)n.nodeValue=n.nodeValue.replace(/جنيه/g,cur[1])},
    setCountry:function(c){try{localStorage.setItem("fg_country",c)}catch(e){}location.reload()},
    countries:COUNTRIES,
    /* adds the Launch Price tag after a price */
    tag:function(el){return; /* Launch Price tag turned off for now */ if(!abroad||!el)return;
      var s=document.createElement("span");s.className="fg-ab";s.innerHTML='<span class="fg-lp" dir="ltr">Launch Price</span>';
      el.insertAdjacentElement("afterend",s)},
    /* a small "🌍 الأسعار لـ: … · تغيير" switch */
    switcher:function(host){if(!host)return;
      var w=document.createElement("div");w.className="fg-sw";
      var sel='<select aria-label="الدولة">'+COUNTRIES.map(function(c){return '<option value="'+c[0]+'"'+(c[0]===code?" selected":"")+'>'+c[1]+'</option>'}).join("")+'</select>';
      w.innerHTML='<span>🌍 الأسعار لـ</span>'+sel;host.appendChild(w);
      w.querySelector("select").onchange=function(e){FG.setCountry(e.target.value)}},
    /* note for visitors outside Egypt until card payments are live */
    cardNote:function(host,where){if(!abroad||!host||host.querySelector(".fg-cn"))return;var d=document.createElement("p");d.className="fg-cn";
      d.innerHTML='💳 بتدفعي من برا مصر؟ الدفع بالكارت جاي قريب. لحد ما يتفعّل، <a href="https://wa.me/201280067110" target="_blank" rel="noopener">كلّمينا على واتساب</a> ونظبطلك الدفع.';
      host.insertAdjacentElement(where||"afterbegin",d)},
    /* goes into the order's source record so the admin sees where it came from */
    info:function(){return cur?{country:code,abroad:abroad,currency:row[2]}:{country:code,abroad:abroad}}
  };
  window.FG=FG;
  var css=document.createElement("style");
  css.textContent=".fg-ab{display:inline-flex;align-items:center;gap:6px;flex-wrap:wrap;margin-inline-start:8px;vertical-align:middle}"+
   ".fg-ap{font-size:.78em;opacity:.8;font-weight:600;white-space:nowrap}"+
   ".fg-lp{font-size:10.5px;letter-spacing:.08em;font-weight:700;text-transform:uppercase;padding:2px 8px;border-radius:99px;background:rgba(201,164,92,.18);color:#8a6a2c;white-space:nowrap;font-family:system-ui,sans-serif}"+
   ".fg-cn{font-size:13px;line-height:1.7;background:rgba(201,164,92,.12);border-radius:12px;padding:8px 12px;margin:0 0 10px}.fg-cn a{text-decoration:underline;color:inherit;font-weight:700}"+
   ".fg-sw{display:flex;align-items:center;justify-content:center;gap:6px;font-size:13px;opacity:.85;margin:10px auto 0}"+
   ".fg-sw select{font:inherit;font-size:13px;border:1px solid rgba(0,0,0,.18);border-radius:99px;padding:3px 10px;background:transparent;color:inherit}";
  (document.head||document.documentElement).appendChild(css);
})();
