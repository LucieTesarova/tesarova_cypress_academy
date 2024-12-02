import { realHover } from "../../../../node_modules/cypress-real-events/commands/realHover";

describe("Mouse Actions Tests", { tags: "@smoke" }, () => {
  it("Scroll Into View", () => {
    cy.visit("https://tredgate.com/webtrain");
    cy.get("h1").scrollIntoView().should("be.visible");
  });

  it("Double Click", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("div#double-click").dblclick();
  });

  it("Click and Hold", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#click-box").trigger("mousedown");
    cy.wait(5000);
    cy.get("#click-box").trigger("mouseup");
  });

  it("Drag and Drop", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it("Real Hover", () => {
    cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#div-hover > .dropdown.hover")
      .realHover()
      .then((hoveredElement) => {
        // cy.wait(4000); // ? čekání 4 s
        cy.get(".dropdown.hover .dropdown-content a").click();
      });
  });
});
