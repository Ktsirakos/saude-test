// https://docs.cypress.io/api/introduction/api.html

describe("E2E testing", () => {
  it("Contains 5 people at first page", () => {
    cy.visit("/");
    cy.get(".personRow").should("have.length", 5);
  });

  it("Renders correct pages", () => {
    cy.visit("/");
    cy.get(".pagesButtons button").should("have.length", 10);
  });

  it("One is selected", () => {
    cy.visit("/");
    cy.get(".pagesButtons button.selected").should("have.length", 1);
  });

  it("Select another page, still one selected per time", () => {
    cy.visit("/");
    cy.get(".pagesButtons button.notSelected2").click();
    cy.get(".pagesButtons button.selected").should("have.length", 1);
  });

  it("Search something, fitler is happening and pages are reduced", () => {
    cy.visit("/");
    cy.get("#searchBox").type("Pa");
    cy.get(".personRow").should("have.length", 2);
    cy.get(".pagesButtons button").should("have.length", 1);
  });
});

describe("Testing graphs", () => {
  it("Goes to graph page with button", () => {
    cy.visit("/");
    cy.get("#graphRepresentationButton").click();
    cy.url().should("include", "/graphs?q=");
  });

  it("Goes back and forth without problem", () => {
    cy.visit("/");
    cy.get("#graphRepresentationButton").click();
    cy.url().should("include", "/graphs?q=");
    cy.get("#listRepresentationButton").click();
    cy.url().should("include", "/?q=");
    cy.get("#graphRepresentationButton").click();
  });

  it("All graphs are presented", () => {
    cy.visit("/");
    cy.get("#graphRepresentationButton").click();
    cy.get(".graphEntryWrapper").should("have.length", 7);
  });
});
