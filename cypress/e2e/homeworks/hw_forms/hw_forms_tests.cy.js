import { faker } from "@faker-js/faker";
import { HomePage } from "../../../page-objects/automationteststore/home_page";

describe("Fill form at Automation Test Store", () => {
  it("Fill Create account form", () => {
    const email = faker.internet.exampleEmail();

    new HomePage()
      .openAutomationTestStore()
      .clickLoginOrRegisterButton()
      .clickContinueButton();
  });
});
