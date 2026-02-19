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

function adjustTooltips() {
  const tooltips = document.querySelectorAll('[data-js="tooltipTooltip"]');
  tooltips.forEach(tooltip => {
    const rect = tooltip.getBoundingClientRect();
    if (window.innerWidth - rect.right < 20) {
      const parent = tooltip.closest('[data-js="tooltip"]');
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const spaceRight = window.innerWidth - parentRect.right;
        const spaceLeft = parentRect.left;
        
        if (spaceRight > spaceLeft) {
          tooltip.style.maxWidth = `${spaceRight - 10}px`;
        } else {
          parent.classList.add('tooltip--reverse');
          tooltip.style.maxWidth = `${spaceLeft - 10}px`;
        }
      }
    }
  });
}