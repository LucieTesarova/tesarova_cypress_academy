import { faker } from "@faker-js/faker";
import { UserApi } from "../../api/tegb/user_api";
import { DashboardPage } from "../../page-objects/tegb/dashboard_page";

describe("API tests for TEG#B - bank account", () => {
  let randomName;
  let randomEmail;
  let password;
  let accessToken;
  let deposit;
  let dailyLimit;
  let monthlyLimit;

  beforeEach(() => {
    randomName = faker.internet.userName();
    randomEmail = faker.internet.exampleEmail();
    password = "Tredgate2024#";
    deposit = 800;
    dailyLimit = 3000;
    monthlyLimit = 10000;

    cy.log(`Username generated: ${randomName}`);
    cy.log(`Email generated: ${randomEmail}`);
  });

  it("POST create user with bank account", () => {
    const userApi = new UserApi();
    const dashboardPage = new DashboardPage();
    cy.visit(Cypress.env("tegb_url"));

    userApi.register(randomName, password, randomEmail).then((response) => {
      expect(response.status).to.eq(201);
      cy.wrap(response.body.userId).as("userId");
    });

    userApi.login(randomName, password).then((response) => {
      expect(response.status).to.eq(201);
      cy.wrap(response.body.access_token).as("accessToken");
      accessToken = response.body.access_token;
      cy.setCookie("access_token", accessToken);
    });

    cy.get("@userId").then((userId) => {
      cy.get("@accessToken").then((accessToken) => {
        userApi
          .createAccount(accessToken, userId, deposit, dailyLimit, monthlyLimit)
          .then((response) => {
            expect(response.status).to.eq(201);
          });
      });
    });

    cy.visit(Cypress.env("tegb_url") + "app");
    dashboardPage.clickAccounts().balanceContainText(deposit);
  });
});
