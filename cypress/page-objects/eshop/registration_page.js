export class RegistrationPage {
  constructor() {
    this.firstNameInput = "#input-firstname";
    this.lastNameInput = "#input-lastname";
    this.emailInput = "#input-email";
    this.telephoneInput = "#input-telephone";
    this.passwordInput = "#input-password";
    this.confirmPasswordInput = "#input-confirm";
    this.submitButton = ".pull-right > .btn";
  }

  fillAndSubmitRegistration(firstName, lastName, email, telephone, password) {
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.emailInput).type(email);
    cy.get(this.telephoneInput).type(telephone);
    cy.get(this.passwordInput).type(password);
    cy.get(this.confirmPasswordInput).type(password);
    cy.get(this.submitButton).click();
  }
}
