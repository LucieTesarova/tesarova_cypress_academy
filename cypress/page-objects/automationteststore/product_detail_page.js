import { ShoppingCartPage } from "./shopping_cart_page";

export class ProductDetailPage {
  constructor() {
    this.addToCartButton = "ul[class='productpagecart'] a[class='cart']";
  }

  addToCart() {
    cy.get(this.addToCartButton).click();
    return new ShoppingCartPage();
  }
}
