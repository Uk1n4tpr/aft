/* dodajemo clik i prikazujemo */
const mainContainer = document.querySelector(".main_container");
const carRed = document.querySelector(".crvena_auta");
const carYellow = document.querySelector(".zuta_auta");
const carGreen = document.querySelector(".zelena_auta");
const carBlue = document.querySelector(".plava_auta");
const carPink = document.querySelector(".roza_auta");
const carWhite = document.querySelector(".bijela_auta");
const carBlack = document.querySelector(".crna_auta");
const carGray = document.querySelector(".siva_auta");
const carSajbe = document.querySelector(".sajbe_auta");
const carEnterijeri = document.querySelector(".enterijeri_auta");
const carAmbijenti = document.querySelector(".ambijenti_auta");
const carFarovi = document.querySelector(".farovi_auta");
const carNamjestaj = document.querySelector(".namjestaj_auta");
const popUpWindow = document.querySelector(".pop_up_window");
const popUpWindowYellow = document.querySelector(".pop_up_window_yellow");
const popUpWindowGreen = document.querySelector(".pop_up_window_green");
const popUpWindowBlue = document.querySelector(".pop_up_window_blue");
const popUpWindowPink = document.querySelector(".pop_up_window_pink");
const popUpWindowWhite = document.querySelector(".pop_up_window_white");
const popUpWindowBlack = document.querySelector(".pop_up_window_black");
const popUpWindowGray = document.querySelector(".pop_up_window_gray");
const popUpWindowSajbe = document.querySelector(".pop_up_window_sajbe");
const popUpWindowEnterijeri = document.querySelector(".pop_up_window_enterijeri");
const popUpWindowAmbijenti = document.querySelector(".pop_up_window_ambijenti");
const popUpWindowFarovi = document.querySelector(".pop_up_window_farovi");
const popUpWindowNamjestaj = document.querySelector(".pop_up_window_namjestaj");
const arrowRight = document.querySelector(".right_arrow");
const arrowRightYellow = document.querySelector(".right_arrow_yellow");
const arrowRightGreen = document.querySelector(".right_arrow_green");
const arrowRightBlue = document.querySelector(".right_arrow_blue");
const arrowRightPink = document.querySelector(".right_arrow_pink");
const arrowRightWhite = document.querySelector(".right_arrow_white");
const arrowRightBlack = document.querySelector(".right_arrow_black");
const arrowRightGray = document.querySelector(".right_arrow_gray");
const arrowRightSajbe = document.querySelector(".right_arrow_sajbe");
const arrowRightEnterijeri = document.querySelector(".right_arrow_enterijeri");
const arrowRightAmbijenti = document.querySelector(".right_arrow_ambijenti");
const arrowRightFarovi = document.querySelector(".right_arrow_farovi");
const arrowRightNamjestaj = document.querySelector(".right_arrow_namjestaj");
const arrowLeft = document.querySelector(".left_arrow");
const arrowLeftYellow = document.querySelector(".left_arrow_yellow");
const arrowLeftGreen = document.querySelector(".left_arrow_green");
const arrowLeftBlue = document.querySelector(".left_arrow_blue");
const arrowLeftPink = document.querySelector(".left_arrow_pink");
const arrowLeftWhite = document.querySelector(".left_arrow_white");
const arrowLeftBlack = document.querySelector(".left_arrow_black");
const arrowLeftGray = document.querySelector(".left_arrow_gray");
const arrowLeftSajbe = document.querySelector(".left_arrow_sajbe");
const arrowLeftEnterijeri = document.querySelector(".left_arrow_enterijeri");
const arrowLeftAmbijenti = document.querySelector(".left_arrow_ambijenti");
const arrowLeftFarovi = document.querySelector(".left_arrow_farovi");
const arrowLeftNamjestaj = document.querySelector(".left_arrow_namjestaj");
const imgContainer = document.querySelector(".img_container");
const imgContainerYellow = document.querySelector(".img_container_yellow");
const imgContainerGreen = document.querySelector(".img_container_green");
const imgContainerBlue = document.querySelector(".img_container_blue");
const imgContainerPink = document.querySelector(".img_container_pink");
const imgContainerWhite = document.querySelector(".img_container_white");
const imgContainerBlack = document.querySelector(".img_container_black");
const imgContainerGray = document.querySelector(".img_container_gray");
const imgContainerSajbe = document.querySelector(".img_container_sajbe");
const imgContainerEnterijeri = document.querySelector(".img_container_enterijeri");
const imgContainerAmbijenti = document.querySelector(".img_container_ambijenti");
const imgContainerFarovi = document.querySelector(".img_container_farovi");
const imgContainerNamjestaj = document.querySelector(".img_container_namjestaj");
const images = document.querySelectorAll(".auto_img");
const imagesYellow = document.querySelectorAll(".auto_img_yellow");
const imagesGreen = document.querySelectorAll(".auto_img_green");
const imagesBlue = document.querySelectorAll(".auto_img_blue");
const imagesPink = document.querySelectorAll(".auto_img_pink");
const imagesWhite = document.querySelectorAll(".auto_img_white");
const imagesBlack = document.querySelectorAll(".auto_img_black")
const imagesGray = document.querySelectorAll(".auto_img_gray");
const imagesSajbe = document.querySelectorAll(".auto_img_sajbe");
const imagesEnterijeri = document.querySelectorAll(".auto_img_enterijeri");
const imagesAmbijenti = document.querySelectorAll(".auto_img_ambijenti");
const imagesFarovi = document.querySelectorAll(".auto_img_farovi");
const imagesNamjestaj = document.querySelectorAll(".auto_img_namjestaj");
const exitPopUp = document.querySelector(".exit_pop_up");
const exitPopUpYellow = document.querySelector(".exit_pop_up_yellow");
const exitPopUpGreen = document.querySelector(".exit_pop_up_green");
const exitPopUpBlue = document.querySelector(".exit_pop_up_blue");
const exitPopUpPink = document.querySelector(".exit_pop_up_pink");
const exitPopUpWhite = document.querySelector(".exit_pop_up_white");
const exitPopUpBlack = document.querySelector(".exit_pop_up_black");
const exitPopUpGray = document.querySelector(".exit_pop_up_gray");
const exitPopUpSajbe = document.querySelector(".exit_pop_up_sajbe");
const exitPopUpEnterijeri = document.querySelector(".exit_pop_up_enterijeri");
const exitPopUpAmbijenti = document.querySelector(".exit_pop_up_ambijenti");
const exitPopUpFarovi = document.querySelector(".exit_pop_up_farovi");
const exitPopUpNamjestaj = document.querySelector(".exit_pop_up_namjestaj");
/* const img_red = ["/assets/img/crvena/Screenshot_85.png", "/assets/img/crvena/Screenshot_86.png", "/assets/img/crvena/Screenshot_87.png", "/assets/img/crvena/Screenshot_88.png", "/assets/img/crvena/Screenshot_89.png", "/assets/img/crvena/Screenshot_90.png","/assets/img/crvena/Screenshot_91.png", "/assets/img/crvena/Screenshot_92.png", "/assets/img/crvena/Screenshot_93.png", "/assets/img/crvena/Screenshot_94.png", "/assets/img/crvena/Screenshot_95.png", "/assets/img/crvena/Screenshot_96.png", "/assets/img/crvena/Screenshot_157.png", "/assets/img/crvena/Screenshot_158.png", "/assets/img/crvena/Screenshot_159.png", "/assets/img/crvena/Screenshot_160.png", "/assets/img/crvena/Screenshot_168.png", "/assets/img/crvena/Screenshot_169.png", "/assets/img/crvena/Screenshot_170.png", "/assets/img/crvena/Screenshot_171.png", "/assets/img/crvena/Screenshot_172.png", "/assets/img/crvena/Screenshot_193.png", "/assets/img/crvena/Screenshot_194.png", "/assets/img/crvena/Screenshot_195.png", "/assets/img/crvena/Screenshot_196.png", "/assets/img/crvena/Screenshot_197.png"]; */


