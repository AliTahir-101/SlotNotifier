/// <reference types="cypress" />
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress


function lookForSlot() {
    const envVariables = Cypress.env('forFinnishEmbassyAppointmentSlot');
    const username = envVariables.vfsGlobalUsername;
    const password = envVariables.vfsGlobalPassword;

    // Visit the login page
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://services.vfsglobal.com/are/en/frp/login");
    cy.wait(7000);
    // Accept all cookies
    cy.get("#onetrust-accept-btn-handler", {
      timeout: 30000,
    })
      .should("be.visible")
      .click();

    cy.wait(5000);
    // Fill in the login form
    cy.get('input[id="mat-input-0"]').type(username);
    cy.wait(5000);
    cy.get('input[id="mat-input-1"]').type(password);
    cy.wait(4000);
    // Submit the login form
    cy.get(
      ".mat-focus-indicator.btn.mat-btn-lg.btn-block.btn-brand-orange.mat-stroked-button.mat-button-base.ng-star-inserted",{
        timeout: 30000,
    }).should("be.visible").click();

    // Dashboard Page
    cy.task('log','On the dashboard page, wait for 10 sec so it loads properly...');
    // Wait for 10 seconds
    cy.wait(10000);

    // Click on New Booking Btn
    cy.get("body > app-root > div > div > app-dashboard > section.container.py-15.py-md-30.d-block.ng-star-inserted > div > div.position-relative > div > button > span.mat-button-wrapper", {
      timeout: 50000,
    }).should("be.visible")
      .click({force: true});

    cy.task('log','Now, looking for the sub-category dropdown (waiting on the page load..).');
    cy.wait(30000);

    // Click on the dropdown
    cy.task('log','clicked! on the dropdown to open options to choose Study visa type for appointment  (waiting on the page load..).');
    cy.get('#mat-select-value-5 > span', {
      timeout: 30000,
    }).click({force: true});

    cy.task('log','clicked! chose the study visa type (waiting on the page load..).');
    cy.get('#mat-option-4 > span', {
      timeout: 30000,
    }).click({ force: true });
 
    cy.task('log','option selected ...');
    
    // Wait for 10 seconds
    cy.wait(10000);
    cy.task('log','Now, going to check for the slots alert section...');
    cy.get('body > app-root > div > div > app-eligibility-criteria > section > form > mat-card:nth-child(1) > form > div.border-info.mb-0.ng-star-inserted > div')
    .invoke('html')
    .then((htmlContent) => {
		  cy.task('log','The Slot Alert Section contains the text:', htmlContent);
      if (htmlContent.includes('We are sorry')) {
        cy.task('log',"no slots avaible....")
        cy.task('log','going to logout now! ...');
        cy.get("#navbarDropdown", {
          timeout: 30000,
        }).should("be.visible").click();
        cy.wait(1000);
        cy.task('log','Clicked! logout ...');
        cy.get('.dropdown-item.bg-brand-orange.text-white.cursor-pointer.c-inherit', {
          timeout: 30000,
        }).should("be.visible").click();
        // You can un comment below line to get notifications even with no slots!
        cy.sendEmail('No Slots yet... ', htmlContent);
        cy.wait(5000);
      
      } else {

        cy.task('log','Slots avaiable!!!....');
        // Go nuts if the slot is available.
        cy.sendEmail('Slots Available!!! ', htmlContent);
        cy.sendEmail('Slots Available!!! ', htmlContent);
        cy.sendEmail('Slots Available!!! ', htmlContent);
        cy.sendEmail('Slots Available!!! ', htmlContent);
        cy.sendEmail('Slots Available!!! ', htmlContent);
        cy.sendEmail('Slots Available!!! ', htmlContent);
        cy.task('log','going to logout now! ...');
        cy.get("#navbarDropdown", {
          timeout: 30000,
        }).should("be.visible").click();
        cy.wait(1000);
        cy.task('log','Clicked! logout ...');
        cy.get('.dropdown-item.bg-brand-orange.text-white.cursor-pointer.c-inherit', {
          timeout: 30000,
        }).should("be.visible").click();
        cy.wait(5000);
      }
    });
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
