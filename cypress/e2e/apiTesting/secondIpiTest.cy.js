/// <reference types="cypress"/>

const BASE_URL = Cypress.env('apiBaseUrl');

describe('API testing', function() {

    describe('Get Booking Ids', function() {

        const getResponse = () => 
            cy.request({
                method: "GET",
                url: `${BASE_URL}/booking`
            })

    it('Verify response status', function() {
        getResponse()
        .then(({status}) => {
            expect(status).to.eq(200)
        })
    })

    it('Verify response status text', function() {
        getResponse()
        .then(({statusText}) => {
        expect(statusText).to.eq('OK')
    })
    })

    it('Print response headers', function() {
        getResponse()
        .then(({headers}) => {
        console.log(headers)
    })
    })
    })
})