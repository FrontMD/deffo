@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/modals/modals.js")
@@include("../../blocks/modules/main-burger/main-burger.js")
@@include("../../blocks/modules/solutions/solutions.js")
@@include("../../blocks/modules/s-stocks/s-stocks.js")
@@include("../../blocks/modules/s-news/s-news.js")
@@include("../../blocks/modules/accordion/accordion.js")
@@include("../../blocks/modules/s-map/s-map.js")
@@include("../../blocks/modules/preloader/preloader.js")
@@include("../../blocks/modules/home-intro/home-intro.js")

document.addEventListener('DOMContentLoaded', () => {
    header();
    preloader();
    modalsInit();
    mainBurger();
    solutionsSlider();
    stocksSlider();
    newsSlider();
    accordion();
    sMap();
})