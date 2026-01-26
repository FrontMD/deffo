function menuSearch() {
    const menuSearchs = document.querySelectorAll('[data-js="menuSearch"]')

    if(menuSearchs.length < 1) return

    menuSearchs.forEach(menuSearch => {
        const menuSearchToggle = menuSearch.querySelector('[data-id="menuSearchToggle"]')
        const menuSearchBody = menuSearch.querySelector('[data-id="menuSearchBody"]')

        menuSearchToggle.addEventListener('click', () => {
            $(menuSearch).toggleClass('menu-search--active');

            const container = menuSearch.closest('.main-menu')

            if(menuSearch.classList.contains('menu-search--active')) {
                if(container) {
                    const coeff = window.innerWidth > 767 ? 0 : 55

                    menuSearchBody.style.width = `${container.offsetWidth - menuSearchToggle.offsetWidth + coeff}px`
                } else {
                    menuSearchBody.style.width = '300px'    
                }
            } else {
                menuSearchBody.style.width = '0px'
            }
        })
    })
}