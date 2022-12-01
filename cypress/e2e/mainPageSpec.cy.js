/// <reference types="cypress"/>

import MainPage from "../pageObjects/MainPage.js"

const mainPage = new MainPage();

describe('Main page suit', function(){

    beforeEach(function() {
        cy.visit('/')
    })

    it ('AT_001.012 | Main page > Section with search > Search City> The displayed city name equals the city selected in "Search city" field', function() {
        const cityForSearch = "Paris";
        const cityForSelectList = "Paris, FR";

        mainPage.inputTextInSearchCityField(cityForSearch)
        mainPage.clickSearchButton()

        mainPage.elements.getAllElementsFromDropDownMenu().each(($el) => {
            if(cy.wrap($el).contains(cityForSelectList)){
                cy.wrap($el).click()
            } 
            return false;
        })

        mainPage.elements.getNameOfCityHeader()
        .contains(cityForSelectList)
        .should('be.visible')
    });
})