function sFaqAnim() {
    const sFaqs = document.querySelectorAll('[data-js="sFaq"]')

    if(sFaqs.length < 1) return

    sFaqs.forEach(sFaq => {
        const title = sFaq.querySelector('[data-js="sFaqTitle"]')
        const sFaqMedia = sFaq.querySelector('[data-js="sFaqMedia"]')
        const sFaqMediaContent = sFaq.querySelector('[data-js="sFaqMediaContent"]')
        const spoilers = sFaq.querySelector('[data-js="accordion"]')?.querySelectorAll('[data-js="spoiler"]')
        const trigger = sFaq.querySelector('[data-js="scrollTrigger"]')
        const needOffsetList = sFaq.querySelectorAll('[data-js="needOffset"]')
        const ww = window.innerWidth
        const bp = 1024

        spoilers?.forEach(spoiler => {
            spoiler.setAttribute('data-anim-type', 'opacityUp')
        })

        if(sFaqMediaContent && ww >= bp) {
            sFaqMediaContent.addEventListener('loadeddata', () => {
                const mediaWidth = sFaqMedia.offsetWidth
                const contentHeight = sFaqMediaContent.offsetHeight
    
                sFaqMediaContent.style.position = 'absolute'
                sFaqMediaContent.style.width = '100%'
                sFaqMediaContent.style.height = '100%'
                sFaqMediaContent.style.transition = 'width 1s linear, height 1s linear'

                if(trigger) {
                    const tHeight = window.innerHeight - 100
                    const sHeight = sFaq.offsetHeight

                    if(sHeight >= tHeight) {
                        trigger.setAttribute('data-aos-offset', tHeight)
                        needOffsetList.forEach(item => {
                            item.setAttribute('data-aos-offset', tHeight)
                            item.setAttribute('data-aos-delay', '1600')
                        })
                    } else {
                        trigger.setAttribute('data-aos-offset', sHeight)
                        needOffsetList.forEach(item => {
                            item.setAttribute('data-aos-offset', sHeight)
                            item.setAttribute('data-aos-delay', '1600')
                        })
                    }

                    trigger.addEventListener('transitionend', () => {
                        anim(mediaWidth, contentHeight)
                    }, {once: true})

                } else {
                    anim(mediaWidth, contentHeight)
                }
                
            }, {once: true})

        } else {
            if(trigger) {
                const tHeight = window.innerHeight - 100
                const sHeight = sFaq.offsetHeight

                if(ww >= bp) {
                    if(sHeight >= tHeight) {
                        trigger.setAttribute('data-aos-offset', tHeight)
                        needOffsetList.forEach(item => {
                            item.setAttribute('data-aos-offset', tHeight)
                            item.setAttribute('data-aos-delay', '600')
                        })
                    } else {
                        trigger.setAttribute('data-aos-offset', sHeight)
                        needOffsetList.forEach(item => {
                            item.setAttribute('data-aos-offset', sHeight)
                            item.setAttribute('data-aos-delay', '600')
                        })
                    }
                } else {
                    trigger.setAttribute('data-aos-offset', tHeight / 2)
                    needOffsetList.forEach(item => {
                        item.setAttribute('data-aos-offset', tHeight / 2)
                        item.setAttribute('data-aos-delay', '600')
                    })
                }

                trigger.addEventListener('transitionend', () => {
                    anim(0, 0)
                }, {once: true})

            } else {
                anim(0, 0)
            }
        }

        async function anim(mediaWidth, contentHeight) {

            if(sFaqMedia && sFaqMediaContent && ww >= bp) {
                sFaqMediaContent.style.width = mediaWidth + 'px'
                sFaqMediaContent.style.height = contentHeight + 'px'
                await delay(1100)
                sFaqMediaContent.style.position = 'relative'
                sFaqMediaContent.style.width = '100%'
            }
    
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
        }
        
    })
}