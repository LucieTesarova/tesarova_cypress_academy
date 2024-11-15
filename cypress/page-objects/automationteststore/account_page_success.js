export class AccountPageSuccess {
  constructor() {
    this.successMessage = ".heading1 .maintext";
  }

  checkSuccessMessage() {
    cy.get(this.successMessage).should(
      "contain.text",
      "Your Account Has Been Created!"
    );
    return this;
  }
}
