function homeIntroAnim() {
    const homeIntro = document.querySelector('[data-js="homeIntro"]')

    if(!homeIntro) return

    const menuItemsList = document.querySelector('[data-js="siteHeader"]')?.querySelectorAll('[data-js="mainMenuItem"][data-aos]')

    if(menuItemsList.length > 0) {
        menuItemsList[menuItemsList.length - 1].addEventListener('transitionend', hiAnim, {once: true})
    } else {
        hiAnim()
    }

    function hiAnim() {
        const title = homeIntro.querySelector('[data-js="homeIntroTitle"]')
        const subtitle = homeIntro.querySelector('[data-js="homeIntroSubitle"]')
        const btn = homeIntro.querySelector('[data-js="homeIntroBtn"]')
        const separator = homeIntro.querySelector('[data-js="homeIntroSeparator"]')

        opacityAnim(title)
    }
}