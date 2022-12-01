class MainPage {
    elements = {
        getHeader : () => cy.get('.mobile-padding h1 span'),
        getSearchCityField : () => cy.get('input[placeholder="Search city"]'),
        getSearchButton : () => cy.get('.search button'),
        getAllElementsFromDropDownMenu : () => cy.get('ul.search-dropdown-menu li'),
        getNameOfCityHeader : () => cy.get ('.current-container h2')
    }

    inputTextInSearchCityField(text) {
        this.elements.getSearchCityField().click().type(text)
    }

    clickSearchButton() {
        this.elements.getSearchButton().click()
    }
}

export default MainPage;