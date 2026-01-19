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

function textColorAnim(el) {
    const textColorAnims = el.querySelectorAll('[data-anim-type="textColor"]')

    if(textColorAnims.length > 0) {
        textColorAnims.forEach(item => {
            commonAnimation(item)
        });
    }
}

/*function zoomInAnim(el) {
    const zoomInAnims = el.querySelectorAll('[data-anim-type="zoomIn"]')

    if(zoomInAnims.length > 0) {
        zoomInAnims.forEach(item => {
            commonAnimation(item)
        });
    }
}*/

function setAttributes(el, list) {
    if(Object.keys(list).length > 0) {
        Object.entries(list).forEach(([key, value]) => {
            el.setAttribute(key, value)
        });

    }
}