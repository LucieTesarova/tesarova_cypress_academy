describe("Handling More Tabs", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com/index.html");
  });
  it("Modify tab to open in same screen", () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type("Funguju");
  });

  it("Open Login Portal", () => {
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#text").type("něco");
  });
});
