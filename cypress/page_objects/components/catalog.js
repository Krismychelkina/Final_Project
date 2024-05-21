class Catalog {
    get accessoryButton() {
        return cy.get('[href="/c/557/accs-zhenskieaksessuary/?sitelink=topmenuW&l=4"]');
    }

    get accessoryFirstInList() {
        return cy.fixture('testData').then((testData) => {
            return cy.get('#' + testData.index2 + ' > .x-product-card__link');
        });
   }

    findAccessoryInCategory(){
        this.accessoryButton.click();
        this.accessoryFirstInList.click();
    }

    get addToCartButton(){
        return cy.get('.recaptcha > .x-button > span');
    }

    get proccedToCart(){
        return cy.get('.d-modal__bottom > .x-button_primaryFilledWeb7184');
    }

    addGoodToCart(){
        this.addToCartButton.click();
        this.proccedToCart.click();
    }
}

module.exports = new Catalog();