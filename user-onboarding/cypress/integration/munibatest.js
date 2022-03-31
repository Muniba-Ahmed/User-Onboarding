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
});
