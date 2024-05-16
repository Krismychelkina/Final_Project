const footer = require("../page_objects/components/footer");

describe('Footer tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Verify Footer Country Change - Ensure country changes successfully', () => {
        footer.changeCountryToKazakhstan();
        cy.origin('https://www.lamoda.kz', () => {
            cy.url().should('contain', 'https://www.lamoda.kz/');
        });
    });

    it('Verify Footer Mobile Site Toggle - Confirm mobile site toggles on and off correctly', () => {
        footer.toggleMobileSite();
        cy.url().should('include', '/?sv=mob');

        footer.toggleMobileSite();
        cy.url().should('not.include', '/?sv=mob');
    });
});