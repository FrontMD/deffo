function sDownloadAnim() {
    const sDownloads = document.querySelectorAll('[data-js="sDownload"]')

    if(sDownloads.length < 1) return

    sDownloads.forEach(sDownload => {

        sDownload.querySelector('[data-js="scrollTrigger"]')?.addEventListener('transitionend', async function() {
            const title = sDownload.querySelector('[data-js="sDownloadTitle"]')
            const text = sDownload.querySelector('[data-js="sDownloadText"]')
            const btn = sDownload.querySelector('[data-js="sDownloadBtn"]')

            if(title) {
                opacityAnim(title)
                await delay(600)
            }

            if(text) {
                commonAnimation(text)
            }

            if(btn) {
                commonAnimation(btn)
            }
        }, {once: true})
    })
}