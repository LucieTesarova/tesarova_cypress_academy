//multi_domain.cy.js
describe("Multi Domain test", () => {
  it("cy.origin test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("login");
    cy.origin("https://tegb-frontend-88542200c6db.herokuapp.com/", () => {
      //new LoginPage();
      cy.visit("/");
      cy.get('[data-testid="username-input"]').type("druhá aplikace");
    });
    // pokračovat v tredgate.com doméně, ale je potřeba si opět zavolat visit
  });
});
