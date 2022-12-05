/// <reference types="cypress"/>

import Footer from "../pageObjects/Footer.js"
import APIPage from "../pageObjects/APIPage.js"

const footer = new Footer();
const apiPage = new APIPage();

describe('footerTests', function() {

    beforeEach(function(){
        cy.fixture('apiPage').then(footer => {
            this.footer = footer;
        })
        cy.fixture('apiPage').then(api => {
            this.api = api;
        })
        cy.visit('/');
    })

    it('AT_001.001| Footer > Current and Forecast APIs > After clicking user is redirected to "Current & Forecast weather data collection" section in API page', function() {
        footer.clickCurrentAndForecastAPIsLink()
        cy.url().should('include', this.footer.currentSectionAnchor)
        apiPage.elements.getCurrentForecastCollectionHeader().should('be.visible')
    })

})