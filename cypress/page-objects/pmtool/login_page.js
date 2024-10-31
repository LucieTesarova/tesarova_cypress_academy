import { DashboardPage } from "./dashboard_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username"; // ! zde nesmí být cy.get!!
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.passwordForgottenButton = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.rememberMe = ".checkbox";
    this.logo = "img[title='TEG Project Management']";
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }

  clickPasswordForgotten() {
    cy.get(this.passwordForgottenButton).click();
    return new LostPasswordPage();
  }

  pageHeaderHaveText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }

  usernameHaveValue(usernamePlaceholder) {
    cy.get(this.usernameInput).should("have.value", usernamePlaceholder);
    return this;
  }

  passwordHaveValue(passwordPlaceholder) {
    cy.get(this.passwordInput).should("have.value", passwordPlaceholder);
    return this;
  }

  rememberMeHaveText(rememberMeText) {
    cy.get(this.rememberMe).should("contain.text", rememberMeText);
    return this;
  }

  loginButtonHaveText(loginButtonText) {
    cy.get(this.loginButton).should("have.text", loginButtonText);
    return this;
  }

  passwordForgottenHaveText(passwordForgottenText) {
    cy.get(this.passwordForgottenButton).should(
      "have.text",
      passwordForgottenText
    );
    return this;
  }

  logoIsVisible() {
    cy.get(this.logo).should("be.visible");
  }
}
