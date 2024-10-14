describe("Operating with Cypress Tests", () => {
  it("Login test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#password").type("password123");
    cy.get(".btn").click();
  });

  it.skip("BUG 1234 - Test failure - element not present", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2");
  });
});
