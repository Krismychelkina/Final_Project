const header = require("../page_objects/components/header");
const search = require("../page_objects/components/search");

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
    let testData;

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
        cy.fixture('testData').then((data) => {
            testData = data;
        });
    });

    const testCases = [
        {
            testName: 'Verify the search functionality by product name - list of products is opened',
            searchFunction: 'searchByProductName',
            testDataKey: 'item1'
        },
        {
            testName: 'Verify the search functionality by article number - product card is opened',
            searchFunction: 'searchByArticleNumber',
            testDataKey: 'index1'
        },
        {
            testName: 'Verify the behavior when searching with a non-existent query - page without results is opened',
            searchFunction: 'searchNonExistentQuery',
            testDataKey: 'testRequest'
        }
    ];

    testCases.forEach(testCase => {
        it(testCase.testName, () => {
            search[testCase.searchFunction](testData[testCase.testDataKey]);
        });
    });
});
