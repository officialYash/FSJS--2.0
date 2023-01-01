const hamburgerBtn = document.getElementById("hamburger-btn");
const crossbtn =document.getElementById("cross-btn");
const listItems=document.getElementsByTagName("ul")[0];
const navbar=document.getElementsByTagName("nav")[0];
console.log(hamburgerBtn, crossbtn,listItems);
hamburgerBtn.addEventListener("click" , () => {
crossbtn.style.display="inline";
listItems.style.left="0%";
hamburgerBtn.style.display="none";
navbar.style.backdropFilter="blur(10px)";
listItems.style.position="relative";
listItems.style.transition="all 0.5 ease-in-out";
})

crossbtn.addEventListener("click" ,()=>{
    crossbtn.style.display="none";
    listItems.style.left="-110px";
    hamburgerBtn.style.display="inline";
    navbar.style.backdropFilter="blur(0px)";
    listItems.style.position="aboslute";
    listItems.style.transition="none";
})

