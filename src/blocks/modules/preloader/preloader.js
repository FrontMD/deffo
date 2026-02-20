function preloader() {
    const preloader = document.querySelector('[data-js="preloader"]')

    if(!preloader) {
        cookieInit();
        return
    }
        

    lockBody()

    const logo = preloader.querySelector('[data-js="preloaderLogo"]')
    const cookieName = 'preloader'
    let currentCookieValue = document.cookie.match(new RegExp("(?:^|; )" + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    if (!currentCookieValue) {
        linesHeight()
        document.cookie = `${cookieName}=true; path=/`
    } else {
        diamonds()
    }

    async function linesHeight() {
        const linesList = preloader.querySelectorAll('[data-js="preloaderLine"]')
        const duration = parseFloat(window.getComputedStyle(linesList[0]).transitionDuration) * 1000;
        const animOrder = [2,6,4,1,9,5,0,8,3,7]
        const video = logo.querySelector('video')
        const img = logo.querySelector('img')

        await delay(1000)

        video.pause()
        video.currentTime = 0;
        video.style.opacity = '1'
        img.removeAttribute('style')
        img.style.transitionDuration = '0s'
        img.style.position = 'relative'
        img.style.top = '4.8%'
        img.style.scale = '0.767'
        img.style.opacity = 1
        await delay(200)
        video.play()

        await delay(3000)
        video.style.transitionDuration = '0.3s'
        video.style.opacity = '0'
        
        await delay(300)
        
        img.style.transitionDuration = '3s'
        img.style.transitionProperty = 'all'
        img.style.top = '0'
        img.style.scale = '1'
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

        logo.addEventListener('transitionend', async function() {
            await delay(500)
            diamonds()
        }, {once: true})
    }

    function elsHeight() {
        const els = preloader.querySelectorAll('[data-js="heightAnim"]')

        els.forEach(el => {
            heightAnim(el, '1s')
        })
    }

    function diamonds() {
        const figures = document.querySelectorAll('[data-js="preloaderMaskFigure"]')
        const svg = preloader.querySelector('[data-js="preloaderSVG"]')
        const vw = window.innerWidth
        const vh = window.innerHeight
        const fullWidth = 2759
        const innerWidth = fullWidth * 0.18
        const targetScale = vw >= vh ? Math.ceil(vw * 1.5 / innerWidth) : Math.ceil(vh * 1.5 / innerWidth)

        figures[0].addEventListener('transitionend', () => {
            preloader.remove();
            figures[0].closest('svg').remove();
            unlockBody();
            AOS.init({
                once: true
            });
            homeIntroAnim();
            solutionIntroAnim();
            cookieInit();
        }, {once: true})
    
        figures.forEach(async (figure, i) => {

            figure.style.translate = `${(vw - fullWidth * targetScale) / 2}px ${(vh - fullWidth * targetScale) / 2}px`

            figure.style.scale = `${targetScale}`

            if(i == 0) {
                svg.style.scale = `${targetScale}`
            }

            await delay(700)
            if(i == 0) {
                figure.style.opacity = 1
                svg.style.opacity = 1
            }

        })

        


    }

}