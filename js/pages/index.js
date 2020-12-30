//index.js
$(function () {


    let sliderSwiper = new Swiper('.slider__container', {
        direction: 'horizontal',
        slidesPerView: 1.3,
        centeredSlides: true,
        initialSlide: 1,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    })


});