function sMap() {
    const sMap = document.querySelector('[data-js="sMap"]')

    if(!sMap) return

    const mapEl = sMap.querySelector('[data-js="sMapEl"]')
    const pointsList = [... sMap.querySelectorAll('[data-js="sMapItem"]')].map(item => item.dataset.coords)
    const startCenter = mapEl.dataset.center ? mapEl.dataset.center : '55.883459, 37.444566'
    const startZoom = mapEl.dataset.zoom ? parseInt(mapEl.dataset.center) : 12
	const fullBtn = sMap.querySelector('[data-js="sMapFull"]')
	const mapWrap = sMap.querySelector('[data-js="sMapWrap"]')

    ymaps.ready(async function () {
        // строим карту
        let center = startCenter
        let zoom = startZoom
    
        mapEx = new ymaps.Map(mapEl, {
            center: center.replace(/\s/g, '').split(","),
            zoom: zoom,
            controls: []
        }, {
            minZoom: 3,
			autoFitToViewport: 'always'
        });

        renderPoints(pointsList)

		if(fullBtn && mapWrap) {
			fullBtn.addEventListener('click', () => {
				$(mapWrap).toggleClass('full')
			})
		}

        // отрисовывает точки на карте
        function renderPoints(items) {
            mapEx.geoObjects.removeAll()
    
            let myGeoObjects = [];
                
            items.forEach((coordsItem, index) => {
                let iconHref = `data:image/svg+xml,%3Csvg width='574' height='576' viewBox='0 0 574 576' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M276.605 84.4107C308.077 118.2 326.448 161.68 329.251 207.093C362.131 171.752 418.444 162.126 462.394 193.092L448.686 212.687C401.961 179.764 336.979 206.773 327.136 263.208L322.132 291.899L320.268 306.883C318.45 321.47 318.637 336.051 320.704 350.265C325.923 386.141 343.096 419.673 370.099 445.004L373.857 448.535L357.563 466.026L353.799 462.501C322.976 433.587 303.32 395.363 297.204 354.451C277.958 278.988 207.134 228.502 129.731 235.194L94.16 238.275L92.1094 214.418L127.686 211.343C197.103 205.342 261.915 239.32 297.6 295.723L304.445 240.841C310.815 189.72 294.226 138.4 259.169 100.762L243.574 84.0131L261.004 67.668L276.605 84.4107Z' fill='url(%23paint0_linear_345_1483)'/%3E%3Cpath d='M573.669 287.837L286.835 575.673L0 287.837L286.835 0.000431418L573.669 287.837ZM50.6174 287.837L286.835 524.879L523.052 287.837L286.835 50.7947L50.6174 287.837Z' fill='url(%23paint1_linear_345_1483)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_345_1483' x1='95.5197' y1='246.463' x2='455.54' y2='246.463' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23B58F7A'/%3E%3Cstop offset='1' stop-color='%2396725F'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_345_1483' x1='0' y1='287.837' x2='573.669' y2='287.837' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23BE9883'/%3E%3Cstop offset='1' stop-color='%238B6855'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E`
    
                let currentPlacemark = new ymaps.Placemark(
                    coordsItem.replace(/[\[\]]/g, '').split(","),
                    {},
                    {
                        hasBalloon: false,
                        hasHint: false,
                        iconLayout: 'default#image',
                        iconImageHref: iconHref,
                        iconImageSize: [30, 30],
                        iconImageOffset: [-15, -15],
                    }
                );
    
                
                myGeoObjects.push(currentPlacemark)
            });
    
            var clusterer = new ymaps.Clusterer({
                gridSize: 50,
                preset: 'islands#brownClusterIcons'
            });
    
            clusterer.add(myGeoObjects);
    
            mapEx.geoObjects.add(clusterer);

            if (myGeoObjects.length > 0) {
                mapEx.setBounds(clusterer.getBounds(), {
                    checkZoomRange: true,
                    zoomMargin: 50
                });
            }
    
        }
    })

}