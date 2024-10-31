import { HomePage } from "../../page-objects/automationteststore/home_page";

describe("Put product into basket tests in AutomationTestStore", () => {
  it("Put product into basket", () => {
    const productName = "Skinsheen Bronzer Stick";

    new HomePage()
      .openAutomationTestStore()
      .clickProductDetail(productName)
      .addToCart();
  });
});
