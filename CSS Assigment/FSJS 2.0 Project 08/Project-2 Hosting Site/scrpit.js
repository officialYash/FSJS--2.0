const humburgerbtn=document.getElementById("humburger-btn");
const crossBtn=document.getElementById("cross-btn");
const navbar=document.getElementsByTagName("nav")[0];
humburgerbtn.addEventListener("click",()=>{
navbar.style.transform="translateX(0%)";
navbar.style.position="relative"
humburgerbtn.style.display="none"

})

crossBtn.addEventListener("click",()=>{
    navbar.style.transform="translateX(-110%)";
    humburgerbtn.style.display="inline";
    navbar.style.position="absolute";
})
