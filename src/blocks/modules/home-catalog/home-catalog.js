function homeCatalogAnim() {
    const homeCatalogs = document.querySelectorAll('[data-js="homeCatalog"]')

    if(homeCatalogs.length < 1) return

    
    homeCatalogs.forEach((homeCatalog, i) => {
        const currentId = `homeCatalog${i+1}`
        const cardsList = homeCatalog.querySelector('[data-js="tabsBlockSlide"]')?.querySelectorAll('[data-js="catalogCard"]')
        
        homeCatalog.setAttribute('data-anim-id', currentId)
        
        if(cardsList.length > 0) {
            cardsList.forEach((card, i) => {
                switch (i) {
                    case 0:
                        setAttributes(card, {
                            'data-aos': 'fade-up',
                            'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                            'data-aos-duration': '1000',
                            'data-aos-anchor-placement': 'top-center'
                        })
                        break
                    case 1:
                    case 2:
                        setAttributes(card, {
                            'data-aos': 'fade-up',
                            'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                            'data-aos-duration': '1000',
                            'data-aos-delay': `${i * 200 + 400}`,
                            'data-aos-anchor-placement': 'top-center'
                        })
                        break
                    case 3:
                    case 4:
                        setAttributes(card, {
                            'data-aos': 'fade-up',
                            'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                            'data-aos-duration': '1000',
                            'data-aos-delay': `${i * 200 - 400}`,
                            'data-aos-anchor-placement': 'top-center'
                        })
                        break
                    default:
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
                    const tabsBlockList = homeCatalog.querySelector('[data-js="tabsBlockList"]')
                    
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

                    setAttributes(tabsBlockList, {
                        'data-aos': 'fade-up',
                        'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                        'data-aos-duration': '1000',
                        'data-aos-delay': `${cardDelay + 400}`,
                            'data-aos-anchor-placement': 'top-center'
                    })
                    
                }
                    
            })
        }
                  
    })
}