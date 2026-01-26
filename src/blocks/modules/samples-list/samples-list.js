function samplesListAnim() {
    const samplesLists = document.querySelectorAll('[data-js="samplesList"]')

    if(samplesLists.length < 1) return

    samplesLists.forEach((list, i) => {
        const currentId = 'samplesList' + i
        const items = list.querySelectorAll('[data-anim-id="samplesListItem"]')
        const title = list.querySelector('[data-js="samplesListTitle"]')
        const trigger = list.querySelector('[data-js="scrollTrigger"]')

        list.setAttribute('data-anim-id', currentId)

        if(trigger && title) {
            setAttributes(trigger, {
                'data-aos': 'fade-up',
                'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                'data-aos-duration': '50',
                'data-aos-anchor-placement': 'top-bottom'
            })
            setTimeout(() => {
                trigger.addEventListener('transitionend', async function() {
                    await delay(200)
                    opacityAnim(title)
                }, {once: true})
            }, 100)
        } else if (title) {
            opacityAnim(title)
        }

        if(items.length > 0) {
            items.forEach((card, index) => {
                if(index === 0) {
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
                        'data-aos-delay': `${index * 200}`,
                        'data-aos-anchor-placement': 'top-center'
                    })
                }
                    
            })

        }
    })


}