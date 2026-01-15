function preloader() {
    const preloader = document.querySelector('[data-js="preloader"]')

    if(!preloader) return

    lockBody()

    const logo = preloader.querySelector('[data-js="preloaderLogo"]')
    const cookieName = 'preloader'
    let currentCookieValue = document.cookie.match(new RegExp("(?:^|; )" + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    if (!currentCookieValue) {
        linesHeight()
        document.cookie = `${cookieName}=true`
    } else {
        diamonds()
    }


    async function linesHeight() {
        const linesList = preloader.querySelectorAll('[data-js="preloaderLine"]')
        const duration = parseFloat(window.getComputedStyle(linesList[0]).transitionDuration) * 1000;
        const animOrder = [2,6,4,1,9,5,0,8,3,7]

        logo.setAttribute('class', 'preloader__logo preloader__logo--middle')

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
        if(!logo) return

        logo.setAttribute('class', 'preloader__logo')

        logo.addEventListener('transitionend', diamonds, {once: true})
    }

    function elsHeight() {
        const els = preloader.querySelectorAll('[data-js="heightAnim"]')

        els.forEach(el => {
            heightAnim(el)
        })
    }

    function diamonds() {
        const figure = document.querySelector('[data-js="preloaderMaskFigure"]')
        const vw = window.innerWidth
        const vh = window.innerHeight
        const unit = vw >= vh ? 'vw' : 'vh'

        figure.addEventListener('transitionend', () => {
            preloader.remove();
            figure.closest('svg').remove();
            unlockBody();
            AOS.init();
        }, {once: true})

        figure.style.transform = `translate(-60${unit},-60${unit})`
        figure.style.width = `120${unit}`
        figure.style.height = `120${unit}`

    }

}