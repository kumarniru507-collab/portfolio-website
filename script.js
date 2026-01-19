const card = document.querySelectorAll(".project-card");
window.addEventListener("scroll",()=>{
    card.forEach(card => {
        const positiom = card.getBoundingClientRect().top;
        if(positiom < window.innerHeight-100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});