import { HeaderSection } from "./common/header_section";

export class DashboardPage extends HeaderSection {
  constructor() {
    super();
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }
}
