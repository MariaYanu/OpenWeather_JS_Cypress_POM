class Footer {
    elements = {
        getCurrentAndForecastAPIsLink : () => cy.get ('div.footer-section a[href="/api#current"]')
    }

    clickCurrentAndForecastAPIsLink() {
        this.elements.getCurrentAndForecastAPIsLink().click()
    }
}

export default Footer;