import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";
import { basePage } from "../../../Pages/BasePage";

When("Click on right arrow button",() => {
    cy.get(basePage.Locators.arrowButtonRight).first().click()
    cy.get(basePage.images[1]).should("be.visible");
})

Then("Image should be changed",() => {
    cy.get(basePage.images[1]).should("be.visible");
})

When("Click on left arrow button",() => {
    cy.get(basePage.Locators.ArrowButtonLeft).first().click()
})

Then("Image should be changed back",() => {
    cy.get(basePage.images[0]).should("be.visible");
})