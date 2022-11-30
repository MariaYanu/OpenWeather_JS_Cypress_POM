/// <reference types="cypress"/>

import Header from '../pageObjects/Header.js';
import MarketPlacePage from '../pageObjects/MarketPlacePage.js';

const header = new Header();
const marketPlacePage = new MarketPlacePage();

describe('Market place', function() {

    beforeEach(function() {
        cy.fixture('marketPlace').then(data => {
            this.data = data;
        })
        cy.visit('/');
    })

    it('TC_010.007 |  Marketplace > Verify all links on the page have the same color', function() {
        header.clickMarketPlaceLink()
    })
})