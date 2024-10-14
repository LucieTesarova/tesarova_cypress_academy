export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
  }

  openPmtool() {
    cy.visit(this.url);
  }

  // kazdy zvlast, pokud jeto test ktery testuje primo logn
  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLoginBtn() {
    cy.get(this.loginButton).click();
  }

  //testy muzeme zdruzit pokud to pouzivame jako preconditions
  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}
