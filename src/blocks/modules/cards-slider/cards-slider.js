function cardsSlider() {
    const cardsSliders = document.querySelectorAll('[data-js="cardsSlider"]')

    if(cardsSliders.length < 1) return

    cardsSliders.forEach(section => {
        const slider = section.querySelector('[data-js="cardsSliderSlider"]')
        const controls = section.querySelector('[data-js="sliderControls"]')
        const prev = controls.querySelector('[data-js="sliderPrev"]')
        const next = controls.querySelector('[data-js="sliderNext"]')

        const sliderEx = new Swiper(slider, {
            slidesPerView: 1.2,
            spaceBetween: 12,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            breakpoints: {
                768: {
                    spaceBetween: 12,
                    slidesPerView: 2.2
                },
                1024: {
                    spaceBetween: 24,
                    slidesPerView: 3
                }
            },
            on: {
                init: function (swiper) {
                    if(swiper.slides.length > swiper.params.slidesPerView) {
                        controls.classList.add('active')
                    }
                    cardsSliderAnim(cardsSliders)
                }
            }
        })
    })
}

function cardsSliderAnim(cardsSliders = null) {

    const slidersList = cardsSliders ? cardsSliders : document.querySelectorAll('[data-js="cardsSlider"]')

    if(slidersList.length < 1) return

    slidersList.forEach(item => {
        const slider = item.querySelector('[data-js="cardsSliderSlider"]')
        const title = item.querySelector('[data-js="cardsSliderTitle"]')

        if(slider && title) {
            slider.addEventListener('transitionstart', function() {
                opacityAnim(title)
            }, {once: true})
        }
    })
}