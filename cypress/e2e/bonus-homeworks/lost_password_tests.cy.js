import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Lost password tests", () => {
  it("Lost password e2e test", () => {
    const username = "lost_password_user";
    const email = "lost_password@tredgate.cz";

    new LoginPage()
      .openPmtool()
      .clickPasswordForgotten()
      .typeUsername(username)
      .typeEmail(email)
      .clickSend();
  });

  it("Open lost password page and go back", () => {
    new LoginPage().openPmtool().clickPasswordForgotten().clickBack();
  });
});
