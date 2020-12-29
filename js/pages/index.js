//index.js
$(function () {


    let sliderSwiper = new Swiper('.slider__container', {
        direction: 'horizontal',
        slidesPerView: '2',
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
    })


});