import { LoginPage } from "./login_page";

export class LostPasswordPage {
  constructor() {
    this.usernameInput = 'div[class="form-group"] input[name="username"]';
    this.emailInput = "div[class='form-group'] input[name='email']";
    this.sendButton = "div[class='form-actions'] button[type='submit']";
    this.backButton = "#back-btn";
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  clickSend() {
    cy.get(this.sendButton).click();
    return new LoginPage();
  }

  clickBack() {
    cy.get(this.backButton).click;
    return new LoginPage();
  }
}
