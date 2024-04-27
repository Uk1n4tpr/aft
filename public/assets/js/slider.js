const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".right_arrow");
const imgContainer = document.querySelector(".img_container");

rightArrow.addEventListener("click", () => {
    imgContainer.style.transform = `translateX(-400px)`;
})