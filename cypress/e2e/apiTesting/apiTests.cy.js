/// <reference types="cypress"/>

const BASE_URL = Cypress.env('apiBaseUrl');
let TOKEN;

describe('API testing', function() {

    describe('CreateToken', function() {

        const getResponse = () => 
        cy.request({
            method: "POST",
            url: `${BASE_URL}/auth`,
            headers: {
                "Content-Type" : "application/json"
            },
            body: {
                "username" : "admin",
                "password" : "password123"
            },
        })

        it('Verify response status', function() {
            getResponse()
            .then((response) => {
                TOKEN = response.body.token;
                expect(response.status).to.be.eq(200)
                expect(response.statusText).to.be.eq("OK")
            })
        })

        it('Verify the type of token key is string', function() {
            getResponse()
            .then(({body}) => {
                expect(body.token).to.be.a('string')
            })
        })
        
    })

    describe('Get Booking Ids', function() {

        const getResponse = () => 
            cy.request({
                method: "GET",
                url: `${BASE_URL}/booking`
            })

    it('Verify response status', function() {
        getResponse()
        .then((response) => {
            expect(response.status).to.eq(200)
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

    describe('GetBooking', function() {
        const getResponse = () => 
        cy.request({
            method : "get",
            url : `${BASE_URL}/booking/1`
    })

    it('Print response', function() {
        getResponse()
        .then((response) => {
            console.log(response)
        })
    })
    })
})