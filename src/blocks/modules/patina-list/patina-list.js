function patinaListAnim() {
    const patinaLists = document.querySelectorAll('[data-js="patinaList"]')

    if(patinaLists.length < 1) return

    patinaLists.forEach((list, i) => {
        const currentId = 'patinaList' + i
        const items = list.querySelectorAll('[data-anim-id="patinaListItem"]')

        list.setAttribute('data-anim-id', currentId)

        if(items.length > 0) {
            items.forEach((card, index) => {
                setAttributes(card, {
                    'data-aos': 'fade-up',
                    'data-aos-anchor': `[data-anim-id="${currentId}"]`,
                    'data-aos-duration': '1000',
                    'data-aos-delay': `${index * 200}`,
                    'data-aos-anchor-placement': 'top-center'
                })  
            })

        }
    })


}