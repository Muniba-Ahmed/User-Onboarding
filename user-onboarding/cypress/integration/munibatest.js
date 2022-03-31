describe("User Onboarding Form!", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const usernameInput = () => cy.get("input[name = username]");
  const passwordInput = () => cy.get("input[name = password]");
  const emailInput = () => cy.get("input[name = email]");

  it("sanity check to make sure tests work", () => {
    expect(1 + 9).to.equal(10);
    expect(7 - 2).to.equal(5);
    expect(2 + 2).to.not.equal(8);
  });

  it("The proper elements are showing", () => {
    usernameInput().should("exist");
    passwordInput().should("exist");
    emailInput().should("exist");

    cy.contains("Create a User").should("exist");
  });

  describe("Filling out the inputs", () => {
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost");
    });

    it("can type in the inputs", () => {
      usernameInput()
        .should("have.value", "")
        .type("Muniba Ahmed")
        .should("have.value", "Muniba Ahmed");
      passwordInput()
        .should("have.value", "")
        .type("marloblackcat")
        .should("have.value", "marloblackcat");
    });
  });
});
