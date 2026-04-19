describe("Add Project Test", () => {
  it("adds a project", () => {
    cy.visit("http://localhost:5173/signin");

    cy.get('input[name="email"]').type("testuser123@gmail.com");
    cy.get('input[name="password"]').type("123456");

    cy.get("form").within(() => {
      cy.contains("button", "Sign In").click();
    });

    cy.url().should("include", "/dashboard");

    cy.visit("http://localhost:5173/add-project");

    cy.get('input[name="title"]').type("Cypress Project");
    cy.get('input[name="completion"]').type("2026-12-12");
    cy.get('textarea[name="description"]').type("Test project created by Cypress");

    cy.get("form").within(() => {
      cy.contains("button", "Add Project").click();
    });

    cy.url().should("include", "/projects");
  });
});