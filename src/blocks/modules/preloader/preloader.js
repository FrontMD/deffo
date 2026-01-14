function preloader() {
    const preloader = document.querySelector('[data-js="preloader"]')

    if(!preloader) return

    lockBody()

    linesHeight()

    async function linesHeight() {
        const linesList = preloader.querySelectorAll('[data-js="preloaderLine"]')
        const duration = parseFloat(window.getComputedStyle(linesList[0]).transitionDuration) * 1000;
        const animOrder = [2,6,4,1,9,5,0,8,3,7]

        for(i = 0; i < animOrder.length; i++) {
            linesList[animOrder[i]].classList.add('preloader__line--hidden')

            if(i < 3) {
                await delay(duration * 0.05)
            } else if (i > 3 && i < animOrder.length - 1) {
                await delay(duration * 0.02)
            }
        }

        const preloaderBg = preloader.querySelector('[data-js="preloaderBg"]')

        if(preloaderBg) {
            preloaderBg.classList.remove('preloader__bg--start')
        }

        linesList[animOrder[animOrder.length - 1]].addEventListener('transitionend', () => {
            elsHeight()
            logoSize()
        }, { once: true })

    }

    function logoSize() {
        const logo = preloader.querySelector('[data-js="preloaderLogo"]')

        if(!logo) return

        logo.classList.remove('preloader__logo--start')
    }

    function elsHeight() {
        const els = preloader.querySelectorAll('[data-js="heightAnim"]')

        els.forEach(el => {
            heightAnim(el)
        })
    }

}