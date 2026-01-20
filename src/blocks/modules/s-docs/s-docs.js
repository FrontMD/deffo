function sDocsAnim() {
    const sDocsBlocks = document.querySelectorAll('[data-js="sDocs"]')

    if(sDocsBlocks.length < 1) return

    sDocsBlocks.forEach(sDocs => {
        const title = sDocs.querySelector('[data-js="sDocsTitle"]')
        const mediaCover = sDocs.querySelector('[data-js="sDocsMedia"] [data-anim-type="widthReverse"]')
        const docs = sDocs.querySelector('[data-js="sDocsList"]')?.querySelectorAll('[data-js="dlBtn"]')

        if(docs && docs.length > 0) {
            docs.forEach(doc => {
                doc.setAttribute('data-anim-type', 'opacityUp')
            })
        }
        
        sDocs.querySelector('[data-js="scrollTrigger"]')?.addEventListener('transitionend', async function() {
            if(title) {
                opacityAnim(title)
                await delay(1000)
            }

            if(docs && docs.length > 0) {
                for(let i = 0; i < docs.length; i++) {
                    await delay(200)
                    commonAnimation(docs[i])
                }
            }

            if(mediaCover) {
                commonAnimation(mediaCover)
            }
        }, {once: true})
    })
}