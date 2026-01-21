function prodsListAnim() {
    const prodsLists = document.querySelectorAll('[data-js="prodsList"]')

    if(prodsLists.length < 1) return

    
    prodsLists.forEach((prodsList, i) => {
        const currentId = `prodsList${i+1}`
        const cardsList = prodsList.querySelectorAll('[data-js="prodCard"]')
        const title = prodsList.querySelector('[data-js="prodsListTitle"]')
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
}