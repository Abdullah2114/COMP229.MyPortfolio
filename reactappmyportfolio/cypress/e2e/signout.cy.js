describe("Signout Test", () => {
  it("logs out user", () => {
    cy.visit("http://localhost:5173/signin");

    cy.get('input[name="email"]').type("testuser123@gmail.com");
    cy.get('input[name="password"]').type("123456");

    cy.get("form").within(() => {
      cy.contains("button", "Sign In").click();
    });

    cy.url().should("include", "/dashboard");

    cy.contains("button", "Sign Out").click();

    cy.url().should("include", "/signin");

    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.be.null;
    });
  });
});