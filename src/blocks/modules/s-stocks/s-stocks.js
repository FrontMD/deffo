function stocksSlider() {
    const stocksSliders = document.querySelectorAll('[data-js="stocksSlider"]')

    if(stocksSliders.length < 1) return

    stocksSliders.forEach(slider => {
        const sliderEx = new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 20
        })
    })
}