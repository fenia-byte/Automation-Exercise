import { basePage } from "../../../Pages/BasePage";
import { products } from "../../../Pages/Products";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I am on the main page1", () => {
  cy.get(basePage.Locators.shopMenu)
    .find(basePage.Locators.linkHome)
    .and("contain", basePage.Names.home)
    .should("have.attr", basePage.Locators.style) // Ensure the style attribute exists
    .and("include", basePage.Locators.selectedFromMenu);
});

Then("Images are changed", () => {
  for (let i = 0; i < 3; i++) {
    cy.waitUntil(() => cy.get(basePage.Locators.carouselIndicators).find("li").eq(i).then(carousel => expect(carousel).to.have.class(basePage.Locators.active)), {
      errorMsg: 'This is a custom error message', // overrides the default error message
      timeout: 4000, // waits up to 2000 ms, default to 5000
      interval: 500 // performs the check every 500 ms, default to 200
    });

    cy.get(basePage.Locators.h1).should("contain", basePage.Names.title);
    cy.get(basePage.Locators.h2).should("contain", basePage.Names.subtitle);
    cy.contains(basePage.Names.text);
    cy.contains("button", basePage.Names.btnTestCases).should("exist");
    // .and("be.visible");
    cy.contains("button", basePage.Names.btnAPIList).should("exist");
    //.and("be.visible");
    // cy.get(".carousel-inner").find("div").eq(i).should("have.class", "item active");
    cy.get(basePage.images[i]).should("be.visible");
  
    cy.waitUntil(() => cy.get(basePage.images[i]).then(win => expect(win).to.be.visible), {
      errorMsg: 'This is a custom error message', // overrides the default error message
      timeout: 4000, // waits up to 2000 ms, default to 5000
      interval: 500 // performs the check every 500 ms, default to 200
    });
  }
});