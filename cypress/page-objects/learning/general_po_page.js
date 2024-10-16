export class GeneralPoPage {
  constructor() {
    this.element = "selector";
  }

  actionWithElement() {
    cy.log(this.element);
  }
}
