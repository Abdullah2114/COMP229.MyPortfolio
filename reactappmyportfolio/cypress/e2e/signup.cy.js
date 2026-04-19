describe("Signup Test", () => {
  it("creates a new user", () => {
    cy.visit("http://localhost:5173/add-user");

    cy.get("input[name=firstname]").type("Test");
    cy.get("input[name=lastname]").type("User");
    cy.get("input[name=email]").type("testuser123@gmail.com");
    cy.get("input[name=password]").type("123456");

    cy.contains("Create Account").click();
  });
});