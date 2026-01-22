function stocksSlider() {
    const stocksSliders = document.querySelectorAll('[data-js="stocksSlider"]')

    if(stocksSliders.length < 1) return

    stocksSliders.forEach(slider => {
        const sliderEx = new Swiper(slider, {
            slidesPerView: 1.67,
            spaceBetween: 12,
            on: {
                init: function() {
                    stocksAnim()
                }
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        })
    })
}

function stocksAnim() {
    const stocksBlocks = document.querySelectorAll('[data-js="stocks"]')

    if(stocksBlocks.length < 1) return

    stocksBlocks.forEach(stocks => {
        const slider = stocks.querySelector('[data-js="stocksSlider"]')
        const header = stocks.querySelector('[data-js="stocksHeader"]')
        const title = stocks.querySelector('[data-js="stocksTitle"]')

        if(slider) {
            slider.addEventListener('transitionstart', async function() {
                opacityAnim(header)
                await delay(500)
                textColorAnim(title)
            }, {once: true})

        }
    })
}