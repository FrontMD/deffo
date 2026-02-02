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

function heightAnim(el, dutation = '2s') {
    
    const content = el.querySelector('[data-js="heightAnimContent"]')
    
    if(!content) return
    
    const contentHeight = content.offsetHeight
    el.style.transform = `translateY(${contentHeight*2}px)`
    el.style.transform = `translateY(20px)`
    
    setTimeout(() => {
        el.style.transition = `all ${dutation} linear`
        el.style.transform = 'translateY(0px)'
        el.style.height = contentHeight + 'px'
    }, 0)
}

function setAttributes(el, list) {
    if(Object.keys(list).length > 0) {
        Object.entries(list).forEach(([key, value]) => {
            el.setAttribute(key, value)
        });

    }
}