const menuBtn=document.getElementById("menuBtn"),navMenu=document.getElementById("navMenu");if(menuBtn)menuBtn.addEventListener("click",()=>{navMenu.classList.toggle("open");menuBtn.textContent=navMenu.classList.contains("open")?"✕":"☰"});const darkMode=document.getElementById("darkMode");if(darkMode){if(localStorage.getItem("darkMode")==="true"){document.body.classList.add("dark");darkMode.textContent="☀️"}darkMode.addEventListener("click",()=>{document.body.classList.toggle("dark");const d=document.body.classList.contains("dark");localStorage.setItem("darkMode",d);darkMode.textContent=d?"☀️":"🌙"})}const topBtn=document.getElementById("topBtn");window.addEventListener("scroll",()=>{if(window.scrollY>400)topBtn.style.display="grid";else topBtn.style.display="none"});if(topBtn)topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));const af=document.getElementById("admissionForm");if(af)af.addEventListener("submit",e=>{e.preventDefault();alert("Thank you! Your admission inquiry has been submitted successfully.");af.reset()});const cf=document.getElementById("contactForm");if(cf)cf.addEventListener("submit",e=>{e.preventDefault();alert("Thank you for contacting Green Valley Public School!");cf.reset()});const filters=document.querySelectorAll(".filter"),items=document.querySelectorAll(".gallery-item");filters.forEach(b=>b.addEventListener("click",()=>{filters.forEach(x=>x.classList.remove("active"));b.classList.add("active");const f=b.dataset.filter;items.forEach(i=>i.style.display=f==="all"||i.classList.contains(f)?"grid":"none")}));const lb=document.getElementById("lightbox"),lbc=document.getElementById("lightboxContent"),close=document.getElementById("closeLightbox");items.forEach(i=>i.addEventListener("click",()=>{lbc.innerHTML=`<div style="text-align:center"><div style="font-size:120px">${i.querySelector("div").textContent}</div><h2>${i.querySelector("span").textContent}</h2></div>`;lb.classList.add("show")}));if(close)close.addEventListener("click",()=>lb.classList.remove("show"));if(lb)lb.addEventListener("click",e=>{if(e.target===lb)lb.classList.remove("show")});
const whatsappButton = document.querySelector(".whatsapp");

if (whatsappButton) {
  whatsappButton.addEventListener("click", function () {
    const phone = "923304886710";

    const message = "Assalam-o-Alaikum, Green Valley Public School ke bare mein maloomat chahiye.";

    const url =
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  });
}
