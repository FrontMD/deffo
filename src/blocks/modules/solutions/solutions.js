function solutionsSlider() {
    const solutionsBlocks = document.querySelectorAll('[data-js="solutions"]')
    
    if(solutionsBlocks.length < 1) return
    
    solutionsBlocks.forEach(solutions => {
        const slider = solutions.querySelector('[data-js="solutionsSlider"]')

        const sliderEx = new Swiper(slider, {
            slidesPerView: 1.67,
            spaceBetween: 5,
            on: {
                init: function() {
                    solutionsAnim(solutions)
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

function solutionsAnim(solutions) {
    const header = solutions.querySelector('[data-js="solutionsHeader"]')
    const slider = solutions.querySelector('[data-js="solutionsSlider"]')
    const title = solutions.querySelector('[data-js="solutionsTitle"]')
    const slides = slider.querySelectorAll('.swiper-slide .solutions-card__bg');
    const decor = solutions.querySelector('[data-js="solutionsDecor"]')
    const btn = solutions.querySelector('[data-js="solutionsBtn"]')
    const trigger = solutions.querySelector('[data-js="scrollTrigger"]')

    
    if(trigger) {
        const tHeight = window.innerHeight - 100
        const sHeight = solutions.offsetHeight

        if(sHeight >= tHeight) {
            trigger.setAttribute('data-aos-offset', tHeight)
        } else {
            trigger.setAttribute('data-aos-offset', sHeight)
        }

        trigger.addEventListener('transitionend', () => {
            anim()
        }, {once: true})

    } else {
        anim()
    }

    slides?.forEach(slide => {
        slide.setAttribute('data-anim-type', 'zoomIn')
    })

    async function anim() {
        if(decor) {
                decor.classList.add('animated')
                await delay(700)
            }

            if(slider || header) {

                if(slider) commonAnimation(slider)
                if(header) commonAnimation(header)
                
                await delay(2000)
            }

            if(title) {
                textColorAnim(title)
            }

            if(btn) {
                commonAnimation(btn)
            }

            if(slides.length) {
                slides.forEach(slide => {
                    commonAnimation(slide)
                })
            }
    }
    
}