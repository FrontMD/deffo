function homeIntroAnim() {
    const homeIntro = document.querySelector('[data-js="homeIntro"]')

    if(!homeIntro) return

    const menuItemsList = document.querySelector('[data-js="siteHeader"]')?.querySelectorAll('[data-js="mainMenuItem"][data-aos]')
    const slider = homeIntro.querySelector('[data-js="sectionBgSlider"]')
    const vw = window.innerWidth
    const vwPoint = 1320

    if(menuItemsList.length > 0 && vw > vwPoint) {
        menuItemsList[Math.ceil(menuItemsList.length / 2)].addEventListener('transitionend', hiAnim, {once: true})
    } else {
        hiAnim()
    }

    async function hiAnim() {
        const title = homeIntro.querySelector('[data-js="homeIntroTitle"]')
        const subtitle = homeIntro.querySelector('[data-js="homeIntroSubtitle"]')
        const btn = homeIntro.querySelector('[data-js="homeIntroBtn"]')
        const separator = homeIntro.querySelector('[data-js="homeIntroSeparator"]')

        opacityAnim(title)

        await delay(600)

        opacityAnim(subtitle)

        await delay(600)

        commonAnimation(separator)
        commonAnimation(btn)

        if(slider) {
            slider.swiper.params.autoplay = {
                delay: 3000,
            };

            slider.swiper.autoplay.start();
        }
    }
}