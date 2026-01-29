function addSvgAnimStyle() {
    const sliderControlBlocks = document.querySelectorAll('[data-js="sliderControls"]')

    if(!sliderControlBlocks.length) return

    sliderControlBlocks.forEach(block => {
        const hasAnimatedSvg = block.querySelector('[data-js="sliderControlsSvg"]') ? true : false;

        if(hasAnimatedSvg) {
            const stylesBlock = document.createElement('style')

            stylesBlock.innerText = `.slider-controls .slider-control:hover path.slider-control__arrow {d: path("M 40.7834 28.6676 L 16.9014 28.6676");}.slider-controls .slider-control:hover path.slider-control__rhombus {d: path("M 57.068599 28.7843 L 28.7843 57.0686 L 0.500001 28.7843 L 28.7843 0.500029 L 57.068599 28.7843");}`

            block.appendChild(stylesBlock)
        }
    })
}