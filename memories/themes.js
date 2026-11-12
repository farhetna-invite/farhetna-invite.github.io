/* FARHETNA Memories — album designs.
   To add a design: add one entry here + its images in memories/themes/<id>/.
   Paths are relative to the memories/ folder. Nothing else needs changing. */
(function(){
const T={
  sage:{
    id:"sage",name:"Sage Memories",ar:"زيتون ورخام وقلب دهبي",
    desc:"رخام أبيض وفروع زيتون، وظرف زيتوني بيتفتح بختم دهبي أول ما الضيف يدخل.",
    guest:"themes/sage/guest.webp",card:"themes/sage/card.webp",dash:"themes/sage/dash.webp",envelope:"themes/sage/envelope.webp",
    intro:"envelope",fx:"leaves",
    c:{name:"#3c4733",ink:"#4a4638",accent:"#5f7356",gold:"#b08c52",btn1:"#6f8464",btn2:"#4f6346",btnText:"#fffaf0",tint:"#e7ecdf",paper:"rgba(255,254,250,.86)"},
    // where things sit on the printable card (fractions of width/height)
    cardLayout:{qr:[.29,.335,.42],kick:.075,names:.15,sub:.86,scan:.895,foot:null,cx:.62,maxW:.5,cxB:.36,nameColor:"#3c4733",subColor:"#5f5c4c",kickColor:"#a8854a"}
  },
  blush:{
    id:"blush",name:"Blush Memories",ar:"بحيرة وبجعتين وورد",
    desc:"قوس عاجي وستارة بينك، والبجعتين على البحيرة، والورد بيتساقط بهدوء.",
    guest:"themes/blush/guest.webp",card:"themes/blush/card.webp",dash:"themes/blush/dash.webp",
    intro:null,fx:"petals",
    c:{name:"#7a3f4b",ink:"#5a4045",accent:"#b27178",gold:"#b8945a",btn1:"#fffaf3",btn2:"#ead6c2",btnText:"#8a5a3c",tint:"#f6e2dd",paper:"rgba(255,250,248,.84)"},
    cardLayout:{qr:[.255,.285,.49],kick:null,names:.19,sub:.73,scan:.765,foot:null,nameColor:"#7a3f4b",subColor:"#7a5a5e",kickColor:"#b08a52"}
  }
};
const LEGACY={ivory:"sage",dark:"sage"};
window.FMThemes={
  list:["sage","blush"],
  get:id=>T[id]||T[LEGACY[id]]||T.sage,
  all:T
};
})();
