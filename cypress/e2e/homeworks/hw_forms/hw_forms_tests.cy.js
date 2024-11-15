import { faker } from "@faker-js/faker";
import { HomePage } from "../../../page-objects/automationteststore/home_page";
import { CreateAccountPage } from "../../../page-objects/automationteststore/create_account_page";

describe("Fill form at Automation Test Store", () => {
  const homePage = new HomePage();
  const createAccountPage = new CreateAccountPage();

  it("Fill Create account form", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.exampleEmail();
    const telephone = faker.phone.number({ style: "international" });
    const fax = "312-555-6789";
    const company = "Testpany";
    const address1 = "Test street 1";
    const address2 = "Test street 2";
    const city = "Test City";
    const regionState = "Vysocina";
    const zipCode = "1234";
    const country = "Czech Republic";
    const loginName = lastName + faker.number.int(100);
    const password = "Test-045678";
    const subscribe = "0";

    homePage
      .openAutomationTestStore()
      .clickLoginOrRegisterButton()
      .clickContinueButton()
      .typeFirstName(firstName)
      .typeLastName(lastName)
      .typeEmail(email)
      .typeTelephone(telephone)
      .typeFax(fax)
      .typeCompany(company)
      .typeAddress1(address1)
      .typeAddress2(address2)
      .typeCity(city)
      .selectCountry(country);

    cy.wait(1000);

    createAccountPage
      .selectRegion(regionState)
      .typeZipCode(zipCode)
      .typeLoginName(loginName)
      .typePassword(password)
      .typePasswordConfirm(password)
      .checkSubscribe(subscribe)
      .checkPrivacyPolicy()
      .clickContinueButton()
      .checkSuccessMessage();
  });
});
