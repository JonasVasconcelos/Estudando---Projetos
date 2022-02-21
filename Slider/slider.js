let totalSlides = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width =
    `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height =
    `${document.querySelector('.slider').clientHeight}px`;


function rightbt(){
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }
    updateMargin();
}

function leftbt(){
    currentSlide--;
    if(currentSlide < 0 ){
        currentSlide = totalSlides-1;
    }
    updateMargin();
}

function updateMargin(){
    let clientWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * clientWidth);
    document.querySelector('.slider--width').style.marginLeft =
        `-${newMargin}px`
}

// setInterval(rightbt, 3000)