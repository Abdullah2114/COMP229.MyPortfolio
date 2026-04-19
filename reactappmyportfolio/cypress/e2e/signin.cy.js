describe("Signin Test", () => {
  it("logs in user", () => {
    cy.visit("http://localhost:5173/signin");

    cy.get('input[name="email"]').type("testuser123@gmail.com");
    cy.get('input[name="password"]').type("123456");

    cy.get('form').within(() => {
      cy.contains("button", "Sign In").click();
    });

    cy.wait(2000);

    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.not.be.null;
    });

    cy.url().should("include", "/dashboard");
  });
});