function sCatalogAnim() {
    const sCatalogs = document.querySelectorAll('[data-js="sCatalog"]')

    if(sCatalogs.length < 1) return

    
    sCatalogs.forEach((sCatalog, i) => {
        const currentId = `sCatalog${i+1}`
        const cardsList = sCatalog.querySelectorAll('[data-js="catalogCard"]')
        const title = sCatalog.querySelector('[data-js="sCatalogTitle"]')
        
        sCatalog.setAttribute('data-anim-id', currentId)

        if(title) {
            sCatalog.querySelector('[data-js="scrollTrigger"]')?.addEventListener('transitionend', async function() {
                await delay(500)
                opacityAnim(title)
            }, {once: true})
        }
        
        if(cardsList.length > 0) {
            cardsList.forEach((card, i) => {

                if(i === 0) {
                    setAttributes(card, {
                        'data-aos': 'fade-up',
                        'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                        'data-aos-duration': '1000',
                        'data-aos-anchor-placement': 'top-center'
                    })
                } else {
                    setAttributes(card, {
                        'data-aos': 'fade-up',
                        'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                        'data-aos-duration': '1000',
                        'data-aos-delay': `${i * 200}`,
                        'data-aos-anchor-placement': 'top-center'
                    })
                } 
                    
                if(i === cardsList.length - 1) {
                    const cardDelay = card.getAttribute('data-aos-delay') ? parseInt(card.getAttribute('data-aos-delay')) : 0
                    
                    cardsList.forEach(card => {
                        const cardTitle = card.querySelector('[data-js="catalogCardTitle"]')

                        if(cardTitle) {
                            setAttributes(cardTitle, {
                                'data-aos': 'fade-up',
                                'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                                'data-aos-duration': '1000',
                                'data-aos-delay': `${cardDelay + 200}`,
                                'data-aos-anchor-placement': 'top-center'
                            })
                        }
                    })
                }
                    
            })
        }
        
                  
    })
}