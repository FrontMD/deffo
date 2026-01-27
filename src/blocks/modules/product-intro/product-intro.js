function productIntro() {
    const productIntros = document.querySelectorAll('[data-js="productIntro"]')
    
    if(productIntros.length < 1) return

    productIntros.forEach(section => {
        const sliderBlock = section.querySelector('[data-js="piSlider"]')

        if(sliderBlock) {
            const slider = sliderBlock.querySelector('[data-js="piSliderSlider"]')
            const thumbs = sliderBlock.querySelector('[data-js="piSliderThumbs"]')

            const thumbsEx = new Swiper(thumbs, {
                slidesPerView: 'auto',
                spaceBetween: 10,
                breakpoints: {
                    1801: {
                        spaceBetween: 20
                    }
                }
            })

            const sliderEx = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 10,
                thumbs: {
                    swiper: thumbsEx
                },
            })
        }

        productIntroAnim(section)
    })

}

function productIntroAnim(section) {
    const title = section.querySelector('[data-js="productIntroTitle"]')
    const side = section.querySelector('[data-js="productIntroSide"]')

    if(title && side) {
        side.addEventListener('transitionstart', () => {
            opacityAnim(title)
        }, {once: true})
    } else if(title) {
        opacityAnim(title)
    }
}