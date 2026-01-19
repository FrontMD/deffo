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
                    sNewsAnim()
                }
            }
        })
    })
}

function sNewsAnim() {
    const newsSections = document.querySelectorAll('[data-js="sNews"]')

    if(newsSections.length < 1) return

    newsSections.forEach(news => {
        const slider = news.querySelector('[data-js="sNewsSlider"]')
        const title = news.querySelector('[data-js="sNewsTitle"]')

        if(slider) {
            slider.addEventListener('transitionstart', function() {
                opacityAnim(title)
            }, {once: true})
        }
    })
}