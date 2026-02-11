function lockBody() {
	$('body').addClass('no-scroll');

    let scrollbarWidth = getScrollbarWidth()

    $('body').css('padding-right', scrollbarWidth)
    $('[data-js="siteHeader"]').css('padding-right', scrollbarWidth)
}

function unlockBody() {
	$('body').removeClass('no-scroll');
    $('body').css('padding-right', 0);
    $('[data-js="siteHeader"]').css('padding-right', 0)
}

function getScrollbarWidth() {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth
}

const jsTemplatePath = (typeof SITE_TEMPLATE_PATH !== 'undefined' && SITE_TEMPLATE_PATH ? SITE_TEMPLATE_PATH + '/' : 'kjhkjhlkjhlkjhkljhkjh');

document.addEventListener('DOMContentLoaded', () => {
    searchInit();
    sectionBgSlider();
    fancyboxInit();
})

// Фоновый слайдер
function sectionBgSlider() {
    const sectionBgSliders = document.querySelectorAll('[data-js="sectionBgSlider"]')

    if(sectionBgSliders.length < 1) return

    sectionBgSliders.forEach(slider => {
        const sliderEx = new Swiper(slider, {
            slidesPerView: 1
        })
    })
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Инициализация фансибокса
function fancyboxInit() {
    Fancybox.bind("[data-fancybox]", {
        placeFocusBack: false,
        mainClass: 'my-fancybox',
        idle: false,
        Carousel: {
            transition: "crossfade",
            Navigation: {
                prevTpl: '<svg><use xlink:href="'+jsTemplatePath+'img/sprites/sprite.svg#arrow_fancy_left"></use></svg>',
                nextTpl: '<svg><use xlink:href="'+jsTemplatePath+'img/sprites/sprite.svg#arrow_fancy_right"></use></svg>',
              },
        },
        Thumbs: {
            type: "classic",
        },
        Toolbar: {
            enabled: true,
            display: {
                left: [],
                middle: [],
                right: [
                  "close",
                ],
            },
        }

    });
}

// Поиск
function searchInit() {
    const searchForms = document.querySelectorAll('[data-js="menuSearch"]')

    if(!searchForms.length) return

    searchForms.forEach((searchForm, index) => {
        let results = searchForm.querySelector('[data-js="menuSearchResults"]')
        let resultsID = 'menuSearchResults' + index
        results.setAttribute('id', resultsID)

        const autoCompleteJS = new autoComplete({
              selector: "[data-js='autoCompleteSearch']",
              submit: true,
              debounce: 300,
              data: {
                  src: async (query) => {
                    try {
                      const source = await fetch(`https://df-mdf.ru/catalog/search.json?term=${query}`);
                      const data = await source.json();
                      console.log(data)
              
                      return data;
                    } catch (error) {
                      return error;
                    }
                  },
                  cache: false,
                  keys: ["label"],
              },
              resultsList: {
                    destination: '#' + resultsID,
                    position: "beforeend",
                    tag: 'div',
                    class: "search-results",
                    element: (list, data) => {
                        if (!data.results.length) {
                            const message = document.createElement("div");
                            message.setAttribute("class", "no_result");
                            message.innerHTML = `<span>Возможно позиция выведена, обратитесь к Вашему офис-менеджеру</span>`;
                            list.prepend(message);
                        }
                    },
                    noResults: true,
              },
              resultItem: {
                  highlight: true,
                  element: (list, data) => {
                    list.classList.add('order-prod', 'search-results__item')

                    const imgContainer = document.createElement('div')
                    imgContainer.classList.add('order-prod')

                    const img = document.createElement('img');
                    img.src=data.value.image;

                    imgContainer.appendChild(img)
                    list.prepend(product_img)
                  }
              },
              events: {
                input: {
                    selection(event) {
                        const feedback = event.detail;
                        const input = autoCompleteJS.input;
                        const selection = feedback.selection.value['label'].trim();
                        previous_search_query = JSON.parse(window.sessionStorage.getItem('search_results') );
                        if (previous_search_query === null) {
                          window.sessionStorage.setItem('search_results', JSON.stringify(selection.split(",")) );
                        } else {
                          previous_search_query.push(selection);
                          window.sessionStorage.setItem('search_results', JSON.stringify(previous_search_query) );  
                        }
                        location.href = event.detail.selection.value['value'];
                    }
                },
              }
        });
    })
    

}