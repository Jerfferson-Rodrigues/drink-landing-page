function imgSlider(anything) {
    document.querySelector('.pepsi').src = anything;
}

function logo(imglogo) {
    document.querySelector('.logo').src = imglogo;
}

function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}

function menuToggle() {
    const ToggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    ToggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}