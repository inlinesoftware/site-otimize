const button_hamburguer = document.getElementsByClassName('btn')[0]
const nav_hamburguer = document.getElementsByClassName('header_navBarHamburguer')[0]
console.log(button_hamburguer);

button_hamburguer.addEventListener('click', () => {
    if(nav_hamburguer.style.display === "block"){ 
        nav_hamburguer.style.display = "none"
        button_hamburguer.classList.remove("active_btn")
        button_hamburguer.classList.add("not_active")
    } 
    else { 
        nav_hamburguer.style.display = "block"
        button_hamburguer.classList.remove("not_active")
        button_hamburguer.classList.add("active_btn")
    }
})