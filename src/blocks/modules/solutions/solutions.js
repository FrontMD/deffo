function solutionsSlider() {
    const solutionsSliders = document.querySelectorAll('[data-js="solutionsSlider"]')

    if(solutionsSliders.length < 1) return

    solutionsSliders.forEach(slider => {
        const sliderEx = new Swiper(slider, {
            slidesPerView: 1.67,
            spaceBetween: 5,
            on: {
                init: function() {
                    solutionsAnim()
                }
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.67
                }
            }
        })
    })
}

function solutionsAnim() {
    const solutionsBlocks = document.querySelectorAll('[data-js="solutions"]')

    if(solutionsBlocks.length < 1) return

    solutionsBlocks.forEach(solutions => {
        const slider = solutions.querySelector('[data-js="solutionsSlider"]')
        const title = solutions.querySelector('[data-js="solutionsTitle"]')
        const slides = slider.querySelectorAll('.swiper-slide .solutions-card__bg');

        if(slider) {
            title.addEventListener('transitionend', () => {
                textColorAnim(title)
                slides.forEach(slide => {
                    commonAnimation(slide)
                })
            }, {once: true})

            slides.forEach(slide => {
                slide.setAttribute('data-anim-type', 'zoomIn')
            })
        }
    })
}