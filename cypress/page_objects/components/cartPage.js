class CartPage {
    get emptyCart() {
        return cy.get('._title_k4g9v_9');
    }

    get numberOfGoods(){
        return cy.get('.ui-checkout-cart__products-count');
    }

    get increaseOfQuantity(){
        return cy.get('.ui-incrementor__increase > .icon');
    }

    get decreaseOfQuantity(){
        return cy.get('.ui-incrementor__decrease > .icon');
    }

    get quantityOfGoods(){
        return cy.get('._quantity_3c6f5_56');
    }

    get deleteButton(){
        return cy.get('._inner_13so9_2');
    }
    get modalDeleteButton(){
        return cy.get('._buttons_4stt4_2 > .x-button_primaryFilledWeb7184');
    }

    deleteGoodFromTheCart(){
        this.deleteButton.click();
        this.modalDeleteButton.click();
    }

    get promoButton(){
        return cy.get('._title_1q6dc_6');
    }

    get promoField(){
        return cy.get('#coupon_code');
    }

    get activatePromoButton(){
        return cy.get('._row_1k8kq_22 > .x-button');
    }

    get promoUnavailable(){
        return cy.get('._error_1k8kq_13');
    }

    addPromo(keyword){
        this.promoButton.click();
        this.promoField.type(keyword);
        this.activatePromoButton.click();
    }

    get goToCheckoutPageButton(){
        return cy.get('._buttonBackground_hj5hh_6 > .x-button');
    }
}

module.exports = new CartPage();