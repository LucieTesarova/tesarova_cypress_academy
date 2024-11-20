import { LoginPage } from "../login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor(path) {
    // * HeaderSection nově přijíma path, kterou dále posílá do BasePage, který ji zpracovává.
    super(path);
    this.profileDropdown = "#user_dropdown";
    this.logoutButton = "#logout";
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
