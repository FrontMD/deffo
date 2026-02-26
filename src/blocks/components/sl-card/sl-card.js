function slCardSlider() {
    const sliders = document.querySelectorAll('[data-js="slCardSlider"]')

    if(sliders.length < 1) return

    sliders.forEach(slider => {
        const pagination = slider.querySelector('[data-js="slCardPagination"]')

        const sliderEx = new Swiper(slider, {
            slidesPerView: 1,
            effect: 'fade',
            pagination: {
                el: pagination,
                type: 'bullets',
                clickable: true
            },
            on: {
                init(swiper) {
                    swiper.el.addEventListener('mousemove', (e) => {
                        const rect = swiper.el.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const totalWidth = rect.width;
                        const zoneCount = swiper.slides.length;
                        const zoneWidth = totalWidth / zoneCount;
                        const currentZoneIndex = Math.floor(x / zoneWidth);
                        
                        swiper.slideTo(currentZoneIndex);
                    });

                    swiper.el.addEventListener('click', (e) => {
                        const rect = swiper.el.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const totalWidth = rect.width;
                        const zoneCount = swiper.slides.length;
                        const zoneWidth = totalWidth / zoneCount;
                        const currentZoneIndex = Math.floor(x / zoneWidth);
                        
                        swiper.slideTo(currentZoneIndex);
                    });
                }
            }
        })
    })
}