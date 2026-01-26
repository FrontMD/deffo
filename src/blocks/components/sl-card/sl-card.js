function slCardSlider() {
    const slCards = document.querySelectorAll('[data-js="slCard"]')

    if(slCards.length < 1) return

    slCards.forEach(card => {
        const slider = card.querySelector('[data-js="slCardSlider"]')
        const pagination = card.querySelector('[data-js="slCardPagination"]')

        const sliderEx = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 5,
            pagination: {
                el: pagination,
                type: 'bullets',
            },
            on: {
                init: function (swiper) {
                    if(swiper.slides.length > 1 && pagination) {
                        pagination.classList.add('active')
                    }
                }
            }
        })
    })
}