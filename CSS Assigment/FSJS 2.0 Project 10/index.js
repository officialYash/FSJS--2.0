let hamburger = document.getElementsByClassName("hamburger");
hamburger =Array.from(hamburger);

for(let x of hamburger){
    x.addEventListener("click" ,()=>{
        for(let y of hamburger){
            y.classList.toggle("hamburger");
            y.classList.toggle("cross");
        }

        hamburger.forEach((Element ,index) =>{
            console.log(Element)
            if(Element.classList.contain("cross")){
                Element.classList.add(`cross-${index + 1}`)
                document.getElementsByClassName("list-items-container")[0].style.left="0%";
                document.getElementsByClassName("list-items-container")[0].style.position="relative";
                document.getElementsByTagName("nav")[0].style.backdropFilter="blur(10px)";

            }
            else{
                Element.classList.remove(`cross-${index+1}`)
                document.getElementsByClassName("list-items-container")[0].style.left="-110%";
                document.getElementsByClassName("list-items-container")[0].style.position="absolute";
                document.getElementsByTagName("nav")[0].style.backdropFilter="blur(0px)";


            }
        })
    })
}

let frontCards = document.getElementsByClassName("front");
frontCards = Array.from(frontCards);
console.log(frontCards)

frontCards.forEach(item => {
    item.addEventListener("mouseenter", () => {
        let cards = document.getElementsByClassName("card");
        cards = Array.from(cards);
        cards.forEach(x => {
            let child = x.querySelector(":first-child")
            child.classList.remove("rotate");
        })

    })
    item.addEventListener("mouseleave", () => {
        let cards = document.getElementsByClassName("card");
        cards = Array.from(cards);
        cards.forEach(x => {
            let child = x.querySelector(":first-child")
            child.classList.add("rotate");
        })

    })

})

