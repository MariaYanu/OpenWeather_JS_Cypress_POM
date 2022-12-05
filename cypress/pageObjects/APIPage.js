class APIPage {
    elements = {
        getCurrentForecastCollectionHeader : () => cy.get('#current h2')
    }
}

export default APIPage;