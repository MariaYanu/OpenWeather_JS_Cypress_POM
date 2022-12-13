/// <reference types="cypress"/>

const API_BASE_URL = Cypress.env('apiBaseUrl');

describe('api tests', function() {

    const getRequest = () => cy.request(`${API_BASE_URL}/booking`);

    it('Booking - GetBookingIds', function() {
        cy.request(`${API_BASE_URL}/booking`).then(response => {
            console.log(response.status)
        })
    })
})