function header() {
    const header = $('[data-js="siteHeader"]');
    const initScroll = $(window).scrollTop();

    headerAnim()

    if(initScroll > 20) {
        header.addClass("site-header--fixed");
    }

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if(scroll > 40) {
            header.addClass("site-header--fixed");
        } else {
            header.removeClass("site-header--fixed");
        }
    });

    function headerAnim() {
        const headerBlock = document.querySelector("[data-js='siteHeader']")
        const menuItems = headerBlock.querySelectorAll("[data-js='mainMenuItem']")
        const headerSides = headerBlock.querySelectorAll("[data-js='siteHeaderSide']")

        let delayCount = 100
        
        if(menuItems.length > 0) {
            menuItems.forEach((item, i) => {
                delayCount = 100 * (i + 1)
                item.setAttribute('data-aos', 'fade-up')
                item.setAttribute('data-aos-duration', '600')
                item.setAttribute('data-aos-delay', `${delayCount}`)
            });
        }

        if(headerSides.length > 0) {
            headerSides.forEach(item => {
               item.setAttribute('data-aos-delay', `${delayCount + 100}`)
            });
        }
    }
}