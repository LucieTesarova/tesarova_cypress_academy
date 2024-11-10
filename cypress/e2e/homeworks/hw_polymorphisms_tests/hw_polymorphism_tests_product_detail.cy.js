import { HomePage } from "../../../page-objects/eshop/home_page";

describe("Check product detail with Polymorphism", () => {
  it("Check product iPhone", () => {
    const productName = "iPhone";
    const productDescription =
      "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.";

    new HomePage()
      .openEshop()
      .openProductDetail(productName)
      .haveDescription(productDescription)
      .clickLogo();
  });
});
