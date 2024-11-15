export class AccountPage {
  constructor() {
    this.continueButton = "form[id='accountFrm'] button[title='Continue']";
  }

  clickContinueButton() {
    cy.get(this.continueButton).click();
    // return new CreateAccountPage();
  }
}
