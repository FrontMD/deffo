function solutionIntroAnim() {
    const solutionIntro = document.querySelector('[data-js="solutionIntro"]')

    if(!solutionIntro) return

    const menuItemsList = document.querySelector('[data-js="siteHeader"]')?.querySelectorAll('[data-js="mainMenuItem"][data-aos]')
    const vw = window.innerWidth
    const vwPoint = 1320

    
    if(menuItemsList.length > 0 && vw > vwPoint) {
        menuItemsList[menuItemsList.length - 1].addEventListener('transitionend', hiAnim, {once: true})
    } else {
        hiAnim()
    }

    function hiAnim() {
        const title = solutionIntro.querySelector('[data-js="solutionIntroTitle"]')
        const titleTextAnim = title.querySelector('[data-anim-type="textColor"]')
        const separator = solutionIntro.querySelector('[data-js="solutionIntroSeparator"]')

        if(titleTextAnim) {
            titleTextAnim.addEventListener('transitionend', () => {
                commonAnimation(separator)
            }, {once: true})
        } else {
            title.addEventListener('transitionend', () => {
                commonAnimation(separator)
            }, {once: true})
        }

        opacityAnim(title)
    }
}