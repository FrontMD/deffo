function gallerySlider() {
    const gallerySliders = document.querySelectorAll('[data-js="gallerySlider"]')

    if(gallerySliders.length < 1) return

    
    gallerySliders.forEach(section => {
        const slider = section.querySelector('[data-js="gallerySliderSlider"]')
        const controls = section.querySelector('[data-js="sliderControls"]')
        const prev = controls.querySelector('[data-js="sliderPrev"]')
        const next = controls.querySelector('[data-js="sliderNext"]')
        const vw = window.innerWidth
        let slidesPerView = 2

        if(vw < 768) {
            slidesPerView = 1.2
        }

        const sliderEx = new Swiper(slider, {
            slidesPerView: slidesPerView,
            spaceBetween: 12,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            breakpoints: {
                768: {
                    slidesPerView: slidesPerView,
                    spaceBetween: 24,
                }
            },
            on: {
                init: function (swiper) {
                    if(swiper.slides.length > slidesPerView) {
                        controls.classList.add('active')
                    }
                }
            }
        })
    })
}