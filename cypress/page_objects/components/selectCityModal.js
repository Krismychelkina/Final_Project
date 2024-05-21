class SelectCityModal {
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


    get anotherCity() {
        return cy.get('._controls_1tu7k_69 > .x-button_secondaryFilledWeb7184');
    }

    get clearButton() {
        return cy.get('div.icon.icon__close-secondary-label_24.icon_direction-down.icon_24');
    }

    get closeCityModalButton() {
        return cy.get('.d-modal__close-button > .icon');
    }

    selectCity(keyword) {
        this.citySearchField.type(keyword);
        this.selectCityFromList.click();
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
}

module.exports = new SelectCityModal();