// dsb - zkratka pro vytvoření describe
// it - zkratka pro vytvoření it (testu)

describe("First Tests", () => {
  it("Open Tredgate Homepage", () => {
    cy.visit("https://tredgate.cz");
  });
});
