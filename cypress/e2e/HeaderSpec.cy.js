import Header from "../pageObjects/Header.js"
import MainPage from "../pageObjects/MainPage.js"

const header = new Header();
const mainPage = new MainPage();

describe('header spec', () => {

  beforeEach(function() {
    cy.fixture('mainPage').then(data => {
      this.data = data;
  })
    cy.visit('/');
  })

  it('Header > click logo', function() {
   header.clickGuideLink();
   header.clickLogoLink();

   mainPage.elements.getHeader().should('have.text', this.data.header)

  })
})