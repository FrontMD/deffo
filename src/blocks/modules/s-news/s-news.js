function newsSlider() {
    const newsSections = document.querySelectorAll('[data-js="sNews"]')

    if(newsSections.length < 1) return

    newsSections.forEach(section => {
        const slider = section.querySelector('[data-js="sNewsSlider"]')
        const controls = section.querySelector('[data-js="sliderControls"]')
        const prev = controls.querySelector('[data-js="sliderPrev"]')
        const next = controls.querySelector('[data-js="sliderNext"]')
        const spaceBetween = 3

        const sliderEx = new Swiper(slider, {
            slidesPerView: spaceBetween,
            spaceBetween: 10,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            on: {
                init: function (swiper) {
                    if(swiper.slides.length > spaceBetween) {
                        controls.classList.add('active')
                    }
                }
            }
        })
    })
}