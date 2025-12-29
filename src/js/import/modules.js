@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/modals/modals.js")
@@include("../../blocks/modules/main-burger/main-burger.js")
@@include("../../blocks/modules/solutions/solutions.js")

document.addEventListener('DOMContentLoaded', () => {
    header();
    modalsInit();
    mainBurger();
    solutionsSlider();
})