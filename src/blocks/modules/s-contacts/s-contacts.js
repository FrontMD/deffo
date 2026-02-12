function sContacts() {

    const contactsBlock = document.querySelector('[data-js="sContacts"]')
    
    if(!contactsBlock) return

    const mapContainer = contactsBlock.querySelector('[data-js="sContactsMap"]')
    let mapPlacemarks = [...contactsBlock.querySelectorAll('[data-js="sContactsTabsOption"]')]
    let map = false

    ymaps.ready(function () {

        let center = mapPlacemarks.length > 0 ? mapPlacemarks[0].dataset.coords.replace(/\s/g,"").split(",") : [44.114722,43.088393]
        
        let windowWidth = window.innerWidth
        let zoom = 12;

        if(windowWidth < 768) {
            zoom = 12
        }
    
        map = new ymaps.Map(mapContainer, {
            center: center,
            zoom: zoom,
            controls: []
        });

        let myGeoObjects = []
        
        mapPlacemarks.forEach(placemark => {
            
            let currentPlacemark = new ymaps.Placemark(
                placemark.dataset.coords.replace(/\s/g,"").split(","),
                {},
                {
                    openEmptyBalloon: false,
                    iconLayout: 'default#image',
                    iconImageHref: "data:image/svg+xml,%3Csvg width='74' height='74' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M43.8943 12.6621L61.3379 30.1056C65.1455 33.9132 65.1455 40.0866 61.3379 43.8942L37 68.2321L12.6621 43.8942C8.85452 40.0866 8.85452 33.9132 12.6621 30.1056L30.1057 12.6621C33.9133 8.85445 40.0867 8.85445 43.8943 12.6621Z' fill='white' stroke='url(%23paint0_linear_888_6443)' stroke-width='2.5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M37 19L19 36.5001L37 54L55 36.5001L37 19ZM40.9735 46.9118C40.1628 46.2072 38.211 44.1508 37.7168 40.3414C37.5533 38.9997 36.1559 37.0819 35.2101 36.169C33.4329 34.4533 30.5302 32.9745 25.9555 33.3566C25.8086 33.369 25.6588 33.3833 25.5058 33.4L22.3172 36.5001L37 50.7749L40.9735 46.9118ZM37.6862 36.8607C37.736 36.369 37.8081 35.858 37.9066 35.3267C39.1448 28.6263 35.5501 25.2124 34.6704 24.49L27.0769 31.8725C31.4778 31.7956 34.3886 33.3654 36.2479 35.1599C36.8235 35.7155 37.2989 36.2973 37.6862 36.8607ZM35.712 23.4774C36.6851 24.3137 39.3792 27.053 39.618 31.9374C40.6552 30.6892 42.2618 29.5932 44.6852 29.6968L37 22.2252L35.712 23.4774ZM42.0133 45.9009L51.6828 36.5001L46.4996 31.4609C40.0677 29.6091 38.9591 35.1576 38.9697 38.2796C38.9789 40.889 39.9284 44.1984 42.0133 45.9009Z' fill='url(%23paint1_linear_888_6443)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_888_6443' x1='20.5' y1='20.5' x2='53.5' y2='53.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23B68C74'/%3E%3Cstop offset='1' stop-color='%23865F46'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_888_6443' x1='85.5432' y1='18.98' x2='-5.27436' y2='6.79577' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23624330'/%3E%3Cstop offset='1' stop-color='%23E7BEA9'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A",
                    iconImageSize: [74, 74],
                    iconImageOffset: [-37, -37],
                }
            );

            myGeoObjects.push(currentPlacemark)
            
        });

        var clusterer = new ymaps.Clusterer({
            gridSize: 120,
            preset: 'islands#redClusterIcons'
        });

        clusterer.add(myGeoObjects);

        map.geoObjects.add(clusterer);


    });

    const selectBlock = contactsBlock.querySelector('[data-js="sContactsTabsSelect"]')
    const select = selectBlock.querySelector('[data-js="formSelect"]')
    const options = select.querySelectorAll('[data-js="sContactsTabsOption"]')
    const infoItems = contactsBlock.querySelectorAll('[data-js="sContactsInfoItem"]')

    $(select).on('select2:close', function() {
        let currentOptionIndex = select.selectedIndex
        contactsSwitch(options[currentOptionIndex])
    })

    function contactsSwitch(tab) {

        map.setCenter(getCoordsArr(tab.dataset.coords))

        if(tab.dataset.js == 'contactsTabsTab') {
            tab.classList.add('active')
            selectBlock.classList.remove('active')
        } else {
            selectBlock.classList.add('active')
        }

        infoItems.forEach((item, index) => {
            item.classList.remove('active')

            if(index == tab.dataset.id) {
                item.classList.add('active')
            }
        })
    }

    function getCoordsArr(coords) {
        return coords.replace(/\s/g, '').split(',')
    }
}