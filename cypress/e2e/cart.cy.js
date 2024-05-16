const header = require("../page_objects/components/header");
const cartPage = require("../page_objects/components/cartPage");
const catalog = require("../page_objects/components/catalog");

describe('Empty cart tests', () => {
    it('Verify that the cart is empty when there are no items added', () => {
        cy.visit(Cypress.config('baseUrl'));
        header.cartButton.click();
        cartPage.emptyCart.should('contain.text', 'Корзина пока пустая');
        cartPage.numberOfGoods.should('not.exist');
    });
});

describe('Full cart tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
        catalog.findAccessoryInCategory();
        catalog.addGoodToCart();
    });

    it('Verify that a single item is added to the cart and the counter reflects this change', () => {
        cartPage.numberOfGoods.should('contain.text', '1 товар');
    });

    it('Verify that the cart is emptied when an item is removed from it', () => {
        cartPage.deleteGoodFromTheCart();
        cartPage.emptyCart.should('contain.text', 'Корзина пока пустая');
    });

    it('Verify the functionality of changing the quantity of items in the cart', () => {
        cartPage.increaseOfQuantity.click();
        cartPage.quantityOfGoods.should('contain.text', '2');
        cartPage.decreaseOfQuantity.click();
        cartPage.quantityOfGoods.should('contain.text', '1');
    });

    it('Verify the behavior when an invalid promo code is applied to the cart - no promos is added', () => {
        cy.fixture('testData').then((testData) => {
            cartPage.addPromo(testData.promo);
            cartPage.promoUnavailable.should('contain.text', 'Акция недоступна')
        });
    });

    it('Verify that clicking on "Go to Checkout" button directs the user to the checkout page', () => {
        cartPage.goToCheckoutPageButton.click();
        cy.url().should('include', '/checkout/cart/');
    });
});
