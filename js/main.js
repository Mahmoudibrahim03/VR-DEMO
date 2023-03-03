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

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

(function scrollEffeect() {
    let upButton = document.querySelector('.toUp-button');

    document.addEventListener('scroll', () => {
        let scroll = window.scrollY;
        let nav = document.querySelector('nav').scrollHeight + 100;

        if (scroll > nav) {
            let navEl = document.querySelector('nav');
            css(navEl, {
                "position": 'fixed',
                "height": 'auto',
                "background-color": "rgba(27, 26, 38, 1)",
                "box-shadow": "0 1 px 3 px rgb(0 0 0 / 11%)",
                "transition": "all 0.25s ease-in",
            })
            if (window.innerWidth < 768) {
                css(navEl, {
                    "background-color": "#fff",
                    "position": 'relative',
                    "height": '100px',
                    "box-shadow": "none",
                })
            }
            upButton.style.display = 'flex';
        } else {
            let navEl = document.querySelector('nav');
            css(navEl, {
                "position": 'absolute',
                "height": '100px',
                "background-color": "inherit",
                "box-shadow": "none",
                "transition": "all 0.25s ease-out"
            })
            if (window.innerWidth < 768) {
                css(navEl, {
                    "background-color": "#fff",
                })
            }
            upButton.style.display = 'none';
        }
    })





    upButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})();