/* show pop up window */
carRed.addEventListener("click", () => {
    popUpWindow.style.display = "flex";
});

carYellow.addEventListener("click", () => {
    popUpWindowYellow.style.display = "flex";
});

carGreen.addEventListener("click", () => {
    popUpWindowGreen.style.display = "flex";
});

carBlue.addEventListener("click", () => {
    popUpWindowBlue.style.display = "flex";
});

carPink.addEventListener("click", () => {
    popUpWindowPink.style.display = "flex";
});

carWhite.addEventListener("click", () => {
    popUpWindowWhite.style.display = "flex";
});

carBlack.addEventListener("click", () => {
    popUpWindowBlack.style.display = "flex";
});

carGray.addEventListener("click", () => {
    popUpWindowGray.style.display = "flex";
});

carSajbe.addEventListener("click", () => {
    popUpWindowSajbe.style.display = "flex";
});

carEnterijeri.addEventListener("click", () => {
    popUpWindowEnterijeri.style.display = "flex";
});

carAmbijenti.addEventListener("click", () => {
    popUpWindowAmbijenti.style.display = "flex";
});

carFarovi.addEventListener("click", () => {
    popUpWindowFarovi.style.display = "flex";
});

carNamjestaj.addEventListener("click", () => {
    popUpWindowNamjestaj.style.display = "flex";
});

