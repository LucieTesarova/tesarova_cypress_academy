describe("Learning xpath", () => {
  it("Login and logout in Pmtool using xpath selectors", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.xpath('//input[@id="username"]').type("cypress_zima_2024");
    cy.xpath('//input[@id="password"]').type("Zima2024Cypress");
    cy.xpath("//button[contains(text(), 'Login')]").click();
    cy.xpath('//li[@id="user_dropdown"]').click();
    cy.xpath('//li[@id="user_dropdown"]//li[@id="logout"]').click();
  });
});
