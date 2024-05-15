class Header {
    get citySelectorButton() {
        return cy.get('._message_32s20_11 > span');
    }

    get citySearchField() {
        return cy.get('.input-material__placeholder');
    }

    get selectCityFromList() {
        return cy.get('._dropdown_1ft1u_18 > div');
    }

    get goToShoppingButton() {
        return cy.contains('.x-button_primaryFilledWeb7184', 'Перейти к покупкам');
    }

    get anotherCity(){
        return cy.get('._controls_1tu7k_69 > .x-button_secondaryFilledWeb7184');
    }

    get clearButton(){
        return cy.get('div.icon.icon__close-secondary-label_24.icon_direction-down.icon_24');
    }

    get closeCityModalButton(){
        return cy.get('.d-modal__close-button > .icon');
    }

    selectCity (keyword){
        this.citySearchField.type(keyword);
        this.selectCityFromList.click();
    }

    get MensCategory(){
        return cy.get('[href="/men-home/?sitelink=topmenuM"]');
    }

    get WomensCategory(){
        return cy.get('[href="/women-home/?sitelink=topmenuW"]');
    }

    get KidsCategory(){
        return cy.get('[href="/kids-home/?sitelink=topmenuK"]');
    }

    get cartButton() {
        return cy.get('._text_85qsb_14');
    }

    get deliveryLink(){
        return cy.get('[href="/delivery/?ad_id=920780"]');
    }

    get certificateLink(){
        return cy.get('[href="/help/article/podlinnost-produkcii-by/?ad_id=841969"]');
    }

    get paymentLink(){
        return cy.get('[href="/lp/postoplata/?ad_id=848126"]');
    }

    get loginButton() {
        return cy.get('._root_1xhq2_2 > .x-button');
    }

    get loginModal(){
        return cy.get('.d-modal__content');
    }

    selectCityFromListAndCheck(cityName) {
        this.citySelectorButton.click();
        this.selectCity(cityName);
        this.goToShoppingButton.click();
        this.citySelectorButton.should('contain.text', cityName);
    }

    selectCityAndCloseModal(cityName) {
        this.citySelectorButton.click();
        this.selectCity(cityName);
        this.closeCityModalButton.click();
        this.citySelectorButton.should('contain.text', cityName);
    }

    changeCityAndCheck(initialCity, newCity) {
        this.citySelectorButton.click();
        this.selectCity(initialCity);
        this.anotherCity.click();
        this.citySearchField.click();
        this.clearButton.click();
        this.selectCity(newCity);
        this.goToShoppingButton.click();
        this.citySelectorButton.should('contain.text', newCity);
    }

    checkHeaderLinks() {
        this.deliveryLink.click();
        cy.url().should('include', '/delivery');

        this.certificateLink.click();
        cy.url().should('include', '/podlinnost-produkcii-by');

        this.paymentLink.click();
        cy.url().should('include', '/lp/postoplata');
    }

    checkCategoryNavigation() {
        this.MensCategory.click();
        cy.url().should('include', '/men-home');

        this.WomensCategory.click();
        cy.url().should('include', '/women-home/');

        this.KidsCategory.click();
        cy.url().should('include', '/kids-home');
    }
}

module.exports = new Header();



