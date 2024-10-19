import { HomePage } from "../../../page-objects/eshop/home_page";
import { RegistrationPage } from "../../../page-objects/eshop/registration_page";

describe("Tests for Registration to Tredgate Eshop", () => {
  it.skip("Fill in registration form", () => {
    const homePage = new HomePage();
    const registrationPage = new RegistrationPage();
    const firstName = "TestFirstName";
    const lastName = "TestLastName";
    const email = "TestEmail@test.com";
    const telephone = "TestTelephone";
    const password = "TestPassword";

    homePage.openEshop();
    homePage.openRegistration();
    registrationPage.fillAndSubmitRegistration(
      firstName,
      lastName,
      email,
      telephone,
      password
    );
  });
});
