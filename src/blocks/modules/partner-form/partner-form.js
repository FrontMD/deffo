function sAboutAnim() {
    const sAbouts = document.querySelectorAll('[data-js="sAbout"]')

    if(sAbouts.length < 1) return

    sAbouts.forEach(sAbout => {
        const video = sAbout.querySelector('[data-js="sAboutVideo"]');
        const rect = sAbout.querySelector('[data-js="sAboutRect"]');
        const text = sAbout.querySelector('[data-js="sAboutText"]');
        const title = sAbout.querySelector('[data-js="sAboutTitle"]');
        const cards = sAbout.querySelector('[data-js="sAboutCards"]');
        const logo = sAbout.querySelector('[data-js="sAboutLogo"]');
        const pathList = logo.querySelectorAll('[data-anim-type="opacityUp100"]')

        if(video) {
            const videoAnimEl = video.querySelector('[data-anim-type]')

            if(videoAnimEl) {
                video.addEventListener('transitionend', () => {
                    videoAnimEl.classList.add('animated')
                }, {once: true})

                text?.setAttribute('data-aos-delay', '2400')
                cards?.setAttribute('data-aos-delay', '3000')
            }

            if(rect && videoAnimEl) {
                const rectWidth = rect.getAttribute('width')
                const rectHeight = rect.getAttribute('height')
                rect.setAttribute('width', '1px')
                rect.setAttribute('height', '0')
                videoAnimEl.addEventListener('transitionend', async function() {
                    rect.setAttribute('height', rectHeight)
                    await delay(600)
                    rect.setAttribute('width', rectWidth)
                }, {once: true})
            }

            if(text) {
                text.addEventListener('transitionstart', function() {
                    if(title) {
                        opacityAnim(title)
                    }
                }, {once: true})
            }

            if(logo) {
                if(cards) {
                    cards.addEventListener('transitionend', async function() {
                        for(let i = 0; i < pathList.length; i++) {
                            await delay(100)
                            opacityAnim(pathList[i])
                        }
                    })
                } else if(title) {
                    title.addEventListener('transitionend', async function() {
                        for(let i = 0; i < pathList.length; i++) {
                            await delay(100)
                            opacityAnim(pathList[i])
                        }
                    })
                }
            }
        }
    })
}