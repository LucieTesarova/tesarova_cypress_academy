import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Login Page Atomic Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  context("Username Input", () => {
    it("Is Visible", () => {
      loginPage.usernameInput.isVisible();
    });

    it("Have Placeholder", () => {
      loginPage.usernameInput.havePlaceholder("Username");
    });

    it("Is editable", () => {
      const username = "Test";
      loginPage.typeUsername(username);
      loginPage.usernameInput.haveValue(username);
    });

    it("Empty Validation Message", () => {
      loginPage.clickLogin();
      loginPage.usernameErrorLabel.haveText("This field is required!");
    });
  });
  context("Password Input", () => {
    it("Is Visible", () => {
      loginPage.passwordInput.isVisible();
    });

    it("Have Placeholder", () => {
      loginPage.passwordInput.havePlaceholder("Password");
    });

    it("Empty Validation Message", () => {
      loginPage.clickLogin();
      loginPage.passwordErrorLabel.haveText("This field is required!");
    });
  });
  context("Logo image", () => {
    it("Is Visible", () => {
      loginPage.logoImg.isVisible();
    });
  });

  context("Title header", () => {
    it("Is Visible", () => {
      loginPage.pageHeader.isVisible();
    });

    it("Have Text", () => {
      loginPage.pageHeader.haveText("Login");
    });
  });
});

/*
Připravte selektory a testy (do každý element bude mít svůj kontext) pro:
heslo (viditelnost, placeholder, chybová zpráva),
logo (viditelnost),  
nadpis (viditelnost, text), 


*/
