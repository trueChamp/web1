const swiper = new Swiper('#swiper1', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
        delay: 10000
    },


    navigation: {
        boolean: false,
    },

    simulateTouch: {
        boolean: false
    },

    autoplay: {
        delay: 5000,

    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

document.addEventListener("DOMContentLoaded", () => {
    let gallerySlider = new Swiper(".slides-container", {
        speed: 900,
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: "row"
        },
        spaceBetween: 20,
        pagination: {
            el: ".gallery .gallery__pagination",
            type: "fraction"
        },
        navigation: {
            nextEl: ".gallery__next",
            prevEl: ".gallery__prev"
        },

        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 12,
                slidesPerGroup: 1
            },
            610: {
                slidesPerView: 2,
                spaceBetween: 38,
                slidesPerGroup: 2
            },
            977: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2
            },

            1551: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3
            }
        },

        a11y: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },


        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
            init: function() {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            },
            slideChange: function() {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            }
        }

    });
});


const swiper3 = new Swiper('#swiper3', {
    speed: 900,
    simulateTouch: false,
    allowTouchMove: false,
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,

    breakpoints: {

        200: {
            slidesPerView: 1,

            slidesPerGroup: 1,
        },
        610: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },

        976: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3,
        },
        1301: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    simulateTouch: {
        boolean: false
    },




});

const swiper4 = new Swiper('#swiper4', {
    speed: 900,
    simulateTouch: false,
    allowTouchMove: false,
    direction: 'horizontal',
    loop: false,
    a11y: false,



    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 48,
            slidesPerGroup: 1,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 1,
        },
        975: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 1,
        },
        1556: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    simulateTouch: {
        boolean: false
    },




    keyboard: {
        enabled: true,
        onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
        init: function() {
            this.slides.forEach((slide) => {
                if (!slide.classList.contains("slide-visible")) {
                    slide.tabIndex = "0";
                } else {
                    slide.tabIndex = "1";
                }
            });
        },
        slideChange: function() {
            this.slides.forEach((slide) => {
                if (!slide.classList.contains("slide-visible")) {
                    slide.tabIndex = "-1";
                } else {
                    slide.tabIndex = "";
                }
            });
        }
    }




});

document.addEventListener("DOMContentLoaded", () => {
    let proSlider = new Swiper("#swiper4", {
        speed: 900,
        simulateTouch: false,
        allowTouchMove: false,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: "row"
        },
        spaceBetween: 20,

        navigation: {
            nextEl: ".next4",
            prevEl: ".prev4"
        },

        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 48,
                slidesPerGroup: 1,
            },
            750: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2,
            },
            975: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 2,
            },
            1556: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
            },
        },

        a11y: false,

        keyboard: {
            enabled: false,
            onlyInViewport: false,
        },

        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
            init: function() {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            },
            slideChange: function() {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            }
        }


    });
});