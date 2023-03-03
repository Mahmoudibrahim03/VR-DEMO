const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: false
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        init: function () {
            slideElementsAnimation(this)
        },

    }
});



function slideElementsAnimation(slide) {
    const activeSlide = (slide.slides.filter((el) => {
        return el.classList.contains('swiper-slide-active');
    }))
    const notActiveSlide = (slide.slides.filter((el) => {
        console.log(el)
        return !el.classList.contains('swiper-slide-active');
    }))
    Array.from(activeSlide[0].querySelectorAll('.slide-content > *'))
        .forEach((el, index) => {
            gsap.to(el, {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: index * 0.17,
                ease: 'power4.inOut',
            });
        });
    Array.from(notActiveSlide[0].querySelectorAll('.slide-content > *'))
        .forEach((el) => {
            gsap.set(el, {
                x: 20,
                opacity: 0,
            });
        });
}

swiper.on('slideChangeTransitionStart', function (slide) {
    slideElementsAnimation(slide)
});


const swiper2 = new Swiper('.experience-swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 33,
    pagination: {
        el: '.ex-swiper-pagination',
    },
    navigation: {
        nextEl: '.exper-next',
        prevEl: '.exper-prev',
    },

});