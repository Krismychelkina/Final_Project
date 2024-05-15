const header = require("../page_objects/components/header");
const search = require("../page_objects/components/search");

describe('City Selection', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Verify the functionality of selecting a city from the list and ensuring the selected city is displayed', () => {
        cy.fixture('testData').then((testData) => {
            header.selectCityFromListAndCheck(testData.city1);
        });
    });

    it('Verify that the city modal closes after entering the city name, and the originally entered city is displayed on the site', () => {
        cy.fixture('testData').then((testData) => {
            header.selectCityAndCloseModal(testData.city1);
        });
    });

    it('Verify the behavior when changing the selected city from the list and then selecting another city', () => {
        cy.fixture('testData').then((testData) => {
            header.changeCityAndCheck(testData.city1, testData.city2);
        });
    });
});

describe('Header links', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Verify that clicking on header links changes the URL accordingly', () => {
        header.checkHeaderLinks();
    });
});

describe('Header Category Navigation', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Verify that clicking on category buttons (Men, Women, Kids) changes the URL accordingly', () => {
        header.checkCategoryNavigation();
    });
});

describe('Search feature', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Verify the search functionality by product name', () => {
        cy.fixture('testData').then((testData) => {
            search.searchByProductName(testData.good1);
        });
    });

    it('Verify the search functionality by article number', () => {
        cy.fixture('testData').then((testData) => {
            search.searchByArticleNumber(testData.index1);
        });
    });

    it('Verify the behavior when searching with a non-existent query', () => {
        cy.fixture('testData').then((testData) => {
            search.searchNonExistentQuery(testData.invalidRequest);
        });
    });
});