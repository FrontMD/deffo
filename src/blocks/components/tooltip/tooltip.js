function tooltipsController() {
    const tooltips = document.querySelectorAll('[data-js="tooltip"]');

    if(tooltips.length < 1) return
    
    let timer = null;

    tooltips.forEach(tooltip => {
        
        tooltip.addEventListener('mouseenter', () => {
            closeAll();
            tooltip.classList.add('active');
        });

        tooltip.addEventListener('mouseleave', () => {
            timer = setTimeout(() => {
                tooltip.classList.remove('active');
            }, 20);
        });

        tooltip.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAll();
            tooltip.classList.add('active');
        });

        tooltip.addEventListener('mousemove', () => {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('[data-js="tooltip"]')) {
            closeAll();
        }
    });

    function closeAll() {
        tooltips.forEach(el => {
            el.classList.remove('active');
        });
    }

}