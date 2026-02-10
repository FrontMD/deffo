function newsListAnim() {
    const newsLists = document.querySelectorAll('[data-js="newsList"]')

    if(newsLists.length < 1) return

    
    newsLists.forEach((newsList, i) => {
        const currentId = `newsList${i+1}`
        const cardsList = newsList.querySelectorAll('[data-js="newsListCard"]')
        const more = newsList.querySelector('[data-js="newsListMore"]')
        const pagination = newsList.querySelector('[data-js="pagination"]')
        
        newsList.setAttribute('data-anim-id', currentId)
        
        if(cardsList.length > 0) {

            cardsList.forEach((card, i) => {

                if(i < 3) {
                    setAttributes(card, {
                        'data-aos': 'fade-up',
                        'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                        'data-aos-duration': '1000',
                        'data-aos-delay': `${i * 200}`,
                        'data-aos-anchor-placement': 'top-bottom'
                    })
                } else {
                    setAttributes(card, {
                        'data-aos': 'fade-up',
                        'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                        'data-aos-duration': '1000',
                        'data-aos-delay': `${600}`,
                        'data-aos-anchor-placement': 'top-bottom'
                    })
                } 
                    
            })

            if(more) {
                setAttributes(more, {
                    'data-aos': 'fade-up',
                    'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                    'data-aos-duration': '1000',
                    'data-aos-delay': `${cardsList.length > 3 ? 800 : cardsList.length * 200}`,
                    'data-aos-anchor-placement': 'top-bottom'
                })
            }
            
            if(pagination) {
                setAttributes(pagination, {
                    'data-aos': 'fade-up',
                    'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                    'data-aos-duration': '1000',
                    'data-aos-delay': `${cardsList.length > 3 ? 1000 : cardsList.length * 200}`,
                    'data-aos-anchor-placement': 'top-bottom'
                })
            }

        }
                  
    })
}