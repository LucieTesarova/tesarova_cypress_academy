import { customElement } from "../../helpers/custom_element";
import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.usersHeader = customElement(".page-title");
    this.addUserButton = customElement('[test_id="Add User"]');
    //cy.get(this.projectsHeader).should("contain.text", "Users");
  }
}
