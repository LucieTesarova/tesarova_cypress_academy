import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login and Logout again to Pmtool", () => {
  it("Login and Logout 2x", () => {
    const userName = "cypress_zima_2024";
    const password = "Zima2024Cypress";

    new LoginPage()
      .openPmtool()
      .login(userName, password)
      .clickProfile()
      .clickLogout()
      .login(userName, password)
      .clickProfile()
      .clickLogout();
  });
});
