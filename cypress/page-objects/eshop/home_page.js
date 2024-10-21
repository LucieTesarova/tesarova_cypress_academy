export class HomePage {
  constructor() {
    this.url = "http://tredgate.com/eshop/";
    this.myAccountDropdown = ".list-inline > .dropdown";
    this.registerButton = ".dropdown-menu > :nth-child(1) > a";
  }

  openEshop() {
    cy.visit(this.url);
  }

  openRegistration() {
    cy.get(this.myAccountDropdown).click();
    cy.get(this.registerButton).click();
  }
}
