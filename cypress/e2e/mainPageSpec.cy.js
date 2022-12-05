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

        mainPage.checkDropDownMenuContainElementAndClick(cityForSelectList)

        mainPage.elements.getNameOfCityHeader()
        .should('have.text', cityForSelectList)
        .and('be.visible')
    });
})