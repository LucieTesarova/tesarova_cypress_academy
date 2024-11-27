describe("API Display Tests", () => {
  it("Check login APIs", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api");
  });
});
