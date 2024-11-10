import { HomePage } from "../home_page";

export class HeaderSection {
  constructor() {
    this.logo = "#logo";
  }

  clickLogo() {
    cy.get(this.logo).click();
    return new HomePage();
  }
}
