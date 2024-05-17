const header = require("../page_objects/components/header");
const loginModal = require("../page_objects/components/loginModal");

describe('Login', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
        header.loginButton.click();
    });

    it('Verify login button opens login pop-up', () => {
        header.loginModal.should('be.visible');
    });

    it('Verify register button from login pop-up opens sign in modal', () => {
        loginModal.registerButton.click();
        loginModal.signInModal.should('be.visible');
    });

    it('Verify close button in login pop-up', () => {
        loginModal.closeButton.click();
        loginModal.loginModal.should('not.exist');
    });

    it('Verify forgot password functionality in login pop-up', () => {
        cy.fixture('testData').then((testData) => {
            loginModal.forgotPasswordLink.click();
            loginModal.forgotPasswordModal.should('be.visible');
            loginModal.forgotPasswordField.type(testData.invalidEmail);
            loginModal.restoreButton.click();
            loginModal.restorePasswordModal.should('be.visible');
        });
    });

    it('Verify that login with invalid credentials navigate to invalid credentials notification - captcha is visible', () => {
        cy.fixture('testData').then((testData) => {
            loginModal.emailInput.type(testData.invalidEmail);
            loginModal.passwordInput.type(testData.invalidPassword);
            loginModal.loginButton.click();
            loginModal.captcha.should('be.visible');
        });
    });

    it('Verify login with real credentials navigate to first page with profile button - captcha is visible', () => {
        cy.fixture('testData').then((testData) => {
            loginModal.emailInput.type(testData.validEmail);
            loginModal.passwordInput.type(testData.validPassword);
            loginModal.loginButton.click();
            loginModal.captcha.should('be.visible');
        });
    });
});
