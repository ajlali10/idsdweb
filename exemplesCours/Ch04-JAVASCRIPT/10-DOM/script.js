//=======================================
//   Méthode I
//=======================================
// let i=0;
// const root=document.querySelector(".container");
// function addElement() {
//     const e=document.createElement("div");
//     const txt=document.createTextNode(i);
//     e.appendChild(txt);
//     root.appendChild(e);
// }

// for(i=0; i<20;i++){
//     addElement();
// }

//=======================================
//   Méthode II
//=======================================
const root=document.querySelector(".container");
let html="";
for(let i=0;i<4;i++){
    html+=`<div> ${i} </div>`;
}
root.innerHTML=html;