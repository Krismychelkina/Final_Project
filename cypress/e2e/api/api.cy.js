describe('API Testing', () => {
    it('Cart Page - Status Code 200', () => {
        cy.request('GET', '/checkout/cart/')
            .then((response) => {
                expect(response.status).to.equal(200)
            })
    })
    it('Validation of 10% Discount Offer Inclusion', () => {
        cy.request('POST', '/bs-ssi-default/mob_offer_old')
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.include('СКИДКА 10% за подписку')
            })
     })
    it('Verification of Description Presence on Men Page', () => {
        cy.request('GET', '/men-home/?sitelink=topmenuM')
            .then((response) => {
                expect(response.status).to.equal(200)
                    expect(response.body).to.include('Купить мужскую одежду и обувь в интернет магазине Lamoda.by')
            })
    })
})