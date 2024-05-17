class Header {
    get deliveryLink(){
        return cy.get('[href="/delivery/?ad_id=920780"]');
    }

    get certificateLink(){
        return cy.get('[href="/help/article/podlinnost-produkcii-by/?ad_id=841969"]');
    }

    get paymentLink(){
        return cy.get('[href="/lp/postoplata/?ad_id=848126"]');
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

    get cartButton() {
        return cy.get('._text_85qsb_14');
    }

    get loginButton() {
        return cy.get('._root_1xhq2_2 > .x-button');
    }

    get loginModal(){
        return cy.get('.d-modal__content');
    }
}

module.exports = new Header();



