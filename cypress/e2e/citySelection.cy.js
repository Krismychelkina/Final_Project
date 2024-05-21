const selectCityModal = require("../page_objects/components/selectCityModal");

describe('City Selection', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Verify the functionality of selecting a city from the list and ensuring the selected city is displayed', () => {
        cy.fixture('testData').then((testData) => {
            selectCityModal.selectCityFromListAndCheck(testData.city1);
        });
    });

    it('Verify that the city modal closes after entering the city name, and the originally entered city is displayed on the site', () => {
        cy.fixture('testData').then((testData) => {
            selectCityModal.selectCityAndCloseModal(testData.city1);
        });
    });

    it('Verify the behavior when changing the selected city from the list and then selecting another city', () => {
        cy.fixture('testData').then((testData) => {
            selectCityModal.changeCityAndCheck(testData.city1, testData.city2);
        });
    });
});