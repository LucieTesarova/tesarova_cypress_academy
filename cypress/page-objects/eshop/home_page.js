import { ProductDetailPage } from "./product_detail_page";

export class HomePage {
  constructor() {
    this.url = "http://tredgate.com/eshop/";
    this.myAccountDropdown = ".list-inline > .dropdown";
    this.registerButton = ".dropdown-menu > :nth-child(1) > a";
    this.productSelector = "div.product-thumb h4 a";
  }

  openEshop() {
    cy.visit(this.url);
    return this;
  }

  openRegistration() {
    cy.get(this.myAccountDropdown).click();
    cy.get(this.registerButton).click();
  }

  openProductDetail(productName) {
    cy.get(this.productSelector).contains(productName).click();
    return new ProductDetailPage();
  }
}
