describe("Registration account tests", () => {
  it("Fill in the registration fields", () => {
    const firstName = "TestFirstName";
    const lastName = "TestLastName";
    const email = "TestEmail@test.com";
    const telephone = "TestTelephone";
    const password = "TestPassword";

    cy.visit("https://tredgate.com/eshop/index.php?route=account/register");
    cy.get("#input-firstname").type(firstName);
    cy.get("#input-lastname").type(lastName);
    cy.get("#input-email").type(email);
    cy.get("#input-telephone").type(telephone);
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(password);
    cy.get(".pull-right > .btn").click();
  });
});
