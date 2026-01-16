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
        const titleTextAnim = title.querySelector('[data-anim-type="textColor"]')
        const subtitle = homeIntro.querySelector('[data-js="homeIntroSubtitle"]')
        const subtitleTextAnim = subtitle.querySelector('[data-anim-type="textColor"]')
        const btn = homeIntro.querySelector('[data-js="homeIntroBtn"]')
        const separator = homeIntro.querySelector('[data-js="homeIntroSeparator"]')

        if(titleTextAnim) {
            titleTextAnim.addEventListener('transitionend', () => {
                opacityAnim(subtitle)
            }, {once: true})
        } else {
            title.addEventListener('transitionend', () => {
                opacityAnim(subtitle)
            }, {once: true})
        }

        if(subtitleTextAnim) {
            subtitleTextAnim.addEventListener('transitionend', () => {
                commonAnimation(separator)
                commonAnimation(btn)
            }, {once: true})
        } else {
            subtitle.addEventListener('transitionend', () => {
                commonAnimation(separator)
                commonAnimation(btn)
            }, {once: true})
        }

        opacityAnim(title)
    }
}