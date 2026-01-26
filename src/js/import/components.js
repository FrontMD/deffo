@@include("../../blocks/components/field/field.js")
@@include("../../blocks/components/form/form.js")
@@include("../../blocks/components/main-menu/main-menu.js")
@@include("../../blocks/components/amount-input/amount-input.js")
@@include("../../blocks/components/tooltip/tooltip.js")
@@include("../../blocks/components/sl-card/sl-card.js")

document.addEventListener('DOMContentLoaded', () => {
    selects();
    validation();
    menuSearch();
    amountInput();
    tooltipsController();
    slCardSlider();
})