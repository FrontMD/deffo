function sFaqAnim() {
    const sFaqs = document.querySelectorAll('[data-js="sFaq"]')

    if(sFaqs.length < 1) return

    sFaqs.forEach(sFaq => {
        const title = sFaq.querySelector('[data-js="sFaqTitle"]')
        const videoCover = sFaq.querySelector('[data-js="sFaqVideo"] [data-anim-type="widthReverse"]')
        const spoilers = sFaq.querySelector('[data-js="accordion"]')?.querySelectorAll('[data-js="spoiler"]')

        if(spoilers.length > 0) {
            spoilers.forEach(spoiler => {
                spoiler.setAttribute('data-anim-type', 'opacityUp')
            })
        }
        
        sFaq.querySelector('[data-js="scrollTrigger"]')?.addEventListener('transitionend', async function() {
            if(title) {
                opacityAnim(title)
                await delay(1000)
            }

            if(spoilers.length > 0) {
                for(let i = 0; i < spoilers.length; i++) {
                    await delay(200)
                    commonAnimation(spoilers[i])
                }
            }

            if(videoCover) {
                commonAnimation(videoCover)
            }
        }, {once: true})
    })
}