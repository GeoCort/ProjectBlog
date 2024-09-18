const hamburger = document.getElementById("homePageMenuBtn");
const menu = document.getElementById("mobileMenu")
hamburger.addEventListener("click", ()=>{
   menu.classList.contains("none")? menu.classList.remove("none"): menu.classList.add("none")
})
window.onclick = function(e){
    if(e.target.id === ""){
        menu.classList.add("none")
    }
} 