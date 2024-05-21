class Footer {
    get countryNameBelarus() {
        return cy.get('._countryName_xilgb_54');
    }

    get countryNameKazakhstan() {
        return cy.get('[href="https://www.lamoda.kz"] > ._country_xilgb_28');
    }

    changeCountryToKazakhstan(){
        this.countryNameBelarus.click({force: true});
        this.countryNameKazakhstan.click({force: true});
    }

    get changeSiteVersionButton(){
        return cy.get('._root_m3snj_6 > ._root_f9xmk_2');
    }

    toggleMobileSite(){
        this.changeSiteVersionButton.click();
    }
}

module.exports = new Footer();