function productIntro() {
    const productIntros = document.querySelectorAll('[data-js="productIntro"]')
    
    if(productIntros.length < 1) return

    productIntros.forEach(section => {
        const sliderBlock = section.querySelector('[data-js="piSlider"]')
        const descText = section.querySelector('[data-js="productIntroText"]')

        if(sliderBlock) {
            const slider = sliderBlock.querySelector('[data-js="piSliderSlider"]')
            const wrapper = sliderBlock.querySelector('[data-js="piSliderWrapper"]')
            const thumbs = sliderBlock.querySelector('[data-js="piSliderThumbs"]')
            const controls = sliderBlock.querySelector('[data-js="sliderControls"]')
            const prev = controls.querySelector('[data-js="sliderPrev"]')
            const next = controls.querySelector('[data-js="sliderNext"]')

            const thumbsEx = new Swiper(thumbs, {
                slidesPerView: 'auto',
                spaceBetween: 6,
                breakpoints: {
                    501: {
                        spaceBetween: 10
                    },   
                    1801: {
                        spaceBetween: 20
                    }
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
            })

            const sliderEx = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 10,
                on: {
                    init: function() {
                        if(descText && wrapper && window.innerWidth >= 1024) {
                            descText.style.minHeight = wrapper.offsetHeight + 'px'
                        }
                    }
                }
            })

            let needSync = true

            thumbsEx.on('click', function(e) {
                const clickedIndex = this.clickedIndex;
                
                if (clickedIndex === 0) return;
                
                needSync = false;
                const mainIndex = clickedIndex - 1;
                sliderEx.slideTo(mainIndex);
            });

            sliderEx.on('slideChange', function() {
                if(needSync) {
                    const thumbsIndex = this.activeIndex + 1;
                    thumbsEx.slideTo(thumbsIndex);
                }

                needSync = true
            });
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