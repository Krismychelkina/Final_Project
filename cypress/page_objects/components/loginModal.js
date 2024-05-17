class LoginModal {
    get emailInput() {
        return cy.get('input[aria-label="Электронная почта"]');
    }

    get passwordInput() {
        return cy.get(':nth-child(3) > .input-material');
    }

    get loginButton() {
        return cy.get('._footer_7r0bx_36 > .x-button')
    }

    get registerButton() {
        return cy.contains('a', 'Зарегистрироваться');
    }

    get closeButton() {
        return cy.get('.d-modal__close-button > .icon')
    }

    get forgotPasswordLink() {
        return cy.contains('a', 'Я не помню пароль');
    }

    get loginModal(){
        return cy.get('.d-modal')
    }

    get signInModal(){
        return cy.get('#modals > :nth-child(2)');
    }

    get forgotPasswordModal(){
        return cy.get('.d-modal_login')
    }

    get forgotPasswordField(){
        return cy.get('._content_1qa3w_9 > .recaptcha > :nth-child(1) > form > :nth-child(2) ')
    }

    get restoreButton(){
        return cy.get('._footer_ly0kc_40 > .x-button');
    }

    get restorePasswordModal(){
        return cy.get('.d-modal_login > .d-modal__frame');
    }

    get invalidCredentialsNotification(){
        return cy.get('._notification_11do5_2');
    }

    get profileButton(){
        return cy.get('._text_1jcg6_41');
    }
}

    module.exports = new LoginModal();