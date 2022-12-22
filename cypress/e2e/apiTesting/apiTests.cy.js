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
            })
        })


        it('Verify the type of token key is string', function() {
            getResponse()
            .then(({body}) => {
                expect(body.token).to.be.a('string')
            })
        })
        
    })

    describe('GetBookingIds', function() {

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

    it ('Verify response has headers', function() {
        getResponse()
        .then((response) => {
        expect(response).to.have.property('headers')
    })
    })

    it.only('Verify response has key bookingid', function() {
        getResponse()
        .then(({body}) => {
            console.log(body)
            expect(body[0]).to.have.keys('bookingid')
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

    describe('CreateBooking', function() {
        const getResponse = () => {
            cy.request({
                method : "post",
                url : BASE_URL,
                headers : {
                    "Content-Type" : "application/json"},
                body : {
                    "firstname" : "Jim",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2018-01-01",
                        "checkout" : "2019-01-01"
                    },
                    "additionalneeds" : "Breakfast"
                }
        })
        }
    })
})