function pcSlider() {
    const pcSliders = document.querySelectorAll('[data-js="pcSlider"]')

    if(pcSliders.length < 1) return
    
    pcSliders.forEach(section => {
        const slider = section.querySelector('[data-js="pcSliderSlider"]')
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
                    slidesPerView: 3,
                    spaceBetween: 12,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                }
            },
            on: {
                init: function (swiper) {
                    if(swiper.slides.length > swiper.params.slidesPerView) {
                        controls.classList.add('active')
                    }
                    pcSliderAnim(pcSliders)
                }
            }
        })
    })
}

function pcSliderAnim(elList = null) {
    const pcSliders = elList ? elList : document.querySelectorAll('[data-js="pcSlider"]')

    if(pcSliders.length < 1) return

    pcSliders.forEach(item => {
        const slider = item.querySelector('[data-js="pcSliderSlider"]')
        const title = item.querySelector('[data-js="pcSliderTitle"]')

        if(slider) {
            slider.addEventListener('transitionstart', function() {
                opacityAnim(title)
            }, {once: true})
        }
    })


}