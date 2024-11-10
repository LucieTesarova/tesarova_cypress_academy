import { HeaderSection } from "./common/header_section";

export class ProductDetailPage extends HeaderSection {
  constructor() {
    super();
    this.productDescription = ".intro";
  }

  haveDescription(productDescription) {
    cy.get(this.productDescription).should("contain.text", productDescription);
    return this;
  }
}
