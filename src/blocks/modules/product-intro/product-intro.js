function productIntro() {
    const productIntros = document.querySelectorAll('[data-js="productIntro"]')
    
    if(productIntros.length < 1) return

    productIntros.forEach(section => {
        const title = section.querySelector('[data-js="productIntroTitle"]')
        const sliderBlock = section.querySelector('[data-js="piSlider"]')

        if(sliderBlock) {
            const slider = sliderBlock.querySelector('[data-js="piSliderSlider"]')
            const thumbs = sliderBlock.querySelector('[data-js="piSliderThumbs"]')

            const thumbsEx = new Swiper(thumbs, {
                slidesPerView: 'auto',
                spaceBetween: 20
            })

            const sliderEx = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 10,
                thumbs: {
                    swiper: thumbsEx
                }
            })
        }
    })

}


/*function productIntroAnim() {
    prodsLists.forEach((prodsList, i) => {
        const currentId = `prodsList${i+1}`
        const cardsList = prodsList.querySelectorAll('[data-js="prodCard"]')
        const trigger = prodsList.querySelector('[data-js="scrollTrigger"]')
        
        prodsList.setAttribute('data-anim-id', currentId)

        if(trigger && title) {
            setAttributes(trigger, {
                'data-aos': 'fade-up',
                'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                'data-aos-duration': '3000',
                'data-aos-anchor-placement': 'top-bottom'
            })
            trigger.addEventListener('transitionend', () => {
                opacityAnim(title)
            }, {once: true})
        } else if (title) {
            opacityAnim(title)
        }
        
        if(cardsList.length > 0) {
            cardsList.forEach((card, i) => {

                if(i === 0) {
                    setAttributes(card, {
                        'data-aos': 'fade-up',
                        'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                        'data-aos-duration': '1000',
                        'data-aos-anchor-placement': 'top-bottom'
                    })
                } else {
                    setAttributes(card, {
                        'data-aos': 'fade-up',
                        'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                        'data-aos-duration': '1000',
                        'data-aos-delay': `${i * 200}`,
                        'data-aos-anchor-placement': 'top-bottom'
                    })
                } 
                    
            })
        }
                  
    })
}*/