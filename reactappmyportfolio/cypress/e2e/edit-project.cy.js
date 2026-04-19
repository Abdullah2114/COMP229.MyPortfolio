describe("Edit Project Test", () => {
  it("edits a project", () => {
    cy.visit("http://localhost:5173/signin");

    cy.get('input[name="email"]').type("testuser123@gmail.com");
    cy.get('input[name="password"]').type("123456");

    cy.get("form").within(() => {
      cy.contains("button", "Sign In").click();
    });

    cy.url().should("include", "/dashboard");

    cy.visit("http://localhost:5173/projects");

    cy.contains(".card", "Cypress Project").within(() => {
      cy.contains("Edit").click();
    });

    cy.get('input[name="title"]').clear().type("Cypress Project Updated");
    cy.get('textarea[name="description"]')
      .clear()
      .type("Updated by Cypress edit test");

    cy.get("form").within(() => {
      cy.contains("button", /save|update/i).click();
    });

    cy.url().should("include", "/projects");
    cy.contains("Cypress Project Updated").should("exist");
  });
});