class Search {
    get searchButton() {
        return cy.get('.x-button > .icon');
    }

    get searchField() {
        return cy.get('._input_1su1z_19');
    }

    searchByProductName(productName) {
        this.searchButton.click({force: true});
        this.searchField.type(productName + '{enter}');
        cy.get('._titleText_641wy_15').should('contain.text', productName);
    }

    searchByArticleNumber(articleNumber) {
        this.searchButton.click({force: true});
        this.searchField.type(articleNumber + '{enter}');
        cy.url().should('include', articleNumber);
    }

    searchNonExistentQuery(query) {
        this.searchButton.click({force: true});
        this.searchField.type(query + '{enter}');
        cy.get('._title_1jpla_24').should('contain.text', `Ничего не нашли по запросу «${query}»`);
    }
}

module.exports = new Search();