/// <reference types="cypress" />
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress


function lookForSlot() {

    // Visit the login page
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://service2.diplo.de/rktermin/extern/choose_realmList.do?locationCode=isla&request_locale=en");
    cy.wait(15000);
    // Continue to start the booking/registration process.
    cy.get("#content > div.wrapper > div:nth-child(5) > a", {
      timeout: 30000,
    })
      .should("be.visible")
      .click();
    cy.wait(20000);
    // Continue for Registration to apply for an appointment in order to apply for a study visa
    cy.get(
      "#content > div.wrapper > div:nth-child(20) > a",{
        timeout: 30000,
    }).should("be.visible").click();
    cy.wait(20000);
    // Click on New Appointment
    cy.get("#content > div.wrapper > h3:nth-child(2) > a:nth-child(2)", {
      timeout: 50000,
    }).should("be.visible")
      .click();

    cy.task('log','Now, looking for the dropdown (waiting on the page load..).');
    cy.wait(20000);
    cy.get('#appointment_newAppointmentForm_fields_3__content option').each(($option) => {
      cy.wrap($option).invoke('html').then((optionText) => {
        if (optionText.includes('summer') || optionText.includes('winter')){
          cy.log(optionText);
          if (optionText.includes('summer')) {
            // Summer slots Available Send Emails...
            // Go nuts ....
            cy.sendEmail('Slots Available!!! ', optionText);
            cy.sendEmail('Slots Available!!! ', optionText);
            cy.sendEmail('Slots Available!!! ', optionText);
            cy.sendEmail('Slots Available!!! ', optionText);
            cy.sendEmail('Slots Available!!! ', optionText);
            cy.sendEmail('Slots Available!!! ', optionText);
            cy.task('log','Slots Available!!!');
            return false;
          } else {
            // Summer slots are not Available yet Send a Email...
            for (let i = 1; i <= 15; i++) {
              cy.sendEmail('No Slots yet... ', optionText);
            }
            
            cy.task('log','No Slots yet... ');
          }
          return false;
        }
      });
    });
    cy.wait(10000);
}


describe("Check if a slot is Available!", () => {

  it("checks for the available slot!", () => {
    cy.task('log','Starting to check for avaiable slots ...');

    // Set the user agent to simulate a non-bot environment
    cy.viewport(1280, 800, {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
    });
    lookForSlot();
  });
});
