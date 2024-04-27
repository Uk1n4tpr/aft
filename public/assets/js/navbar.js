let hamburger = document.querySelector(".bars");
hamburger.onclick = function(){
    let hamburger_ul = document.querySelector(".hamburger_ul");
    let nav_top = document.querySelector(".nav_top");
    hamburger_ul.classList.toggle("active");
    nav_top.classList.toggle("active");
}
