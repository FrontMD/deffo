@@include("../../blocks/components/field/field.js")
@@include("../../blocks/components/form/form.js")
@@include("../../blocks/components/main-menu/main-menu.js")
@@include("../../blocks/components/amount-input/amount-input.js")

document.addEventListener('DOMContentLoaded', () => {
    selects();
    validation();
    menuSearch();
    amountInput();
})