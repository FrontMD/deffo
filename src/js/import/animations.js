function opacityAnim(el) {
    const textColorAnims = el.querySelectorAll('[data-anim-type="textColor"]')

    if(textColorAnims.length > 0) {
        el.addEventListener('transitionend', () => {
            textColorAnims.forEach(item => {
                commonAnimation(item)
            });
        }, {once: true})
    }

    el.classList.add('animated')

}

function commonAnimation(el) {
    el.classList.add('animated')
}