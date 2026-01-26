function gallerySlider() {
    const gallerySliders = document.querySelectorAll('[data-js="gallerySlider"]')

    if(gallerySliders.length < 1) return
    
    gallerySliders.forEach(section => {
        const slider = section.querySelector('[data-js="gallerySliderSlider"]')
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
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                }
            },
            on: {
                init: function (swiper) {
                    if(swiper.slides.length > swiper.params.slidesPerView) {
                        controls.classList.add('active')
                    }
                    gallerySliderAnim(gallerySliders)
                }
            }
        })
    })
}

function gallerySliderAnim(elList = null) {
    const gallerySliders = elList ? elList : document.querySelectorAll('[data-js="gallerySlider"]')

    if(gallerySliders.length < 1) return

    gallerySliders.forEach(item => {
        const slider = item.querySelector('[data-js="gallerySliderSlider"]')
        const title = item.querySelector('[data-js="gallerySliderTitle"]')



        if(slider && title) {
            slider.addEventListener('transitionstart', function() {
                opacityAnim(title)
            }, {once: true})
        }
    })


}