const menuBtn=document.getElementById("menuBtn"),navMenu=document.getElementById("navMenu");if(menuBtn)menuBtn.addEventListener("click",()=>{navMenu.classList.toggle("open");menuBtn.textContent=navMenu.classList.contains("open")?"✕":"☰"});const darkMode=document.getElementById("darkMode");if(darkMode){if(localStorage.getItem("darkMode")==="true"){document.body.classList.add("dark");darkMode.textContent="☀️"}darkMode.addEventListener("click",()=>{document.body.classList.toggle("dark");const d=document.body.classList.contains("dark");localStorage.setItem("darkMode",d);darkMode.textContent=d?"☀️":"🌙"})}const topBtn=document.getElementById("topBtn");window.addEventListener("scroll",()=>{if(window.scrollY>400)topBtn.style.display="grid";else topBtn.style.display="none"});if(topBtn)topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));const af=document.getElementById("admissionForm");if(af)af.addEventListener("submit",async e=>{e.preventDefault();const fd=new FormData(af);const student=fd.get("Student Name")||"";const parent=fd.get("Parent / Guardian Name")||"";const email=fd.get("Email")||"";const phone=fd.get("Phone Number")||"";const cls=fd.get("Class")||"";const msg=fd.get("Message")||"N/A";const text=`*Green Valley Public School - Admission Inquiry*

*Student Name:* ${student}
*Parent/Guardian:* ${parent}
*Phone:* ${phone}
*Email:* ${email}
*Class:* ${cls}
*Message:* ${msg}`;

// 1. Open WhatsApp
const waUrl="https://wa.me/923304886710?text="+encodeURIComponent(text);
window.open(waUrl,"_blank");

// 2. Send to Formspree (Email) - REPLACE THE URL BELOW with your Formspree endpoint
const FORMSPREE_URL="https://formspree.io/f/YOUR_FORMSPREE_ID";
try{
  if(FORMSPREE_URL.includes("YOUR_FORMSPREE_ID")){
    console.log("Formspree not configured yet");
  }else{
    await fetch(FORMSPREE_URL,{method:"POST",body:fd,headers:{"Accept":"application/json"}});
  }
}catch(err){console.log("Email send error",err)}

alert("Shukriya! WhatsApp open ho raha hai.\n\nPlease WhatsApp mein green Send button daba dein.");
af.reset()});const cf=document.getElementById("contactForm");if(cf)cf.addEventListener("submit",e=>{e.preventDefault();alert("Thank you for contacting Green Valley Public School!");cf.reset()});const filters=document.querySelectorAll(".filter"),items=document.querySelectorAll(".gallery-item");filters.forEach(b=>b.addEventListener("click",()=>{filters.forEach(x=>x.classList.remove("active"));b.classList.add("active");const f=b.dataset.filter;items.forEach(i=>i.style.display=f==="all"||i.classList.contains(f)?"grid":"none")}));const lb=document.getElementById("lightbox"),lbc=document.getElementById("lightboxContent"),close=document.getElementById("closeLightbox");items.forEach(i=>i.addEventListener("click",()=>{lbc.innerHTML=`<div style="text-align:center"><div style="font-size:120px">${i.querySelector("div").textContent}</div><h2>${i.querySelector("span").textContent}</h2></div>`;lb.classList.add("show")}));if(close)close.addEventListener("click",()=>lb.classList.remove("show"));if(lb)lb.addEventListener("click",e=>{if(e.target===lb)lb.classList.remove("show")});

// Login / Welcome Banner
(function(){
  const banner = document.getElementById("welcomeBanner");
  const welcomeText = document.getElementById("welcomeText");
  const logoutBtn = document.getElementById("logoutBtn");
  
  if(localStorage.getItem("gvLoggedIn") === "true"){
    const role = localStorage.getItem("gvRole") || "";
    const name = localStorage.getItem("gvName") || "Staff";
    if(banner){
      banner.style.display = "block";
      if(welcomeText){
        welcomeText.textContent = "WELCOME To The Green Valley Public School  |  " + name + " (" + role.toUpperCase() + ")";
      }
    }
  }
  
  if(logoutBtn){
    logoutBtn.addEventListener("click", function(){
      localStorage.removeItem("gvLoggedIn");
      localStorage.removeItem("gvRole");
      localStorage.removeItem("gvName");
      window.location.reload();
    });
  }
})();
