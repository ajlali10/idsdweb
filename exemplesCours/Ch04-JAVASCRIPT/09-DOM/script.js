const elms=document.querySelectorAll(".elm");
let i=0;
const toggleIt=function(){
    elms[i].classList.toggle("active");
    i=(i+1)%elms.length;
}

setInterval(toggleIt, 1000)