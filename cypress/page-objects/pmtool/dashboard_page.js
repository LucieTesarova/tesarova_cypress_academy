import { LoginPage } from "./login_page";

export class DashboardPage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutButton = "#logout";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}
