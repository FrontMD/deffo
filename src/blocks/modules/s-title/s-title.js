function sTitleAnim() {
    const sTitles = document.querySelectorAll('[data-js="sTitle"]')

    if(sTitles.length < 1) return

    console.log(sTitles)

    sTitles.forEach(sTitle => {
        const title = sTitle.querySelector('[data-js="sTitleTitle"]')
        const trigger = sTitle.querySelector('[data-js="scrollTrigger"]')

        if(title && trigger) {
            trigger.addEventListener('transitionend', () => {
                opacityAnim(title)
            }, {once: true})
        } else if(title) {
            opacityAnim(title)
        }
    })
}