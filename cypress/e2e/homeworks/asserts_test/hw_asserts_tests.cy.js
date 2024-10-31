import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Login page UI assert tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Have values asserts", () => {
    const username = "cypress_zima_2024";
    const password = "Zima2024Cypress";

    new LoginPage()
      .typeUsername(username)
      .typePassword(password)
      .usernameHaveValue(username)
      .passwordHaveValue(password);
  });
  it("Have texts asserts", () => {
    const rememberMeText = "Remember Me";
    const loginButtonText = "Login";
    const passwordForgottenText = "Password forgotten?";

    new LoginPage()
      .rememberMeHaveText(rememberMeText)
      .loginButtonHaveText(loginButtonText)
      .passwordForgottenHaveText(passwordForgottenText);
  });

  it("Logo visibility test", () => {
    new LoginPage().logoIsVisible();
  });
});