/* close pop up window */
exitPopUp.addEventListener("click", () => {
    popUpWindow.style.display = "none";
});

exitPopUpYellow.addEventListener("click", () => {
    popUpWindowYellow.style.display = "none";
});

exitPopUpGreen.addEventListener("click", () => {
    popUpWindowGreen.style.display = "none";
});

exitPopUpBlue.addEventListener("click", () => {
    popUpWindowBlue.style.display = "none";
});

exitPopUpPink.addEventListener("click", () => {
    popUpWindowPink.style.display = "none";
});

exitPopUpWhite.addEventListener("click", () => {
    popUpWindowWhite.style.display = "none";
});

exitPopUpBlack.addEventListener("click", () => {
    popUpWindowBlack.style.display = "none";
});

exitPopUpGray.addEventListener("click", () => {
    popUpWindowGray.style.display = "none";
});

exitPopUpSajbe.addEventListener("click", () => {
    popUpWindowSajbe.style.display = "none";
});

exitPopUpEnterijeri.addEventListener("click", () => {
    popUpWindowEnterijeri.style.display = "none";
});

exitPopUpAmbijenti.addEventListener("click", () => {
    popUpWindowAmbijenti.style.display = "none";
});

exitPopUpFarovi.addEventListener("click", () => {
    popUpWindowFarovi.style.display = "none";
});

exitPopUpNamjestaj.addEventListener("click", () => {
    popUpWindowNamjestaj.style.display = "none";
});

