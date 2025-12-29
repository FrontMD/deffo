function solutionsSlider() {
    const solutionsSliders = document.querySelectorAll('[data-js="solutionsSlider"]')

    if(solutionsSliders.length < 1) return

    solutionsSliders.forEach(slider => {
        const sliderEx = new Swiper(slider, {
            slidesPerView: 2.67,
            spaceBetween: 5
        })
    })
}