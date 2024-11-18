import { customElement } from "../../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";
import { LostPasswordPage } from "./lost_password_page";

// ? Tento PageObject využívá customElement. Uvnitř tohoto custom elementu jsou všechny Cypress volání.
export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = customElement("#username"); // ! zde nesmí být cy.get!!
    this.passwordInput = customElement("#password");
    this.loginButton = customElement(".btn");
    this.passwordForgottenButton = customElement("#forget_password");
    this.pageHeader = customElement("h3.form-title");
    this.rememberMe = customElement(".checkbox");
    this.logo = customElement("img[title='TEG Project Management']");
    this.usernameErrorLabel = customElement("#username-error");
    this.passwordErrorLabel = customElement("#password-error");
    this.logoImg = customElement(".login-page-logo img");
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    // ? původní cypres call: cy.get(this.usernameInput).type(username);
    return this;
  }
  typePassword(password) {
    this.passwordInput.type(password);
    // cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.click();
    // cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }

  pageHeaderHaveText(headerText) {
    this.pageHeader.haveText(headerText);
    // cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }

  pageHeaderHaveText(headerText) {
    this.pageHeader.haveText(headerText);
    // cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }

  usernameHaveValue(usernamePlaceholder) {
    this.usernameInput.havePlaceholder(usernamePlaceholder);
    // cy.get(this.usernameInput).should("have.value", usernamePlaceholder);
    return this;
  }

  passwordHaveValue(passwordPlaceholder) {
    this.passwordInput.haveValue(passwordPlaceholder);
    //cy.get(this.passwordInput).should("have.value", passwordPlaceholder);
    return this;
  }

  rememberMeHaveText(rememberMeText) {
    this.rememberMe.containText(rememberMeText);
    //cy.get(this.rememberMe).should("contain.text", rememberMeText);
    return this;
  }

  loginButtonHaveText(loginButtonText) {
    this.loginButton.haveText(loginButtonText);
    // cy.get(this.loginButton).should("have.text", loginButtonText);
    return this;
  }

  passwordForgottenHaveText(passwordForgottenText) {
    this.passwordForgottenButton.haveText(passwordForgottenText);
    // cy.get(this.passwordForgottenButton).should(
    //   "have.text",
    //   passwordForgottenText
    // );
    return this;
  }

  logoIsVisible() {
    this.logo.isVisible();
    // cy.get(this.logo).should("be.visible");
  }
}