/* img slider */
const slider = () => {
    let slideNumber = 1;
    /* red slider */
    arrowRight.addEventListener("click", () => {
        if(slideNumber < images.length){
            imgContainer.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainer.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeft.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainer.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainer.style.transform = `translateX(-${(images.length - 1) * 400}px )`;
            slideNumber = images.length;
        }
    });
    /* yellow slider */
    arrowRightYellow.addEventListener("click", () => {
        if(slideNumber < imagesYellow.length){
            imgContainerYellow.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerYellow.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftYellow.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerYellow.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerYellow.style.transform = `translateX(-${(imagesYellow.length - 1) * 400}px )`;
            slideNumber = imagesYellow.length;
        }
    });

    /* green slider */

    arrowRightGreen.addEventListener("click", () => {
        if(slideNumber < imagesGreen.length){
            imgContainerGreen.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerGreen.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftGreen.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerGreen.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerGreen.style.transform = `translateX(-${(imagesGreen.length - 1) * 400}px )`;
            slideNumber = imagesGreen.length;
        }
    });
    
    /* blue slider */

    arrowRightBlue.addEventListener("click", () => {
        if(slideNumber < imagesBlue.length){
            imgContainerBlue.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerBlue.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftBlue.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerBlue.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerBlue.style.transform = `translateX(-${(imagesBlue.length - 1) * 400}px )`;
            slideNumber = imagesBlue.length;
        }
    });

    /* pink cars */

    arrowRightPink.addEventListener("click", () => {
        if(slideNumber < imagesPink.length){
            imgContainerPink.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerPink.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftPink.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerPink.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerPink.style.transform = `translateX(-${(imagesPink.length - 1) * 400}px )`;
            slideNumber = imagesPink.length;
        }
    });

    /* white cars */

    arrowRightWhite.addEventListener("click", () => {
        if(slideNumber < imagesWhite.length){
            imgContainerWhite.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerWhite.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftWhite.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerWhite.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerWhite.style.transform = `translateX(-${(imagesWhite.length - 1) * 400}px )`;
            slideNumber = imagesWhite.length;
        }
    });

    /* black cars */

    arrowRightBlack.addEventListener("click", () => {
        if(slideNumber < imagesBlack.length){
            imgContainerBlack.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerBlack.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftBlack.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerBlack.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerBlack.style.transform = `translateX(-${(imagesBlack.length - 1) * 400}px )`;
            slideNumber = imagesBlack.length;
        }
    });

    /* gray cars */

    arrowRightGray.addEventListener("click", () => {
        if(slideNumber < imagesGray.length){
            imgContainerGray.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerGray.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftGray.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerGray.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerGray.style.transform = `translateX(-${(imagesGray.length - 1) * 400}px )`;
            slideNumber = imagesGray.length;
        }
    });

    /* sajbe slajder */

    arrowRightSajbe.addEventListener("click", () => {
        if(slideNumber < imagesSajbe.length){
            imgContainerSajbe.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerSajbe.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftSajbe.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerSajbe.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerSajbe.style.transform = `translateX(-${(imagesSajbe.length - 1) * 400}px )`;
            slideNumber = imagesSajbe.length;
        }
    });

    /* enterijeri slajder */
    
    arrowRightEnterijeri.addEventListener("click", () => {
        if(slideNumber < imagesEnterijeri.length){
            imgContainerEnterijeri.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerEnterijeri.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftEnterijeri.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerEnterijeri.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerEnterijeri.style.transform = `translateX(-${(imagesEnterijeri.length - 1) * 400}px )`;
            slideNumber = imagesEnterijeri.length;
        }
    });

    /* ambijenti slajder */

    arrowRightAmbijenti.addEventListener("click", () => {
        if(slideNumber < imagesAmbijenti.length){
            imgContainerAmbijenti.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerAmbijenti.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftAmbijenti.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerAmbijenti.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerAmbijenti.style.transform = `translateX(-${(imagesAmbijenti.length - 1) * 400}px )`;
            slideNumber = imagesAmbijenti.length;
        }
    });

    /* farovi slajder */

    arrowRightFarovi.addEventListener("click", () => {
        if(slideNumber < imagesFarovi.length){
            imgContainerFarovi.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerFarovi.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftFarovi.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerFarovi.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerFarovi.style.transform = `translateX(-${(imagesFarovi.length - 1) * 400}px )`;
            slideNumber = imagesFarovi.length;
        }
    });

    /* namjestaj slajder */

    arrowRightNamjestaj.addEventListener("click", () => {
        if(slideNumber < imagesNamjestaj.length){
            imgContainerNamjestaj.style.transform = `translateX(-${slideNumber * 400}px)`;
            slideNumber += 1;
        }else {
            imgContainerNamjestaj.style.transform = `translateX(0px)`;
            slideNumber = 1;
        }
    });
    arrowLeftNamjestaj.addEventListener("click", () => {
        if(slideNumber > 1){
            imgContainerNamjestaj.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
            slideNumber -= 1;
        }else {
            imgContainerNamjestaj.style.transform = `translateX(-${(imagesNamjestaj.length - 1) * 400}px )`;
            slideNumber = imagesNamjestaj.length;
        }
    });
}

slider();