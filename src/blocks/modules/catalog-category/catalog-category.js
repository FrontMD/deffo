function catalogCategoryFilter() {
    const sidebars = document.querySelectorAll('[data-js="catalogSidebar"]');

    if(!sidebars) return

    const ww = window.innerWidth
    const filterBP = 1023

    if(ww <= filterBP) {
        sidebars.forEach(sidebar => {
            const btn = sidebar.querySelector('[data-js="catalogSidebarFilterOpen"]')
            const filter = sidebar.querySelector('[data-js="catalogSidebarCatalogFilter"]')
            const fullHeight = filter?.scrollHeight
    
            btn.addEventListener('click', () => {
                if(filter.classList.contains('active')) {
                    filter.style.maxHeight = '0px';
                    filter.classList.remove('active');
                } else {
                    filter.style.maxHeight = fullHeight + 'px';
                    filter.classList.add('active');
                }
            })
        })
    }

}