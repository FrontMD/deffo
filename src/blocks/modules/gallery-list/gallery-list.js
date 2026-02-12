function galleryListAnim() {
    const galleryLists = document.querySelectorAll('[data-js="galleryList"]')

    if(galleryLists.length < 1) return

    galleryLists.forEach((list, idx) => {
        const grid = list.querySelector('[data-js="galleryListGrid"]')
        const items = list.querySelectorAll('[data-anim-id="galleryListItem"]')

        if(grid && items.length) {
            const columnsCount = Math.floor(grid.offsetWidth / items[0].offsetWidth)

            grid.setAttribute('data-anim-id', `galleryListGrid${idx}`)
            
            if(columnsCount > 1) {
                const columnsEls = []

                for(let i = 0; i < columnsCount; i++) {
                    const col = document.createElement('div')
    
                    col.classList.add("gallery-list__column")
    
                    grid.appendChild(col)
                    columnsEls.push(col)
                }
    
                items.forEach((item, index) => {
                    let targetCol = index % columnsCount
                    setAttributes(item, {
                        'data-aos': 'fade-up',
                        'data-aos-duration': '1000',
                        'data-aos-delay': `${targetCol * 200}`,
                        'data-aos-anchor': `galleryListGrid${idx}`,
                        'data-aos-anchor-placement': 'top bottom'
                    }) 
                    columnsEls[targetCol].appendChild(item)
                })

                initScrollParallax(columnsEls, grid)

            } else {
                items.forEach(item => {
                    setAttributes(item, {
                        'data-aos': 'fade-up',
                        'data-aos-duration': '1000',
                        'data-aos-offset': '200',
                    })  
                })
            }


           
        }
    })


}

function initScrollParallax(columnsEls, gridEl) {
    if (typeof gsap === 'undefined' || !gsap.registerPlugin || !ScrollTrigger) return;

    if (!columnsEls?.length || !gridEl) return

    gsap.registerPlugin(ScrollTrigger);
    let mainTimeline = gsap.timeline();

    columnsEls.sort(() => 0.5 - Math.random())

    columnsEls.forEach(function(col, i) {
        let animOffset = 0

        if(i === 0) {
            animOffset = col.offsetHeight - gridEl.offsetHeight + ((Math.random() * (4 - 1) + 1) / 100 * col.offsetHeight);
        } else {
            animOffset = col.offsetHeight - gridEl.offsetHeight + ( i * (Math.random() * (10 - 5) + 5) / 100 * col.offsetHeight);
        }
        
        mainTimeline.fromTo(col, {
            y: "0",
        }, {
            y: `-${animOffset}px`,
            duration: 1,
            ease: "none",
        }, "0");
    });

    let scrollTriggerObject = ScrollTrigger.create({
        trigger: gridEl,
        start: "top 30%",
        end: "bottom center",
        scrub: 2,
        animation: mainTimeline,
    });
}