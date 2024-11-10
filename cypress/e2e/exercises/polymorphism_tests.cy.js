import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  it("Open Projects in Pmtool and logout", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .openProjects()
      .clickProfile()
      .clickLogout();
  });

  it("Open Projects, Dashboard and Users section", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .openProjects()
      .openDashboard()
      .openUsers()
      .clickProfile()
      .clickLogout();
  });
});
