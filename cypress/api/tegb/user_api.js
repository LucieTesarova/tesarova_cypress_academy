export class UserApi {
  register(username, password, email) {
    return cy.request({
      url: Cypress.env("tegb_api_url") + "user/register",
      method: "POST",
      body: {
        username: username,
        email: email,
        password: password,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "auth/login",
      body: {
        username: username,
        password: password,
      },
    });
  }

  createAccount(accessToken, userId, deposit, dailyLimit, monthlyLimit) {
    return cy.request({
      url: Cypress.env("tegb_api_url") + "accounts",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + accessToken,
      },
      body: {
        userId: userId,
        accountType: "checking",
        transactionLimits: {
          dailyLimit: dailyLimit,
          monthlyLimit: monthlyLimit,
        },
        deposit: deposit,
        createdAt: "2023-05-07T12:00:00.000Z",
      },
    });
  }
}
