class Header{
    elements = {
        getGuideLink : () => cy.get('#desktop-menu a[href="/guide"]'),
        getAPILink : () => cy.get('#desktop-menu a[href="/api"]'),
        getDashboardLink : () => cy.get('#desktop-menu a[href="/weather-dashboard"]'),
        getLogoLink : () => cy.get ('#nav-website li.logo a'),
        getMarketPlaceLink : () => cy.get ('#desktop-menu a[href="https://home.openweathermap.org/marketplace"]')
    }

    clickLogoLink() {
        this.elements.getLogoLink().click({force:true});
    }

    clickGuideLink() {
        this.elements.getGuideLink().click({force:true});
    }

    clickMarketPlaceLink() {
        this.elements.getMarketPlaceLink().invoke('removeAttr','target').click({force:true})
    }
}

export default Header;