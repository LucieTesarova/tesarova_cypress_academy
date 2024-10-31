import { ProductDetailPage } from "./product_detail_page";

export class HomePage {
  constructor() {
    this.url = "https://automationteststore.com/";
  }

  openAutomationTestStore() {
    cy.visit(this.url);
    return this;
  }

  clickProductDetail(productName) {
    const productSelector = `section[id='featured'] a[title='${productName}']`;
    cy.get(productSelector).click();
    return new ProductDetailPage();
  }
}
