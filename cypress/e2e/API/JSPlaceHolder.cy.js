describe("JsonPlaceholder", () => {
  it("Create new post", () => {
    cy.createPost(() => {}).then((resp) => {
      cy.log(resp);
    });
  });
});
