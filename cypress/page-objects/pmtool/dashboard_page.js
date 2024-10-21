import { LoginPage } from "./login_page";
import { ProjectsPage } from "./projects_page";

export class DashboardPage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutButton = "#logout";
    this.projectsMenuAnchor = "#Projects";
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  clickProjects() {
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
  }
}
