const btnNext = document.querySelector('.icon-right');
const btnPre = document.querySelector('.icon-left');
const sliderMain = document.querySelector('.main-slider');
const widthSlider = document.querySelector('.slider').clientWidth;
const itemSliders = document.querySelectorAll('.item-slider');
btnNext.addEventListener('click', () => {
    sliderShow(1);
});
btnPre.onclick = () => {
    sliderShow(-1);
};
let positionX = 0;
let index = 0;
function sliderShow(direction) {
    if (direction == 1) {
        if (index >= itemSliders.length - 1) {
            return;
        } else {
            positionX -= widthSlider;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        }
    } else {
        if (index <= 0) {
            return;
        } else {
            positionX += widthSlider;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
    }
}
