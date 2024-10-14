describe("Lost_password_tests.cy.js", () => {
  it("Lost password test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#forget_password").click();
    cy.get(":nth-child(3) > .input-icon > .form-control").type(
      "test@tredgate.cz"
    );
    cy.get(":nth-child(2) > .input-icon > .form-control").type("test");
    cy.get(".btn-info").click();
  });
});
